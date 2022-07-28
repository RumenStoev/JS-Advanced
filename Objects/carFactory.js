function carFactory(obj) {

    let checkOddNumber = num => (num % 2 === 1) ? num : num - 1;
    let checkPower = num => (num <= 90) ? 90 : (num >= 100 && num <= 120) ? 120 : (num >= 200) ? 200 : false

    return {
        model: obj.model,
        engine: {
            power: checkPower(obj.power),
            volume: (obj.power <= 90) ? 1800 : (obj.power >= 100 && obj.power <= 120) ? 2400 : (obj.power >= 200) ? 3500 : false

        },
        carriage: {
            type: obj.carriage,
            color: obj.color
        },
        wheels: new Array(4).fill(checkOddNumber(obj.wheelsize))
    }
}

console.log(
    carFactory({
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    })
)


console.log(
    carFactory({
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    })
)


console.log(
    carFactory({
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
    )
)


=> {
  model: 'VW Golf II',
  engine: { power: 90, volume: 1800 },
  carriage: { type: 'hatchback', color: 'blue' },
  wheels: [ 13, 13, 13, 13 ]
}
{
  model: 'Opel Vectra',
  engine: { power: 120, volume: 2400 },
  carriage: { type: 'coupe', color: 'grey' },
  wheels: [ 17, 17, 17, 17 ]
}
{
  model: 'VW Golf II',
  engine: { power: 90, volume: 1800 },
  carriage: { type: 'hatchback', color: 'blue' },
  wheels: [ 13, 13, 13, 13 ]
}
