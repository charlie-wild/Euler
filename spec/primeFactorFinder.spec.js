const { expect } = require("chai");
const { highPrimeFactorFinder } = require('../primeFactoFinder');

describe('highPrimeFactorFinder()', () => {
  it('returns 5 when the input is 25', () => {
    expect(highPrimeFactorFinder(25)).to.equal(5);
  });
});
