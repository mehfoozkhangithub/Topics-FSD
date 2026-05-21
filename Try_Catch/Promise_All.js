let Promise_1 = new Promise((res, rej) => {
  setTimeout(() => {
    res('hello');
  }, 2000);
});

let Promise_2 = new Promise((res, _) => {
  setTimeout(() => {
    res('hello2');
  }, 1000);
});

let Promise_3 = new Promise((res, rej) => {
  setTimeout(() => {
    rej('err');
  }, 500);
});

// Promise.all([Promise_1, Promise_2, Promise_3])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

async function getData() {
  let res = await Promise.all([Promise_1, Promise_2, Promise_3]);
  console.log('🚀 ~ res:', res);
}

getData();
