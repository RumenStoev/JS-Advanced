const { expect } = require('chai')
const sum = require('./sumOfNums')

  describe("Test function Sum",() => {
      it(`check all elements is the array are numbers`,() => {
        expect(sum([1,2,3,4,"a"])).to.be.NaN
      })
      it(`check sum of numbers in the array`,() => {
        expect(sum([1,2,3,4,5])).to.be.equal(15)
      })
      it(`check the function only with one number`,() => {
        expect(sum([1])).to.be.equal(1)
      })
      it('check input of the function with empty Array ', function () {
        expect(sum([])).to.be.equal(0);
    });
  })