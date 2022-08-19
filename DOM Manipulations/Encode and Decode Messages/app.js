function encodeAndDecodeMessages() {
    let encodeTextArea = document.querySelector("#main > div:nth-child(1) > textarea");
    let buttonEncode = document.querySelector("#main > div:nth-child(1) > button");
    let decodeTextArea = document.querySelector("#main > div:nth-child(2) > textarea");
    let buttonDecode = document.querySelector("#main > div:nth-child(2) > button");
     

    buttonEncode.addEventListener("click",function() {
      decodeTextArea.value = encodeFunction(encodeTextArea.value,ascci)
        encodeTextArea.value = ""
      })


    buttonDecode.addEventListener("click",function() {
        encodeTextArea.value = ""
      decodeTextArea.value = decodeFunction(decodeTextArea.value)
    })

 
  function decodeFunction(text) {
       
    let decodeMessage = "";
    for(let i =0; i< text.length; i++) {
         decodeMessage += String.fromCharCode(text[i].charCodeAt(0) -1)
    }
    return decodeMessage

}


  function encodeFunction(text,func) {
    
    let encodedText = "";

    for(let i = 0; i< text.length;i++) {
        encodedText+= String.fromCharCode(text[i].charCodeAt(0) + 1)
    }

     return encodedText

 }

}
