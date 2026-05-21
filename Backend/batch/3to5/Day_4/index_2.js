import http from 'http';

import fs from 'fs';

const PORT = 7090;

const server = http.createServer((req, res) => {
  // only with this eventEmmiter:-

  let chunks = '';
  if (req.url === '/notes') {
    req.on('data', (chunk) => {
      chunks += chunk;
    });
    req.on('end', () => {
      console.log(chunks);
    });
    res.end('data found✅');
  } else if (req.url === '/movie') {
    let movieStream = fs.createReadStream('../Day_1/notes.txt', 'utf-8');
    console.log(`🚀 ~ movieStream:`, movieStream);
    movieStream.pipe(res);
  } else {
    res.end('Invlaid parameter please check the url⛔');
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Port has been start on ${PORT}`);
});
