const { expect } = require("chai");
const { highPrimeFactorFinder } = require('../primeFactoFinder');

describe('highPrimeFactorFinder()', () => {
  it('returns 5 when the input is 25', () => {
    expect(highPrimeFactorFinder(25)).to.equal(5);
  });
  it('returns 23 when the input is 345', () => {
    expect(highPrimeFactorFinder(345)).to.equal(23);
  });
  it("returns 6857 when the input is 600851475143", () => {
    expect(highPrimeFactorFinder(600851475143)).to.equal(6857);
  });
})
