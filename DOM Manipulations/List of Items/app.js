function addItem() {
    let inputText = document.getElementById("newItemText").value
    let list = document.getElementById("items");

    let addTextToList = (text) => {
        let li = document.createElement("li");
            li.innerHTML = text;
         list.appendChild(li)
        
     }

    addTextToList(inputText)
}
