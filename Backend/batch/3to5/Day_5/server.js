const express = require('express');

const fs = require('fs');

// creation state of server
const app = express();

// middleware

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello');
});

//create

app.post('/create_note', (req, res) => {
  const data = req.body;
  console.log(`🚀 ~ data:`, data);
  if (data) {
    fs.writeFile('./data.json', JSON.stringify(data), (err) => {
      if (err) {
        console.log(err);
      }
      res.send('done');
    });
  }
  res.send('please fill the data in body');
});

// read
app.get('/notes', (req, res) => {
  let data = fs.readFileSync('./data.json', 'utf-8');

  res.send(data);
});

/* 
read
update
delete
*/

app.listen(7000, () => {
  console.log('port in running on 7000');
});
