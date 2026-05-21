let Promise_1 = new Promise((res, rej) => {
  let flag = true;

  if (flag) {
    setTimeout(() => {
      res('hello1');
    }, 4000);
  } else {
    setTimeout(() => {
      rej('error1');
    }, 2000);
  }
});

let Promise_2 = new Promise((res, rej) => {
  let flag = false;

  if (flag) {
    setTimeout(() => {
      res('hello2');
    }, 1000);
  } else {
    setTimeout(() => {
      rej('error2');
    }, 500);
  }
});
let Promise_3 = new Promise((res, rej) => {
  let flag = true;

  if (flag) {
    setTimeout(() => {
      res('hello3');
    }, 2000);
  } else {
    setTimeout(() => {
      rej('error3');
    }, 2000);
  }
});

Promise.allSettled([Promise_1, Promise_2, Promise_3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
