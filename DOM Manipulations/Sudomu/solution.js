function solve() {
   let table = document.querySelector("table")
   let [quickCheckButton,clearButton]= document.querySelectorAll("button")
   let inputCells = document.querySelectorAll("input")
   let divResult = document.querySelector("#check > p")
   
   let matrixSUDOMU = () => {
      let matrix = [[],[],[]]
      let row = 0;
      let column = 0;
       Array.from(inputCells).forEach((input,index) => {
              matrix[row].push(+input.value)   
              column++
              if( column === 3)  {
                row++
                column = 0
              }     
       })
       return matrix;
   }
   
/////////////////////////////////////State of buttons/////////////////////////
    quickCheckButton.addEventListener("click",function() {
        let sudomu = matrixSUDOMU()
       for(let i = 0; i< sudomu.length; i++) {
          if (isEqualNumbers(sudomu[i]).length > 0 || isEqualNumbersColumn(sudomu)) {
              table.style.border = "2px solid red"
              divResult.style.color = "red"
              divResult.textContent = "NOP! You are not done yet..." 
        }else {
             table.style.border = "2px solid green"
             divResult.style.color = "green"
             divResult.textContent ="You solve it! Congratulations!"
             }  
       }
    })
   
    clearButton.addEventListener("click",function() {
     clearStateTable()
  })
/////////////////////////////////////////////////////////////////////////////
  let clearStateTable = () => {
      Array.from(inputCells).forEach(input => {
        input.value = ""
      })
      
      table.style.border = ""
      divResult.style.color = ""
      divResult.textContent = "" 
  }

  let isEqualNumbers = (arr) => {
      return arr.filter((num,i,arr) => arr.indexOf(num) !== i)
  }
  
  let isEqualNumbersColumn = (arr) => {
    let matrix = arr
    let columnNumbers = [];
    let isEqual = false;
       
      for(let row = 0; row< matrix.length; row++) {
        for(let column = 0 ; column < matrix[row].length; column++) {
            columnNumbers.push(matrix[column][row])
        }
        (isEqualNumbers(columnNumbers).length > 0) ? isEqual = true : isEqual = false
        columnNumbers = [];
      }
      console.log(isEqual)
      return isEqual
  }

}
