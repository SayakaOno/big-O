function repeatedNumber(array) {
  let hashTable = new Map();
  for (let i of array) {
    if (hashTable[i]) {
      return i;
    }
    hashTable[i] = true;
  }
  return undefined;
}

function firstRecurringCharacter(input) {
  let map = {};
  for (let i of input) {
    if (map[i]) {
      return i;
    }
    map[i] = true;
  }
  return undefined;
}

console.log(firstRecurringCharacter([1, 0, 0, 6, 4, 5, 1]));
