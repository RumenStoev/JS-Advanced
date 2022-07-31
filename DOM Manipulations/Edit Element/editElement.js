
function editElement(tagText,text1,text2) {
  let regEx = new RegExp(text1,"g")
  let result = tagText.textContent.replace(regEx,text2)
 
  tagText.textContent = result
}
