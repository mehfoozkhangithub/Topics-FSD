// returns the result of the first promise that finishes{settles}

'use strict';

let promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    rej('error');
  }, 500);
});
let promise2 = new Promise((res, _) => {
  setTimeout(() => {
    res('value 2');
  }, 1000);
});
let promise3 = new Promise((res, _) => {
  setTimeout(() => {
    res('value 3');
  }, 3000);
});

const thePromise = [promise1, promise2, promise3];

Promise.race(thePromise)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log('done'));
