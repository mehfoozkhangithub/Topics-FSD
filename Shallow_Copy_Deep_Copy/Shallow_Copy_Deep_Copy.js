let object = {
  name: 'mehfooz',
  age: 20,
  married: false,
  hobbies: ['coc', 'gOw', 'pub-g'],
  city: {
    live_IN: 'Mumbai',
    plan_TO: 'UK',
    dream_TO: 'Switzerland',
  },
};

//! here we have to 'shallow' copy.

//$ spread operator
// let newObject = {
//   ...object,
// };

//& constructor method
// let newObject = Object.assign({}, object);

// newObject.hobbies[0] = 'khan';

// console.log('🚀 ~ newObject:', newObject);

// console.log('🚀 ~ object:', object);

//* here we have to 'deep' copy.

let deepCopy = JSON.stringify(object); //* josn

// console.log('🚀 ~ deepCopy:', deepCopy, 'type:', typeof deepCopy);

let anotherValue = JSON.parse(deepCopy); //* object

anotherValue.hobbies[0] = 'khan';

console.log('🚀 ~ anotherValue:', anotherValue, 'type:', typeof anotherValue);

console.log('🚀 ~ object:', object);
