function attachEventsListeners() {
   let inputButtons = document.querySelectorAll("input[type=button]");
   let number;

   let convertValues = {
    "days":(output) => { return output[0] },
    "hours":(output) => { return output[1] },
    "minutes":(output) => { return output[2] },
    "seconds":(output) => {  return output[3] }  
  }
   
   let startInputID = (start,num) => { 
       if(start === "days") return [num,num * 24,num * 1440,num * 86400];
       if(start === "hours") return [num / 24,num,num * 60, num * 3600]
       if(start === "minutes") return [num /  1440, num / 60, num, num * 60]
       if(start === "seconds") return [num / 86400,num / 3600, num / 60, num]   
   }
  
    Array.from(inputButtons).forEach((button,index) => {
        let inputValue = button.parentNode.children[1];
         
          button.addEventListener("click",function(event) {
           
            number = inputValue.value
            let startValueID = inputValue.id
            
            Array.from(inputButtons).forEach(b => {
                let restValues = b.parentNode.children[1];
                restValues.value = convertValues[restValues.id](startInputID(startValueID,number));    
            })
          })

        })
}
