const fnAsync = {
  add: (num1, num2) => num1 + num2,
  getName: (callback) => {
    const name = "Mike";
    setTimeout(() => {
      callback(name);
    }, 500);
  },
  getAge: () => {
    const age = 27;
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(age);
      }, 500);
    });
  },
  connectUserDB: () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res({
          name: "Minjae",
          age: "27",
          gender: "male",
        });
      }, 500);
    });
  },
  disconnectDB: () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  },
  connectCarDB: () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res({
          brend: "bmw",
          name: "z4",
          color: "red",
        });
      }, 500);
    });
  },
  disconnectCarDB: () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  },
};

module.exports = fnAsync;
