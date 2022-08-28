function subSum(arr,start,end) {
  
  if(!Array.isArray(arr)) return NaN
  
  if(end > arr.length)  end = arr.length
  
 return arr.splice(start,end).reduce((acc,value) => (!isNaN(value)) ?  acc + value : NaN,0)

}


[10, 20, 30, 40, 50, 60], 3, 300 =>	150
[1.1, 2.2, 3.3, 4.4, 5.5], -3, 1 =>	3.3
[10, 'twenty', 30, 40], 0, 2 =>	NaN
[], 1, 2	=> 0
'text', 0, 2	=> NaN
