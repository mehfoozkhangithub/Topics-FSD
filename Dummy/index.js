import axios from './node_modules/axios/index';

axios
  .get('https://fakestoreapi.com/products')
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
