function wordReverse (str) {
    let stack =[];
    let WordLength = 0;
    let reverseString ='';
    for(let i=0;i<str.length;i++){

        if(str.charAt(i) == (/[a-z]/i) )
        {
            stack.push(str.charAt(i));
        }else if(str.charAt(i) != (/[a-z]/i) ){
            while(stack.length > 0){
                reverseString += stack.pop();
            }
            reverseString += " ";
        }
    }
    while(stack.length > 0){
        reverseString += stack.pop();
    }
    return reverseString;
}


    console.log(wordReverse("hellO guyS!!!"));