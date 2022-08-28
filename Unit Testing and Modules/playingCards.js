
function playingCards(str1,str2) {
   let validCardFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
   let validCardSuits = {
    "S": "♠",
    "H": "♥",
    "D": "♦",
    "C": "♣"
   }
   if(!validCardFaces.includes(str1) || validCardSuits[str2] === undefined) {
     throw new Error()
   }else {
    return `${str1}${validCardSuits[str2]}`
   }
    
}


'A', 'S'	=> A♠
'10', 'H'	=> 10♥
'1', 'C'	=> Error
