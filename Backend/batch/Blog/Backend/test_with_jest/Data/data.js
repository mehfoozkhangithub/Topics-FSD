function dataMap(params) {
  let value = params.filter((el) => {
    return el.name === 'mehfooz';
  });
  return value;
}

module.exports = { dataMap };
