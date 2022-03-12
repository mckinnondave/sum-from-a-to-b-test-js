
function sum(fromN, toN) {
  let result = fromN
  if (fromN === toN) {
    return result
  } else {
    return result + sum(result + 1, toN)
  }
}
console.log(sum(3,7));
module.exports = sum;
