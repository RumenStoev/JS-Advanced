function create(words) {
   let containerDiv = document.getElementById("content");
   
   let createDivSection = (text) => {
     let div = document.createElement("div")
       
     let paragraph = document.createElement("p");
         paragraph.textContent = text;    
         paragraph.style.display = "none"
        
     div.appendChild(paragraph)
     div.addEventListener("click",function() {
       paragraph.style.display = "block"
      
     })

     containerDiv.appendChild(div)
   }
   
   words.forEach(word => {
       createDivSection(word)
   });
  
}
