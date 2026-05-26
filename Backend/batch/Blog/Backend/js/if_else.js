// let age = +process.argv[2];
let age = prompt("enter you'r age");

// above 60

// let value = age >= 18 ? console.log('adult') : console.log('kid');

if (age >= 18 && age < 60) {
  //block of code
  console.log('adult');
} else if (age > 60) {
  console.log('old');
} else {
  //block of code
  console.log('kid');
}
