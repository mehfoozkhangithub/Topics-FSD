const express = require('express');
require('dotenv').config();

const { Connection, userModel } = require('./db');

const PORT = process.env.port;

const app = express();

app.use(express.json());

// read
app.get('/user', async (req, res) => {
  const userData = await userModel.find();
  res.send(userData);
});

// create
app.post('/userCreate', async (req, res) => {
  const userData = await userModel.insertOne(req.body);

  // await userData.save();
  res.send({ msg: 'done', data: userData });
});

app.listen(PORT, async () => {
  try {
    await Connection;
    console.log('DB is Connected✅');
  } catch (err) {
    console.log(err);
    console.log('DB is Disconnected ❌');
  } finally {
    console.log(`server is running on ${PORT}`);
  }
});
