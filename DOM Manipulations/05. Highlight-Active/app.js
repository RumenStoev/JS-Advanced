function focused() {
     let inputField = document.getElementsByTagName("input")
    
     Array.from(inputField).forEach(tag => {
        tag.addEventListener("focus",(event) => event.target.parentNode.className = "focused");
        tag.addEventListener("blur",(event) => event.target.parentNode.className = "")
     })
}
