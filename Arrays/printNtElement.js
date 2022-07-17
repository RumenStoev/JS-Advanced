function printNtElement(arr,n) {
     let result = []
     for(let i = 0; i< arr.length; i+=n) {
        result.push(arr[i])
     }
     return result
}

console.log(
    printNtElement(['5', 
    '20', 
    '31', 
    '4', 
    '20'], 
    2)
)

console.log(
    printNtElement(['1', 
    '2',
    '3', 
    '4', 
    '5'], 
    6
    )
)

=>[ '5', '31', '20' ]
  [ '1' ]
