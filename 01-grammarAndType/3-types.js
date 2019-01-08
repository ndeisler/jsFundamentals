/* 
Booleans
******************
What is a boolean? Boolean can represent: true/false, yes/no, on/off


var y = false;
(1)
1-Keyword for boolean - no quotation marks
*/ 

var x = true;

let on = true;
console.log(on);

let off = false;

/* 
Null
******************
Null = empty value (not 0; not undefined)
It is like an empty container; nothing is in it, but it still exists as a space to fill
*/
let empty = null;
console.log(empty);

/*
Undefined
******************
Undefined = no value assigned (not even an empty container)

UNDEFINED IS NOT AN ERROR
*/
let undef = undefined; // Do not do this! Should be => "let undef;"
console.log(undef);

let grass;
console.log(grass);

/* 
Numbers
**********
Numbers are exactly what they sounds like, numbers. In JS, you dont need anything special to write them. 
*/

let myAge = 30;
console.log("I am " + myAge + " years old");
console.log(`I am ${myAge} years old`);

let percise = 9999999999999999; // weird results
console.log(percise);

let notQuite = 0.2 + 0.1;
console.log(notQuite); // weird results

/*
Strings
*********
Strings are Datatypes used to represent text and are wrapped in either a single or double quote
Strings are Primative Datatype. This also includes Numbers, Booleans, Null, Undefined and others 
*/

let stringOne = "This is a string";
let stringTwo = 'single quotes';
console.log(stringOne + ", " + stringTwo); //String concatenation 
console.log(stringOne, ",", stringTwo);


//number vs string
let first = 1050 + 100;
let second = "1050" + "100";
console.log(first, second);