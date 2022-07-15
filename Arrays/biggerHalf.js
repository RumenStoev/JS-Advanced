function biggerHalf(arr) {
    let length = arr.length / 2;
    let result = arr.sort((a, b) => a - b).slice(length, arr.length)
    return result
}

console.log(
    biggerHalf([4,7,2,5])
)
-> [5,7]
