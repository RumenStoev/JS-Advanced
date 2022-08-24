function solution() {
  
  let storageRobot = {
    "protein": 0,
    "carbohydrate":0, 
    "fat": 0,
    "flavour": 0
    };

  let messagesOfRobot = {
    "Success":"Success",
    "Error": (microElement) => `Error: not enough ${microElement} in stock`,  
  }

   let recipeRequirements = {
    "apple": {
      "carbohydrate":1,
      "flavour":2
    },
    "lemonade": {
      "carbohydrate":10,
      "flavour":20
    },
    
    "burger": {
      "carbohydrate":5,
      "flavour":3,
      "fat":7
    },
    
    "eggs": {
      "protein":5,
      "flavour":1,
      "fat":1
    },
    
    "turkey": {
      "protein":10,
      "carbohydrate":10,
      "fat":10,
      "flavour":10,
    }
   }

   let commands = {
    "restock":(microElement,quantity) => {
      storageRobot[microElement]+= +quantity;
      return messagesOfRobot["Success"]
    },
    "prepare": (recipe,quantity) => {
        quantity = Number(quantity)
        let copyStorageRobot = Object.assign({},storageRobot)
        
        for(const [prop,value] of Object.entries(recipeRequirements[recipe])) {
             let sumQuantity = value * quantity;
            
             if((storageRobot[prop] - sumQuantity) < 0) {
                  storageRobot = copyStorageRobot
              return messagesOfRobot["Error"](prop);
             
             } else {
              storageRobot[prop]-= sumQuantity

             }
        }
         
        return  messagesOfRobot["Success"]
    },
    "report": () => {
      return Object.entries(storageRobot).reduce((acc,value) => {
        let [prop,item] = value
        acc.push(`${prop}=${item}`)
        return acc;
      },[]).join(" ")
    }
  }
   
    return (data) => {
       let [command,element,quantity] = data.split(" ")
            return commands[command](element,quantity)
    }
}



let manager = solution (); 
// console.log (manager ("restock flavour 50")); // Success 
// console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
// console.log (manager ("restock carbohydrate 10"));
// console.log (manager ("restock flavour 10"));
// console.log (manager ("prepare apple 1"));
// console.log (manager ("restock fat 10"));
// console.log (manager ("prepare burger 1"));
// console.log(manager("report"))
console.log(manager("prepare turkey 1"))
console.log(manager("restock protein 10"))
console.log(manager("prepare turkey 1"))
console.log(manager("restock carbohydrate 10"))
console.log(manager("prepare turkey 1"))
console.log(manager("restock fat 10"))
console.log(manager("prepare turkey 1"))
console.log(manager("restock flavour 10"))
console.log(manager("prepare turkey 1"))
console.log(manager("report"))


=>   Error: not enough protein in stock
     Success
     Error: not enough carbohydrate in stock
     Success
     Error: not enough fat in stock
     Success
     Error: not enough flavour in stock
     Success
     Success
     protein=0 carbohydrate=0 fat=0 flavour=0
