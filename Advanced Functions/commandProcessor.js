function solution() {
    
    return  {
      
        param:"",

        append: function(string) { this.param += string },
        
        removeStart: function (index) { return (!isNaN(index)) ? this.param = this.param.slice(index) : false },
        
        removeEnd: function (index) { return (!isNaN(index)) ? this.param = this.param.slice(0,-index) : false},
        
        print: function () { console.log(this.param) } 
    }
}




let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print()
