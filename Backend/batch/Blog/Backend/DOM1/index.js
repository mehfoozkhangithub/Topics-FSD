// how access the node of document's

let value = document.getElementsByClassName('mainText');
console.log('🚀 ~ value:', value);
let value1 = document.getElementById('mainText1').innerText;
// console.log('🚀 ~ value1:', value1);

// for (let i = 0; i < value.length; i++) {
//   const element = value[i];
//   console.log('🚀 ~ element:', element.innerHTML);
// }

// for (let key in value) {
//   if (value[key].innerHTML === undefined) continue;
//   console.log('🚀 ~ key:', value[key].innerHTML);
// }
// value = [...value];
// console.log('🚀 ~ valueW:', Array.isArray(value));

// value = Array.from(value);

// console.log('🚀 ~ value:', Array.isArray(value));

// value &&
//   value.map((element) => {
//     if (element.innerHTML === undefined) return;
//     console.log('🚀 ~ element:', element.innerHTML);
//   });
