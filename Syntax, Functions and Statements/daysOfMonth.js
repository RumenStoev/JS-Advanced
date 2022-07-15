function dayOfMonth(month,year) {
  
    return  new Date(year,month,0).getDate()
  
}

console.log(
    dayOfMonth(1,2012)
)


-> 31
