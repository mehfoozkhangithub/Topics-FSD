let deciml_Number = '1010'; // bin - string

// here we have to convert into binary.....

/* 
dec -> bin 

dec -> octa
*/

const convert_InTo_Binary = deciml_Number.toString(2);

const convert_InTo_Octa = deciml_Number.toString(16);

// console.log('🚀 ~ convert_InTo_Octa:', convert_InTo_Octa);

// console.log('🚀 ~ convert_InTo_Binary:', convert_InTo_Binary);

// here we have to convert into decimal .....

const convert_InTo_Decimal = parseInt(deciml_Number, 2);
// console.log('🚀 ~ convert_InTo_Decimal:', convert_InTo_Decimal);

//$  task 1 dec -> binary -> octa -> hex

const number_1 = 1080;

const convt_bin = number_1.toString(2);

const convt_oct = parseInt(convt_bin, 2).toString(8);

const convt_hexa = parseInt(convt_oct, 8).toString(16);

console.log('🚀 ~ convt_bin:', convt_bin);

console.log('🚀 ~ convt_oct:', convt_oct);

console.log('🚀 ~ convt_hexa:', convt_hexa);

/* 
&

|

~

<<

>> 
*/

// bitwise code

let number1 = 5; // [101]

let number2 = 3; // [011]

// AND [&]

const and = number1 & number2; // [001]
console.log('🚀 ~ and:', and);

// OR [|]

const or = number1 | number2; // [111]
console.log('🚀 ~ or:', or);

// NOT [~]

/* 

js -> 32bit [  ~00000000000000000000000000000101]

-[11111111111111111111111111111010]  ~5=-(5+1)


~10 => -11

*/

const not = ~number1;
console.log('🚀 ~ not:', not);

/* 

100 - 4

1000 - 8

*/

/* 

110

1100 

11000

1100

110

11

*/

// << left-shift

const left = 6 << 1; // multiply by 2
console.log('🚀 ~ left:', left); //26

// >> right-shift

const right = 6 >> 1; // division by 2
console.log('🚀 ~ right:', right);

// convertion in number to string

let number = 12;

let basic_conv_str = number + '';

let method_conv_str = number.toString();

let constructor_method_conv_str = String(number);

let str_num = '12';

let basic_conv_num = +str_num;
console.log('🚀 ~ basic_conv_num:', basic_conv_num);

let method_conv_num = parseInt(str_num);
console.log('🚀 ~ method_conv_num:', method_conv_num);

let constructor_method_conv_num = Number(str_num);
console.log('🚀 ~ constructor_method_conv_num:', constructor_method_conv_num);
