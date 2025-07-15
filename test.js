/**
 * make a loop for printing 7 modular under 100
 */

let n = 7;
for (let i = n; i < 100; i++){
    if ( i % n == 0) {
        console.log(i);
    }
}