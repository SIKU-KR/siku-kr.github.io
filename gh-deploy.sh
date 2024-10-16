#!/bin/sh

# 배포할 디렉토리 설정 (여기서는 'build')
FOLDER=build

# 원격 저장소 설정 (기본적으로 origin 사용)
REMOTE=origin

# 브랜치 설정 (기본적으로 gh-pages 사용)
BRANCH=gh-pages

# 빌드 폴더가 존재하는지 확인
if [ ! -d "$FOLDER" ]; then
  echo "Error: $FOLDER 디렉토리가 존재하지 않습니다. 빌드를 먼저 실행하세요."
  exit 1
fi

# subtree를 사용하여 build 폴더를 gh-pages 브랜치에 푸시
git subtree push --prefix $FOLDER $REMOTE $BRANCH

# 완료 메시지 출력
echo "$FOLDER 폴더가 성공적으로 $BRANCH 브랜치에 푸시되었습니다."
