function validate() {
    let inputField = document.getElementById("email")
    let validateRegEx = new RegExp('^[a-z]+@[a-z]+\.[a-z]+',"g");
    let isValidEmail = (str,tag) => (validateRegEx.test(str)) ? tag.className = "" : tag.className = "error" 
    inputField.addEventListener("change",function(event) {

      isValidEmail(event.target.value,inputField);
})

   }
