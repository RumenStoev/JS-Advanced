function toggle() {
     let button = document.getElementsByClassName("button")[0];
     let div = document.getElementById("extra")
     button.addEventListener("click",function(e) {
        if(button.textContent === "More") {
            div.style.display = "block"
            button.textContent = "Less"
        } else if(button.textContent === "Less") {

          div.style.display = "none"
            button.textContent = "More"
        }

     })
}

