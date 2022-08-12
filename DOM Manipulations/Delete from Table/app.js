function deleteByEmail() {
   let inputData = document.querySelector("label > input").value;
   let table = document.getElementById("customers")
   let result = document.getElementById("result")

   let isEqual = (input,searchEmail) => input === searchEmail
   let isError = (tag,text) => tag.textContent = text
   let deleteRow = (table,row) => table.deleteRow(row)

   Array.from(table.rows).forEach((x,i) => isEqual(inputData,x.cells[1].textContent) ? deleteRow(table,i) : isError(result,"Not found."))


}
