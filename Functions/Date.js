function previousDay(year, month, day) {
    let pattern = /\d{4}-\d{2}-\d{2}/g
    let result = new Date(`${year}-${month}-${day}`);
    return result.toISOString().match(pattern).join("").replace(/\b0/g,"")

}
console.log(
    previousDay(2016, 10, 1)
)

-> 2016-9-30
