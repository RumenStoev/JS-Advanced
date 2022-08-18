function addItem() {
    let menu = document.getElementById("menu");
    let inputText = document.getElementById("newItemText")
    let inputValue = document.getElementById("newItemValue")
    
    let clearInputFields = (option) => {
        return option.forEach(element => {
             element.value = ""
        })    
    }

    let createOptionTag = (text,value) => {
         let option = document.createElement("option");
             option.textContent = text
             option.value = value
      
         return option       
    }

    let appendOption = () => {
        menu.appendChild(createOptionTag(inputText.value,inputValue.value))
        clearInputFields([inputText,inputValue])
    }
    appendOption()
   
}
