// 'use strict';

let myArr = [1, 2, 3, 4, 5];

Array.prototype.धकेलो = function (...value) {
  // console.log('🚀 ~ value:', value);
  for (let key of value) {
    let lastIndex = this.length;
    this[lastIndex] = key;
  }
};

// myArr.धकेलो(4, 5, 6);
// myArr.धकेलो(5);
// myArr.धकेलो(6);

// console.log('🚀 ~ myArr:', myArr);

Array.prototype.apnaPop = function (VALUE) {
  /* 
  TAKE ONE PARAM 
  != NaN
  */
  if (this.length > this[this.length - 3]) {
    delete this[this.length - 3];
    this.length = this.length - 3;
  }
};

myArr.apnaPop(3);
console.log('🚀 ~ myArr:', myArr);

// Array.prototype.oddFind = function () {
//   let ans = this.map((el) => (el % 2 == 0 ? true : false));
//   console.log('🚀 ~ ans:', ans);
// };

// myArr.oddFind();

// console.log('🚀 ~ myArr:', myArr);
