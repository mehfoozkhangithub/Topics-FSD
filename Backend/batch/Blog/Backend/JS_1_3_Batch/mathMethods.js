/* let array = [10, 20, 30];
let array_1 = [40, 50, 60];

// array.push(40);
array.push(50, 60, 80);
console.log(`🚀 ~ array:`, array);

Array.prototype.apnaPush = function (...value) {
  let index = this.length;
  for (let i = 0; i < value.length; i++) {
    this[index] = value[i];
    index++;
  }
};

array_1.apnaPush(70, 80, 90);

console.log(`🚀 ~ array_1:outter`, array_1, array_1.length);
 */
// spread operator
// rest operator

let array_2 = [10, 20, 30];

Array.prototype.apnaPop = function () {
  delete this[this.length - 1];
  this.length = this.length - 1;
};

array_2.apnaPop();
console.log(`🚀 ~ array_2:`, array_2);

/* 

    HOME WORK
            - apnaFilter
            - apnaMap
            - apnaReduce    

*/
