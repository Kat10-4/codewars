// Complete the function that takes two integers
//(a, b, where a < b) and return an array of all
//integers between the input parameters, including them.

function between(a, b) {
  // let arr = [a];
  // for (let i = a; i < b; i++) {
  //   arr.push((a += 1));
  // }
  // return arr;
  return Array(b - a + 1)
    .fill(a)
    .map((_, ind) => a + ind);
}
