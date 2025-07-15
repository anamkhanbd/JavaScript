/**
 * make a loop for printing 7 modular under 100
 */

let n = 7;
for (let i = n; i < 100; i++){
    if ( i % n == 0) {
        // console.log(i);
    }
}

/**
 * event an add loops 
 */

let i = 1 ;
for (; i <=20 ; i++){
    if (i % 2 == 0){
        console.log(i+' ' +"Even");
    }else {
        console.log(i+' '+"Odd");
    }
}