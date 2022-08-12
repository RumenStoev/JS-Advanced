function solve() {
   let selectMenuTo = document.getElementById("selectMenuTo");
   let input = document.getElementById("input");
   let result = document.getElementById("result");
   let button = document.querySelector("#container > button")

    let addOptionTags = (value,text) => {
         let option = document.createElement("option");
            option.value = value;
            option.text = text;
         selectMenuTo.appendChild(option);    
   }
    let convertFunction = {
    "binary": (num) =>  (Number(num) >>> 0).toString(2),
    "hexadecimal": (num) => (Number(num).toString(16)).toLocaleUpperCase()
    }
   addOptionTags("binary","Binary");
   addOptionTags("hexadecimal","Hexadecimal");
 
   button.addEventListener("click",function() {
    let clickedElement = selectMenuTo.value;
    let number = input.value;
     result.value = convertFunction[clickedElement](number)
     
   })
}
