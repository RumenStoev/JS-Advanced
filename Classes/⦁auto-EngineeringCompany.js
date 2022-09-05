function auto(arr) {
  let result = {};
  let inputData = arr;
  
   inputData.reduce((acc,value) => {
    let [car,model,number] = value.split(" | ");
    number = Number(number);
      if(acc[car] === undefined) {
        acc[car] = {};
      }
         if(!acc[car].hasOwnProperty(model)) {
            acc[car][model] = number
         }else{
            acc[car][model] += number
         }
      
      return acc;
   
  },result)
  
  return Object.entries(result).forEach(([prop,value]) => {
       let carsData = Object.entries(value).map(x => `${x[0]} -> ${x[1]}` )
       console.log(prop);
       console.log(
        `###${carsData.join("\n###")}`
       )
    
  })

}


console.log(
    auto(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'])
)

=> Audi
###Q7 -> 1000
###Q6 -> 100
BMW
###X5 -> 1000
###X6 -> 100
Citroen
###C4 -> 145
###C5 -> 10
Volga
###GAZ-24 -> 1000000
Lada
###Niva -> 1000000
###Jigula -> 1000000
