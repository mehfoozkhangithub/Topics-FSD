let name = 'khan';
// console.log('🚀 ~ name:', name);

let obj = {
  name: 'Renee',
};

// # read
// console.log('🚀 ~ obj:', obj.name);

// ?  Create

obj.age = 99;
// console.log('🚀 ~ obj:', obj);

// $ update

obj.age = 102;

delete obj.age;

// console.log('🚀 ~ obj:', obj);

/*

C-> create
R-> Read
U->Update
D-> Delete

*/

// looping

let array = [
  1,
  2,
  true,
  false,
  { name: 'sneha' },
  ['abhishek', 'kashish'],
  'Renee',
];

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);

//for("initialization","condition","increment++ / decrement--"){
// code of output
//}

// for (let i = 0; i < array.length; i++) {
//   console.log(
//     `\n\  this is the value : ${array[i]} \n\  \n\ this is index : ${i}`,
//   );
// }

// console.log(array[4].name);

// while loop

// 1 to 100

let start = 1;

let end = 100;

while (start <= end) {
  // code

  console.log(start);

  // increments
  start++;
}

let given = 5;

let start_1 = 1;

let result = 1;

// 120

while (start_1 <= given) {
  result = result * start_1;
  start_1++;
}

console.log('🚀 ~ result:', result);

// do while loop

let start_2 = 1;

do {
  console.log('hello');
  start_2++;
} while (start_2 <= 3);

// for in and for of

let object = {
  animal: 'cat',
  married: false,
  age: 44,
  city: ['pune', 'mumbai', 'lucknow', 'banglore'],
  hobbie: {
    virtual: 'pub-G',
    outDoor: 'football',
    inDoor: 'carrom',
  },
  myName: function () {
    console.log(this.animal);
  },
};

for (let key in object) {
  console.log(`this is key ${key} this is value`, object[key]);
}


// here we go

let object_1 = {
  name: "mehfooz",
  age: Infinity,
  married: false,
  hobbie: "COC"
}


for (let key in object_1) {
  console.log(`this is key ${key}  value: ${object_1[key]}`)
}

let array1 = ["mehfooz", "abhishek", "kashish", 'sneha', "shivam", "suraj", "renee"]
// console.log('🚀 ~ array1:', array1);

for (let val of array1) {
  console.log(val)
}

