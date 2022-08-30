
class Circle {
   
    constructor(radiusInput) {
        this._radius = radiusInput;
    }

   get radius() {
      return  this._radius
   }
   get diameter() {
    return this._radius * 2
   }
   set diameter(param) {
    this._radius = param / 2
   }
   get area() {
    return Math.PI * this._radius * this._radius
   }

}


let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);


=>Radius: 2
  Diameter: 4
  Area: 12.566370614359172
  Radius: 0.8
  Diameter: 1.6
  Area: 2.0106192982974678
