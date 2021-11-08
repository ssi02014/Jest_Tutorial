const fn = require("./fn");

test("1은 1이야", () => {
  //expect에 검증할 값을 넣고, toBe에 기대되는 값을 넣는다.
  expect(1).toBe(1);
});

test("2더하기 3은 5야", () => {
  expect(fn.add(2, 3)).toBe(5);
});

test("3더하기 3은 5가 아니야", () => {
  expect(fn.add(3, 3)).not.toBe(5);
});

test("2더하기 3은 5야", () => {
  expect(fn.add(2, 3)).toEqual(5);
});

// 객체나 배열은 재귀적으로 돌면서 값을 확인하기 때문에 toBe가 아닌 toEqual을 사용해야 함
test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
  expect(fn.makeUser("minjae", 27)).toEqual({ name: "minjae", age: 27 });
});

test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
  expect(fn.makeUser("minjae", 27)).toStrictEqual({
    name: "minjae",
    age: 27,
    gender: undefined,
  });
});

const x = 1;

test("null은 null이다.", () => {
  expect(null).toBeNull();
});

test("undefined는 undefined이다.", () => {
  expect(undefined).toBeUndefined();
});

test("x는 정의되어 있다.", () => {
  expect(x).toBeDefined();
});
