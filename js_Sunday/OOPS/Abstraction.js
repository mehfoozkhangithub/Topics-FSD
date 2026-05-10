// ATM machine

class BANK {
  #amount = 0; // private value
  #pin;
  constructor(personName, pin) {
    ((this.name = personName), (this.#pin = +pin));
  }

  cashDeposit(amount) {
    this.#amount += amount;
    return ` this is your amount ${this.#amount}`;
  }

  cashWidthraw(ammount, pin) {
    pin = +pin;
    // console.log(`🚀 ~ pin:`, pin, typeof pin, this.#pin, typeof this.#pin);
    if (pin === this.#pin) {
      if (ammount <= this.#amount) {
        this.#amount = this.#amount - ammount;
        return `your amound as been deducted ${ammount} & sufficient amount of your account ${this.#amount}`;
      } else {
        return `Insufficent amount, and your current amount will be this ${this.#amount}`;
      }
    } else {
      return `wrong pin please check your pin where u setup ${pin}`;
    }
  }
}

const user_1 = new BANK('mehfooz', 123);
console.log(`🚀 ~ user_1:`, user_1);

let ans = user_1.cashDeposit(2000);
let ans1 = user_1.cashWidthraw(1000, 123);
console.log(`🚀 ~ ans1:`, ans1);
