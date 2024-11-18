import AWS from 'aws-sdk';

const dynamodb = new AWS.DynamoDB.DocumentClient();

export const handler = async (event) => {
    const params = {
        TableName: 'tistory',
        KeyConditionExpression: "#pk = :pkVal",
        ExpressionAttributeNames: {
            "#pk": "pk"
        },
        ExpressionAttributeValues: {
            ":pkVal": "ALL_ITEMS" // 고정 Partition Key 값
        },
        Limit: 3, // 상위 3개 항목
        ScanIndexForward: false, // 내림차순 정렬
    };
    
    try {
        // number 기준 내림차순 상위 3개 항목 가져오기
        const data = await dynamodb.query(params).promise();
        
        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(data.Items),
        };
    } catch (error) {
        console.error("Error fetching top 3 items:", error);
        return {
            statusCode: 500,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({ error: "Failed to fetch top items" }),
        };
    }
};