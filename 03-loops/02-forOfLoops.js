//FOR OF LOOPS


var student = {
    name: "peter",
    awesome: true,
    degree: "JavaScript",
    week: 1
}

var pieArray = ["cherry", "chocolate and peanutbutter", "apple", 'chicken pot'];


for (item of pieArray) {
    console.log(item, "pie is my favorite");
}

for (item in student) {
    console.log(item);
}

//for in loops are used on enumerable objects. Also use with a string to identify the index
//  of the sting. 

//for of loops are used for arrays



