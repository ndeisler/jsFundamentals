var a = 1; //first variable in JS


var     b      =      1; 
/*(1)    (2)    (3)    (4)     

1- Keyword
2- Variable name 
3- Assignment Opperator
4- Variable value

*/
console.log(a + b);


/*notes on variables:
//1)  A variable name must begin with a letter, underscore, or dollar sign
//2)  Numbers may follow the above characters, but cannot come first
//3)  JavaScript is case sensitive-- 'hello' and 'HeLlo' are different variables
//4)  No spaces are allowed in variable names
//5)  camelCase is the best practice for naming variables. 
This is good practice because it helps keep variables readable--  var myName = 'Autumn'; 
*/


/*****************
 DECLARATIONS
 *****************/
var myName = "Nate"; 
/*
Declarations are the LEFT SIDE of a variable
  It is simply the var x
  It is on the left side of the assignment operator (=)

Initializations are the RIGHT SIDE of a variable
  It sets the value of the variable
  It incorporates the variable name (x), the assignment operator (=), and the value (10) => x = 10
*/


var x;
console.log("Declaraton: ", x);

x = 10;
console.log("initialization :" , x);

x = 33;
console.log("initialization :" , x);

var y = "Hello" 
console.log("Both :" ,x, y);

// var, let, const:

let today = "Great!";
const elevenFifty = "Wonderful!";

console.log(today, elevenFifty);

today = "Lovely!";
console.log(today, elevenFifty);

elevenFifty = "super!"; // Going to cause error. Cannot change a const variable. 
console.log(today, elevenFifty);


