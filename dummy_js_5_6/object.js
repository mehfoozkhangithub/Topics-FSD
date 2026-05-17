// object || document [key value pair]

let obj = {
  name: 'khan',
};
/*
console.log(`🚀 ~ obj:`, obj['name']); // braket notation
*/
// console.log(`🚀 ~ obj:`, obj.name); // dot notation

// create
obj.names = 'mehfooz';
// console.log(`🚀 ~ obj:`, obj.name); // dot notation
// console.log(`🚀 ~ obj:before delete`, obj);

// delete

delete obj.names;

// update

obj.name = 'hello';

// console.log(`🚀 ~ obj:after all `, obj); // dot notation

// task user create

let user = {};

// create user value

user.name = 'Ahmed';
user.married = true;
user.age = Infinity; // 16
user.hobbies = ['gaming', 'coc', 'aspirent_jee'];
user.city = {
  dream: 'UAE',
  live_in: 'MUMBAI',
};
user.valid = function () {
  console.log(`${this.name} have the validity to go...`);
};

console.log('before', user);

user.city.live_in = 'DELHI';

console.log('after', user);

console.log(user.hobbies[2]);
