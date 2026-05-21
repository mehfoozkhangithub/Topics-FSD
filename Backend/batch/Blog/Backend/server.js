import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
import { Connected } from './config/db';
import { blogRoutes } from './Routes/Blog.routes';
import { userRoutes } from './Routes/User.routes';

const server = express();

server.get('/', (req, res) => {
  res.send('home');
});

server.listen(process.env.Port, async () => {
  try {
    await Connected;
    console.log('DB Connected successfully✅');
  } catch (error) {
    console.log(`🚀 ~ error:`, error);
    console.log('DB Crashed! something went wrong ❌');
  } finally {
    console.log(`port is running on ${process.env.Port}`);
  }
});
