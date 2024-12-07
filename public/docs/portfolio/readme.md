### 1. 프로젝트 개요

포트폴리오 페이지로서, GitHub Pages 기반 정적 페이지입니다. 

**React.js**와 **BootStrap** 기반으로 개발되었습니다.


### 2. 사용된 기술 스택

- React.js
- BootStrap
- node.js (**markdown-it**)
- html/css
- shell script

### 3. **Shell Script**를 이용한 CI/CD 환경 구축하기


이 프로젝트는 제가 처음으로 CI/CD 환경을 구축하여, 배포 과정을 자동화한 사례입니다. **build** 디렉토리에 생성된 빌드 파일을 **gh-pages** 브랜치로 푸시하여 GitHub Pages를 통해 쉽게 배포할 수 있도록 구성했습니다.

#### 배포 스크립트 구성

1. **배포 디렉토리 설정**:
   - 빌드 결과물이 저장될 디렉토리를 **build**로 설정하였습니다.

2. **원격 저장소 및 브랜치 설정**:
   - 원격 저장소는 기본적으로 **origin**을 사용하며, 배포 브랜치는 **gh-pages**로 설정하였습니다.

3. **프로젝트 빌드**:
   - **npm run build** 명령어를 사용하여 빌드를 실행합니다. 이 명령어를 통해 생성된 프로덕션 파일이 **build** 디렉토리에 저장됩니다.

4. **변경 사항 커밋**:
   - 로컬 변경 사항이 있을 경우 자동으로 커밋하고, 현재 브랜치에 푸시하여 저장소를 최신 상태로 유지합니다.

5. **Git Subtree를 통한 배포**:
   - **git subtree** 명령어를 사용하여 **build** 디렉토리의 내용을 **gh-pages** 브랜치에 푸시합니다. 이를 통해 브랜치를 전환하지 않고도 손쉽게 배포가 가능합니다.

위 명령어를 통해 프로젝트가 빌드되며, **build** 디렉토리 내의 파일들이 **gh-pages** 브랜치로 자동 푸시됩니다. 이렇게 함으로써 GitHub Pages에서 최신 버전을 쉽게 확인할 수 있습니다.

### 4. AWS Lambda와 DynamoDB를 이용한 최근 블로그 포스팅 조회

이 프로젝트는 **Python**과 **JavaScript**를 사용하여 AWS Lambda와 DynamoDB 기반으로 구축되었습니다. 개인 개발블로그의 최신 포스팅 정보를 자동으로 수집하고, 이를 사용자에게 제공하는 기능을 갖추고 있습니다.

1. **데이터 크롤링 및 저장**  
   Python으로 작성된 Lambda 함수가 블로그 포스팅 데이터를 크롤링하여 DynamoDB에 저장합니다.

2. **최신 포스팅 조회 API**  
   Node.js 기반의 Lambda 함수가 DynamoDB에서 최신 포스팅 상위 3개를 조회하여 API로 제공합니다.