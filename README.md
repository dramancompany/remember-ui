# Remember UI

리멤버 웹의 (구)디자인 시스템

### personal access token 발급

- github -> settings -> developer settings ->< personal access tokens에서 `read:packages` 권한이 있는 token 발급
  <img width="858" alt="image" src="https://user-images.githubusercontent.com/41747333/171557101-866d2486-9e1c-4b95-8c91-786978b83ff4.png">

- 프로젝트 내 .npmrc 파일 생성 후 아래 내용 작성

```
//npm.pkg.github.com/:_authToken=[발급받은 토큰]
@dramancompany:registry=https://npm.pkg.github.com/
```

## Build

```bash
$ yarn build
# 아래 명령어로 빌드 하면,
# 빌드 후 rollup-plugin-visualizer 를 통해 생성된 html이 열림
$ yarn build:visualize
```

## Publish

- 배포시 dist 폴더 내의 내용을 root로 변환하여 배포 하고자 별도 스크립트로 배포하는 방식임

```bash
# 최신 버전 배포
$ yarn pub
# 베타 버전 배포
$ yarn pub:beta
```

## 스토리북 GitHub Pages 배포

- master 브랜치의 /docs의 변동사항이 생기면 자동으로 배포 트리거
- pr 리뷰가 완료 되면 Storybook docs build를 진행한 후 master 브랜치에 머지 한다.

```bash
# 스토리북 빌드
$ build-storybook
```

## install

```
$ yarn add @dramancompany/remember-ui
```

# rui

리멤버 웹의 디자인 시스템
