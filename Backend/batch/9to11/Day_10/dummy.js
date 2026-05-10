let obj = [{ name: 'mehfooz' }, { name: 'event' }, { name: 'mehfooz' }];
/* 
{mehfooz:2,event:1}
{mehfooz:NaN,event:NaN}
*/

// let result = {};
// for (let i = 0; i < obj.length; i++) {
//   if (result[obj[i].name]) {
//     result[obj[i].name]++;
//   } else {
//     result[obj[i].name] = 1;
//   }
// }

// console.log(`🚀 ~ result:`, result);

let ans = obj.reduce((acc, curr) => {
  acc[curr.name] = (acc[curr.name] || 0) + 1;
  return acc;
}, {});

console.log(`🚀 ~ ans:`, ans);
