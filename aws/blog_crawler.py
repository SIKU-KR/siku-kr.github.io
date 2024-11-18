import requests
from bs4 import BeautifulSoup
from concurrent.futures import ThreadPoolExecutor, as_completed
import boto3
from botocore.exceptions import ClientError

# 설정
CRAWLING_RANGE = 50  # 크롤링할 게시물 번호 범위
THREAD_NUMBER = 10  # 동시에 실행할 스레드 개수
DYNAMODB_TABLE = 'tistory'  # DynamoDB 테이블 이름

# DynamoDB 리소스 초기화
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(DYNAMODB_TABLE)

def fetch_post_data(post_number):
    """
    특정 게시물 번호의 데이터를 크롤링하여 title, url, thumbnail, description을 추출하고 DynamoDB에 저장
    """
    url = f'https://cseant.tistory.com/{post_number}'
    try:
        response = requests.get(url, timeout=5)  # 타임아웃 추가
        response.raise_for_status()  # 요청 실패 시 예외 발생

        soup = BeautifulSoup(response.content, 'html.parser')
        title = soup.find('meta', property='og:title')['content']
        post_url = soup.find('meta', property='og:url')['content']
        thumbnail = soup.find('meta', property='og:image')['content']
        description = soup.find('meta', property='og:description')['content']  # 이 라인을 추가함
        
        # DynamoDB에 데이터 저장
        save_to_dynamodb(title, post_number, post_url, thumbnail, description)
        return f"[{title}]({post_url})({thumbnail})({description})"

    except requests.RequestException:
        pass
    except (TypeError, KeyError):
        pass
    return None

def save_to_dynamodb(title, post_number, post_url, thumbnail, description):
    """
    DynamoDB에 데이터 저장 (조건: 중복된 ALL_ITEMS 및 number가 없을 경우에만 삽입)
    """
    try:
        # pk를 고정값으로 설정하여 전체 항목을 하나의 파티션으로 관리
        table.put_item(
            Item={
                'pk': "ALL_ITEMS",   # 고정된 Partition Key 값
                'number': post_number,
                'title': title,
                'url': post_url,
                'thumbnail': thumbnail,
                'description': description  # description 추가
            },
            ConditionExpression="attribute_not_exists(pk) AND attribute_not_exists(#num)",
            ExpressionAttributeNames={
                "#num": "number"
            }
        )
    except ClientError as e:
        if e.response['Error']['Code'] != 'ConditionalCheckFailedException':
            raise

def fetch_all_posts():
    """
    CRAWLING_RANGE 내 모든 게시물을 fetch_post_data 함수로 병렬 크롤링
    """
    post_numbers = range(1, CRAWLING_RANGE + 1)
    results = []
    
    with ThreadPoolExecutor(max_workers=THREAD_NUMBER) as executor:
        future_to_post = {executor.submit(fetch_post_data, num): num for num in post_numbers}
        
        for future in as_completed(future_to_post):
            result = future.result()
            if result:
                results.append(result)
    
    return results

# Lambda에서 실행할 경우
def lambda_handler(event, context):
    results = fetch_all_posts()
    return {
        'statusCode': 200,
        'body': results
    }