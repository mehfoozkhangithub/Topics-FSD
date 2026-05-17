let object = {
  name: 'mehfooz',
  age: 20,
  married: false,
  hobbies: ['coc', 'gOw', 'pub-g'],
  city: {
    live_IN: 'Mumbai',
    plan_TO: 'UK',
    dream_TO: 'Switzerland',
  },
  myPassport: function () {
    let validity = 'Active';
    return validity;
  },
};

for (let xyz in object) {
  if (typeof object[xyz] === 'function') {
    console.log(object[xyz]());
  } else if (typeof object[xyz] === 'object') {
    for (let key in object[xyz]) {
      console.log(object[xyz][key]);
    }
  } else {
    console.log(object[xyz]);
  }
}
