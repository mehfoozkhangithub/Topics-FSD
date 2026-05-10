async function my_func() {
  const ice_cream_promise = new Promise((res, rej) => {
    const iceCream = true;

    if (iceCream) {
      setTimeout(() => {
        res('got it!!');
      }, 3000);
    } else {
      setTimeout(() => {
        rej('call mommy???');
      }, 2000);
    }
  });

  try {
    let value = await ice_cream_promise;
    console.log('🚀 ~ value:', value);
  } catch (error) {
    console.log('🚀 ~ error:', error);
  }
}
my_func();
// console.log(ice_cream_promise);

// ice_cream_promise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
