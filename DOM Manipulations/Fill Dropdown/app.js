function addItem() {
 let text = document.getElementById("newItemText")
 let valueText = document.getElementById("newItemValue")
let menu = document.getElementById("menu")
  let option = document.createElement("option");
option.value = valueText.value;
option.textContent = text.value;
    menu.appendChild(option)
   text.value = "";
   valueText.value = "";
}



document.addEventListener("DOMContentLoaded",function() {


    document.getElementById("clickButton").addEventListener("click",addItem)
})
