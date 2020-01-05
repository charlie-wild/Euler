const { expect } = require("chai");
const { findMultiples } = require('../multiples');


describe('findMultiples()', () => {
  it('returns 23 when the input is 10', () => {
    expect(findMultiples(10)).to.equal(23);
  });
  it('returns the correct result when the input is 1000', () => {
    expect(findMultiples(1000)).to.equal(233168);
  })
});