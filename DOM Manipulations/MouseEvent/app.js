function attachGradientEvents() {
    let divElement = document.getElementById("gradient");
    let el = getComputedStyle(divElement).width;
    let result = document.getElementById("result");
    divElement.addEventListener("click",function(e) {
        result.innerHTML = `${Math.floor(e.offsetX / parseInt(el)* 100)}%`
    })
}
