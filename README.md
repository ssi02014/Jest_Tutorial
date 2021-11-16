# 💻 Jest Tutorial

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

### 🏃‍♂️ 1. toBe 
```js
  // fn.js
  const fn = {
    add: (num1, num2) => num1 + num2,
  };

  module.exports = fn;
```
```js
  // fn.test.js
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

### 🏃‍♂️ 2. toEqual
```js
  // fn.js
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
  // fn.test.js
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

### 🏃‍♂️ 3. toStrictEqual
```js
  // fn.js
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
  // fn.test.js
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

### 🏃‍♂️ 4. toBeNull, toBeUndefined, toBeDefined
```js
  // fn.test.js
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

### 🏃‍♂️ 5. toBeTruthy, toBeFalsy
```js
  // fn.test.js
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

### 🏃‍♂️ 6. toBeGreaterThan, toBeGreaterThanOrEqual, toBeLessThan, toBeLessThanOrEqual
```js
  // fn.test.js
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

### 🏃‍♂️ 7. toBeCloseTo
```js
  // fn.test.js
  test("0.1더하기 0.2는 0.3dlek.", () => {
    expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
  });
```
- 자바스크립트에서 0.1 더하기 0.2는 0.3이 아니다. 0.300000000004이다. 즉, 소수점을 정확하게 계산하지 못한다. 그렇기 때문에 `toBe`나 `toEqual`을 사용하면 테스트 통과가 되지 못한다.
- 이럴때 사용하는 게 `toBeCloseTo`이다. `toBeCloseTo`는 근사값인지 판별해준다.

<br />

### 🏃‍♂️ 8. toMatch
```js
  // fn.test.js
  test("Hello World에 H라는 글자가 있나?", () => {
    expect("Hello World").toMatch(/H/); // /H/ 뒤에 i를 붙이면 대소문자 구분이 없어진다.
  });

  test("Hello World에 H라는 글자가 있나?", () => {
    expect("Hello World").toMatch(/h/i); // /h/ 뒤에 i를 붙이면 대소문자 구분이 없어진다.
  });
```
- `toMatch`는 문자열은 판별해준다. 포함되어 있으면 테스트가 통과한다.

<br />

### 🏃‍♂️ 9. toContain
```js
  // fn.test.js
  test("Hello World에 H라는 글자가 있나?", () => {
    const user = "Mike";
    const userList = ["Tom", "Mike", "Kai"];

    expect(userList).toContain(user);
  });
```
- `toContain`는 배열안에 특정 요소가 있는지 판별해준다. 있으면 테스트가 통과한다.

<br />

### 🏃‍♂️ 10. toThrow
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
  // fn.test.js
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

## 🔖 비동기 코드 테스트
### 🏃‍♂️ 1. 기본 예제
```js
  // fnAsync.js
  const fnAsync = {
    add: (num1, num2) => num1 + num2,
    getName: (callback) => {
      const name = "Mike";
      setTimeout(() => {
        callback(name);
      }, 3000);
    },
  };

  module.exports = fnAsync;
```
```js
  // fnAsync.test.js
  test("3초 후에 받아온 이름은 Mike", () => {
    const callback = (name) => {
      expect(name).toBe("Mike");
    };
    fn.getName(callback);
  });
```
- 위 예제처럼 실행하면 jest는 코드 끝에 다다르면 그냥 코드가 종료된다.

<br />

```js
  // fnAsync.test.js
  test("3초 후에 받아온 이름은 Mike", (done) => {
    const callback = (name) => {
      expect(name).toBe("Mike");
      done();
    };
    fn.getName(callback);
  });
```
- 위 예제처럼 test 메서드에 두번째 파라미터 콜백함수에 파라미터로 `done`을 넣고 이 done이 호출되면 종료되게끔 작성하면 제대로 비동기 코드 테스트가 가능해진다.
- 만약 `done`을 파라미터로 넣고 사용하지 않으면 테스트는 실패하게 된다.

<br />

### 🏃‍♂️ 2. try/catch
```js
  // fnAsync.test.js
  test("3초 후에 받아온 이름은 Mike", (done) => {
    const callback = (name) => {
      try {
        expect(name).toBe("Mike");
        done();
      } catch (e) {
        done();
      }
    };
    fn.getName(callback);
  });
```
- 만약 API 에러를 감지하고 싶다면 `try/catch`를 사용하면 된다.

<br />

### 🏃‍♂️ 3. Promise 후속 처리 메서드
```js
  // fnAsync.js
  const fnAsync = {
    // ...
    getAge: () => {
      const age = 27;
      return new Promise((res, rej) => {
        setTimeout(() => {
          res(age); 
          // rej("error");
        }, 3000);
      });
    },
  };
  module.exports = fnAsync;
```
```js
  // fnAsync.test.js
  test("3초 후에 받아온 나이는 27", () => {
    return fn.getAge().then((age) => {
      expect(age).toBe(27);
    });
  });

  // 위 예제보다 좀 더 간결한 resolves, rejects를 사용한 코드
  test("3초 후에 받아온 나이는 27", () => {
    return expect(fn.getAge()).resolves.toBe(27);
  });

  test("3초 후에 에러가 발생합니다.", () => {
    return expect(fn.getAge()).rejects.toMatch("error");
  });
```
- Promise 코드를 테스트할 때는 `return`을 꼭 사용해야 한다. 안그러면 제대로 된 테스트가 불가능!

<br />

### 🏃‍♂️ 4. async/await
```js
  // fnAsync.test.js
  test("3초 후에 받아온 나이는 27", async () => {
    const age = await fn.getAge();
    expect(age).toBe(30);
  });

  test("3초 후에 받아온 나이는 27", async () => {
    await expect(fn.getAge()).resolves.toBe(27);
  });
```

<br />

## 🔖 테스트 전후 작업
### 🏃‍♂️ 1. beforeEach
```js
  let num = 0;
  beforeEach(() => {
    num = 0;
  });
  test("0 더하기 1은 1이야", () => {
    num = fn.add(num, 1);
    expect(num).toBe(1);
  });
```
- beforeEach는 각 테스트가 실행할 때마다 실행되는 함수이다.

<br />

### 🏃‍♂️ 2. afterEach
```js
  let num = 0;
  afterEach(() => {
    num = 0;
  });
  test("0 더하기 1은 1이야", () => {
    num = fn.add(num, 1);
    expect(num).toBe(1);
  });
```
- afterEach는 각 테스트가 종료할 때마다 실행되는 함수이다.

<br />

### 🏃‍♂️ 3. beforeAll/afterAll
```js
  beforeAll(async () => {
    user = await fn.connectUserDB();
  });
  afterAll(() => {
    return fn.disconnectDB;
  });
```
- beforeAll은 전체 테스트를 기준으로 처음 테스트가 실행할 때 실행된다.
- afterAll은 전체 테스트를 기준으로 테스트가 모두 종료될 때 실행된다.
- db연결이나 종료는 처음과 끝에만 실행되면되서 매번 실행되는 beforeEach나 afterEach를 사용하기 보다는 beforeAll, afterAll을 사용하는 것이 좋다.

<br />

### 🏃‍♂️ 4. describe
```js
  describe("Car 관련 작업", () => {
    let car = {};

    beforeAll(async () => {
      car = await fn.connectCarDB();
    });
    afterAll(() => {
      return fn.disconnectCarDB;
    });

    test("이름은 Minjae", () => {
      expect(car.brend).toBe("bmw");
    });
    test("나이는 27", () => {
      expect(car.name).toBe("z4");
    });
    test("이름은 Minjae", () => {
      expect(car.color).toBe("red");
    });
  });
```
- describe는 테스트 파일에 많은 수의 테스트 함수가 작성된 경우, 연관된 테스트 함수들끼리 그룹화하는 함수이다.
- describe를 사용할 때 test함수 대신 `it`함수를 사용하기도 하는데, 이 두 함수는 완전한 동일한 기능을 하는 함수이다. Mocha나 Jasmin 같은 테스트 라이브러리에서 함수명을 it을 사용하기 때문에 Jest에서도 it을 test 함수의 별칭으로 제공한다.

<br />

### 🏃‍♂️ 4. only/skip
```js
  test.only("0더하기 5은 5야", () => {
    expect(fn.add(num, 3)).toBe(5);
  });
  test.skip("0더하기 5은 5야", () => {
    expect(fn.add(num, 3)).toBe(5);
  });

```
- only와 skip은 테스트 코드를 디버깅할 때 유용하게 사용한다.
- only는 테스트 파일안에 테스트 함수가 많은데 그 중에서 하나만 실패했을 경우, 그 함수만 단독으로 실행해보고 싶을 때 사용한다.
- skip은 only의 반대로 작동한다. 어떤 함수만 빼고 실행해보고 싶을 때 사용한다.

<br />

## 🔖 실행 순서
```js
  beforeAll(() => console.log("밖 beforeAll")); // 1
  beforeEach(() => console.log("밖 beforeEach")); // 2, 6
  afterAll(() => console.log("밖 afterAll")); // 4, 10
  afterEach(() => console.log("밖 afterEach")); // 마지막

  test("2더하기 3은 5야", () => {
    expect(fn.add(2, 3)).toBe(5); // 3
  });

  describe("Car 관련 작업", () => {
    beforeAll(() => console.log("밖 beforeAll")); // 5
    beforeEach(() => console.log("밖 beforeEach")); // 7
    afterAll(() => console.log("밖 afterAll")); // 9
    afterEach(() => console.log("밖 afterEach")); // 마지막-1

    test("2더하기 3은 5야", () => {
      expect(fn.add(2, 3)).toBe(5); // 8
    });
  });
```

<br />

## 🔖 Mockup
### 🏃‍♂️ 1. mockFn.mock.calls
```js
  //fnMock.test.js
  const mockFn = jest.fn();

  function forEachAdd1(arr) {
    arr.forEach((num) => {
      mockFn(num + 1);
    });
  }

  forEachAdd1([10, 20, 30]);

  test("함수는 3번 호출된다.", () => {
    expect(mockFn.mock.calls.length).toBe(3);
  });

  test("전달된 값은 11, 21, 31이다.", () => {
    expect(mockFn.mock.calls[0][0]).toBe(11);
    expect(mockFn.mock.calls[1][0]).toBe(21);
    expect(mockFn.mock.calls[2][0]).toBe(31);
  });

  console.log(mockFn.mock.calls); // [[11], [21], [31]]
```
- mockFn.mock.calls에는 인자로 받아온 값들과 길이를 알 수 있다.

<br />

### 🏃‍♂️ 2. mockFn.mock.results
```js
  const mockFn = jest.fn((num) => num + 1);

  mockFn(10);
  mockFn(20);
  mockFn(30);

  test("10에서 1증가한 값이 반환된다.", () => {
    expect(mockFn.mock.results[0].value).toBe(11);
  });

  test("20에서 1증가한 값이 반환된다.", () => {
    expect(mockFn.mock.results[1].value).toBe(21);
  });

  test("30에서 1증가한 값이 반환된다.", () => {
    expect(mockFn.mock.results[2].value).toBe(31);
  });

  console.log(mockFn.mock.results);
  /* 
    [
      { type: 'return', value: 11 },
      { type: 'return', value: 21 },
      { type: 'return', value: 31 }
    ]
  */
```
- mockFn.mock.results는 리턴값을 확인할 수 있다.

<br />

### 🏃‍♂️ 3. mockReturnValueOnce/mockReturnValue
```js
  const mockFn = jest.fn();

  mockFn.mockReturnValueOnce(10)
    .mockReturnValueOnce(20)
    .mockReturnValueOnce(30)
    .mockReturnValue(40);
  
  mockFn();
  mockFn();
  mockFn();
  mockFn();

  test("dd", () => {
    expect("dd").toBe("dd");
  });

  console.log(mockFn.mock.results);
  /*
    [
      { type: 'return', value: 10 },
      { type: 'return', value: 20 },
      { type: 'return', value: 30 },
      { type: 'return', value: 40 }
    ]
  */
```
- mockReturnValueOnce를 사용하면 mockFn이 실행될때마다 다른 값을 리턴이 가능하다. 마지막에는 Once를 생략한다.

<br />

### 🏃‍♂️ 4. mockResolvedValue
```js
  const mockFn = jest.fn();

  mockFn.mockResolvedValue({ name: "Mike" });

  test("받아온 이름은 Mike", () => {
    mockFn().then((res) => {
      expect(res.name).toBe("Mike");
    });
  });
```
- mockResolvedValue를 이용해서 비동기 함수를 테스트해볼 수도 있다.

<br />

### 🏃‍♂️ 5. mockReturnValue
```js
  const fn = require("../fnAsync");

  jest.mock("../fnAsync");

  fn.createUser.mockReturnValue({ name: "Mike" });

  test("유저를 만든다.", () => {
    const user = fn.createUser("Mike");
    expect(user.name).toBe("Mike");
  });
```
- 만약 db유저를 생성하는 테스트 코드를 실행할 때 실제로 db에 유저가 생성되면 안되기 때문에, `mockReturnValue`를 이용해서 실제 createUser가 실행되지않고 Mock 함수만 실행되게끔 할 수 있다.

<br />

### 🏃‍♂️ 6. toBeCalled, toBeCalledTimes, toBeCalledWith, lastCalledWith
```js
  const mockFn = jest.fn();

  mockFn(10, 20);
  mockFn();
  mockFn(30, 40);

  test("한번 이상 호출?", () => {
    expect(mockFn).toBeCalled();
  });
  test("정확히 세번 호출?", () => {
    expect(mockFn).toBeCalledTimes(3);
  });
  test("10이랑 20 전달받은 함수 있음?", () => {
    expect(mockFn).toBeCalledWith(10, 20);
  });
  test("마지막 함수는 30이랑 40받음?", () => {
    expect(mockFn).lastCalledWith(30, 40);
  });
```
- toBeCalled는 한번 이상 호출됬으면 테스트가 통과된다.
- toBeCalledTimes는 정확하게 호출 횟수가 맞으면 테스트가 통과된다.
- toBeCalledWith는 인수로 어떤 값을 받았는지 체크한다.
- lastCalledWith는 toBeCalledWith는처럼 인수로 어떤 값을 받았는지 체크하지만 맨 마지막으로 호출 된 함수만 체크한다.

<br />

## 🔖 React Components
- React Testing Library는 매우 심플하지만 강력한 API를 갖고 있다.
- DOM컴포넌트를 랜더링해주는 render() 함수와, 특정 이벤트를 발생시켜주는 fireEvent 객체, 그리고 DOM에서 특정 영역을 선택하기 위한 다양한 쿼리 함수들이 존재한다.

```js
  import { render, fireEvent, screen } from "@testing-library/react";
```
- `@testing-library/react` 모듈로 부터 바로 import가 가능하다.

<br />

### 🏃‍♂️ 1. toBeInTheDocument()
```js
  const user = {
    name: "Tom",
    age: 27,
  };

  test("Hello 라는 글자가 포함되는가?", () => {
    render(<Hello user={user} />);
    const helloEl = screen.getByText(/Hello/i);
    expect(helloEl).toBeInTheDocument();
  });
```
- getByText는 텍스트를 검사한다.
- toBeInTheDocument는 검사하려는 요소가 문서에 있는지 여부를 확인하기 위한 메서드이다.

<br />

### 🏃‍♂️ 2. toMatchSnapshot
```js
  const user = {
    name: "Tom",
    age: 27,
  };

  const user2 = {
    age: 30,
  };

  test("snapshot: name있음", () => {
    const el = render(<Hello user={user} />);
    expect(el).toMatchSnapshot();
  });

  test("snapshot: name없음", () => {
    const el = render(<Hello user={user2} />);
    expect(el).toMatchSnapshot();
  });
```
- 스냅샷 테스팅(Snapshot testing)이란 어떤 기능의 예상 결과를 미리 정확히 포착해두고 실제 결과에 비교하는 테스트 기법이다.
- 테스트 대상 기능의 구현이 변경되어 실제 결과가 스냅샷을 떠놓은 예상 결과와 달라질 경우 해당 테스트 케이스는 실패하게 된다.
- 이러한 경우 다시 새로운 스냅샷을 떠서 기존 스냅샷을 교체하는 방식으로 테스트 코드와 함께 스냅샷도 함께 유지보수를 한다.
- Jest에서는 파일 스냅샷 테스팅을 지원하기 위해서 `toMatchSnapshot()`이라는 함수를 제공한다.

<br />

### 🏃‍♂️ 3. Mockup
```js
  test("초 표시", () => {
    Date.now = jest.fn(() => 123456789);
    const el = render(<Timer />);
    expect(el).toMatchSnapshot();
  });
```
- 시간처럼 매번 값이 바껴서 테스트를 할 때마다 오류가 발생하는 부분은 mock함수를 이용해서 고정값을 주면 된다.

<br />