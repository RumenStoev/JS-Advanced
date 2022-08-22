function listProcessor(array) { 
   let data = array;
   let result = [];
   let commands = {
    "add":(arr,str) => arr.push(str),
    "remove":(arr,str) => arr.forEach(item => (arr.includes(item)) ? arr.splice(arr.indexOf(str),1) : false),
    "print":(arr,str) => console.log(arr.join(","))

   }

      data.forEach(str => {
        let [command, value] = str.split(" ")
          commands[command](result,value)

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
