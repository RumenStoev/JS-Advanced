function argumentInfo() {
  let counterNumbers = {} 

   Array.from(arguments).forEach((item,i) => {
       console.log(`${typeof item}: ${item}`)
       if(!counterNumbers.hasOwnProperty(typeof item)) {
         counterNumbers[typeof item] = 1
       }else {
         counterNumbers[typeof item]++
       }   
  })

  let sortObjectValuesByDescOrder = (a,b) => b[1] - a[1]

  let printTemplate = ([prop,item]) => console.log(`${prop} = ${item}`) 
  
  let printObject = (obj) => Object.entries(obj).sort(sortObjectValuesByDescOrder).forEach(printTemplate) 
   
  return printObject(counterNumbers)
  
}
console.log(
  argumentInfo('cat', 42, function () { console.log('Hello world!') })
)

console.log(
   argumentInfo({ name: 'bob'}, 3.333, 9.999)

  
  
  =>string: cat
    number: 42
    function: function () { console.log('Hello world!') }
    string = 1
    number = 1
    function = 1

    object: [object Object]
    number: 3.333
    number: 9.999
    number = 2
    object = 1
