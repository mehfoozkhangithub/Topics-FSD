const express = require('express');

const fs = require('fs');

let PORT = 7000;

let app = express();

// middleware [json, text];

app.use(express.json());
// app.use(express.text());

// read
app.get('/', (req, res) => {
  res.send('hello');
});

// create
app.post('/create_note', (req, res) => {
  const data = req.body;
  console.log(`🚀 ~ data:`, data);
  if (data) {
    console.log('invoked');
    fs.writeFile('./data.json', JSON.stringify(data), (err) => {
      if (err) {
        console.log(err);
      }
    });
    res.send(
      `done the file hase been create by this value -> ${JSON.stringify(data)}`,
    );
  }
  res.send('error found', data);
});

// update

// delete

app.listen(PORT, '127.0.0.1', () => {
  console.log(`port is running on ${PORT}`);
});
