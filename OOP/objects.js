let employee ={
BaseSalary: 30000,
overtime: 20,
rate: 210,
//getters
getWage: function(){
        return this.BaseSalary +(this.overtime*this.rate);
    },
getBaseSalary(){
    return this.BaseSalary;
},
getOvertime(){
    return this.overtime;
},
getRate(){
    return this.rate;
},
// setters
setBaseSalary: function(BaseSalary){
    this.BaseSalary= BaseSalary;
},
setOvertime: function(overtime){
    this.overtime= overtime;
},
setRate: function(rate){
    this.rate= rate;
}

};

console.log(employee.getWage());

employee.setBaseSalary(40000);
console.log(employee.getWage() + " After changing base salary");

employee.setOvertime(30);
console.log(employee.getWage() + " After chnaging overtime");

employee.setRate(300);
console.log(employee.getWage() + " After chnaging Rate");