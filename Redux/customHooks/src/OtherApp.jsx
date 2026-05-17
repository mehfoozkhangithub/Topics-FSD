import { useFetch } from './Components/useFetch';
import { useLocalStorage } from './Components/useLocalStorage';
import { useState } from 'react';

export const OtherApp = () => {
  /*  const { ApiValue, isLoading, isError } = useFetch(
    // 'https://reqres.in/api/users?page=2',
    // 'https://fakestoreapi.com/products',
    `http://localhost:8080/profile`,
    {
      headers: {
        'x-api-key': 'reqres_c27db760fb6f4b06a48a548c02bf449f',
      },
    },
  ); */
  // console.log('🚀 ~ ApiValue:', ApiValue?.data);

  // const [data, setData] = useState({
  //   key: '',
  //   initialValue: '',
  // });

  const [state, setState] = useLocalStorage('name', 'hello');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setState();
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setData((prev) => {
  //     return {
  //       ...prev,
  //       [name]: value,
  //     };
  //   });
  // };
  // console.log('🚀 ~ data:', data);

  return (
    <>
      <h1>useFetch Hook</h1>
      {/*  <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your key"
          onChange={handleChange}
          name="key"
        />
        <input
          type="text"
          placeholder="enter your initialValue"
          onChange={handleChange}
          name="initialValue"
        />
        <button type="submit">submit</button>
      </form> */}
    </>
  );
};
