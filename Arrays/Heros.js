function solve() {
  
  let create = {
    mage: function(mag) {
      return {
        name:mag,
        health:100,
        mana:100,
        cast:function (magic)  {
        
          this.mana--  
        console.log(`${this.name} cast ${magic}`)
      }
    }
    },
    fighter: function(name) {
      return  {
        name: name,
        health:100,
        stamina:100,
        fight:function() {
         this.stamina--
         console.log(`${this.name} slashes at the foe!`)
      }
      }
    }
  }

  return create

}





let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);

Scorcher cast fireball
Scorcher cast thunder
Scorcher cast light
Scorcher 2 slashes at the foe!
99
97
