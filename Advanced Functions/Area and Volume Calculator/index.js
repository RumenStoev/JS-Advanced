function solve(fnArea,fnVol,arr) {
     let data = JSON.parse(arr);
     function area() {
            return Math.abs(this.x * this.y);
        };
        
     function vol() {
            return Math.abs(this.x * this.y * this.z);
       };
            
    
    return data.reduce((acc,value) => {
         let result = {
            area: fnArea.call(value),
            volume: fnVol.call(value)       
         }
         acc.push(result);
         return acc
    },[])

}


console.log(
    solve(area, vol, `[
        {"x":"1","y":"2","z":"10"},
        {"x":"7","y":"7","z":"10"},
        {"x":"5","y":"2","z":"10"}
        ]`)
)


-> 
 [
  { area: 2, volume: 20 },
  { area: 49, volume: 490 },
  { area: 10, volume: 100 }
 ]
