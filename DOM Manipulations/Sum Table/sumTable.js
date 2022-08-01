function sumTable() {
    let counter = 0;
    let children = document.getElementsByTagName("table")[0].rows
    let sum = document.getElementById("sum")

    Array.from(children).forEach((item,index) => (index !== 0 && item !== undefined) ? counter+=Number(item.cells[1].textContent) : false)
    sum.textContent = counter

}
