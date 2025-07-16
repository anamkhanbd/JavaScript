// let Names =  ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy'];
// Names.forEach(function(anam)
// {
//     console.log(anam);
// });
  


/**
 * print 1 to 10 using a forEach loop
 * showing result in console
 * event an odd 
 */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(function(num) {
    if (num % 2 === 0) {
        console.log("Event");
    }else {
        console.log("odd");
    }
});