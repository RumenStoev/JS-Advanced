class Person {
    constructor(firstName,lastName,age,email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}


let person = new Person("Peter", "Marinov", 18, "pesho18@abv.bg")



function getPersons() {
    const data = [
        ['Anna', 'Simpson', 22, 'anna@yahoo.com'],
        ['SoftUni'],
        ['Stephan', 'Johnson', 25],
        ['Gabriel', 'Peterson', 24, 'g.p@gmail.com'],
    ]

    data.forEach(array => {
       console.log(new Person(...array))
    })
}


console.log(
    getPersons()
)

=>  Person {
  firstName: 'Gabriel',
  lastName: 'Peterson',
  age: 24,
  email: 'g.p@gmail.com'
}
