
function solution() {
    class Balloon {
        constructor(color, hasWeight) {
            this.color = color;
            this.hasWeight = hasWeight;
        }
    }
    class PartyBalloon extends Balloon {
        constructor(color, hasWeight, ribbonColor, ribbonLength) {
            super(color, hasWeight);
            this.ribbonColor = ribbonColor;
            this.ribbonLength = ribbonLength;
            this._ribbon = {
                color: this.ribbonColor,
                length: this.ribbonLength
            }
        }
        get ribbon() {
            return this._ribbon;
        }
    }
    class BirthdayBalloon extends PartyBalloon {
        constructor(color, hasWeight, ribbonColor, ribbonLength, text) {
            super(color, hasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }
        get text(){
            return this._text;
        }
    }
    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    }
}

let classes = solution();
let testBalloon = new classes.Balloon("yellow", 20.5);
let testPartyBalloon = new classes.PartyBalloon("yellow", 20.5, "red", 10.25);
let ribbon = testPartyBalloon.ribbon;
console.log(testBalloon);
console.log(testPartyBalloon);
console.log(ribbon);


let test = new classes.Balloon("Tumno-bqlo", 20.5);


Balloon { color: 'yellow', hasWeight: 20.5 }
PartyBalloon {
  color: 'yellow',
  hasWeight: 20.5,
  ribbonColor: 'red',
  ribbonLength: 10.25,
  _ribbon: { color: 'red', length: 10.25 }
}
{ color: 'red', length: 10.25 }
