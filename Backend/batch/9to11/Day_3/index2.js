const http = require('http');
const fs = require('fs');

const PORT = 7080;

const server = http.createServer((req, res) => {
  console.log('🚀 ~ req:', req.url);
  if (req.url === '/notes') {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1><i>hello khan</i></h1>');
  } else if (req.url === '/data') {
    let data = fs.readFileSync('./index.html', { encoding: 'utf-8' });
    res.setHeader('Content-Type', 'text/html');
    res.end(data);
  } else {
    res.end('please select any path between [note, book, help] ');
  }
});

/* 
'0.0.0.0'
'127.0.0.1'

*/

server.listen(PORT, '127.0.0.1', () => {
  console.log(`the Port is running on ${PORT}`);
});

// http://localhost:7080
