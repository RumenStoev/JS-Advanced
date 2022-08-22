function filterEmployers(arr,criteria) {
  let data = JSON.parse(arr);
  let counter = 0
  
  let [prop,value] = criteria.split("-");
  let template = (obj,idIndex) =>  `${idIndex}. ${obj["first_name"]} ${obj["last_name"]} - ${obj["email"]}`
   
    return data 
               .filter(obj => obj[prop] === value)
               .map((obj,i) => template(obj,i))
               .join("\n")
}



console.log(
    filterEmployers(`[{
        "id": "1",
        "first_name": "Ardine",
        "last_name": "Bassam",
        "email": "abassam0@cnn.com",
        "gender": "Female"
      }, {
        "id": "2",
        "first_name": "Kizzee",
        "last_name": "Jost",
        "email": "kjost1@forbes.com",
        "gender": "Female"
      },  
    {
        "id": "3",
        "first_name": "Evanne",
        "last_name": "Maldin",
        "email": "emaldin2@hostgator.com",
        "gender": "Male"
      }]`, 
    'all'
    )
)


=> 0. Ardine Bassam - abassam0@cnn.com
   1. Kizzee Jost - kjost1@forbes.com
   2. Evanne Maldin - emaldin2@hostgator.com
