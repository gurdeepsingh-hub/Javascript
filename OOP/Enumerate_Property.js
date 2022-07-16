function Circle(radius){
    this.raduis = radius;
    this.draw = function(){
        console.log("draw circle with radius : " + radius);
    }
}

const circle =new Circle(10);

for(let key in circle){
    //to print names of properties and methods
    console.log(key);
    //to print properties and methods of object with value
    console.log(key, circle[key]);
    // to print only properties
    if(typeof circle[key] != "function"){
        console.log(key);
    }
    // to print only Methods
    if(typeof circle[key] == "function"){
        console.log(key);
    }
}

// to print names of properties and methods
const keys = Object.keys(circle);
console.log(keys);