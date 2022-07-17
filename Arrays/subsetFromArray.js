function SubsetfromArray(arr) {

    return arr.reduce((acc, value) => {

       if(acc.every(num => num <= value))  acc.push(value)
       
       return acc
    }, [])
}


console.log(
    SubsetfromArray([1,
        3,
        8,
        4,
        10,
        12,
        3,
        2,
        24])
)

=> [ 1, 3, 8, 10, 12, 24 ]
