const fs = require('fs');

// let readFileSync = fs.readFileSync('./even.js', { encoding: 'utf-8' });

// crud

// ! read

// fs.readFile('./even.js', { encoding: 'utf-8' }, (err, data) => {
//   if (data) {
//     // console.log('🚀 ~ data:', data);
//   } else {
//     console.log(err);
//   }
// });

//$ create

// const dataValue = fs.writeFileSync('./note.txt', 'rehamt');

// fs.writeFile('./note.txt', 'hello', (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

//* delete

// fs.rm('./index.html', (err, data) => {
//   if (err) {
//     console.log('🚀 ~ err:', err);
//   } else {
//     console.log(data);
//   }
// });

// edit the text

fs.readFile('./note.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  }
  const value = data.split(' ');
  console.log('🚀 ~ value:', value);

  const updateValue = data.replace(
    value.splice(
      value.findIndex((el) => el === 'world'),
      1,
    ),
  );
  console.log('🚀 ~ updateValue:', updateValue);

  fs.writeFile('./note.txt', updateValue.trim(), (errs, data1) => {
    if (errs) console.log(errs);
    console.log(data1);
  });
});
