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
- `npm test(or yarn test)` 명령어를 실행하면 프로젝트 내의 모든 테스트 파일들을 찾아서 테스트를 진행한다.
- 직접 선택한 테스트 파일만 실행시키고 싶으면 `npm test (경로 및 파일 이름)`으로 실행하면 된다.

<br />

## 🔖 유용한 Matchers 예제
- Matchers 참고 사이트: https://jestjs.io/docs/en/expect

<br />

### 1. toBe 
```js
  const fn = {
    add: (num1, num2) => num1 + num2,
  };

  module.exports = fn;
```
```js
  const fn = require("./fn");

  test("1은 1이야", () => {
    expect(1).toBe(1);
  });

  test("3더하기 3은 5가 아니야", () => {
    expect(fn.add(3, 3)).not.toBe(5);
  });
```
- `expect`에 검증할 값을 넣고, `toBe`에 기대되는 값을 넣는다.
- `not`은 부정을 의미한다.

<br />

### 2. toEqual
```js
  const fn = {
    add: (num1, num2) => num1 + num2,
    makeUser: (name, age) => {
      return {
        name,
        age,
      };
    },
  };
  module.exports = fn;
```
```js
  const fn = require("./fn");

  test("2더하기 3은 5야", () => {
    expect(fn.add(2, 3)).toEqual(5);
  });

  test("2더하기 3은 5야", () => {
    expect(fn.add(2, 3)).toBe(5);
  });

  test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
    expect(fn.makeUser("minjae", 27)).toEqual({ name: "minjae", age: 27 });
  });
```
- 일반적인 값은 `toBe`와 `toEqual`은 동일한 기능을 한다.
- 하지만 배열이나 객체는 재귀적으로 돌면서 값을 확인하기 때문에 `toBe`가 아닌 `toEqual`을 사용해야 한다. (`toBe`는 오류 발생)

<br />

### 3. toStrictEqual
```js
  const fn = {
    add: (num1, num2) => num1 + num2,
    makeUser: (name, age) => {
      return {
        name,
        age,
        gender: undefined,
      };
    },
  };
  module.exports = fn;
```
```js
  const fn = require("./fn");

  test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
    expect(fn.makeUser("minjae", 27)).toEqual({ 
      name: "minjae", 
      age: 27 
    });
  });

  test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
    expect(fn.makeUser("minjae", 27)).toStrictEqual({ 
      name: "minjae", 
      age: 27 
    });
  });
```
- 위 예제에서 `toEqual`은 테스트를 통과하지만 `toStrictEqual`은 테스트를 통과하지 못한다. 즉 `toStrictEqual`은 좀 더 엄격한 테스트 방법이다.
- `toStrictEqual` 예제가 통과하려면 gender 키에 undefined 값을 추가하면 된다.

<br />

### 4. toBeNull, toBeUndefined, toBeDefined
```js
  test("null은 null이다.", () => {
    expect(null).toBeNull();
  });

  test("undefined는 undefined이다.", () => {
    expect(undefined).toBeUndefined();
  });

  test("x는 정의되어 있다.", () => {
    const x = 1;
    expect(x).toBeDefined();
  });
```
- `toBeNull`은 null이면 테스트가 통과한다.
- `toBeUndefined`는 값이 undefined이면 통과한다.
- `toBeDefined`는 값이 정의되어 있으면 통과한다.

<br />

### 5. toBeTruthy, toBeFalsy
```js
  //fn은 위에 예제 코드 참고
  test("0은 false이다.", () => {
    expect(fn.add(1, -1)).toBeFalsy();
  });

  test("1은 true이다.", () => {
    expect(fn.add(2, -1)).toBeTruthy();
  });
```
- `toBeTruthy`은 값이 true이면 테스트가 통과한다.
- `toBeFalsy`은 값이 false이면 테스트과 통과한다.

<br />

### 6. toBeGreaterThan, toBeGreaterThanOrEqual, toBeLessThan, toBeLessThanOrEqual
```js
  test("ID는 10자 이하여야 합니다.", () => {
    const id = "THE_BLACK";
    expect(id.length).toBeGreaterThan(5);
  });

  test("ID는 10자 이하여야 합니다.", () => {
    const id = "THE_BLACK";
    expect(id.length).toBeLessThanOrEqual(10);
  });
```
- `toBeGreaterThan`은 값이 크면 테스트가 통과한다.
- `toBeGreaterThanOrEqual`은 값이 크면 테스트가 통과한다.
- `toBeLessThan`은 값이 작으면 테스트가 통과한다.
- `toBeLessThanOrEqual`은 값이 작거나 같으면 테스트가 통과한다.

<br />

### 7. toBeCloseTo
```js
  test("0.1더하기 0.2는 0.3dlek.", () => {
    expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
  });
```
- 자바스크립트에서 0.1 더하기 0.2는 0.3이 아니다. 0.300000000004이다. 즉, 소수점을 정확하게 계산하지 못한다. 그렇기 때문에 `toBe`나 `toEqual`을 사용하면 테스트 통과가 되지 못한다.
- 이럴때 사용하는 게 `toBeCloseTo`이다. `toBeCloseTo`는 근사값인지 판별해준다.

<br />

### 8. toMatch
```js
  test("Hello World에 H라는 글자가 있나?", () => {
    expect("Hello World").toMatch(/H/); // /H/ 뒤에 i를 붙이면 대소문자 구분이 없어진다.
  });

  test("Hello World에 H라는 글자가 있나?", () => {
    expect("Hello World").toMatch(/h/i); // /h/ 뒤에 i를 붙이면 대소문자 구분이 없어진다.
  });
```
- `toMatch`는 문자열은 판별해준다. 포함되어 있으면 테스트가 통과한다.

<br />

### 9. toContain
```js
  test("Hello World에 H라는 글자가 있나?", () => {
    const user = "Mike";
    const userList = ["Tom", "Mike", "Kai"];

    expect(userList).toContain(user);
  });
```
- `toContain`는 배열안에 특정 요소가 있는지 판별해준다. 있으면 테스트가 통과한다.

<br />

### 10. toThrow
```js
  const fn = {
    // ...
    throwErr: () => {
      throw new Error("error");
    },
  };

  module.exports = fn;
```
```js
  test("이거 에러가 나나요?", () => {
    expect(() => fn.throwErr()).toThrow();
  });

  test("이거 에러가 나나요?", () => {
    expect(() => fn.throwErr()).toThrow("error");
  });
```
- `throwErr`는 에러가 발생하면 테스트가 통과된다.
- 만약 `thThrow` 인수로 특정 요소를 넣으면 비교를해서 출력값과 인수가 같으면 테스트가 통과한다.

<br />