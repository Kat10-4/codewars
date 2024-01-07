//Convert number to reversed array of digits

let number = 350231;

function digitize(n) {
  let arr = String(n).split("").map(Number).reverse();
  return arr;
}

console.log(digitize(number));
