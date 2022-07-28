function StoreCatalog(arr) {
    let dictionary = {};
    let result = arr.sort().reduce((acc, value) => {
        let [product, price] = value.split(" : ");
        if (!acc.hasOwnProperty(product[0])) acc[product[0]] = {}
        acc[product[0]][product] = +price
        return acc
    }, dictionary)

    return Object.entries(result).forEach((value, key) => {
        console.log(value[0])
        console.log(Object.entries(value[1]).map(x => `${x[0]}: ${x[1]}`).join("\n"))
    })
}


console.log(
    StoreCatalog(['Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'])
)

console.log(
    StoreCatalog(['Banana : 2',
        "Rubic's Cube : 5",
        'Raspberry P : 4999',
        'Rolex : 100000',
        'Rollon : 10',
        'Rali Car : 2000000',
        'Pesho : 0.000001',
        'Barrel : 10'])
)

=> A
    Anti-Bug Spray: 15
    Apple: 1.25
    Appricot: 20.4
   B
    Boiler: 300
   D
    Deodorant: 10
   F
    Fridge: 1500
   T
    T-Shirt: 10
    TV: 1499

   B
    Banana: 2
    Barrel: 10
   P
    Pesho: 0.000001
   R
    Rali Car: 2000000
    Raspberry P: 4999
    Rolex: 100000
    Rollon: 10
    Rubic's Cube: 5
