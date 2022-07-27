function fromJSONToHTMLTable(input) {
    let result = JSON.parse(input);
    let table = ""

    const escapeHTML = w =>
        `${w}`
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;")

    let output = result.reduce((acc, value, index, array) => {
        let keys = Object.keys(array[0]).map(x => `<th>${escapeHTML(x)}</th>`).join("")
        let values = Object.values(value).map(x => `<td>${escapeHTML(x)}</td>`).join("")

        acc[0] = `<tr>${keys}</tr>`
        acc[index + 1] = `<tr>${values}</tr>`
        return acc
    }, []).join("  \n")

    table += "<table>\n"
    table += `${output}`
    table += "\n</table>"
    return table
    
}

console.log(
    fromJSONToHTMLTable(['[{"Name":"Stamat","Price":5.5},{"Name":"Rumen","Price":6}]'])
)

console.log(
    fromJSONToHTMLTable(`[{"Name":"Pesho",
    "Score":4,
    " Grade":8},
   {"Name":"Gosho",
    "Score":5,
    " Grade":8},
   {"Name":"Angel",
    "Score":5.50,
    " Grade":10}]`)
)

<table>
 <tr><th>Name</th><th>Price</th></tr>  
 <tr><td>Stamat</td><td>5.5</td></tr>  
 <tr><td>Rumen</td><td>6</td></tr> 
<table>
  
<table>
 <tr><th>Name</th><th>Score</th><th> Grade</th></tr>  
 <tr><td>Pesho</td><td>4</td><td>8</td></tr>  
 <tr><td>Gosho</td><td>5</td><td>8</td></tr>  
 <tr><td>Angel</td><td>5.5</td><td>10</td></tr> 
<table>
