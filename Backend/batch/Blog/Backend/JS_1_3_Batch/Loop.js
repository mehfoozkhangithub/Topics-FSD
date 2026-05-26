let arr = ['mehfooz', 'minhaj', 'yaseer', 'manish', 'nillu', 'gullu'];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let i = 1; i <= 10; i++) {
  console.log('🚀 ~ i:', i);
}

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

for (let key in object) {
  console.log('🚀 ~ key:', typeof key, object[key]);
}

// notation

console.log('🚀 ~ object.name:', object.name);

console.log('🚀 ~ object[name]:', object['name']);

// while

let start = 1;

let end = 100;

while (start <= end) {
  // code
  console.log(start);
  // increment
  start++;
}

// do-while

let start1 = 0;

do {
  console.log(start1);
  start1++;
} while (start1 <= 3);
