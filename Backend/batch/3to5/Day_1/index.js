const sum = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};
const mul = (a, b) => {
  return a * b;
};

const div = (a, b) => {
  return a / b;
};

const expo = (a, b) => {
  return a ** b;
};

module.exports = { sum, sub, expo, div, mul };

/* 

backend -> common js 

es6 -> import {fileName} from "path" || export {fileName||componentName}


commonJS -> const sum= required("path") || module.exports default fileName

*/
