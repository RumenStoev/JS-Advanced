function sortBy2Criteria(arr) {
    let result = arr;
  
    let sortByAlphabeticalAndLength = (arr) => arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
  
    return sortByAlphabeticalAndLength(result).join("\n")

}


console.log(
    sortBy2Criteria(['alpha', 
    'beta', 
    'gamma'])
)


console.log(
    sortBy2Criteria(['Isacc', 
    'Theodor', 
    'Jack', 
    'Harrison', 
    'George'])
)

=> beta
   alpha
   gamma

   Jack
   Isacc
   George
   Theodor
   Harrison
