function SameNumbers(num2) {
    let result = `${num2}`.split("").map(Number)
    let findSameNumbers = result.filter((x, i, arr) => x !== arr[i + 1])
    let sumNumbers = result.reduce((acc, value) => acc + value, 0)

    return (findSameNumbers.length === 1) ? [true, sumNumbers].join("\n") : [false, sumNumbers].join("\n")
}

console.log(
    SameNumbers(2222222)
)

-> true
   14
