const { expect } = require("chai")
const solve = require("./solution")


describe("Pascal/Camel Case", () => {
    it("Wrong type = Invalid input",() => {
        expect(solve("Another Case","InvalidInput")).to.be.equal("Error!")
    })
    it("Pascal Case = aa aa =>AaAa",() => {
        expect(solve("Pascal Case","aa aa")).to.be.equal("AaAa");
    })
    it("Camel Case = aa aa => aaAa",() =>{
        expect(solve("Camel Case","aa aa")).to.be.equal("aaAa")
    })
})
