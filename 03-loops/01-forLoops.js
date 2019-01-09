//FOR LOOPS

for (var i = 0; i < 10; i++) {
    console.log(i);
}


//Challenge using a for loop count to 20, by 2's
console.log("****************");

for (var i = 0; i <= 20; i += 2) {
    console.log(i);
}

//Challenge 2 using as for loop count from 10 to 0 going down by 1's
console.log("****************");

for (let i = 10; i >= 0; i--) {
    console.log(i);
}

//Challenge count from 0, going down by 2's to -24 
console.log("*****************");


var x = -24;
for (let i = 0; i >= x; i -= 2) {
    console.log(i);
}

//Challenge: using a for loop, go through a name and display each letter individually
console.log("*****************");

let y = "supercalifragilisticexpialidocious";
for (let i = 0; i < y.length; i++) {
    console.log(y[i]);
}

//challenge for loop where you add up all the numbers from 1 to 59 ( should wqual 1275)
console.log("*****************");

var sum = 0
for (let i = 1; i <= 50; i++) {
    sum += i;
}
console.log(sum);


var star = "";
for (let i = 0; i < 50; i++) {
    star += "* ";
    console.log(star);
}
