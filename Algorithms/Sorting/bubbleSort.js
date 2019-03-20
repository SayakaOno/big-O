function bubbleSort(array) {
  let length = array.length;
  while (length > 1) {
    for (let i = 0; i < length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
    length--;
  }
}
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

bubbleSort(numbers);
console.log(numbers);
