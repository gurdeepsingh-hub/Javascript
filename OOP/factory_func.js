// any function which return an object is known as factory function

function circle(radius){
    return{
        radius: radius, // we can use raduis only as both parameter and variable have same names
        draw: function(){
            console.log("draw circle with radius : " + radius);
        } 
    }
}

let FirstCircle = circle(2);
FirstCircle.draw();

const SecondCircle = circle(3);
SecondCircle.draw();

// change radius of FirstCircle
FirstCircle= circle(4);
FirstCircle.draw(); 

// change radius in second circle gives error as it is constant
SecondCircle = circle(5);
SecondCircle.draw();
