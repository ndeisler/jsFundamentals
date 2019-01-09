// FOR IN loops

var student = {
    name: "Harry",
    awesome: true,
    degree: "JavaScript",
    week: 1
}

for (item in student) {
    console.log(item);
}


for (item in student) {
    console.log(student[item]);
}

var pieArray = ["cherry", "chocolate and peanutbutter", "apple", 'chicken pot'];

for (pie in pieArray) {
    console.log(pie);
}

//Challenge write a for in loop that capitlizes the first letter of a student's name
console.log("**********");

var studentName = "naTe";
var capName;
//       | can be anyname. Is 
for (let n in studentName) {
   if (n == 0) {
       capName = studentName[n].toUpperCase();
   } else {
       capName += studentName[n].toLowerCase();
   }
   console.log(capName);
}
