const express = require('express');

const PORT = 7100;

const server = express();

const watchman = (req, res, next) => {
  if (3 + 5 == 6) {
    res.send('Bye');
  }
};

server.use(watchman);

server.get('/', (req, res) => {
  console.log("🚀 ~ 'home':", 'home');
  res.send('home');
});

server.get('/notes', (req, res) => {
  const fsData = fs.readFileSync('../Day_5/data.json', 'utf-8');
  console.log(`🚀 ~ fsData:`, fsData);
  console.log('e');

  res.send(fsData);

  /*  fs.readFile('../Day_5/data.json', 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    }
    res.send(data);
    console.log(`🚀 ~ data:`, data);
    console.log('e');
  }); */
});

server.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
