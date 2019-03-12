function hasPairWithSum1(array, sum) {
  for (let j = 0; j < array.length - 1; j++) {
    for (let i = j + 1; i < array.length; i++) {
      if (array[j] + array[i] === sum) {
        return true;
      }
    }
  }
  return false;
}

function hasPairWithSum2(array, sum) {
  let mySet = new Set();
  for (let elem of array) {
    if (mySet.has(elem)) {
      return true;
    }
    mySet.add(sum - elem);
  }
  return false;
}
