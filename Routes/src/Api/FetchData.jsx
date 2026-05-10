import axios from 'axios';

const Base_API = axios.create({
  baseURL: `https://reqres.in/api`,
});

export const getData = async (path) => {
  console.log('🚀 ~ path:', path);
  try {
    const res = await Base_API.get(`${path}`, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres_c27db760fb6f4b06a48a548c02bf449f',
      },
    });
    const data = await res.data;
    console.log('🚀 ~ data:', data);
    return data;
  } catch (error) {
    console.log('🚀 ~ error:', error);
    throw error;
  }
};

//  "x-api-key: reqres_c27db760fb6f4b06a48a548c02bf449f"

// https://reqres.in/api/users?page=2
