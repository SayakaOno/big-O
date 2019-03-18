let counter = 0;
function inception() {
  if (counter > 3) {
    return 'done';
  }
  counter++;
  return inception();
}

//STEPS
// 1. Identify the base case
// 2. Identify the recursive case
// 3. Get closer and closer and return when neede. Usually you have 2 returns
