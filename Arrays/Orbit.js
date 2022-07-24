function Orbit(arr) {
    let start = arr[0];
    let end = arr[1];
    let searchCoordinate = arr[2];
   
    let matrix = [];

    for (let i = 0; i < arr[0]; i++) {
        matrix[i] = []
    }

    for (let row = 0; row < start; row++) {
        for (let column = 0; column < end; column++) {
            
            matrix[row][column] = Math.max(Math.abs(searchCoordinate - row),Math.abs(searchCoordinate -column)) + 1

        }
    }
        
    return matrix.forEach(x => console.log(x.join(" ")))
}

console.log(
    Orbit([3, 3, 2, 2])
)


console.log(
    Orbit([4,4,0,0])
)
console.log(
    Orbit([5,5,0,0])
)

=> 3 3 3
   3 2 2
   3 2 1

   1 2 3 4
   2 2 3 4
   3 3 3 4
   4 4 4 4

   1 2 3 4 5
   2 2 3 4 5
   3 3 3 4 5
   4 4 4 4 5
   5 5 5 5 5
