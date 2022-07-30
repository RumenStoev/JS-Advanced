function JansNotation(arr) {
  
  let convert = {
    "+":(a,b) => a + b,
    "-":(a,b) => a - b,
    "*":(a,b) => a * b,
    "/":(a,b) => a / b
  }
  
  let numbers = [];
  
    for(let i = 0; i< arr.length; i++) {
      
      if(!isNaN(arr[i])) {
       numbers.push(arr[i])
      }
      
      else {
      
        if(numbers.length < 2) {
          console.log("Error: not enough operands!")
          return;
        }
         
         numbers.push(convert[arr[i]](numbers[numbers.length-2],numbers[numbers.length-1]));
         numbers.splice(numbers.length - 3,2)
      }

    }

   return (numbers.length === 1) ? numbers[0] : console.log("Error: too many operands!")   
 }

console.log(
  JansNotation([31,
    2,
    "+",
    11,
    "/"])
)

console.log(
  JansNotation([0,
    1,
    "+",
    101,
    "*",
    18,
    "+",
    3,
    "/"])
)

console.log(
  JansNotation([5,
    3,
    4,
    "*",
    "-"])
)


