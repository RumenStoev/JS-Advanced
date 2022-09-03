class Hex {
    constructor(value) {
        
        this.value = value 
    }

    valueOf() {
        return this.value;
    }

    toString() {
       return "0x" + (this.value).toString(16).toUpperCase()
      
    }

    plus(object) {
       
     let result = this.value + object.value
     
     return new Hex(result)
    } 

    minus(object) {
     this.value = this.value - object.value
     return this
    }

    parse(element) {
        const hexToDecimal = hex => parseInt(hex, 16);
        return hexToDecimal(element)
    }
}

