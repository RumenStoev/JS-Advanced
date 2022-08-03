function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
   let searchField = document.getElementById("searchField").value
   let collectionTr = document.querySelectorAll("tbody>tr");
   let isMatched = (listItem,field) => (listItem.includes(field)) ?  true : false
   
   Array.from(collectionTr).forEach(item  => (isMatched(item.innerHTML,searchField)) ?   item.className = 'select' : item.classList.remove('select'))    
   searchField = ""
  }
}


