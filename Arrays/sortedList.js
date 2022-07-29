function createSortedList() {
   
  let list = []
    
  let sortedElements = () => list.sort((a,b) => a - b);

  let isValid = (param) => (param >= 0 && param < list.length && !isNaN(param)) ? true  : false;
   
  let isError = () => { throw new Error("Has an Invalid Data")}

  let add = num =>  list.push(num)

  let remove = index => (isValid(index)) ? list.splice(index,1) : isError();

  let get = index => (isValid(index)) ? list[index] : isError();
  
  return {
    add: number => sortedElements(add(number)),
    remove: number => sortedElements(remove(number)),
    get: number => get(number),
    get size() { return list.length}
 
  }

}

=> let list = createSortedList();
   list.add(5);
   list.add(6);
   list.add(7);
   console.log(list.get(1)); 
   list.remove(1);
   console.log(list.get(1));
