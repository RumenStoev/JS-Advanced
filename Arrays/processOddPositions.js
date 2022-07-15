
function processOddPositions(arr) {
   return arr.filter((num,index) => index % 2 === 1).map(x => x * 2).reverse().join(" ")
}

console.log(
    processOddPositions([10,15,20,25])
)


-> 50 30
