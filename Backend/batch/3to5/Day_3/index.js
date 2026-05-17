const http = require('http');

const server = http.createServer((req, res) => {
  // res.write('hello server....1');
  res.end('hello server');
  // res.write('\nhello server....2');
  // res.end('\nexit');
});

server.listen(8000, () => {
  console.log('server is live');
});
