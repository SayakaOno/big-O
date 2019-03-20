function reverseString(str) {
  let reversedString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

function reverseStringRecursive(str) {
  if (str === '') {
    return '';
  } else if (str.length === 1) {
    return str;
  }
  return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  // return str[str.length - 1] + reverseStringRecursive(str.slice(0, str.length - 1));
}
