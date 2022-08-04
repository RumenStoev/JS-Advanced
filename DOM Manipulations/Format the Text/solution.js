function solve() {
    let textArea = document.getElementById("input").value
    let output = document.getElementById("output")

    let sentences = ""
    let counter = 2;    
    
    let insertParagraphsInDiv = sentance => output.innerHTML += `<p>${sentance}</p>`
    
    textArea.split(".").forEach((sentance,index,array) => {
        
        sentences+=`${sentance}.`
      
        if(counter === index|| index === array.length -2) {
          insertParagraphsInDiv(sentences)
          counter+=3
          sentences = ""
        }
    }); 
}

