class Person {
    constructor(firstName,lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }


    get fullName() {
        return this.firstName + " " + this.lastName
    }

    set fullName(v) {
         let [name,lastNam] = v.split(" ");
        this.firstName = name;
        this.lastName = lastNam;
    }
}

let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla


=> Peter Ivanov
   George Ivanov
   George Peterson
   Nikola
   Tesla
