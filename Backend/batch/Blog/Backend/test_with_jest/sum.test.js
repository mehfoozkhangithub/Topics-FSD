const { sum } = require('./sum');

// let value = sum(3, 5);
// console.log(`🚀 ~ value:`, value);

// if (value === 8) {
//   console.log(true);
// } else {
//   console.log(false);
// }

test('add the value', () => {
  expect(sum(3, 5)).toBe(8);
});
