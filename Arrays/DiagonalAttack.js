function diagonalAttack(arr) {
    let matrix = arr.map(str => str.split(" ").map(Number))
    let checkEqualDiagonals = false;
    let sumDiagonals = 0;
    
    let findSumDiagonals = (matrix) => matrix.reduce((acc, value, index) => {
        acc[0] += value[index]
        acc[1] += value[value.length - index - 1]
        return acc
    }, [0, 0]);

    checkEqualDiagonals = findSumDiagonals(matrix).every((num, i, arr) => (num === arr[0]))
    sumDiagonals = findSumDiagonals(matrix)[0];

    if (checkEqualDiagonals === true) {
        matrix = matrix.map((arr, row) => {
            return arr = arr.map((num, i) => (row !== i && i !== arr.length - row - 1) ? num = sumDiagonals : num)
        })
    }
    matrix.forEach((arr) => console.log(arr.join(" ")));
}

console.log(
    diagonalAttack(['5 3 12 3 1',
        '11 4 23 2 5',
        '101 12 3 21 10',
        '1 4 5 2 2',
        '5 22 33 11 1'])
)

console.log(
    diagonalAttack(['1 1 1',
        '1 1 1',
        '1 1 0']

    )
)


=> 5 15 15 15 1
  15 4 15 2 15
  15 15 3 15 15
  15 4 15 2 15
  5 15 15 15 1

  1 1 1
  1 1 1
  1 1 0
