let key = false;

switch (key) {
  case true:
    console.log('hello');
    break;

  case false:
    console.log('sorry try again later...');
    break;

  default:
    console.log('this is default....');
}

let name = 'keshav';

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);
// console.log(array[5]);
// console.log(array[6]);
// console.log(array[7]);
// console.log(array[8]);
// console.log(array[9]);
// console.log(array[10]);
// console.log(array[11]);
// console.log(array[12]);

for (let i = 1; i <= 100; i++) {
  console.log(name, i);
}

let start = 1;
let end = 100;

while (start <= end) {
  if (start % 2 === 0) console.log(`this is even ${start}`);
  else console.log(`this is odd ${start}`);
  start++;
}

let start1 = 1;

do {
  console.log('hello', start1);
  start1++;
  console.log(start1);
} while (start1 < 2);

function showDetails(a, b, c) {
  console.log('🚀 ~ a:', a);
  console.log('🚀 ~ b:', b);
  console.log('🚀 ~ c:', c);
  console.log('hello mehfooz');
}
showDetails(1, 2, 3);

const showDetails_2 = () => {
  console.log('hello mehfooz 2');
};
showDetails_2();

function sum(a, b, c) {
  //   console.log(a + b + c);
  //   return a + b + c;
  //   return 'hello';
}

console.log(sum(1, 2, 3));

// hoisting

const password = 'xyz@123';

console.log('🚀 ~ paswsord:', password);

function host() {
  console.log('hello');
}

host();
