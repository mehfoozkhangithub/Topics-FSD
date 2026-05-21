/* 
const apiKey = `3d15e923`;

const api = `http://www.omdbapi.com/?s=superman&apiKey=${apiKey}`;

async function apiCall() {
  let res = await fetch(api);
  let data = await res.json();
  console.log('🚀 ~ data:', data);
}
apiCall(); */
/*     fetch(API)
.then((res) => res.json())
.then((res) => console.log(res))
.catch((err) => console.log(err));
*/

// dom

// let value = document.getElementsByTagName('h1');
// console.log('🚀 ~ value:', typeof value, value);

// console.log('before', Array.isArray(value));

/* for (let key in value) {
  console.log('🚀 ~ key:', key);
  if (value[key].textContent === undefined) continue;
  console.log('🚀 ~ key:', value[key].textContent);
  } */

// for (let i = 0; i < value.length; i++) {
//   const element = value[i].textContent;
//   console.log('🚀 ~ element:', element);
// }

// value = [...value];

// value = Array.from(value);

/* console.log('after', Array.isArray(value));
value.forEach((element) => {
  console.log('🚀 ~ element:', element.textContent);
});
 */

const API = `https://fakestoreapi.com/products`;

async function apiCall() {
  let res = await fetch(API);
  let data = await res.json();
  render(data);
}

/* 
// rating
title
price
image
id
description
category


*/

const render = (value) => {
  console.log('🚀 ~ value:', value);
  const mainValue = document.getElementById('all_products');

  value.forEach((element) => {
    const CardDiv = document.createElement('div');
    const id = document.createElement('h2');

    const image = document.createElement('img');

    const price = document.createElement('h3');

    const description = document.createElement('h4');

    const category = document.createElement('h5');

    const title = document.createElement('h5');

    id.innerText = element.id;

    image.src = element.image;
    image.alt = element.category;

    price.textContent = `₹ ${Math.round(element.price) * 94}`;

    title.textContent = element.title;

    description.textContent = element.description;

    category.textContent = element.category;

    CardDiv.className = 'card_div';

    CardDiv.append(id, image, price, title, description, category);

    mainValue.append(CardDiv);
  });
};
