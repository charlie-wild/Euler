/* The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ? */


const highPrimeFactorFinder = (number) => {
    return primeFactorFinder(number).sort(function(a, b) {
      return b - a;
    })[0];
  }


const primeFactorFinder = (number) => {
  let primeArr = primeFinder(number);
  return primeArr.filter(n => number%n ===0);    

}


const primeFinder = (max) => {
        const sieve = new Array(max).fill(true);

      // Iterate from 2 until square root of max
      for (let i = 2; i < Math.sqrt(max); i++) {
        // If the number is labelled a prime then we can start at i^2 and mark every multiple of i
        // from there as NOT a prime
        if (sieve[i]) {
          for (let j = Math.pow(i, 2); j < max; j += i) {
            sieve[j] = false;
          }
        }
      }

      // Now we can reduce our sieve to only the Prime indexes that are true
      return sieve.reduce((primes, isPrime, i) => {
        if (isPrime && i > 1) {
          primes.push(i);
        }

        return primes;
      }, []);
    };


module.exports = { highPrimeFactorFinder }