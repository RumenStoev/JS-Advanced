function juice(arr) {
    let bottles = {};
    
    let oneBottle = 1000

     arr.reduce((acc,value) => {
        let [fruit,quantity] = value.split(" => ");
          quantity = Number(quantity)
       
          if(!acc.hasOwnProperty(fruit)) {
            acc[fruit] = quantity
        }else {
            acc[fruit] += quantity
        }

        if(acc[fruit] >= oneBottle ) {
            bottles[fruit] = Math.floor(acc[fruit] / oneBottle);

        }
         return acc;
    },{})

    return Object.entries(bottles).forEach(([fruit,quantity]) => {
        console.log(`${fruit} => ${quantity}`)
    })
    
}

console.log(
    juice(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'])
)

console.log(
    juice(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'])
)
=> Pear => 8
   Watermelon => 10
   Kiwi => 4

   Orange => 2
   Peach => 2
