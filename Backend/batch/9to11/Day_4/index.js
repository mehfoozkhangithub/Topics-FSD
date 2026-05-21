const http = require('http');

const fs = require('fs');

const { Buffer } = require('node:buffer');

const server = http.createServer((req, res) => {
  if (req.url === '/notes') {
    // eventEmmiter

    req.on('data', (chunk) => {
      const buf = Buffer.from(chunk);

      fs.writeFile('note.txt', buf, (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }
});

server.listen(7080, () => {
  console.log('server is running ✅');
});
