function containsCommonItem1(arr1, arr2) {
  for (let elem1 of arr1) {
    for (let elem2 of arr2) {
      if (elem1 === elem2) {
        return true;
      }
    }
  }
  return false;
}

function containsCommonItem2(arr1, arr2) {
  let map = {};
  for (let elem of arr1) {
    if (!map[elem]) {
      map[elem] = true;
    }
  }

  for (let elem of arr2) {
    if (map[elem]) {
      return true;
    }
  }
  return false;
}

function containsCommonItem3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}
