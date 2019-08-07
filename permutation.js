const permutate = (arr, current = [], solution = []) => {
  if (arr.length === 0) {
    solution.push(current);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    const newArr = [...arr.slice(0, i), ...arr.slice(i + 1)];
    let newCurrent;
    current.length
      ? (newCurrent = [...current, arr[i]])
      : (newCurrent = [arr[i]]);
    permutate(newArr, newCurrent, solution);
  }

  return solution;
};

module.exports = { permutate };
