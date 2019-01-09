function hi() {
    console.log("hi");
    return "Hey";
}

hi();

console.log(hi);
console.log(hi());


//when a function does not have a return, it returns undefined...

//Challenge
//Create a function, that when invoked, lists the numbers from 1 to 2;

function oneToTen() {
    for(var i = 1; i <= 10; i++) {
        console.log(i);
    }
}
oneToTen(); //invoked or called
console.log(oneToTen());


//Challenge 
//Given an array, creat a function that lists out the values individually

var myArr = ["This", "is", "really", "cool"];
function listValues(arr) {
    myArr.forEach(function(value) {
        console.log(value);
    });
}
listValues(myArr);

var myArray = ["This", "is", "really", "cool!"];
function listArr() {
    
    for (var i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }
}
listArr();

let arr = ["This", "is", "really", "cool?"];
function list() {
    for (value of arr) {
        console.log(value);
    }
}

list();