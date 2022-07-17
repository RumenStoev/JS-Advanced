function MagicMatrices(matrix) {
  
    return matrix.reduce((acc,value,index,array) => {
        let sumRows = value.reduce((acc,value,i,arr) => acc + value,0);
        let sumColumns = matrix.reduce((acc,value,ind) => acc + matrix[ind][index],0)
        acc.push(sumRows + sumColumns)
        return acc
    },[]).every((x,i,arr) => x === arr[0])
    
}

console.log(
    MagicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
    )
)

console.log(
    MagicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
    )
)

=> false
   true
