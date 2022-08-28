//Judje 0 point????
function deckOfCards(arr) {
  let validCardFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
  let validCardSuits = {
   "S": "♠",
   "H": "♥",
   "D": "♦",
   "C": "♣"
  }
  let isExist = (face,suit) => (!validCardFaces.includes(face) || !validCardSuits[suit]) ? false : true 

  return arr.reduce((acc,value) => {
    let face = value.slice(0,value.length -1)
    let suit = value[value.length -1]
    
    if(isExist(face,suit)) {
       acc+=`${face}${validCardSuits[suit]} `
    } else {
      return `Invalid card: ${face}${suit}`  
    }
    return acc
  
  },"")
}

deckOfCards(['AS', '10D', 'KH', '2C']) => A♠ 10♦ K♥ 2♣ 


deckOfCards(['5S', '3D', 'QD', '1C']) => Invalid card: 1C
