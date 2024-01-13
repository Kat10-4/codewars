// Write a function helpZoom() that takes an array of integers containing 0 and 1 as input and returns “Yes” or “No” depending on whether the given password is symmetric or not.
// Example
// helpZoom({1,1,0,0,0,0,0,1,1}) => "Yes"
// Since the given password is symmetric along centre point, so the answer is Yes. For ease of understanding, the above array can be represented as follows:
// 1 1 0
// 0 0 0
// 0 1 1
// helpZoom({1,1,0,0,1,0,0,1}) => "No"
// Notice that the given array cannot be represented as a n x n matrix, so it's invalid.
// helpZoom({1,0,1,1,0,0,0,0,0}) => "No"
// Since the given password isn't symmetric along centre point, so the answer is No.

function helpZoom(key) {
  return key.some((el) => el !== key.pop()) ? "No" : "Yes";
}
