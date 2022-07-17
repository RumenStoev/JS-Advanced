function equalNeighbors(matrix) {
  let equals = [];

    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[row].length; column++) {

            if (matrix[row][column + 1] !== undefined) {
                if (matrix[row][column] === matrix[row][column + 1]) equals.push(matrix[row][column])
            }
            if(matrix[row + 1] !== undefined) {
                if(matrix[row][column] === matrix[row + 1][column]) equals.push(matrix[row][column])
            }

        }
    }
    return equals.length
   
}

//Solution 2:
function equalNeighbors(matrix) {
 let equals = []
 
    matrix.map((arr, index) => {
        arr.filter((num, i, array) => {
            if (matrix[index + 1] !== undefined && num === matrix[index + 1][i]) equals.push(num)

            if (array[i + 1] === num) equals.push(num)
        })
    })
    return equals.length
}

console.log(
    equalNeighbors([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']])
)

console.log(
    equalNeighbors([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']])
)

console.log(
    equalNeighbors([["2", "2", "5", "7", "4"],
    ["4", "0", "5", "3", "4"],
    ["2", "5", "5", "4", "2"]])
)


=> 1
=> 2
=> 5
