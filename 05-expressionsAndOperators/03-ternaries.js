//Ternary operator

let x = 6;

// if (condition) {
    
// } else {

// }

x > 0 ? console.log("yes") : console.log("no");


// if true ^ ..........else^ ..............^

//        ()            ?     true    :    false
//        ^             ^       ^           ^
//     condition    Ternary   block        block

//Challenge write a ternary that does the same thing as the age challenge
let young = "too young";
let vote = "Can vote";
let drink = "Can Drink";
let rent = "Can rent car";
let age = 42;
(age > 25) ? console.log(rent, drink, vote) : (age >= 21) ? console.log(drink, vote) : (age >= 18) ? console.log(vote) : console.log(young);