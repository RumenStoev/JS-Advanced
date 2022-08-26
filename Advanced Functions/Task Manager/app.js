//37 % of Test system???
function solve() {
  let [addSection,openSection,inProgressSection,completeSection] = document.getElementsByTagName("section")
  let form = document.querySelectorAll("form > input")
  let textArea = document.getElementById("description")
  
 // <<<<<<<<<<<<<<<<<<<<<< Button>>>>>>>>>>>>>>>>>>>>>>>>>>>>

   document.addEventListener("click",function(event) {
      
      event.preventDefault()
       
     if(event.target.tagName === "BUTTON" && sectionButtons[event.target.textContent] !== undefined) {
              sectionButtons[event.target.textContent](event.target.parentNode.parentNode)
        }
   })

   let sectionButtons = {
      "Add":() => {
        
        let [task,data] = Array.from(form)
        let addSectionDiv = openSection.children[1]
        if(checkValidData(Array.from(form)) && textArea.value !== "") {
           addSectionDiv.appendChild(createArticle(task.value,textArea.value,data.value,["flex","green","red"],["Start","Delete"]))
        }
      },
     "Start":(article) => {
        let  progressSection = inProgressSection.children[1]
        let [task,description,data]  = article.children
       
       return progressSection.appendChild(createArticle(task.textContent,description.textContent,data.textContent,["flex","red","orange"],["Delete","Finish"]))
      },
     
     "Delete":(article) => article.remove(),
     
     "Finish":(article) => {
        let completeSectionDiv = completeSection.children[1]
        let [task,description,data]  = article.children
        
        return completeSectionDiv.appendChild(createArticle(task.textContent,description.textContent,data.textContent,undefined))
      } 
   }
////////////////////////////////////////////////////////////////////////////
   
  let createArticle = (task,description,data,attribute,text) => {

      let article = document.createElement("article");

      article.innerHTML = `<h3>${task}</h3>
                           <p>Description: ${description}</p>
                           <p>Due Date: ${data}</p>`
           if(attribute !== undefined) {                
                        article.innerHTML+= `<div class=${attribute[0]}>
                             <button class=${attribute[1]}>${text[0]}</button>
                             <button class=${attribute[2]}>${text[1]}</button>
                           </div>`
           }
                                
   return article
  }
  let checkValidData = (arr) => arr.every(x => x !== "")
}
