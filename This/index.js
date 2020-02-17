function solve(area,vol,data) {
    return  JSON.parse(data)
            .map(p => {
                return {
                    area: area.call(p),
                    vol: vol.call(p)
                }
            })
}
function vol() {
   return this.x * this.y *  this.z;
}

function area() {
     return this.x * this.y;
}



console.log(
    solve(
        area, vol, `[
            {"x":"1","y":"2","z":"10"},
            {"x":"7","y":"7","z":"10"},
            {"x":"5","y":"2","z":"10"}
            ]`
    )
)



-> { area: 2, vol: 20 },
  { area: 49, vol: 490 },
  { area: 10, vol: 100 }
