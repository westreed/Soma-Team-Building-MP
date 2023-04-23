# 간단 사용설명서

## 노드패키지 설치

처음 프로젝트를 clone 했을 경우, 깃허브에는 패키지파일이 포함되어 있지 않기 때문에 패키지를 따로 설치해야 합니다.

```bash
npm install
```

## .env 파일 필요

파이어베이스와 관련된 변수들은 .env 파일로 분할해서 관리중입니다.<br>
`npm start`로 프로젝트를 실행해서 확인하실텐데, .env 파일이 없으면 파이어베이스와 연결이 되지 않습니다.<br>
필요하신 분들은 따로 연락주세요.

## 파이어베이스 사용

간단한 사용법 예시를 `src/pages/TestPage.js`에 작성했습니다.<br>
프로젝트를 실행한 상태에서 `http://localhost:3000/test` 경로로 접근하시면 실행결과도 확인할 수 있습니다.<br>
또한, 팀빌딩 게시글 양식은 아래와 같습니다.

```bash
{
  teamname: "팀이름",
  username: "유저이름",
  title: "제목",
  content: "내용",
  password: "비밀번호",
  createDate: "Unix Time 값"
}
```

## 파이어베이스 배포

```bash
npm run deploy // npm run build && firebase deploy
```
