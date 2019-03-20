function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0]);
    } else {
      for (let j = 1; j < i; j++) {
        if (array[j] > array[i]) {
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

insertionSort(numbers);
console.log(numbers);
