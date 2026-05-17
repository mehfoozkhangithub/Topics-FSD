// let argument = process.argv;
// console.log('🚀 ~ argument:', argument);

const number_1 = +process.argv[2];
const number_2 = +process.argv[3];
const operator = process.argv[4];

const calcFunc = (opt, val_1, val_2) => {
  switch (opt) {
    case '+':
      return val_1 + val_2;

    case '-':
      return val_1 - val_2;

    case '*':
      return val_1 * val_2;

    case '/':
      return val_1 / val_2;

    case '%':
      return val_1 % val_2;

    case '**':
      return val_1 ** val_2;

    default:
      return 'please enter someting!!';
  }
};

const ans = calcFunc(operator, number_1, number_2);
console.log('🚀 ~ ans:', ans);
