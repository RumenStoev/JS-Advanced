
class List {
    constructor() {
        this.container = [];
        this.size = 0;
    }
   sortByAscending = () => this.container.sort((a,b) => a - b)
   updateSize = () => this.size = this.container.length

   add(element) {
    this.container.push(element)
    this.sortByAscending()
    this.updateSize()
    
   }
   remove(index) {
    (this.container[index] !== undefined) ? this.container.splice(index,1) : false;
    this.sortByAscending()
    this.updateSize()
    
    
   }
   get(index) {
    return (this.container[index] !== undefined) ? this.container[index] : false;
   }

}


let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.size)
console.log(list.get(1)); 
list.remove(1);
console.log(list.size)

console.log(list.get(1));


=> 3
   6
   2
   7
