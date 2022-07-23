function solve(arr) {
    let result =  arr.flat().sort((a,b) => a -b)
    return result[result.length-1]

}


console.log(
    solve([[3, 5, 7, 12],
        [-1, 4, 33,
            2],
        [8, 3, 0, 4]])
)


->33


function solve(arr) {
   return Math.max(...arr.reduce((a,b) => a.concat(b),[]))

}


console.log(
    solve([[3, 5, 7, 12],
        [-1, 4, 33,
            2],
        [8, 3, 0, 4]])
)

->33
