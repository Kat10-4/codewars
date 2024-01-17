// Getting the Minimum Absolute Difference
// Task
// Given an array of integers with at least 2 elements: a1, a2, a3, a4, ... aN
// The absolute difference between two array elements ai and aj, where i != j, is the absolute value of ai - aj.
// Return the minimum absolute difference (MAD) between any two elements in the array.
// Example
// Note
// Note that the same value can appear more than once in the array. In that case, the MAD will be 0.

function gettingMad(array) {
  let minAbs = Number.MAX_SAFE_INTEGER;
  array.sort((a, b) => b - a);
  for (let i = 0; i < array.length - 1; i++) {
    if (minAbs > Math.abs(array[i] - array[i + 1])) {
      minAbs = Math.abs(array[i] - array[i + 1]);
    }
  }
  return minAbs;
}
