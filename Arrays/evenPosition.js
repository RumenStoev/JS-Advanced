function evenPosition(arr) {

    return arr.filter((num,index) => (index % 2 === 0) ? num : false).join(" ")
}

console.log(
    evenPosition(['20','30','40','50','60'])
)

-> 20 40 60
