# Jest Tutorial
<br />

## 📑 시작
### 패키지 설치
```
  yarn add jest
  npm install jest --save-dev
```

<br />

## ✨ 테스트 파일
```
  1. (파일이름).test.js
  2. __tests__
```
- npm test(or yarn test) 명령어를 실행하면 프로젝트 내의 모든 테스트 파일들을 찾아서 테스트를 진행한다.
- 직접 선택한 테스트 파일만 실행시키고 싶으면 npm test (경로 및 파일 이름)으로 실행하면 된다.

<br />

## 🔖 예제1
```js
  const fn = require("./fn");

  test("1은 1이야", () => {
    expect(1).toBe(1);
  });

  test("3더하기 3은 5가 아니야", () => {
    expect(fn.add(3, 3)).not.toBe(5);
  });
```
- expect에 검증할 값을 넣고, toBe에 기대되는 값을 넣는다.
- not은 부정을 의미한다.

<br />