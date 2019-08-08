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
  const result = new Set([]);
  const blockCount = input.length;
  const letterCount = input[0].length;
  const dict = dictFromInput(arr);
  const blockOdometer = new Odometer(blockCount, letterCount);
  const blockOrders = permutate(arr);

  // Loop over each block combo eventually
  for (let i = 0; i < 1; i++) {
    const currentBlockOrder = blockOrders[i];
    console.log("CURRENT BLOCK ORDER = ", currentBlockOrder);
    // CURRENT BLOCK ORDER =  [
    //   [ 'O', 'O', 'N', 'O', 'S', 'O' ],
    //   [ 'E', 'E', 'W', '', '', '' ],
    //   [ 'H', 'L', 'S', 'J', 'U', 'B' ],
    //   [ 'M', 'V', 'O', 'Y', 'A', 'O' ]
    // ]

    // Reset blockOdometer
    // While loop over block odometer which gives us
    // an index set to test on the current block order
    // read odometer
    // set string to ""
    // for loop over current block order appending string with
    // matching item from the odometer index

    // check if the string is in the dictionary
    // if so add to result
  }
  return result;
};

findAllWords(input);
