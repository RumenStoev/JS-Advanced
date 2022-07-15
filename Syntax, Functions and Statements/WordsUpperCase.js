
function wordUpperCase(str) {

    let pattern = /\w+/g;
    let result = str.match(pattern)

    return result.join(", ").toUpperCase()
     
}

console.log(
    wordUpperCase('Hi, how are you?')
)
console.log(
    wordUpperCase("hello")
)

console.log(
    wordUpperCase("Functions in JS can be nested, i.e. hold other functions")
)

-> HI, HOW, ARE, YOU
   HELLO 
   FUNCTIONS, IN, JS, CAN, BE, NESTED, I, E, HOLD, OTHER, FUNCTIONS
