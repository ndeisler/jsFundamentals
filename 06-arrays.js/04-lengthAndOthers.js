let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length);


let colors = ["blue", "red", "green", "purple"];

console.log(colors.length);

console.log(colors.toString());


colors.forEach(i => {
    console.log(i);
})


//Challenge first check if you are working with an array then flip the balues within the array(what was the index 4 is now in 0, 3 to 1, etc)
//usding a method only, print the values of the newly arranged array

var numbers = [1, 6, 3, 78];

function checkAndFlip (arr) {
    if (arr instanceof Array === true) {
        arr.reverse();
        arr.forEach(i => {
            console.log(i);
        });
        console.log(arr);

    } else {
        console.log("!Array");
    }
    
}
checkAndFlip(numbers);

var x = "";
for (var i = 0; i < numbers.length; i++) {
    x += "* "
    console.log(x);
}

let arr = [5, 2, 7, 4, 8, 23, 1003, 0, 15, 5];

arr.forEach(i => {
    if (i % 3 === 0 && i % 5 === 0) {

        console.log(i = "fizzbuzz");

    }
    else if (i % 3 === 0) {
        console.log(i ="fizz");
    }
    else if (i % 5 === 0) {
        console.log(i = "buzz");
    } else {
        console.log(i);
    }
})

