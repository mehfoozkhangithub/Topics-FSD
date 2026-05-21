let count = 0;

const counterUI = document.getElementById('Counter');

const dec = document.getElementById('dec');

const incFunc = () => {
  count++;
  console.log('🚀 ~ count:', count);
  counterUI.innerHTML = '';
  counterUI.innerHTML = `Counter: <mark>${count}</mark>`;
  //   counterUI.append(`Counter: ${count}`);
  //   console.log('🚀 ~ count:', count);
};

const decFunc = () => {
  count--;
  counterUI.innerHTML = '';
  counterUI.innerHTML = `Counter: <mark>${count}</mark>`;
};
const resFunc = () => {
  count = 0;
  counterUI.innerHTML = '';
  counterUI.innerHTML = `Counter: <mark>${count}</mark>`;
};
