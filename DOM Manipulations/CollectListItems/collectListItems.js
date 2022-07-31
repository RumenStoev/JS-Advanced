function extractText() {
   let textArea = document.getElementById("result");
   let listItems = document.getElementById("items");
   let store = [];
   for (let i = 0; i < listItems.children.length; i++) {
    store.push(listItems.children[i].textContent)
  }
  
  textArea.textContent = store.join("\n")

}
