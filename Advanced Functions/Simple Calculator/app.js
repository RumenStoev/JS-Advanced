function calculator() {
    let data = {
        num1:"",
        num2:"",
        output:""
    }
   let calculate = (operation) => {
       let num1 =  +data["num1"].value;
       let num2 =  +data["num2"].value;
      
      data["output"].value = (operation === "add") ? num1 + num2 : (operation === "subtract") ? num1 - num2 : null
   }
   
   return {
     "init":(selector1, selector2, resultSelector) => {
        data["num1"] = document.querySelector(selector1)
        data["num2"] = document.querySelector(selector2)
        data["output"] = document.querySelector(resultSelector)
     },

     "add":() => {
       return calculate("add")
     },

     "subtract":() => {
        return calculate("subtract")
     }
   }

}
