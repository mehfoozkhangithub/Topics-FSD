//  async / sync

const fs = require('fs'); // import C-JS

// crud

// read

/* let pathValue = fs.readFileSync('../Day_1/Cal.js', 'utf-8');
console.log('🚀 ~ pathValue:', pathValue); */

fs.readFile('../Day_1/Cal.js', 'utf-8', (err, data) => {
  if (err) {
    console.log('🚀 ~ err:', err);
  }
  console.log('read data function', data);
});

//  create

fs.writeFileSync('./note.txt', 'hello');

fs.writeFile('./note.txt', '\n mehfooz khan', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log('write data function', data);
});

// update [append]

//asyc
fs.appendFile('./note.txt', '\nhello world', (err) => {
  if (err) {
    console.log(err);
  }
});

// delete file

// fs.rm('./note.txt');

// hw -> remove the value in file single value.
