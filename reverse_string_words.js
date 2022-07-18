function wordReverse (str) {
    let stack =[];
    let WordLength = 0;
    let reverseString ='';
    for(let i=0;i<str.length;i++){

        if(isLetter(str.charAt(i)) )
        {
            stack.push(str.charAt(i));
        }else if(str.charAt(i) != /[a-z]/i ){
      
            while(stack.length > 0){
                reverseString += stack.pop();
            }
            reverseString += str.charAt(i);
        }
    }
    while(stack.length > 0){
        reverseString += stack.pop();
    }
    return reverseString;
}
function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }

    console.log(wordReverse("hellO guyS!!!"));