// Pair of gloves
// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.
// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.
// Examples:
// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)
// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)

function numberOfPairs(gloves) {
  let pairs = 0;
  let glove = gloves.slice().sort();
  for (let i = 0; i < glove.length; i++) {
    if (glove[i] === glove[i + 1]) {
      pairs++;
      i += 1;
    }
  }
  return pairs;
}
