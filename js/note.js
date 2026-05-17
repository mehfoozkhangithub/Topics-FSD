// let number = 4;

// let ans = Math.pow(number, 2);
// console.log('🚀 ~ ans:', ans);

// let ans1 = Math.sqrt(number);
// console.log('🚀 ~ ans1:', ans1);

/* 
ceil
floor
round
truncat
*/
// let number1 = 4.5;

// let ans2 = Math.ceil(number1);
// console.log('🚀 ~ ans2:', ans2);

// let ans3 = Math.floor(number1);
// console.log('🚀 ~ ans3:', ans3);

// let ans4 = Math.round(number1);
// console.log('🚀 ~ ans3:', ans4);

// let ans5 = Math.trunc(Math.random(2) * 1000);
// console.log('🚀 ~ ans5:', ans5);

// prototype

let arr = [2, 6, 9];

// arr.push(2, 810);

// arr.pop();

// Array.prototype.myPush = function (...value) {
//   for (let key of value) {
//     this[this.length] = key;
//   }
// };

// arr.myPush(2, 810, 19, 39);

Array.prototype.myPop = function (value) {
  if (this.length >= value) {
    delete this[this.length - (value || 1)];
    this.length = this.length - (value || 1);
  } else {
    this.length = 0;
  }
};
arr.myPop();


console.log('🚀 ~ arr:', arr);
