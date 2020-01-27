const {expect} = require("chai"); // Object
const {solve,app,sum} = require("./app")


describe("Test",() => {
    it("Should be return String",function () {
        expect(typeof sum).to.equal("function")
    });
    it('should be return String', function () {
        let str = "Hello World!";
        expect(solve()).to.be.equal(str)
    });
    it('should be return number ', function () {
        expect(app()).to.be.equal(10)
    });
})
