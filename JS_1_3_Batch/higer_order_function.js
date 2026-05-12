/* let array = [2, 3, 4, 5, 6, 7, 8, 9];
let newArr = [];
for (let i = 0; i < array.length; i++) {
  newArr.push(array[i] * 10);
}
console.log(`🚀 ~ newArr:`, newArr);

let ans = array.map((el) => {
  return el * 10;
});
console.log(`🚀 ~ ans:`, ans); */

// filter

let fruites = ['lichi', 'lichi', 'mango', 'bananna', 'kiwi', 'lichi', 'lichi'];

let ans1 = fruites.filter((el) => {
  return el !== 'lichi';
});
console.log(`🚀 ~ ans1:`, ans1);
