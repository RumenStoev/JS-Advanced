function solve() {
   let text = document.getElementById("text").value
   let convention = document.getElementById("naming-convention").value
   let result = document.getElementById("result");

   let convertWord = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
   let PascalCase = str => str.split(" ").map(x => convertWord(x)).join("")
   let CamelCase = str => str.split(" ").map((x,i) =>(i !== 0) ? convertWord(x): x.toLowerCase()).join("")

   let PascalOrCamelCase = {
     "Camel Case": (str) => CamelCase(str),
     "Pascal Case": (str) => PascalCase(str)
    }

  return result.innerHTML = (PascalOrCamelCase[convention]) ? PascalOrCamelCase[convention](text) : "Error!"
}
