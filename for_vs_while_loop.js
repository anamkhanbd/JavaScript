const { use } = require("react");

/**
 * print 1 to 10 using a for loop
 */
for (let i = 1; i <= 10; i++) {
     // console.log(i);
}

/**
 * print a name with numbering from 1 to 10 using a for loop
 */
let a = 1;
while (a <= 10) {
     if (a % 2 === 0) {
     //     console.log(a);
     }
     a++;
}

/**
 * print 5 multiples of 10 times using a for loop
 */
let m = 5;
for ( let i = 1; i <=10; i++){
    let result = m * i;
          // console.log(m+'x'+i+'='+result);
}

/**
 * 1 to 100 numbers summation using a for loop
 */

// let number = 100;
// let sum = number*(1+number)/2;
// console.log('The sum of 1 to 100 is: ' + sum);

//try again
const u = 100;
const sum = u*(1+u)/2;
// console.log(sum);

/**
 * when user type exit close the loop
 */
let userInput =prompt('Type Anithing to test :');
while (userInput !== 'exit') {
    // console.log('You typed: ' + userInput);
    userInput = prompt('Type Anithing to test :');
}if (userInput === 'exit') {
    // console.log('Loop exited.');
     alert('Loop exited. You typed exit. Thank you!');
}

