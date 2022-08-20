function attachEventsListeners() {
   let inputDistance = document.getElementById("inputDistance")
   let inputUnit = document.getElementById("inputUnits")
  ///////////////////////////////////////////////////////
   let buttonConvert = document.getElementById("convert")
   /////////////////////////////////////////////////////////
   let outputDistance = document.getElementById("outputDistance")
   let outputUnit = document.getElementById("outputUnits")
   
   let units = {
    "km": 1000,
    "m": 1,
    "cm": 0.01,
    "mm": 0.001,
    "mi": 1609.34,
    "yrd": 0.9144,
    "ft": 0.3048,
    "in": 0.0254
   }

   buttonConvert.addEventListener("click",function() {
    let optionInput = inputUnit.options[inputUnit.selectedIndex].value;
    let optionOutput = outputUnit.options[outputUnit.selectedIndex].value;
    
    outputDistance.value = convertFunction(inputDistance.value,units[optionInput],units[optionOutput])
   
   })

 let convertFunction = (inputValue,incomingDistance,outputUnit) => {
    let result =  (inputValue * incomingDistance) / outputUnit;
    return result
 }
}
