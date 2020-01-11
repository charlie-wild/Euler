// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20 ?

const {primeFinder} = require('../utility/primeFinder');

// use primeFinder to get an array of all the necessary divisors


const smallestMultiplier = () => {
  const multiples = primeFinder(20); //array

  let answer = 0;
  let found = false;
 
  for (let i = 20; i < 10000; i++) {   
    for (let j = 0; j < multiples.length; j++) {
      if (i%multiples[j]===0) {
        found = true;
      } else {
        found = false;
      }
    }
    if (found) {
      answer = i;
      break;
    }
  }
  return answer;
}

console.log(smallestMultiplier());



