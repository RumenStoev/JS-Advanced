function printByGivenDelimiter(arr, delimiter) {

    let result = arr;

    return result.reduce((acc, value, index) => {
        (index !== result.length - 1) ? acc.push(`${value}${delimiter}`) : acc.push(value)

        return acc;
    }, []).join("")

}

console.log(
    printByGivenDelimiter(['One',
        'Two',
        'Three',
        'Four',
        'Five'],
        '-')
)

console.log(
    printByGivenDelimiter(['How about no?', 
    'I',
    'will', 
    'not', 
    'do', 
    'it!'], 
    '_'
    )
)

->One-Two-Three-Four-Five
  How about no?_I_will_not_do_it!
