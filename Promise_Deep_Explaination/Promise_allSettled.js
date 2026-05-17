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

Promise.allSettled(thePromise)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log('done'));

/* 
  notes:- waits for all promises, no matter success or failures, returns status of every prmises.
  
  */
