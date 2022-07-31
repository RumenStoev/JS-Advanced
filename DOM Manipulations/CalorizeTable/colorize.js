function colorize() {

  let table = document.querySelector("table").children
  Array.from(table[0].children).forEach((tag,index) => (index % 2 === 1) ? tag.style.backgroundColor = "teal" : false)   
}
