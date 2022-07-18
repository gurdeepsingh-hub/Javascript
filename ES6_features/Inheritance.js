class Person{
    constructor(name){
        this.name= name;
    }

    walking(){
        return this.name + ' walking'
    }
}

class Teacher extends Person{
    constructor(name, subject){
        super(name);
        this.subject = subject;
    }
    teach(){
        console.log(this.name + ' is teaching');
    }
}

let teacher = new Teacher('xyz', 'javascript');
teacher.teach();
console.log(teacher.walking());