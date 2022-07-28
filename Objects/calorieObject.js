function calorieObject(arr) {

    return arr.reduce((acc, value, index, array) => {
       
        (index % 2 === 0) ? acc[value] : acc[array[index -1]] = +value;
       
      return acc
    }, {})
}


console.log(
    calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
)


=> { Yoghurt: 48, Rise: 138, Apple: 52 }
