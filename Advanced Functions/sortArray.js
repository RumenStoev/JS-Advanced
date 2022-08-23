function sortArray(arr,command) {
  let sort = fn => arr.sort(fn) 
    return (command === "asc") ? sort((a,b) => a -b) : sort((a,b) => b - a)
 }


console.log(
  sortArray([14, 7, 17, 6, 8], 'desc')
)

=> [ 17, 14, 8, 7, 6 ] 'desc'
=> [14, 7, 17, 6, 8], 'asc'
