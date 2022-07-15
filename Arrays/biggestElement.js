function biggestElement(matrix) {
   let result = matrix.map(arr => Math.max(...arr))
   return Math.max(...result)
}

console.log(
    biggestElement([[20, 50, 10],
    [8, 33, 145]])
)

-> 145
