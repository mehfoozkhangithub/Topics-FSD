let iceCream = new Promise((res, rej) => {
  let flag = false;
  if (flag) {
    res('get');
  } else {
    rej('not found');
  }
});

iceCream
  .then((res) => console.log('res:->', res))
  .catch((err) => console.log('err:->', err))
  .finally(() => console.log('done'));

/* 
  Promise 
        all
        allSetteld
        race
        any  
  */
