const { expect } = require("chai");
const { fibonacciSumEquals } = require("../fibonacci")

describe.only('fibonacciSumEquals()', () => {
  it('returns 10 when passed 5', () => {
    expect(fibonacciSumEquals(8)).to.equal(10);
  });
  it('returns 4613732 when passed 4000000', () => {
    expect(fibonacciSumEquals(4000000)).to.equal(4613732);
  });
});