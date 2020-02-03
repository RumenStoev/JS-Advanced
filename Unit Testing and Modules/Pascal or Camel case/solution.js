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
