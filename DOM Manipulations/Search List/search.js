//???
function search() {
  let listItems = document.getElementById("towns").children
  let searchField = document.getElementById("searchText").value
  let result = document.getElementById("result")
  let counter = 0;
   
  let isMatched = (a,input) => input.split("").every((x,i) => x === a.textContent.split("")[i]) 
 
  let changeState = a => {
   a.style.textDecoration = " underline"
   a.style.fontWeight = `bold`
   counter+=1
    
  }
  let previousState = a =>  {
    a.style.textDecoration = "" 
    a.style.fontWeight = ""
  }
 
  Array.from(listItems).filter(x => (isMatched(x,searchField) && searchField.length !== 0) ? changeState(x) : previousState(x))
  
  result.textContent = `${counter} matches found.`
 
 }

