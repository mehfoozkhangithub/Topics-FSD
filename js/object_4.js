const object = {
  name: 'mehfooz',
  age: 999,
};

// crud

// create

object.hobbie = ['coc', 'cs', 'pub-g'];
// console.log('🚀 ~ object: befor update ', object);

// update

object.hobbie = false;

// console.log('🚀 ~ object: after update', object);
// delete

// delete object.hobbie;

// read

// console.log('🚀 ~ object: delete', object.name);
// console.log('🚀 ~ object: of notation', object['age']);
// console.log('hobbie', object.hobbie);
for (const key in object) {
  // code
  //   console.log(`this is key = ${key} ||  values --> ${object[key]}`);
}

// console.log('🚀 ~ object.length:', object.length); // undefined
// for(let i=0;i<object.length;i++){

// }

let arr = ['1', 2, 3];

for (let ans of arr) {
  //   console.log(ans);
}

// task

const obj = {
  name: 'xyz',
  age: 1111,
  married: false,
  hobbie: ['coc', 'cs', 'pub-g'],
  place: {
    India: 'Taj mahal',
    USA: 'statue of liberty',
    UAE: 'burj khalifa',
  },
  passport: function () {
    let status = true;
    return status;
  },
};

for (const key in obj) {
  if (typeof obj[key] === 'function') {
    console.log('🚀 ~ obj[key]():function', obj[key]());
  } else if (Array.isArray(obj[key])) {
    for (const value of obj[key]) {
      console.log('🚀 ~ value: array->', value);
    }
  } else if (typeof obj[key] === 'object') {
    for (const val in obj[key]) {
      console.log('🚀 ~ val:object ', val);
    }
  } else {
    console.log('🚀 ~ obj[key]:rest all', obj[key]);
  }
}
