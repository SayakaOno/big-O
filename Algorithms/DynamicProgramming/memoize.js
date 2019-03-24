let cache = {};
function memoizedAddTo80(n) {
  if (!(n in cache)) {
    cache[n] = n + 80;
  }
  return cache[n];
}
console.log(memoizedAddTo80(7));

// USE CLOSURE
function memoizedAddTo80C() {
  let cache = {};
  return function(n) {
    if (!(n in cache)) {
      cache[n] = n + 80;
    }
    return cache[n];
  };
}
const memoized = memoizedAddTo80C();
console.log(memoized(7));
