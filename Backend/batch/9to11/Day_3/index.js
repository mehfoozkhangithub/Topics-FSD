const http = require('http');

let value = 'hello';
let value_1 = 'hello';
let value_2 = `hello`;

const server = http.createServer((req, res) => {
  if (req.url === '/note') {
    res.end('note has been created...');
  } else if (req.url === '/book') {
    res.end('harry potter..');
  } else if (req.url === '/help') {
    res.end('how may i help you..');
  } else {
    res.end('please select any path between [note, book, help]');
  }
});

server.listen(7000, () => {
  console.log(`the Port is running on 7000`);
});
