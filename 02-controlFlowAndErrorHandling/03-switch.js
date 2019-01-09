//SWITCH Statements

let friend = "Autumn";

switch (friend) {
    case "Zack": 
        console.log("Let's go play Ultimate!");
        break;
    case "ing":
        console.log("So... are you taking me to Belgium");
        break;
    case "Adam":
        console.log("I probably have baby stuff for you to borrow");
        break;
    default:
        console.log(`You, ${friend}, are not my friend`);
}

//Challenge

let dessert = "Bread Pudding";

switch(dessert.toLowerCase()) {
    case "pie":
        console.log("Pie, pie, me oh my!");
        break;
    case "ice cream":
        console.log("I scream for ice cream!");
        break;
    case "cake":
        console.log("Cake is Great!");
        break;
    default:
        console.log("Not on the menu!");
}

//Switch with Comparisons
let range = -8;
switch (true) {
    case (range < 0 && range > -10):
        console.log("worked");
        break;
    case range > 0 || range <= -10:
        console.log("also worked");
}