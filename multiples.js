/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000. */

const findMultiples = (limit) => {
  let total = 0;
  let i = 1;
  while (i < limit) {
    i%3 === 0 || i%5 === 0 ? total+=i : total;
    i++;
  }
  return total;
}

console.log(findMultiples(1000));

module.exports = { findMultiples };