class CAR {
  constructor(name, year) {
    ((this.name = name), (this.year = year));
  }
}

class SUV extends CAR {
  constructor(...data) {
    super(...data);
    this.owner = data[2];
  }
}

class miniSUV extends SUV {
  constructor(...data) {
    super(...data);
    this.fitness = data[3];
  }
}

// const car_1 = new CAR('maruti', 2000);
// console.log(`🚀 ~ car_1:`, car_1);

const car_1 = new miniSUV('maruti', 2000, 'mehfooz', `20'years`);
console.log(`🚀 ~ car_1:`, car_1);
