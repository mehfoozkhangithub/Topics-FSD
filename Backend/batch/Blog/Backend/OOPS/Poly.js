/* function concat(a, b) {
  return a + b;
}

let ans1 = concat(5, 9); // number, 14
console.log(`🚀 ~ ans1:`, ans1);
let ans2 = concat('mehfooz', ' khan'); // string, mehfooz khan
console.log(`🚀 ~ ans2:`, ans2);

*/

class Car {
  run() {
    return 'car is running';
  }
}

class Truck extends Car {
  run() {
    return 'truck is running';
  }
}

class lamborghini extends Car {
  run() {
    return 'lamborghini is running';
  }
}

const a1 = new Car();
const a2 = new Truck();
const a3 = new lamborghini();

// console.log(`🚀 ~ a1:`, a1.run());
// console.log(`🚀 ~ a2:`, a2.run());
// console.log(`🚀 ~ a3:`, a3.run());

let pdfPrint = {
  print: () => {
    console.log('printing pdf');
  },
};

let docPrint = {
  print: () => {
    console.log('printing doc ');
  },
};

let txtPrint = {
  print: () => {
    console.log('printing txt ');
  },
};

function scan(data) {
  data.print();
}

scan(pdfPrint);
scan(docPrint);
scan(txtPrint);
