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

// MAIN
const findAllWords = arr => {
  const blockNumber = input.length();
  const letterLength = input[0].length;
  const dict = dictFromInput(arr);
  const blockOrders = permutate(arr);
  // console.log(blockOrders[23]);
  console.log("FIRST CHAR", blockOrders[0][0][0]);
  // Permutate character indexes
  // for (let i = 0; i < blockOrders[0].length; i++) {
  //   console.log(blockOrders[0][i]);
  //   for (let j = 0; j < blockOrders[0][i].length; j++) {
  //     console.log(blockOrders[0][i][j]);
  //   }
  // }
};

findAllWords(input);
