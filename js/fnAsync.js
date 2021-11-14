const fnAsync = {
  add: (num1, num2) => num1 + num2,
  getName: (callback) => {
    const name = "Mike";
    setTimeout(() => {
      callback(name);
    }, 3000);
  },
  getAge: () => {
    const age = 27;
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(age);
      }, 3000);
    });
  },
};

module.exports = fnAsync;
