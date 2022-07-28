function lowestPrices(arr) {
    let result = arr.reduce((acc, value) => {
        let [townName, productName, lowerPrice] = value.split(" | ");
        if (!acc.hasOwnProperty(productName)) {
            acc[productName] = [townName, +lowerPrice]
        }
        if (acc[productName][1] > +lowerPrice) {
            acc[productName][0] = townName
            acc[productName][1] = +lowerPrice
        }

        return acc;
    }, {})

    return Object.keys(result).forEach(key => {
        console.log(`${key} -> ${result[key][1]} (${result[key][0]})`)
    })

}

console.log(
    lowestPrices(['Sample Town | Sample Product | 1000',
        'Sample Town | Orange | 2',
        'Sample Town | Peach | 1',
        'Sofia | Orange | 3',
        'Sofia | Peach | 2',
        'New York | Sample Product | 1000.1',
        'New York | Burger | 10'])
)


=>  Sample Product -> 1000 (Sample Town)
    Orange -> 2 (Sample Town)
    Peach -> 1 (Sample Town)
    Burger -> 10 (New York)
