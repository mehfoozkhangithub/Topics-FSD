console.log('A');
let iceCream = new Promise((resolved, rejected) => {
  let value = false;

  console.log('B');
  setTimeout(() => {
    console.log('C');
    if (value) {
      resolved('got it....');
    } else {
      rejected('call mommy!!!!');
    }
  }, 3000);
  console.log('D');
});

// SHIV -> A E B C CALL-MOMMY D  RES FINALLY F

// SURAJ -> A D B CALL-MOMMY E RES FINALLY F

// RENEE -> A C D B CALL-MOMMY E RES F

console.log('E');
iceCream
  .then((res) => {
    console.log('🚀 ~ res:', res);
  })
  .catch((err) => {
    console.log('🚀 ~ err:', err);
  })
  .finally(() => console.log('finally execution done✅'));
console.log('F');

//    setTimeout

/* console.log('A');
const timeOut = () => {
  console.log('B');
  let id = setTimeout(() => {
    console.log('this is setTimeOut');
  }, 3000);
  console.log('C');
};
console.log('D');
timeOut();
console.log('E'); */

//   setInterval

/* console.log('A');

const timeOut_1 = () => {
  console.log('B');
  let id = setInterval(() => {
    console.log('this is setInterval');
    clearInterval(id);
  }, 3000);
  console.log('C');
};

console.log('D');
timeOut_1();
console.log('E'); */

/* function naam() {
  let name = 'hello';
  return () => {
    let name = 'khan';
    return name;
  };
}

console.log('🚀 ~ naam():', naam()()); */
