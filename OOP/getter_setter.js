function Circle(radius){
    this.raduis = radius;
 
    let DefaultLocation ={x:1,y:1};
    
    this.draw = function(){
        console.log("draw circle with radius : " + radius);
    }

    Object.defineProperty(this, 'defaultLocation' ,{
        get: function(){
            return DefaultLocation;
        },
        Set: function(value){
            DefaultLocation.x = value;
            DefaultLocation.y = value;
        }
    });
}

const circle= new Circle(10);

circle.defaultLocation = 8;

console.log(circle.defaultLocation);