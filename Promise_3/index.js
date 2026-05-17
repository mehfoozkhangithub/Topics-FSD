/* let base_URL = `https://fakestoreapi.com/products`;

// sync way

fetch(`https://fakestoreapi.com/products`)
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// async way

async function apiCall() {
  try {
    let value = await fetch(`https://fakestoreapi.com/products`);
    let data = await value.json();
    console.log('🚀 ~ data:', data);
    console.log('🚀 ~ value:', value);
  } catch (error) {
    console.log('🚀 ~ error:', error);
  }
}

apiCall();
 */

// dom manupulation's

// let value_1 = document.getElementById('hello').innerText;
let value_2 = document.getElementsByTagName('h2');

// value_2 = [...value_2];

value_2 = Array.from(value_2);

console.log('🚀 ~ value_2:', Array.isArray(value_2), value_2);

// for (let i = 0; i < value_2.length; i++) {
//   console.log(value_2[i].innerText);
// }

value_2.forEach((element) => {
  console.log('🚀 ~ element:', element.innerText);
});

// value_2.innerText = 'khan';
// value_3.innerText = 'sahab';
