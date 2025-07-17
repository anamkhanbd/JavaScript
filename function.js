// /**
//  * make a function to summation tow numbers
//  */

// function sum (a,b) {
//     console.log(a+b);
// }

// // sum(10,50);
// let a,b ;
// a = 80;
// b = 40;
// sum(a,b);

/**
 * Make a function an Fizz Buzz Proggram
 */

function FizzBuzz(){
        for(let i = 1; i <= 100; i++){
        if (i % 3 == 0 && i % 5 == 0) {
            document.write('FizzBuzz<br>');
        } else if (i % 3 == 0){
            document.write('Fizz<br>');
        } else if (i % 5 == 0){
            document.write('Buzz<br>');
        } else {
            document.write(i + '<br>');
        }
    }
}

FizzBuzz();
