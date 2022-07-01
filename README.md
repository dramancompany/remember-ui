# Remember UI

## Todo

## Reminders

- [] TippyTheme must be loaded beforehand for proper use

## 설치

### personal access token 발급

- github -> settings -> developer settings ->< personal access tokens에서 `read:packages` 권한이 있는 token 발급
  <img width="858" alt="image" src="https://user-images.githubusercontent.com/41747333/171557101-866d2486-9e1c-4b95-8c91-786978b83ff4.png">

- 프로젝트 내 .npmrc 파일 생성 후 아래 내용 작성

```
//npm.pkg.github.com/:_authToken=[발급받은 토큰]
@dramancompany:registry=https://npm.pkg.github.com/
```

- install

```
$ yarn add @dramancompany/remember-ui
```
