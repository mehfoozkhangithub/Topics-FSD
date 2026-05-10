// let a = 0;

// let b = 1;

// let fiboCount = 7;

// for (let i = a; i < fiboCount; i++) {
//   console.log(a);
//   let c = a + b;
//   a = b;
//   b = c;
// }

// const obj={
//   name:'rehmut'
// }

const historyCalc = (func) => {
  const cache = {};
  return (input) => {
    return cache[input] || (cache[input] = func(input));
  };
};

const fibbo = historyCalc((n) => {
  if (n <= 1) {
    return n;
  }
  return fibbo(n - 1) + fibbo(n - 2);
});

console.time('T1');
fibbo(1000);
console.timeEnd('T1');
