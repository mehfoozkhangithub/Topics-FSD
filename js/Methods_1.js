// js methods

let arr = [2, 5, 8, 11];

// arr.push(99, 109);

// arr.pop();

// console.log('🚀 ~ arr:', arr);

// let arr1 = [1, 2, 3, 5];

// let newArr = [6, 7, 8, 9];

// let ans = [...arr, ...newArr];

// console.log('🚀 ~ ans:', ans);

// const [a, b, ...rest] = arr1;
// console.log('🚀 ~ a,b:', a, b);
// console.log('🚀 ~ rest:', rest);

// function myPush(givenArr, ...argv) {
//   let myArr = [...givenArr, ...argv];

//   return myArr;

//   let jhola = '';

//   for (let i = 0; i < givenArr.length; i++) {
//     jhola += givenArr[i];
//   }
//   for (let i = 0; i < argv.length; i++) {
// // jhola += argv[i];
// givenArr.push(argv[i]);
//   }

//   return givenArr;

//   console.log('🚀 ~ jhola:', jhola);
//   return jhola.split('').map((el) => +el);
// }

// let ans = myPush(arr, 1, 2, 3, 5);
// console.log('🚀 ~ ans:', ans);

// splice slice

let newArr = ['mehfooz', 'abra ka dabra', 555];

let ans = arr.splice(2, 2, ...newArr);
// console.log('🚀 ~ ans:', ans);

console.log('🚀 ~ arr:->', arr);
let ans2 = arr.slice(3);
// console.log('🚀 ~ ans2:', ans2);

let ans3 = arr.at(4);
console.log('🚀 ~ ans3:', ans3);

function myAt(expectedArr, IndexValue) {
  for (let i in expectedArr) {
    if (Number(i) === IndexValue) return expectedArr[i];
  }
  return undefined;
}

let ans4 = myAt(arr, 3);
// console.log('🚀 ~ ans4:', ans4);

// flat

let ownArr = [0, 1, [2, [3, [4, 5]]]];
// console.log('🚀 ~ ownArr:', ownArr.flat(Infinity));

function myFlat(expectedArr) {
  let newArr = [];

  for (let i = 0; i < expectedArr.length; i++) {
    if (typeof expectedArr[i] === 'object') {
      for (let j = 0; j < expectedArr[i].length; j++) {
        newArr = [...newArr, expectedArr[i][j]];
      }
    } else {
      newArr = [...newArr, expectedArr[i]];
    }
  }
  return newArr;
}

let ans5 = myFlat(ownArr);
console.log('🚀 ~ ans5:', ans5);
