function aggregateElements(arr) {

    let sumNumbers = arr => arr.reduce((acc, value) => acc + value, 0);

    let sumInversedNumbers = arr => arr.reduce((acc, value) => acc += 1 / value, 0);

    let concatElements = arr => arr.join("")

 
    return `${sumNumbers(arr)}\n${sumInversedNumbers(arr)}\n${concatElements(arr)}`
    
}


console.log(
    aggregateElements([1, 2, 3])
)

-> 6
   1.8333333333333333
   123
