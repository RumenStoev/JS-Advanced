class Rat {
    constructor(name,uniteRats = [])  {
      this.name = name;
      this.uniteRats = [];

    }

    getRats() {
     return [...this.uniteRats] //return array from uniteRats;
    }

    unite(otherRat) {
        if(otherRat instanceof Rat) {
            this.uniteRats.push(otherRat);
        }
    }
    toString() {
        return `${this.name}\n${this.uniteRats.map(r => `##${r}`).join("\n")}`
    }

}
let firstRat = new Rat("Peter");
console.log(firstRat.toString()); // Peter
console.log(firstRat.getRats()); // []
firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
console.log(firstRat.getRats());
// [ Rat { name: &#39;George&#39;, unitedRats: [] },
// Rat { name: &#39;Alex&#39;, unitedRats: [] } ]
console.log(firstRat.toString());
// Peter
// ##George
// ##Alex



->Peter

[]
[
  Rat { name: 'George', uniteRats: [] },
  Rat { name: 'Alex', uniteRats: [] }
]
Peter
##George

##Alex
