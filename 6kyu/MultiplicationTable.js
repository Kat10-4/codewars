// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function (size) {
  let arr = [];
  arr.length = size;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = [];
    for (let j = 0; j < arr.length; j++) {
      arr[i].push((i + 1) * (j + 1));
    }
  }
  return arr;
};

console.log(multiplicationTable(3));
