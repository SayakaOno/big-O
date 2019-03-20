function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let temp = array[i];
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

selectionSort(numbers);
console.log(numbers);
