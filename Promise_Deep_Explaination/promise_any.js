let promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    rej('error');
  }, 100);
});
let promise2 = new Promise((res, _) => {
  setTimeout(() => {
    res('value 2');
  }, 400);
});
let promise3 = new Promise((res, _) => {
  setTimeout(() => {
    res('value 3');
  }, 300);
});

const thePromise = [promise1, promise2, promise3];

Promise.any(thePromise)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log('done'));

// notes:- waits for th first promises that is fulfilled{resolved}
