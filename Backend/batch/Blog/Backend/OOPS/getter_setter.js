const obj = {
  f_name: 'mehfooz',
  l_name: 'khan',

  get fullName() {
    return this.f_name + ' ' + this.l_name;
  },

  set fullName(value) {
    const [f_name, l_name] = value.split(' ');
    this.f_name = f_name || '';
    this.l_name = l_name || '';
  },
};

obj.fullName = 'hello khan ';
console.log(`🚀 ~ obj:`, obj.fullName);
