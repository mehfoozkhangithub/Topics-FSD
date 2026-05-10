const age = +process.argv[2];
// console.log('🚀 ~ age:', typeof age);
// console.log('🚀 ~ age:', typeof +age, +age);

// 60 or 70

// if (age >= 18 && age < 60) {
//   console.log('eligible to vote');
// } else if (age >= 60) {
//   console.log('not eligible to vote, becoz u r old  marja!!!');
// } else {
//   console.log('not eligible to vote');
// }

// switch case

let value = process.argv[2];
console.log(value);

switch (value) {
  case 10:
  case 20:
    console.log('true');
    return;

  case 'false':
    console.log('false');
    break;

  default:
    console.log('please select the correct value!!');
    break;
}
