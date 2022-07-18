let str = "good morning !@! !@!"

console.log(str.match(/^good/g));//return true and print good
console.log(str.match(/^goods/g));// return false and print null

console.log(str.match(/!@!$/g));
console.log(str.match(/!@!/g));

console.log(str.match(/^good morning !@! !@!$/g));// to match full string exactly