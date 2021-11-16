const fn = require("../fn");

// test("1은 1이야", () => {
//   //expect에 검증할 값을 넣고, toBe에 기대되는 값을 넣는다.
//   expect(1).toBe(1);
// });

// test("2더하기 3은 5야", () => {
//   expect(fn.add(2, 3)).toBe(5);
// });

// test("3더하기 3은 5가 아니야", () => {
//   expect(fn.add(3, 3)).not.toBe(5);
// });

// test("2더하기 3은 5야", () => {
//   expect(fn.add(2, 3)).toEqual(5);
// });

// // 객체나 배열은 재귀적으로 돌면서 값을 확인하기 때문에 toBe가 아닌 toEqual을 사용해야 함
// test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
//   expect(fn.makeUser("minjae", 27)).toEqual({ name: "minjae", age: 27 });
// });

// test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
//   expect(fn.makeUser("minjae", 27)).toStrictEqual({
//     name: "minjae",
//     age: 27,
//     gender: undefined,
//   });
// });

// // toBeNull, toBeUndefined, toBeDefined
// const x = 1;

// test("null은 null이다.", () => {
//   expect(null).toBeNull();
// });

// test("undefined는 undefined이다.", () => {
//   expect(undefined).toBeUndefined();
// });

// test("x는 정의되어 있다.", () => {
//   expect(x).toBeDefined();
// });

// // toBeTruthy, toBeFalsy
// test("0은 false이다.", () => {
//   expect(fn.add(1, -1)).toBeFalsy();
// });

// test("1은 true이다.", () => {
//   expect(fn.add(2, -1)).toBeTruthy();
// });

// // toBeGreaterThan, toBeGreaterThanOrEqual, toBeLessThan, toBeLessThanOrEqual

// test("ID는 10자 이하여야 합니다.", () => {
//   const id = "THE_BLACK";
//   expect(id.length).toBeLessThanOrEqual(10);
// });

// test("ID는 10자 이하여야 합니다.", () => {
//   const id = "THE_BLACK";
//   expect(id.length).toBeGreaterThan(5);
// });

// // 숫자 주의 할 점
// test("0.1더하기 0.2는 0.3이다.", () => {
//   expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
// });

// test("Hello World에 H라는 글자가 있나?", () => {
//   expect("Hello World").toMatch(/H/); // /H/ 뒤에 i를 붙이면 대소문자 구분이 없어진다.
// });

// test("Hello World에 H라는 글자가 있나?", () => {
//   expect("Hello World").toMatch(/h/i); // /h/ 뒤에 i를 붙이면 대소문자 구분이 없어진다.
// });

// // toContain
// test("Hello World에 H라는 글자가 있나?", () => {
//   const user = "Mike";
//   const userList = ["Tom", "Mike", "Kai"];

//   expect(userList).toContain(user);
// });

// // toThrow
// test("이거 에러가 나나요?", () => {
//   expect(() => fn.throwErr()).toThrow();
// });

// test("이거 에러가 나나요?", () => {
//   expect(() => fn.throwErr()).toThrow("error");
// });

let num = 0;
beforeEach(() => {
  num = 0;
});

test("0 더하기 1은 1이야", () => {
  num = fn.add(num, 1);
  expect(num).toBe(1);
});

test("0 더하기 2은 2이야", () => {
  num = fn.add(num, 2);
  expect(num).toBe(2);
});

test("0 더하기 3은 3이야", () => {
  num = fn.add(num, 3);
  expect(num).toBe(3);
});

test("0 더하기 4은 4이야", () => {
  num = fn.add(num, 4);
  expect(num).toBe(4);
});
