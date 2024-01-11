// Complete the function that takes two numbers as input,
//num and nth and return the nth digit of num(counting from
//right to left).

// Note
// If num is negative, ignore its sign and treat it as a
//positive value
// If nth is not positive, return -1
// Keep in mind that 42 = 00042. This means that findDigit
//(42, 5) would return 0

var findDigit = function (num, nth) {
  let arr = Array.from(String(Math.abs(num)))
    .reverse()
    .map((el) => Number(el));
  return nth < 1 ? -1 : arr.length < nth ? 0 : arr[nth - 1];
};

console.log(findDigit(5673, 4));
console.log(findDigit(129, 2));
console.log(findDigit(-456, 4));
console.log(findDigit(65, 0));
