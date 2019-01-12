/*
Arrays
************
Arrays are containers that hold lists of items

let list =  [  'item1',   'item2',    'item3'];
    (1)    (2)   (3)

1- name of the Array, or list; 
2- The Array is inside of these square brackets
3- each item, regardless of datatype, is separated by commas

Denoted by []
Has values ('blue', 'green', 'yellow'), separated with commas
*/




let list = ["oragne", true, 28];

console.log(list[1]);

let students = ["Tony", "Marshall", "ray", 23, true, ["ryan", "Iesha", "amira"]];
console.log(students[5][1]);

console.log(typeof students); //arrays are objects that hold multiple types of values 

console.log(students instanceof Array);
console.log(students[5][1]);

//challenge  go into the nested array and get "amira" print out "hellow amria, you look nice today"
var name = students[5][2];
console.log(`Hello ${name}, you look nice today`);



let num = [1, 4, 6, 5, 3];
let evenNum = [];
let oddNum = [];

for (let i = 0; i < num.length; i++) {
    if (i % 2 === 0) {
        evenNum.push(num[i]);
    }
    else if ((i - 1) % 2 === 0) {
        oddNum.push(num[i]);
    }
    
}
console.log(evenNum, oddNum, num);




