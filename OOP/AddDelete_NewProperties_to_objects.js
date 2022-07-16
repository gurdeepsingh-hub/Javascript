function Circle(radius){
    this.raduis = radius;
    this.draw = function(){
        console.log("draw circle with radius : " + radius);
    }
}



const circle = new Circle(20);

console.log("before adding New Property")
console.log(circle);

console.log("After adding New Property \n 1. dot notation");
// two ways to add new porperty
// 1. dot notation
circle.location = {x: 0, y: 0};
console.log(circle);

console.log("\n\n\n");

console.log("After adding New Property \n 2. bracket notation");
// 2. Bracket notation (usefull in dynamically assign a name to property)
let PropertyName = "PerimenterAndArea"; // can prompt to gate user valued name
circle[PropertyName]= {perimeter: 10, area: 20};
console.log(circle);

console.log("\n\n\n");

//deleting property
console.log("deleting property: ")
delete circle.location;
console.log(circle);

console.log("\n\n\n");

delete circle[PropertyName];
console.log(circle);