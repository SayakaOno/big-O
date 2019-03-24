function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// MEMOIZE
function fibonacciMaster() {
  let cache = {};
  return function fib(n) {
    if (n < 2) {
      return n;
    }
    if (!(n in cache)) {
      cache[n] = fib(n - 1) + fib(n - 2);
    }
    return cache[n];
  };
}

let fibonacci1 = fibonacciMaster();
console.log(fibonacci1(35));
