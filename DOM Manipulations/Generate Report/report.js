function generateReport() {
   let output = document.getElementById("output");
   let listCheckBoxes = document.getElementsByTagName("input")
   let table = document.getElementsByTagName("table")[0].rows
   let storeObjects = []
   let result = [];
 
   Array.from(listCheckBoxes).forEach((item,index) => (item.checked) ? storeObjects.push([item.name,index]) : false)

   for(let i = 1; i< table.length; i++) { 
      
       result.push(
          storeObjects.reduce((acc,value) => {
              let [nameColumn,cell] = value;
              acc[nameColumn] = table[i].cells[cell].textContent
              return acc;
          },{})
       )
    }
   
   output.innerHTML = JSON.stringify(result)

}
