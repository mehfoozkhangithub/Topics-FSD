// Method Inheritance

class CAR {
  constructor(name, year, brand) {
    ((this.name = name), (this.year = year), (this.brand = brand));
  }
}

class SUV extends CAR {
  constructor(...value) {
    super(...value);
    this.amount = `₹10000000`;
  }
}

class miniSUV extends SUV {
  constructor(...value) {
    super(...value);
    this.warrenty = `20'years`;
  }
}

const c1 = new miniSUV('mehfooz', 2025, 'maruti');
console.log(`🚀 ~ c1:`, c1);
