function GCD(num1,num2) {
   let result = num1 % num2;
   while(result !== 0) {
    num1 = num2;
    num2 = result;
    result = num1 % num2;
   }
   return num2
}

console.log(
    GCD(15,5)
)

console.log(
    GCD(2154,458)
)

-> 5
-> 2
