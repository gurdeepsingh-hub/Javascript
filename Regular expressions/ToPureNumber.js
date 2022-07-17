// to convert number to pure phone number

//let str = "+91 98555-07091";
//let str = "+7(903)-123-45-67";
let str = "9803002311";

if(str.length == 10){
    console.log(str.match(/\d/g).join(''));
}else if(str.length > 10){
    str= str.match(/\d/g);
    str = str.slice(-10).join('');
    console.log(str);
}else{
    console.log("optimum length of Phone number is 10")
}