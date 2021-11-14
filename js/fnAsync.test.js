const fn = require("./fnAsync");

test("2더하기 3은 5야", () => {
  expect(fn.add(2, 3)).toBe(5);
});

// test("3초 후에 받아온 이름은 Mike", (done) => {
//   const callback = (name) => {
//     expect(name).toBe("Mike");
//     done();
//   };
//   fn.getName(callback);
// });

// test("3초 후에 받아온 이름은 Mike", (done) => {
//   const callback = (name) => {
//     try {
//       expect(name).toBe("Mike");
//       done();
//     } catch (e) {
//       done();
//     }
//   };
//   fn.getName(callback);
// });

// test("3초 후에 받아온 나이는 27", async () => {
//   await expect(fn.getAge()).resolves.toBe(27);
// });

//async/await
test("3초 후에 받아온 나이는 27", async () => {
  const age = await fn.getAge();
  expect(age).toBe(27);
});
