// ARROW function

function coffeeeeee() {      //<= block body
    console.log("black");
}

// or can be typed like an arrow function

let coffee = () => {
    console.log("black")
}

coffee();


var cat = (kitten, puppy) => {
    console.log(`I have  ${kitten} cat(s) and ${puppy} dog(s)`);
}

cat(1, 35);
//arrow function as an expression


var fatArrows = (x) => console.log(x); //short hand version of arrow function... Concised body

fatArrows("This is a function, nothing to see");

let otherFatArrows = (x) =>
    console.log(x);

otherFatArrows("THis is not a test");


let namingMachine = (fname, lname) => (fname, lname); // to return multiple parameters, return in array or object
console.log(namingMachine("Nate", "Deisler"));


//Challenge
//Create two functions
// first - take a string parameter, and capitilize it;
// first - return that string;
// second - string as a prameter, and then lowerCase;
// console.log result


var string = "heLlo";

let capString = (str) => {
    let capitalString = str[0].toUpperCase() + string.slice(1).toLowerCase();
    return capitalString;
}

console.log(capString(string));

var unCapString = (str) => {
    let unCapitilizeString = str.toLowerCase();
    return unCapitilizeString;
}

console.log(unCapString(capString(string)));
