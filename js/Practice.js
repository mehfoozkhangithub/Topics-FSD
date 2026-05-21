// function sum(...arg) {
//   let sum = 0;
//   arg = arg.map((el) => +el);
//   for (let i = 0; i < arg.length; i++) {
//     sum += arg[i];
//   }
//   return sum;
// }

// let ans = sum('2', 5, 6, 10, 20);
// console.log('🚀 ~ ans:', ans);

let arr = [2, [4], [5, 6, 7], 2, 3, 4]; // o/p [2, 4, 5, 6,7, 2, 3, 4]

// arr.push(2, 3, 4);

// let newArr = arr.flat();

// console.log('🚀 ~ arr:', arr);
// console.log('🚀 ~ newArr:', newArr);

let newArr = [];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'object') {
    for (let j = 0; j < arr[i].length; j++) {
      newArr.push(arr[i][j]);
    }
  } else {
    newArr.push(arr[i]);
  }
}
console.log('🚀 ~ newArr:', newArr);

let arr1 = ['mango', 'banana', 'apple', 'kiwi'];

function apnaIncludes(expectedArr, expectedValue) {
  let flag = false;

  //   for (let i = 0; i < expectedArr.length; i++) {
  //     if (expectedArr[i] === expectedValue) {
  //       flag = true;
  //     }
  //   }

  // map, filter, forEach for-of

  //   for (let key of expectedArr) {

  //     if (key === expectedValue) {
  //       flag = true;
  //     }
  //   }

  expectedArr.forEach((items) => {
    if (items === expectedValue) {
      flag = true;
    }
  });

  return flag;
}

// let ans = arr1.includes('mango');
// let ans = apnaIncludes(arr1, 'banana');
// console.log('🚀 ~ ans:', ans);

// console.log('🚀 ~ arr1:', arr1);
// arr1.reverse();

function apnaReverse(expectedVal) {
  let arrs = [];
  for (let i = expectedVal.length - 1; i >= 0; i--) {
    arrs.push(expectedVal[i]);
  }
  return arrs;
}

let ans = apnaReverse(arr1);
// console.log('🚀 ~ ans:', ans);

// react components structure of array ||  object prototype

let dataBase = [
  {
    id: 1,
    text: 'hello',
    isEdit: false,
    isComplete: false,
  },
  {
    id: 2,
    text: 'hello 2',
    isEdit: false,
    isComplete: false,
  },
  {
    id: 3,
    text: 'hello 3',
    isEdit: false,
    isComplete: false,
  },
];

function todo(expArr, id, status) {
  let flag = false;
  expArr.forEach((items) => {
    if (items.id === id) {
      flag = true;
    }
  });

  if (flag && status) {
    if (status === 'edit') {
      return expArr.map((items) =>
        items.id === id ? { ...items, isEdit: true } : items,
      );
    } else if (status === 'delete') {
      return expArr.filter((items) => items.id !== id);
    }
  } else {
    return 'id is not presents && status';
  }
}

let ans3 = todo(dataBase, 3, 'delete');
console.log('🚀 ~ ans3:', ans3);
