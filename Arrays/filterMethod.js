// function solve(arr) {
//  let result = new Array(Math.floor(arr.length/2));
//
//  for(let i = 0; i< arr.length; i++) {
//      result[i / 2] = arr[i]
//  }
//  return result.join(" ")
//
//
// }
function solve(arr) {
    return arr.filter((_,i) =>  i % 2 === 0).join(" ")
}

console.log(
    solve(["20","30","40"])
)

-> 20 40
