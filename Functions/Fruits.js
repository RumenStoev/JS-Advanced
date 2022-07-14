
function Fruits(str1,str2,str3) {
  let result = [str1,str2,str3]
  let money = (+result[2] * (+result[1] / 1000)).toFixed(2)
  let kilos = (+result[1] / 1000).toFixed(2)

  return `I need $${money} to buy ${kilos} kilograms ${str1}.`
}


console.log(
    Fruits("orange", "2500", "1.80")
)

-> I need $4.50 to buy 2.50 kilograms orange.
