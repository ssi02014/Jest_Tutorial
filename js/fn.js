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
