function create(words) {
   let divElement = document.getElementById("content");
   let result = words.forEach((x) => {
    let div = createElement("div");
    let p = createElement("p");
    div.id = "content";
    p.textContent = x
      div.appendChild(p)
      divElement.appendChild(div)
      div.addEventListener("click",function() {
         div.style.display = "none"
      })
   })
}



function createElement(type) {
   let element = document.createElement(type);
   element.innerHTML
   return element
}

