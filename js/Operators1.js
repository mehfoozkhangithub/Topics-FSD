//  assignment operators

let count = 0;

let name = 'mehfooz';

count += 4; // count = count+4
count -= 2; // count = count-4
count *= 2; // count = count*4
count /= 2; // count = count/4

console.log('🚀 ~ count:', count);

// arithmatic operators [maths -> sign's]

let a = 6;
let b = 7;

let sum = a + b;
console.log('🚀 ~ sum:', sum);
let sub = a - b;
console.log('🚀 ~ sub:', sub);
let mul = a * b;
console.log('🚀 ~ mul:', mul);
let div = a / b;
console.log('🚀 ~ div:', div);
let mod = a % b;
console.log('🚀 ~ mod:', mod);
let expo = a ** b;
console.log('🚀 ~ expo:', expo);

/*

+
-
*
/
%
**

*/

// concatination operators

let name1 = 'mehfooz';
let name2 = 'khan';

// let fullName = '\n' + name1 + '\n' + name2;
// console.log('🚀 ~ fullName:', fullName);

let fullName = `${name1} ${name2}`;
console.log('🚀 ~ fullName:', fullName);

name1 = name1 + ' ' + name2;

// name1 += ' ' + name2;
console.log('🚀 ~ name1:', name1);

// conditional/comparision opperators

let num1 = 4;
let num2 = '4';

console.log(num1 === num2);

/* 
... the return value in boolean 

 = = -> LHS  == RHS   DATA[VALUE ✅,TYPE ❌]
 ! = -> LHS  != RHS   DATA[VALUE ✅,TYPE ❌]
 = = = ->  LHS  === RHS   DATA[VALUE ✅,TYPE ✅]

 <
 >
 <=
 >=

*/

// logical operators

let flag1 = true;
let flag2 = false;
let flag3 = false;

console.log(true || false); // true && false-> false

console.log(!flag3); // true

let value = 'null';

let ans = value ?? 50;

console.log('🚀 ~ ans:', ans);

/* 

&& -> AND =>  left side && right side ... both value are true then it will become -> true



|| OR -> left side || right side ... any one value has been true then it will become -> true


! Not -> change the value if true become false and false become true


?? -> 


*/

// ternary operators

let flag = false;

let ans1 = flag ? 'i am in ' : 'i am out';
console.log('🚀 ~ ans1:', ans1);

// unary operators

let name4 = '5';

name4 = +name4;
// console.log(+name4);

// typeof operators

console.log(typeof name4);

// conversion between string to number || number to string

let stringToNumber = '123';
console.log('🚀 ~ stringToNumber:', +stringToNumber);
console.log('🚀 ~ stringToNumber:', typeof +stringToNumber);

// method

let ans55 = parseInt(stringToNumber);
console.log('🚀 ~ ans55:', ans55);
console.log('🚀 ~ ans55:', typeof ans55);

// constructor method

let ans56 = Number(stringToNumber);
console.log('🚀 ~ ans56:', ans56);
console.log('🚀 ~ ans56:', typeof ans56);

//  number to string

let numberToString = 55;

console.log(
  '🚀 ~ numberToString: ans',
  numberToString,
  'type:',
  typeof numberToString,
);

const jugad = numberToString + '';

console.log('🚀 ~ jugad: ans', jugad, 'type:', typeof jugad);

const jugad_2 = numberToString.toString();

console.log('🚀 ~ jugad_2: ans', jugad_2, 'type:', typeof jugad_2);

const jugad_3 = String(numberToString);
console.log('🚀 ~ jugad_3: ans', jugad_3, 'type:', typeof jugad_3);

// spread and rest operators

let arr = [1, 2, 3, 4, 5];
let arr1 = [6, 7, 8, 9, 10];

let mergeArr = [...arr, ...arr1];
console.log('🚀 ~ mergeArr:', mergeArr);

let [a1, b1, c1, ...xyz] = arr;
console.log('🚀 ~ a1', a1);
console.log('🚀 ~ b1:', b1);
console.log('🚀 ~ c1:', c1);
console.log('🚀 ~ xyz:', xyz);

// binary conversion

let n1 = 26;
let n2 = 7;

let numToBin1 = n1.toString(2);
console.log('🚀 ~ numToBin1:', numToBin1);
let numToBin2 = n2.toString(2);

let binTonum = parseInt(numToBin1, 2);

let binTohex = binTonum.toString(16);
console.log('🚀 ~ binTohex:', binTohex);

// let and = numToBin1 & numToBin2;
// let or = numToBin1 | numToBin2;
// console.log('🚀 ~ and:', and);
// console.log('🚀 ~ or:', or);

// bitwise operators
