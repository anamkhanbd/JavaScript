/**
 * Problem Sudu code ;
 *   i % 3 == 0 Fizz
 *   i % 5 == 0 Buzz
 *   i % 3 == 0 an i % 5 == 0 FizzBuzz
 */


for(let i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0 ) {
        console.log('FizzBuzz');
    }else if(i % 3 == 0){
        console.log('Fizz');
    }else if (i % 5 == 0) {
        console.log('Buzz');
    }else{
        console.log(i);
        
    }
    
}