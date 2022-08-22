function listProcessor(array) { 
    let data = array;
    let result = [];
    let commands = {
     "add":(str) => result.push(str),
     "remove":(str) => result = result.filter(item => item !== str),
     "print":(str) => console.log(result.join(","))
 
    }
 
       data.forEach(str => {
         let [command, value] = str.split(" ")
           commands[command](value)
 
       });
 }
 

console.log(
    listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])
)
console.log(
    listProcessor( ['add stallone', 'remove stallone', 'remove stallone', 'print'])
)


=> again,again
=> undefined
