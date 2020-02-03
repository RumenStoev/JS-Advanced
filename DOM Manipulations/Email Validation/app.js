function validate() {
    let input = document.getElementById("email")
    input.addEventListener("keyup",function () {
        let email = ""
         Object.values(input.value).map(x => {
             email+=x;
         })
        if(!email.includes("@")) {
           input.className = "error"

        }

        else {


           input.className = "input"
        }
        if(input.value === "") {
            input.className = "input"
        }
    })
}
