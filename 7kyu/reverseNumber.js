// Given a number, write a function to output its reverse
//digits. (e.g.given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative
//number should still be negative when reversed.
function reverseNumber(n) {
  return n === 0
    ? 0
    : Array.from(String(Math.abs(n)))
        .reverse()
        .reduce((prev, cur) => Number(prev + cur), 0) * Math.sign(n);
}
