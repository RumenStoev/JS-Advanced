function heroInventory(arr) {
   let output = arr.reduce((acc,value) => {
        let [name,level,items] = value.split(" / ");
     
        let item = items ? items.split(", ") : []
        let result = {
            "name":name,
            "level":+level,
            "items": item
        }
    
        acc.push(result)
        return acc
     },[])
 
    return JSON.stringify(output)
}


console.log(
    heroInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])
)


=> [{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},{"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},{"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}]
