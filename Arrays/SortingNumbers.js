function sortingNumbers(arr) {
    let result = arr.sort((a, b) => a - b);
    let length = Math.round(result.length / 2);
    let smallestNumbers = result.splice(0, length)
    let biggestNumbers = result.reverse()
    let output = [];

    for (let i = 0; i < length; i++) {
        output.push(smallestNumbers[i], biggestNumbers[i])
    }

    return output



}
console.log(
    sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
)

->[
  -3, 65,  1, 63,  3,
  56, 18, 52, 31, 48
]
