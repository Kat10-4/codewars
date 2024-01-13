// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

// Only numbers without decimals like 4 or 4.0 can be even.

// The input is a sequence of numbers: integers and/or floats.

function sumEvenNumbers(input) {
  return input.every((el) => el % 1 === 0 && el % 2 === 0)
    ? input
        .filter((el) => el % 1 === 0 && el % 2 === 0)
        .reduce((acc, cur) => acc + cur)
    : null;
}
