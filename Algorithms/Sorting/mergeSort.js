function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  let length = array.length;
  let left = array.splice(0, Math.floor(length / 2));
  let right = array;
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let newArray = [];
  while (left.length !== 0 && right.length !== 0) {
    if (left[0] < right[0]) {
      newArray.push(left.shift());
    } else {
      newArray.push(right.shift());
    }
  }
  if (left.length) {
    newArray.push(...left);
  } else {
    newArray.push(...right);
  }
  return newArray;
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const answer = mergeSort(numbers);
console.log(answer);
