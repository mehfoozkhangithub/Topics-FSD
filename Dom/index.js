function getData() {
  //#  this is "nodeCollection" get output....

  let value = document.body.getElementsByTagName('h1');
  console.log('🚀 ~ value:', value);

  for (let i = 0; i < value.length; i++) {
    console.log(`🚀 ~ value[${i}].innerText:->`, value[i].innerText);
  }

  // ! her we are convert the collection into array structure the find the output with array prototypes...

  // console.log(Array.isArray(value));

  let valueOfArr = Array.from(document.body.getElementsByTagName('h1'));
  // or
  //   let value = [...document.body.getElementsByTagName('h1')];

  // valueOfArr.map((el) => {
  //   console.log(el.innerText);
  // });
}

// getData();

const handleAdd = () => {
  const text = document.getElementById('textValue').value;

  const output = document.getElementsByClassName('outPut')[0];

  output.innerHTML = '';

  const p = document.createElement('p');
  p.style = 'color:red;font-size:400px';

  p.innerText = text;

  // output.innerText = `<p>${text}</p>`;
  // output.textContent = `<p>${text}</p>`;
  // output.innerHTML = `<p>${text}</p>`;
  output.append(p);
};

// joke create

const createJokes = () => {
  const BASE_URL = `https://official-joke-api.appspot.com/random_joke`;

  // api fetching

  fetch(BASE_URL)
    .then((res) => res.json())
    .then((res) => renderUI(res))
    .catch((err) => console.log(err));
};

const renderUI = (value) => {
  console.log('🚀 ~ value:', value);
  const output = document.getElementsByClassName('outPut')[0];

  output.innerHTML = '';

  //create element by js

  const id = document.createElement('h4');
  const punchline = document.createElement('h2');
  const setup = document.createElement('h3');
  const type = document.createElement('h5');

  id.textContent = value.id;
  punchline.innerText = value.punchline;
  setup.textContent = value.setup;
  type.textContent = value.type;

  punchline.style = 'color:tomato;background:#000';

  output.append(id, punchline, setup, type);
};
