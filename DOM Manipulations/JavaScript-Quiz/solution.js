function solve() {
  let buttons = document.getElementsByClassName("answer-text")
  let selectTag = document.getElementById("quizzie")
  let result =  document.querySelector("#results > li > h1")
  
  let answers = ["onclick","JSON.stringify()","A programming API for HTML and XML documents"]; 
  let counter = 1;
  let rightAnswers = 0

  Array.from(buttons).forEach((button) => {
    button.addEventListener("click",function() {
      if(answers[counter - 1] === button.textContent) rightAnswers = rightAnswers + 1
    
       selectTag.children[counter].style.display = "none"
       counter++
       selectTag.children[counter].style.display = "block"
      
       result.innerHTML = (rightAnswers === answers.length) ? "You are recognized as top JavaScript fan!" : `You have ${rightAnswers} right answers`
    })  
   })
}
