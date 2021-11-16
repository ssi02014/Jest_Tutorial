const fn = require("../fnAsync");

// test("2더하기 3은 5야", () => {
//   expect(fn.add(2, 3)).toBe(5);
// });

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
// test("3초 후에 받아온 나이는 27", async () => {
//   const age = await fn.getAge();
//   expect(age).toBe(27);
// });
// beforeAll(async () => {
//   user = await fn.connectUserDB();
// });
// afterAll(() => {
//   return fn.disconnectDB;
// });

// test("이름은 Minjae", () => {
//   expect(user.name).toBe("Minjae");
// });
// test("나이는 27", () => {
//   expect(user.age).toBe("27");
// });
// test("이름은 Minjae", () => {
//   expect(user.gender).toBe("male");
// });

// describe("Car 관련 작업", () => {
//   let car = {};

//   beforeAll(async () => {
//     car = await fn.connectCarDB();
//   });
//   afterAll(() => {
//     return fn.disconnectCarDB;
//   });

//   test("이름은 Minjae", () => {
//     expect(car.brend).toBe("bmw");
//   });
//   test("나이는 27", () => {
//     expect(car.name).toBe("z4");
//   });
//   test("이름은 Minjae", () => {
//     expect(car.color).toBe("red");
//   });
// });

// beforeAll(() => console.log("밖 beforeAll")); // 1
// beforeEach(() => console.log("밖 beforeEach")); // 2, 6
// afterAll(() => console.log("밖 afterAll")); // 4, 10
// afterEach(() => console.log("밖 afterEach")); // 마지막

// test("2더하기 3은 5야", () => {
//   expect(fn.add(2, 3)).toBe(5); // 3
// });

// describe("Car 관련 작업", () => {
//   beforeAll(() => console.log("안 beforeAll")); // 5
//   beforeEach(() => console.log("안 beforeEach")); // 7
//   afterAll(() => console.log("안 afterAll")); // 9
//   afterEach(() => console.log("안 afterEach")); // 마지막-1

//   test("2더하기 3은 5야", () => {
//     expect(fn.add(2, 3)).toBe(5); // 8
//   });
// });

let num = 0;

test("0더하기 3은 3야", () => {
  expect(fn.add(num, 3)).toBe(3);
});
test("0더하기 2은 2야", () => {
  expect(fn.add(num, 2)).toBe(2);
});
test.skip("0더하기 5은 5야", () => {
  expect(fn.add(num, 3)).toBe(3);
});
