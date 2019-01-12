// PARAMETERS

var dog = "Dog";

function pet(animal) {
    console.log(`I have a ${animal} for a pet.`);
}

pet(dog);

//Challenge write a function that takes two parameters :
//firstname
//lastName


var fName = "Nate";
var lName = "Deisler";

function name(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    console.log(fullName);
    return fullName;
}

name(fName, lName);