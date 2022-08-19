!!!Tests - 25%

function solve() {
  let generateInput = document.querySelector("#exercise > textarea")
  let table = document.getElementsByClassName("table")[0]
  let generateButton = document.querySelector("#exercise > button:nth-child(3)")
  let buyButton = document.querySelector("#exercise > button:nth-child(6)")
  let buyTextArea = document.querySelector("#exercise > textarea:nth-child(5)")
  let container = [];
  
  generateButton.addEventListener("click",function() {
  JSON.parse(generateInput.value).forEach((element,index) => {
        //New row starts from 2 
       let rowTable = table.insertRow(index + 2);
       renderCells(element,rowTable)
      });
   })

  buyButton.addEventListener("click",function() {
    let listCheckBoxes = document.querySelectorAll("input[type=checkbox]")
      let priceProduct = 0;
      let factorProduct = 0;
      Array.from(listCheckBoxes).forEach(input => {
          
          if(input.checked) {
           let [img,name,price,factor,mark] = input.closest("tr").children
              name = name.children[0].textContent
              price = +price.children[0].textContent
              factor = +factor.children[0].textContent
             if (!container.includes(name))  container.push(name) 
             priceProduct+=price;
             factorProduct+=factor    
          }       
        })
       
       buyTextArea.value = templateOutput(container,priceProduct,factorProduct) 
  }) 
  let renderCells = (obj,row) => {
       let img = document.createElement("img")
       img.setAttribute("src",`${obj["img"]}`)
       row.insertCell(0).appendChild(img)
       row.insertCell(1).innerHTML = `<p>${obj["name"]}</p>`
       row.insertCell(2).innerHTML = `<p>${obj["price"]}</p>` 
       row.insertCell(3).innerHTML = `<p>${obj["decFactor"]}</p>`
       row.insertCell(4).innerHTML = `<input type="checkbox">`  
  }
 
  
 let templateOutput = (names,totalPrice,factor) =>  {
     return `Bought furniture: ${names.join(", ")}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${factor / names.length}`
 }
}
