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
   let changeStatesTableAndParagraph = (border,color,text) => {
        table.style.border = border;
        divResult.style.color = color;
        divResult.textContent = text
   }
/////////////////////////////////////State of Buttons/////////////////////////
  quickCheckButton.addEventListener("click",function() {
    let sudomu = matrixSUDOMU()
       for(let i = 0; i< sudomu.length; i++) {
        (isEqualNumbers(sudomu[i]).length > 0 || isEqualNumbersColumn(sudomu)) ? changeStatesTableAndParagraph("2px solid red","red","NOP! You are not done yet..." )
                                                                               : changeStatesTableAndParagraph("2px solid green", "green","You solve it! Congratulations!")
        } 
    })
   
  clearButton.addEventListener("click",function() {
      clearStateTable()
  })
/////////////////////////////////////////////////////////////////////////////
  let clearStateTable = () => {
      Array.from(inputCells).forEach(input => input.value = "")
      changeStatesTableAndParagraph("","","")
  }

  let isEqualNumbers = (arr) => {
      return arr.filter((num,i,arr) => arr.indexOf(num) !== i)
  }
  
  let isEqualNumbersColumn = (arr) => {
    let table = arr
    let columnNumbers = [];
    let isEqual = false;
       
      for(let row = 0; row < table.length; row++) {
        for(let column = 0 ; column < table[row].length; column++) {
            columnNumbers.push(table[column][row])
        }
        (isEqualNumbers(columnNumbers).length > 0) ? isEqual = true : isEqual = false
        columnNumbers = [];
      }
       
      return isEqual
  }
}
