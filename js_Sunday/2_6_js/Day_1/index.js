// primitive DT call by value

/* 
1. string -> "", '', ``
2. number -> 0-9
3. boolean -> true/false
4. undefined -> undefined
5. null -> null
6. bigINT -> nthe
7. Symbol -> unique id
*/

/* 

var

let 

const 

*/

/* 
{
name:"khan"
}
*/

/* let name = 'mefooz';
name = 'khan';

let something = name[0];
something = 'm';
console.log('🚀 ~ something:', something);

console.log(name); */

// non-primitive DT call by refrence

/* 
1. object {}
2. array  []
3. function ()
*/

let arr = ['mehfooz', 1, true, ['xyz', { name: 'foo' }]];

let something = arr[0];
something = 'khan';

arr[0] = something;
console.log('🚀 ~ something:', something);
console.log('🚀 ~ arr:', arr[3][1].name);

// ====== Operators ====== //

/* 

Arithematic operator's
Assignment operator's
Logical operator's
Comparision operator's

typeOf operator's
ternary operator's
unary operator's

bitwise operator's

*/

let num_1 = 5;
let num_2 = 9;

let sum = num_1 + num_2;
let sub = num_1 - num_2;
let mul = num_1 * num_2;
let div = num_1 / num_2;
let mod = num_1 % num_2;
let expo = num_1 ** num_2;
console.log('🚀 ~ sum:', sum);
console.log('🚀 ~ sub:', sub);
console.log('🚀 ~ mul:', mul);
console.log('🚀 ~ div:', div);
console.log('🚀 ~ mod:', mod);
console.log('🚀 ~ expo:', expo);

let count = 3;
count += +'1';
console.log('🚀 ~ count:', count);

/* 
LHS && RHS ->  BOTH VALUE POSITIVE = RESULT WILL POSITIVE
LHS || RHS -> ANY ONE POSITIVE = RESULT WILL POSITIVE
! VALUE_TOGGLE [ BOOLEAN ]

*/

let value_1 = 10,
  value_2 = '10';

// let ans_1 = value_1 == value_2;
// console.log('🚀 ~ ans_1:', ans_1);
// data type && data Value === data type && data value

let ans_2 = value_1 == value_2 || value_1 === value_2;
console.log('🚀 ~ ans_2:', !!ans_2);

/* 

<
>
<=
>=

!=
!== -> ! = = 
==
===

*/
