

function solve(arr) {

const actionMap = {
   true: "unshift",
   false: "push"
}

  return arr
      .reduce((result,x)=> {
         result[
           actionMap[x < 0]
         ](x);
         return result
      },[])

      
}

console.log(
  solve([3,-2,0,-1])
)
