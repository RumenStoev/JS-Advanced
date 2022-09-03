class Company {
    constructor() {
       this.department = {}
       this.average = {}
       
    }

    addEmployee(name,salary,position,department) {
      Array.from(arguments).forEach(param => {
        if(param === "" ||  param === undefined || param === null) throw new Error("Invalid input!")
    })

    if(salary < 0) throw new Error("Invalid input!");
     
    if(this.department[department] === undefined) {
        this.department[department] = []
        this.average[department] = [0,0]
          
    }
    
       this.average[department][0]++
       this.average[department][1]+= salary
       this.department[department].push([name,salary,position])
    
    return `New employee is hired. Name: ${name}. Position: ${position}` 
    
 }
   
    bestDepartment() {
        let [department,averageSalary] =  Object.entries(this.average).sort(([Aprop,Avalue],[Bprop,Bvalue]) => {
            let num1 = Avalue[1] / Avalue[0]
            let num2 = Bvalue[1] / Bvalue[0]
             return num2 - num1
           })[0]
        
        
           let dataEmployees =  Object.entries(this.department[department]).sort((a,b) => {
                let nameA = a[1][0]
                let nameB = b[1][0];

              return  b[1][1] - a[1][1] ||  nameA.localeCompare(nameB) 
          
           }).reduce((acc,value) => {
             let [name,salary,position] = value[1]
             
             acc.push(`${name} ${salary} ${position}`)
            
              return acc;
          
           },[]).join("\n")

   
   return `Best Department is: ${department} Average salary: ${(averageSalary[1] / averageSalary[0]).toFixed(2)}${dataEmployees}`
    
   }
}
