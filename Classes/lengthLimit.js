class Stringer {
    constructor(string,length) {
        this.innerString = string;
        this.innerLength = length
    }


    toString() {
        if(this.innerLength === 0) return "..."

        if(this.innerString.length > this.innerLength) {
            return this.innerString.slice(0,this.innerLength)+ "..."
        }
       return this.innerString
    }
    increase(value) {
        this.innerLength += value;
    }

    decrease(value) {
        this.innerLength -= value;
        if(this.innerLength < 0) this.innerLength = 0
    }
}

let test = new Stringer("Viktor",6);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...


=> Viktor
   Vik...
