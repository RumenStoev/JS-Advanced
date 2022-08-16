function addItem() {
   let listItems = document.getElementById("items");
   let inputText = document.getElementById("newItemText").value;
   
   function addTagsLIandButton(text) {
    let deleteButton = document.createElement("a");
        deleteButton.innerHTML = "[Delete]"
        deleteButton.setAttribute("href","#")

    let li = document.createElement("li");
        li.innerHTML = text
        li.appendChild(deleteButton)

    listItems.appendChild(li)   
    deleteLiTag(deleteButton) 
   }

  function deleteLiTag(button) {
     button.addEventListener("click",function(event) {
       event.target.parentNode.remove()
     })
  }

   addTagsLIandButton(inputText)
}
