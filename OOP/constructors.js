// using this keyword to assign values to variables and uses new keyword to create a child
function circle(radius){
    this.raduis = radius;
    this.draw = function(){
        console.log("draw circle with radius : " + radius);
    }
}

let FirstCircle = new circle(2);
FirstCircle.draw();

const SecondCircle = new circle(3);
SecondCircle.draw();

// change radius of FirstCircle
FirstCircle = new circle(4);
FirstCircle.draw(); 

// change radius in second circle gives error as it is constant
SecondCircle = new circle(5);
SecondCircle.draw();