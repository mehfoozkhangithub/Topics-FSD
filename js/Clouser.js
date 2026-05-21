const parentFunc = () => {
  let name = 'mehfooz';

  let childFunc = () => {
    // let name = 'khan';

    let subChildFunc = () => {
      return name;
    };

    return subChildFunc;
  };
  return childFunc;
};

console.log(parentFunc()()());
