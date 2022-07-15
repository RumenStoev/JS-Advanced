function ValiditChecker(x1, y1, x2, y2) {

    let formula = (param1, param2, param3, param4) => Math.sqrt((param1 - param3) * (param1 - param3) + (param2 - param4) * (param2 - param4));

    let result = [
        [x1, y1, 0, 0],
        [x2, y2, 0, 0],
        [x1, y1, x2,y2]
    ];

    let patterns = (boolean, arr) => (boolean) ? console.log(`{${arr[0]}, ${arr[1]}} to {${arr[2]}, ${arr[3]}} is valid`) :console.log( `{${arr[0]}, ${arr[1]}} to {${arr[2]}, ${arr[3]}} is invalid`)
   
    let isInteger = (number) => (Number.isInteger(number)) ? true : false;
   
   return  result.forEach(arr => {
         (isInteger(formula(arr[0],arr[1],arr[2],arr[3]))) ? patterns(true,arr) : patterns(false,arr)
    })

}

->console.log(
    ValiditChecker(3, 0, 0, 4)
)
console.log(
    ValiditChecker(3.3, 0, 0, 4)
)

->{3, 0} to {0, 0} is valid
  {0, 4} to {0, 0} is valid
  {3, 0} to {0, 4} is valid

  {3.3, 0} to {0, 0} is invalid
  {0, 4} to {0, 0} is valid
  {3.3, 0} to {0, 4} is invalid
