function sortAndDisplayTickets(arr,prop) {
   
   class Tickets {
        constructor(destination,price,status) {
            this.destination = destination;
            this.price = price;
            this.status = status
        }
    }
    
    let data = arr.map(x => x.split("|"))

    return data.reduce((acc,value) => {
         let [destination,price,status] = value;
         acc.push(new Tickets(destination,+price,status))
         return acc;
     },[]).sort((a,b) => {
         return (prop === "price") ? a[prop] - b[prop] : a[prop].localeCompare(b[prop])
     })
}

console.log(
   sortAndDisplayTickets(['Philadelphia|94.20|available',
   'New York City|95.99|available',
   'New York City|95.99|sold',
   'Boston|126.20|departed'],
'destination')
)

=> [
  Tickets { destination: 'Boston', price: 126.2, status: 'departed' },
  Tickets {
    destination: 'New York City',
    price: 95.99,
    status: 'available'
  },
  Tickets {
    destination: 'New York City',
    price: 95.99,
    status: 'sold'
  },
  Tickets {
    destination: 'Philadelphia',
    price: 94.2,
    status: 'available'
  }
]
