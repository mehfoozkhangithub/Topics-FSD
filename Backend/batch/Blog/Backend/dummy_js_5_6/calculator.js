// calculator

const number_1 = Number(process.argv[2]);
const number_2 = Number(process.argv[3]);
const operators = process.argv[4];

const calculator = (num1, num2, opt) => {
  switch (opt) {
    case '+':
      return num1 + num2;

    case '-':
      return num1 - num2;

    case '*': // "'*'"
      return num1 * num2;

    /* 
        - // 
    */
    case '/':
      return num1 / num2;

    case '**':
      return num1 ** num2;

    default:
      return 'please enter correct value???';
  }
};

let ans = calculator(number_1, number_2, operators);
console.log(`🚀 ~ ans:`, ans);
