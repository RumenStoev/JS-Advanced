function addAndRemove(arr) {
    let result = [];

    let commands = {
        "add": (index) => { result.push(index + 1) },
        "remove": () => { result.pop() }
    }

    arr.forEach((command, index) => {
        commands[command](index)
    })

    return (result.length === 0) ? "Empty" : result.join("\n")
}

console.log(
    addAndRemove(['add',
        'add',
        'add',
        'add'])
)

console.log(
    addAndRemove(['add',
        'add',
        'remove',
        'add',
        'add'])
)

console.log(
    addAndRemove([
        "remove",
        "remove",
        "remove"
    ])
)


=>1
  2
  3
  4
  1
  4
  5
  Empty
