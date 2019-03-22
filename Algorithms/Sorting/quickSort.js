function quickSort(array, left, right) {
  let partitionIndex;
  let pivot;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }

  return array;
}

function partition(array, pivot, left, right) {
  let partitionIndex = left;
  let pivotValue = array[pivot];
  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, partitionIndex, right);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex) {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

let array = [8, 99, 44, 88, 2, 1, 5, 63, 87, 283, 4, 0];
quickSort(array, 0, array.length - 1);
console.log(array);
