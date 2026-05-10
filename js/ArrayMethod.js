let arr = [1, 2, 3];

arr.push(4, 5, 6);
// arr.shift()
// arr.unshift(10, 100, 1000);
// arr.pop();

// ! this is splice
console.log(arr);
let ans = arr.splice(0, 1, 2);
console.log('🚀 ~ ans:', ans);

// $ this is slice

// let ans = arr.slice(3)
// console.log('🚀 ~ ans:', ans);

console.log(arr);

// hof

let arr1 = [1, 2, 3, 4, 5, 6, 7];

let newArr = [];

// for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] === 7) {
//         newArr.push([arr1[i],true])
//     }
//     newArr.push([arr1[i],false])
// }

// console.log('🚀 ~ newArr:', newArr);

let newArr_1 = arr1.map((element, index, array) => {
  /*     console.log("***************************")
        console.log('🚀 ~ array:', array);
        console.log('🚀 ~ index:', index);
        console.log('🚀 ~ element:', element);
    
        console.log("///////////////////////////") 
  
        
        
        */

  /*  if (element === 7) {
         return [array[index], true]
     }
     return [array[index], false] */

  return element != 7;
  // return element != 7 ? array[index] : false
});
console.log('🚀 ~ newArr_1:', newArr_1, newArr_1.length);

const filterVal = newArr_1.filter((el) => el !== false);
console.log('🚀 ~ filterVal:', filterVal);

let quest_1 = [
  'mango',
  'apple',
  'kiwi',
  'orange',
  'guava',
  'lichi',
  'pineapple',
  'banana',
  'banana',
  'banana',
  'mango',
  'apple',
  'kiwi',
  'orange',
  'guava',
  'lichi',
  'pineapple',
];

const ans2 = quest_1.filter((el) => el != 'banana');
console.log('🚀 ~ ans2:', ans2);

/* 

{
mango:2,
banana:3
}

*/

// reduce

const ans3 = quest_1.reduce((inival, currVal) => {
  console.log('🚀 ~ currVal:->', currVal);
  console.log('🚀 ~ inival:=>', inival);
  inival[currVal] = (inival[currVal] || 0) + 1;
  return inival;
}, {});
console.log('🚀 ~ ans3:', ans3);

/* 

const finalValue_Variable=variableName.methodName(callBackFunc,initialValue)

*/

function something(initialVal, currVal) {
  return initialVal + currVal;
}

const ansOfArr = arr1.reduce(something, 0);

console.log('🚀 ~ ansOfArr:', ansOfArr);

// forEach

let quest_2 = [
  'mango',
  'apple',
  'kiwi',
  'orange',
  'guava',
  'lichi',
  'pineapple',
  'banana',
  'banana',
  'banana',
  'mango',
  'apple',
  'kiwi',
  'orange',
  'guava',
  'lichi',
  'pineapple',
];

arr1.forEach((el, i, arr) => {
  if (el % 2 === 0) {
    console.log(`this is even number ${el}`);
  } else {
    console.log(`this is odd number ${el}`);
  }
});
