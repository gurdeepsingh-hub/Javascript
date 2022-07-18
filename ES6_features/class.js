class Person{
    constructor(name){
        this.name= name;
    }

    walking(){
        return this.name + ' walking'
    }
}

let person1 = new Person("gurdeep");
let person2 = new Person("Dilbag");

console.log("person1: " + person1.walking() + "\n person2: " + person2.walking());