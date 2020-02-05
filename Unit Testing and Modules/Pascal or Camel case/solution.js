let types = {
    "Pascal Case": string => {
        return string
            .toLocaleLowerCase()
            .split(" ")
            .map(x =>
                `${x[0] = x[0].toLocaleUpperCase() + x.slice(1, x.length)}`
            )
            .join("")


    },
    "Camel Case": string => {
        let str = string
            .toLocaleLowerCase()
            .split(" ")
            .map(x =>  `${x[0].toLocaleUpperCase() + x.slice(1, x.length)}`)
            .join("")

        str  =  `${ str[0].toLocaleLowerCase() + str.slice(1, str.length)}`
        return str
    }
}



function tranformString(tranformation,str) {
   return `${str[0][tranformation]() + str.slice(1,str.length)}`
}

const upperFirstLetter = tranformString.bind(undefined,"toLocaleUpperCase");
const lowerFirstLetter = tranformString.bind(undefined,"toLocaleLowerCase");
const reduceString = string => string
    .toLocaleLowerCase()
    .split(" ")
    .map(upperFirstLetter)
    .join("")


let types = {
    "Pascal Case" : reduceString,
    "Camel Case" : string => lowerFirstLetter(reduceString(string))
}

function solve(type,string) {
    if(typeof  types[type] === "undefined") {
        return "Error!"
    }
    return types[type](string)
}



module.exports = solve;
