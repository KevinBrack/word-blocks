const input = [
  ["H", "L", "S", "J", "U", "B"],
  ["O", "O", "N", "O", "S", "O"],
  ["M", "V", "O", "Y", "A", "O"],
  ["E", "E", "W", "", "", ""]
];

// Generates a hash table with only the length
// of words that can be created with the given
// blocks
const { dictFromInput } = require("./dictionary");

// function to return all possible combinations
// of a given array
const { permutate } = require("./permutation");

const { Odometer } = require("./odometer");

// MAIN
const findAllWords = arr => {
  const result = [];
  const blockCount = input.length;
  const letterCount = input[0].length;
  const dict = dictFromInput(arr);
  const blockOdometer = new Odometer(blockCount, letterCount);
  const blockOrders = permutate(arr);

  // Loop over each block combo eventually
  for (let i = 0; i < blockOrders.length; i++) {
    const currentBlockOrder = blockOrders[i];

    // Reset blockOdometer
    blockOdometer.reset();
    // While loop over block odometer which gives us
    // an index set to test on the current block order
    while (!blockOdometer.stopCondition) {
      // read odometer
      const currentOrder = [...blockOdometer.odometer];
      // set string to ""
      let string = "";
      // for loop over current block order appending string with
      // matching item from the odometer index
      for (let j = 0; j < currentOrder.length; j++) {
        string += currentBlockOrder[j][currentOrder[j]];
      }
      // Dictionary is lowercase so matching string
      string = string.toLowerCase();

      // console.log("STRING: ", string);
      // check if the string is in the dictionary
      // if so add to result
      if (dict[string] !== undefined) {
        result.push(string);
        delete dict[string];
      }

      // increment odometer
      blockOdometer.increment();
    }
  }
  console.log("RESULT LENGTH: ", result.length);
  return result.sort();
};

console.log(findAllWords(input));
