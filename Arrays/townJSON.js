function townJson(arr) {
 let pattern = /[^|]+/g;

    return JSON.stringify(arr.splice(1).reduce((acc,value) => {
      let result = {}
      let [Town,Latitude,Longitude] = value.match(pattern)
     
      result["Town"] = Town.trim();
      result["Latitude"] = +Number(Latitude.trim()).toFixed(2)
      result["Longitude"] = +Number(Longitude.trim()).toFixed(2)
      acc.push(result)
      
      return acc
 },[]))
}
console.log(
    townJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])
)

=> /*[{ "Town":"Sofia",
  "Latitude":42.7,
  "Longitude":23.32
},
{"Town":"Beijing", 
 "Latitude":39.91, 
 "Longitude":116.36
}]*/
