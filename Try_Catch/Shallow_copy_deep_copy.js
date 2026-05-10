// shallow copy

let object = {
  name: 'mehfooz',
  age: 999,
  married: false,
  hobbies: ['coc', 'pub-g', 'gow', 'carrom'],
  city: {
    plan_TO: 'Goa',
    live_IN: 'Mumbai',
  },
};

// let copyObj = {
//   ...object,
// };

let copyObj = Object.assign({}, object);

copyObj.hobbies[0] = 'shivam_smart007';

console.log('🚀 ~ object:', object);
console.log('🚀 ~ copyObj:', copyObj);

// array

let array = ['mango', 'mehfooz', 'shivam', 'suraj', 'sneha'];

let newArr = [...array];

newArr[0] = 'xyz';

// console.log('🚀 ~ newArr:', newArr);
// console.log('🚀 ~ array:', array);

// deep copy

let copyDeep = JSON.parse(JSON.stringify(object));

copyDeep.hobbies[0] = 'khan';

console.log('🚀 ~ copyDeep:', copyDeep);
console.log('🚀 ~ object:deep', object);
