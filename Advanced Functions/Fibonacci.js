function getFibonator() {
 let a = 1;
 let b = 0;
 let result = 0;
 
   return () => {
       result = a;
       a = a + b;
       b = result
    
     return b
 }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); //
