// Given an array of integers , Find the minimum sum which
//is obtained from summing each Two integers product.

function minSum(arr) {
  arr.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < arr.length / 2; i++) {
    sum += arr[i] * arr[arr.length - i - 1];
  }
  return sum;
}
