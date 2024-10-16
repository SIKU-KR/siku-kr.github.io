#!/bin/sh

# 배포할 디렉토리 설정 (여기서는 'build')
FOLDER=build

# 원격 저장소 설정 (기본적으로 origin 사용)
REMOTE=origin

# 브랜치 설정 (기본적으로 gh-pages 사용)
BRANCH=gh-pages

# 빌드 실행 (npm 사용)
echo "빌드 중..."
npm run build

# 빌드 폴더가 존재하는지 확인
if [ ! -d "$FOLDER" ]; then
  echo "Error: $FOLDER 디렉토리가 존재하지 않습니다. 빌드를 먼저 실행하세요."
  exit 1
fi

# 현재 변경 사항이 있는지 확인하고, 있으면 커밋
if [ -n "$(git status --porcelain)" ]; then
  echo "변경 사항을 커밋합니다."
  git add .
  git commit -m "자동 배포: $(date)"
  git push $REMOTE $(git rev-parse --abbrev-ref HEAD)
else
  echo "변경 사항이 없으므로 커밋하지 않습니다."
fi

# subtree를 사용하여 build 폴더를 gh-pages 브랜치에 푸시
echo "gh-pages 브랜치에 배포 중..."
git subtree push --prefix $FOLDER $REMOTE $BRANCH

# 완료 메시지 출력
echo "$FOLDER 폴더가 성공적으로 $BRANCH 브랜치에 푸시되었습니다."
