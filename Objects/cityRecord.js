function cityRecord(town, population, tresury) {
   
  return {
        name: town,
        population: population,
        treasury:tresury
    }

}

console.log(
    cityRecord("Toyota", 7000, 15000)
)

=>{ name: 'Toyota', population: 7000, treasury: 15000 }
