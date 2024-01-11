// Write a program to determine if a string contains only
//unique characters.Return true if it does and false
//otherwise.

// The string may contain any of the 128 ASCII characters.
//Characters are case -sensitive, e.g. 'a' and 'A' are
//considered different characters.

function hasUniqueChars(str) {
  return str
    .split("")
    .map((el, ind) => (el = str.charCodeAt(ind)))
    .sort((a, b) => a - b)
    .some((_, i, arr) => arr[i] === arr[i + 1])
    ? false
    : true;
}
