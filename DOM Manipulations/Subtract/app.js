function subtract() {
  let first = document.getElementById("firstNumber").value;
  let second = document.getElementById("secondNumber").value;
  let result = document.getElementById("result")
    result.innerHTML = Number(first) - Number(second)
}
