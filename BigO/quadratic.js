// O(n^2): Quadratic Time
function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let n = i + 1; n < array.length; n++) {
      console.log(`${array[i]}, ${array[n]}`);
    }
  }
}
