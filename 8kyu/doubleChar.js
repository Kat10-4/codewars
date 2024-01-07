//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
let str = "Hello World";

function doubleChar(str) {
  let strChecked = "";
  let double = 2;
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    for (let j = double; j > 0; j--) strChecked += arr[i];
  }
  return strChecked;
}
doubleChar(str);
