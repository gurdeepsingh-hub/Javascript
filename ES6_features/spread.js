let firstArray = [1,2,3];
let secondArray = [4,5,6];

// one way to concatenae them
let combineUsingConcat = firstArray.concat(secondArray);
console.log(combineUsingConcat);

// other way to spread them
let CombineUsingSpread = [...firstArray, ...secondArray];
console.log(CombineUsingSpread);

//to add new item during joining
let CombineAddingUsingSpread = [...firstArray,'a', ...secondArray];
console.log(CombineAddingUsingSpread);

// for objects we can also use spread
let firstObj = {FirstName: 'Gurdeep'};
let secondObj = {MiddleName: 'singh'};

let ThirdObj= {...firstObj, ...secondObj, LastName: 'Ramgharia'};
console.log(ThirdObj);

