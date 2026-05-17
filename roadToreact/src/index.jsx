import axios from 'axios';

async function apiCall() {
  let data = await axios.get('https://jsonplaceholder.typicode.com/users');

  let res = await data.data;
  console.log(`🚀 ~ res:`, res);
}

apiCall();
