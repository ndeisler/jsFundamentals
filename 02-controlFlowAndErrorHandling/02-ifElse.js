//If else statements

let money = false;

if (money) {
    console.log("Get some coffee");
} else {
    console.log("Dumpster diving it is");
}


let weather = 75;
if (weather < 70) {
    console.log("wear a jacket");
} else {
    console.log("No jacket neccessary");
}

//If else statement ath checks your name; If it is your name, console,log "hello, my name is <yourname>. If the name does not match, console.log" Hello, what is your name
var name = "Nate Deisler";
if (name === "Nate Deisler") {
    console.log(`Hello, my name is ${name}`);
} else {
    console.log(`Hello, what is your name?`);
}

//challenge: capitalize the First Letter of name only

let myName = "harRy";
// if (myName === "Harry") {
//     console.log();
// } else {
//     myName = "Harry";
//     console.log(myName);
// }

if (myName[0] === myName[0].toUpperCase()) {
    let firstLetter = myName[0] + myName.slice(1).toLowerCase();
    console.log(firstLetter);
} else {
    let firstLetter = myName[0].toUpperCase() + myName.slice(1).toLowerCase();
    console.log(firstLetter);
}

let str = "nAthan";
let lowerName = str.toLowerCase();
let capFirstName = str[0].toUpperCase() + lowerName.slice(1);


console.log(capFirstName);
//console.log(myName.charAt(0).toUpperCase() + myName.slice(1, 3) + myName.charAt(3).toLowerCase() + myName.slice(4));


//ELSE IF STATEMENTS

// if () {

// }
// else if () {

// } else {

// }

let todaysWeather = 40;
if (todaysWeather > 70) {
    console.log("Wear a tshirt!");
}
else if (todaysWeather <= 70 && weather > 50) {
    console.log("Might need a coat");
} else {
    console.log("Stay inside");
}


let age = -1;

if (age <=17) {
    console.log("Sorry, you are too young to to anything!");

} else if (age >= 18) {
    console.log("Yay! you can vote");
    if (age >=21) {
        console.log("Yay! you can drink!");
        if (age >= 25) {
            console.log("yay you can rent a car!");
        }
    }
}

if (age <=17) {
    console.log("Sorry, you are too young to to anything!");
} else if (age >= 18 && age < 21) {
    console.log("Yay! you can vote");
} else if (age >= 21 && age < 25) {
    console.log("Yay! you can vote, and drink. Maybe not at the same time");
} else {
    console.log("Yay you can vote, drink, and rent a car! But probably not advisable to do them all at the same time");
}



let young = "you are too young to do anything";
let vote = "you are old enough to vote";
let drink = "You can drive";
let rent = "You can rent a car";

if (age >= 0 && age < 120) {
    if (age >= 25) {
        console.log(vote, drink, rent);
    } else if (age >= 21 && age < 25) {
        console.log(drink, vote);
    } else if (age >= 18 && age < 21) {
        console.log(vote);
    } else {
        console.log(young);
    }
} else {
    console.log("please pick a real age dummy");
}
