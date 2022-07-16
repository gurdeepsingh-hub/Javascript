
// primitives are copied by value

let x=10;
let y=x;

x=20;

console.log("x = "+ x +" after value change of x");//gives x=20
console.log("y = "+ y +" after value change of x");//gives y=10

// refrence types are copied by address or refrence
let a={value: 10};
let b = a;

a.value=20;
console.log("a = " + a.value + " after value change of a");//gives {value: 20}
console.log("b = " + b.value + " after value change of a");//gives {value: 20}


//primitives
let number= 10;
 function increase(number){
    number++;
 }

 increase(number);
 console.log(number +" number ");


 //refrence or objects

let object= {value: 10};
function increase(object){
   object.value++;
}

increase(object);
console.log(object);
console.log("object");