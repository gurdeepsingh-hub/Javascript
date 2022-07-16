//Abstraction : The concept of Hiding the details which we dont need out of scope, Show only essenstial.

function Circle(radius){
    this.raduis = radius;

    //the variables DefaultLocation and optimalRaduis are not acessible outside this object 
    let DefaultLocation ={x:1,y:1};

    let optimalRaduis= function(){
        // any code which only needs inside Circle function
    }
    this.draw = function(){
        let x,y;//x,y are varibales having scope of this function;
        //(x,y,optimalRaduis,DefaultLocation) is closure of this function
        optimalRaduis();

        console.log("draw circle with radius : " + radius);
    }
}