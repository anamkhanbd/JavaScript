let person = ['anam','sami', 'ali', 'sara', 'samir'];
// console.log(person);// prints the array of names

// printing sami 
// console.log(typeof person[1]); // prints 'sami'

// loop use to print all names

/*
for  (let a = 0; a < person.length; a++) {
    console.log(person[a]); // prints each name in the array
}
*/
/*
//use forEach to print all names
person.forEach((name) => {
    console.log(name); // prints each name in the array
});
 */

/*
//use dowhile loop to print all names
let i = 0;
do {
    console.log(person[i]); // prints each name in the array
    i++;
} while (i < person.length);
*/



/**
 * JavaScript Array Methods
 * 
 * Basic Array Methods
Array length    Array toString()    Array at()
Array join()    Array pop()         Array push()
Array shift()   Array unshift()     Array delete()
Array concat()  Array copyWithin()  Array flat()
Array slice()   Array splice()      Array toSpliced()
*
*
 */

// Array length
console.log(person.length); // prints the length of the array
// Array toString()
console.log(person.toString()); // prints the array as a string

//array delete
delete person[4]; // deletes the element at index 1
console.log(person); // prints the array after deletion