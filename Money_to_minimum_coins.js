function changeCoins (n) {
    let number = 0 ;
        if(n%25 === 0 || n>0){
            number+= Math.floor(n/25);
            n =n%25;
            if(n%10 === 0 || n>0){
                number+= Math.floor(n/10);
                n =n%10;
                    if(n%5 === 0 || n>0){
                    number+= Math.floor(n/5);
                    n =n%5;
                    if(n%2 === 0 || n>0){
                        number+= Math.floor(n/2);
                        n =n%2;
                        if(n%1 === 0 || n>0){
                            number+= Math.floor(n/1);
                            n =n%1;
                        }   
                    }
                }
            }
        }
    return number;

}

console.log(127);