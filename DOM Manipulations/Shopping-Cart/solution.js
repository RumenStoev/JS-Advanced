function solve() {
  let buttons = document.getElementsByClassName("add-product");
  let textArea  = document.querySelector("body > div > textarea")
  let templateProduct = (name,money) =>  `Added ${name} for ${money} to the cart.\n`
  let templateCheckout = (list,totalProduct) => `You bought ${list} for ${totalPrice}.`
  let buttonCheckout = document.querySelector("body > div > button")
  let listOfProducts = [];
  let totalPrice = 0;

  Array.from(buttons).forEach(button => {
     button.addEventListener("click",function(event) {
      let currentElement = event.target.parentNode.parentNode
      let priceProduct = currentElement.childNodes[7].textContent;
      let nameProduct = currentElement.childNodes[3].children[0].textContent;
      totalPrice+= Number(priceProduct)
      if (!listOfProducts.includes(nameProduct))  listOfProducts.push(nameProduct)    
      textArea.value+=templateProduct(nameProduct,priceProduct)
     })
  })

  buttonCheckout.addEventListener("click",function(event) {
      totalPrice = totalPrice.toFixed(2)
      let result = listOfProducts.join(", ")
      textArea.value+= templateCheckout(result,totalPrice)
      buttonCheckout.disabled = true;
      Array.from(buttons).forEach(x => x.disabled = true)
  })

}
