/* // Inheritance mehthod

class CAR {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

class SUV extends CAR {
  constructor(...data) {
    console.log(`🚀 ~ data:`, data);
    super(...data);
    this.owner = data[data.length - 1];
  }
}

// miniSUV -> color

// const c1 = new SUV('maruti', 2000, 'mehfooz');
// console.log(`🚀 ~ c1:`, c1);

// Encapsulation

class IG_Account {
  #like;
  constructor(name, like) {
    ((this.name = name), (this.#like = like));
  }

  get privateData() {
    return this.#like;
  }
}

const person_1 = new IG_Account('mehfooz', 200);
// console.log(`🚀 ~ person_1:`, person_1.privateData);

let person = {
  f_name: 'mehfooz',
  l_name: 'khan',

  set setName(VALUE) {
    const [f_name, l_name] = VALUE.split(' ');
    this.f_name = f_name;
    this.l_name = l_name;
  },

  get fullName() {
    return this.f_name + ' ' + this.l_name;
  },
};

person.setName = 'minhaj shaikh';

// console.log(`🚀 ~ person:`, person);
 */
