let arr = [1, 2, 3];

arr.push(4, 5, 6, 7, 8, 9);
console.log('🚀 ~ arr:', arr);

/* 

STACK ->    LIFO
QUEUE ->    FIFO

 
 |  7  |
 |  6  |
 |  5  |
 |  4  |
 |  3  |
 |  2  |
 |  1  |


*/

arr.pop();
arr.pop();

arr.shift();
arr.shift();
arr.unshift('mehfooz');
console.log('🚀 ~ arr:LAST', arr);

console.log('🚀 ~ arr.indexOf():', arr.indexOf(7));

console.log(`🚀 ~ arr.includes:`, arr.includes('khan'));

let newArr = [9, 4, 2, 10, 22, 33, 0, 190];

newArr = newArr.sort((a, b) => a - b);

// let spliceValue = newArr.splice(4, 1, 'mehooz');
// console.log('🚀 ~ newArr:', newArr);
// console.log('🚀 ~ spliceValue:', spliceValue);

let slice = newArr.slice(4);
console.log('🚀 ~ slice:', slice);
console.log('🚀 ~ newArr:', newArr);

let number = '123';

let ans = number.split('').map((el) => +el);
console.log('🚀 ~ ans:', typeof ans.join(''));

//map, filter, forEach

let value1 = newArr.map((elements, index, array) => {
  console.log('🚀 ~ elements !== 190:', elements !== 190);
});
let value2 = newArr.filter((elements, index, array) => {
  console.log('🚀 ~ elements !== 190:', elements !== 190);
});
let value3 = newArr.forEach((elements, index, array) => {
  console.log('🚀 ~ elements !== 190:', elements !== 190);
});
