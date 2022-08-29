const { expect } = require('chai')
const rgbToHexColor = require('./rgb')


describe('RGB functionality',() => {
  it(`check valid input (66, 135, 245) to be equal #4287F5`, () => {
    expect(rgbToHexColor(66, 135, 245)).to.equals('#4287F5')
})
  it(`invalid red input param`,() => {
    expect(rgbToHexColor(-1,0,0)).to.be.equal(undefined)
  })
  it(`invalid blue input param`,() => {
     expect(rgbToHexColor(0,-1,0)).to.be.equal(undefined)
  })
  it(`invalid green input param`,() => {
     expect(rgbToHexColor(0,0,257)).to.be.equal(undefined)
  })
  it(`more than 3  inputs params -> (0, 0, 0, 0) -> undefined`, () => {
    expect(rgbToHexColor(0, 0, 0, 0)).to.equals('#000000')
})

  it(`check valid -> '#FF9EAA`,() => {
   expect(rgbToHexColor(255,158,170)).to.be.equal('#FF9EAA')
  })
})

