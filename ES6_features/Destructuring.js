const person= {
    FirstName: 'gurdeep',
    MiddleName: 'singh',
    LastName: 'ramgharia'
};

//traditional
// let First = person.FirstName;
// let Middle = person.MiddleName;
// let Last = person.LastName;

//modren
let {FirstName : First, LastName : Last, MiddleName: Middle} = person;

console.log(First , Middle, Last);