
function cookingByNumbers(number, str1, str2, str3, str4, str5) {
    let result = +number;
    let listOfCommands = [str1, str2, str3, str4, str5]
    let commands = {
        "chop": (num) => console.log(result = num / 2),
        "dice": (num) => console.log(result = Math.sqrt(num)),
        "spice": (num) => console.log(result = num + 1),
        "bake": (num) => console.log(result = num * 3),
        "fillet": (num) => console.log(result = num - (num / 100) * 20) //20%  
    }

    listOfCommands.forEach(item => {
        commands[item](result)
    })

   
}


console.log(
    cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
)

=> 16
   8
   4
   2
   1
