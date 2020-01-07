/* The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ? */

const primeFinder = require('../utility/primeFinder')

const highPrimeFactorFinder = (number) => {
    return primeFactorFinder(number).sort(function(a, b) {
      return b - a;
    })[0];
  }


const primeFactorFinder = (number) => {
  let primeArr = primeFinder(number);
  return primeArr.filter(n => number%n ===0);    

}



module.exports = { highPrimeFactorFinder }