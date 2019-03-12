function reverse(str) {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'that is not good';
  }
  let length = str.length;
  let backwards = [];

  for (let i = length - 1; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join('');
}

function reverse2(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

const reverse3 = str => [...str].reverse().join('');
