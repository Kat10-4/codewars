// Given a string, remove any characters that are unique from the string.

// Example:

// input: "abccdefee"

// output: "cceee"

function onlyDuplicates(str) {
  let duplic = "";
  for (el of str) {
    let regex = new RegExp(`${el}`, `g`);
    if (str.match(regex).length > 1) {
      duplic += el;
    }
  }
  return duplic;
}

console.log(onlyDuplicates("abccdefee"));
