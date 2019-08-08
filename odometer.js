class Odometer {
  constructor(blockCount, letterCount) {
    this.odometer = new Array(blockCount).fill(0);
    this.maxIndex = letterCount - 1;
    this.letterCount = letterCount;
    this.blockCount = blockCount;
    this.stopCondition = false;
  }

  increment(position = this.odometer.length - 1) {
    if (position < 0) {
      // console.log("STOP HERE!!!");
      this.stopCondition = true;
      return;
    }
    this.odometer[position] += 1;
    if (this.odometer[position] > this.maxIndex) {
      this.odometer[position] = 0;
      this.increment(position - 1);
    }
  }

  reset() {
    this.odometer = new Array(this.blockCount).fill(0);
    this.stopCondition = false;
  }

  // Runs through entire possible cycle
  // calling cb([0,1,2])
  autoIncrementCb(cb) {
    while (!this.stopCondition) {
      cb(this.odometer);
      this.increment();
    }
    this.reset();
  }
}

module.exports = { Odometer };

// const myOdo = new Odometer(4, 6);

// const callBack = arr => {
//   console.log(arr);
// };

// myOdo.autoIncrementCb(callBack);
