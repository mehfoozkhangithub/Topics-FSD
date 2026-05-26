let flag = false; //boolean

const seeValueOfBoolean = (value) => {
  switch (value) {
    case true:
      return 'this is true';

    case false:
      return 'this is false';

    default:
      return 'please enter any boolean value to excute the switch case code and see the output....';
  }
};

const answer = seeValueOfBoolean(flag);
console.log('🚀 ~ answer:', answer);

/* switch (flag) {
  case true:
    console.log('this is true');
    break;

  case false:
    console.log('this is false');
    break;

  default:
    console.log(
      'please enter any boolean value to excute the switch case code and see the output....',
    );
} */
