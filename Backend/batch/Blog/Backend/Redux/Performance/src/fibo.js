const memo = (func) => {
  let cache = {};
  return (input) => {
    return cache[input] || (cache[input] = func(input));
  };
};

const fibo = memo((value) => {
  //base case
  if (value <= 1) return value;

  return fibo(value - 1) + fibo(value - 2);
});

const ans = fibo(123); // 123
console.log('🚀 ~ ans:', ans);
