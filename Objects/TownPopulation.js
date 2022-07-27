function TownPopulation(array) {
    let result = array.map(str => str.split(" <-> "))

    return result.reduce((acc, value) => {
        (!acc.has(value[0])) ? acc.set(value[0], +value[1]) : acc.set(value[0], (acc.get(value[0]) + Number(value[1])))
        return acc
    }, new Map()).forEach((x, key) => console.log(`${key} : ${x}`))

}

console.log(
    TownPopulation(['Istanbul <-> 100000',
        'Honk Kong <-> 2100004',
        'Jerusalem <-> 2352344',
        'Mexico City <-> 23401925',
        'Istanbul <-> 1000'])
)

=>Istanbul : 101000
  Honk Kong : 2100004
  Jerusalem : 2352344
  Mexico City : 23401925
