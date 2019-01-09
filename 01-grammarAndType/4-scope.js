/*
What is scope?

JS has both LOCAL and GLOBAL scope

Local = like Indianapolis
Global = like Earth

Can still be on the world when you are in Indy, but you are not necessarily in Indy when you are on the planet
*/

var x = 12;

function scope() {
    var x = 33;
    console.log(x);
}
scope();
console.log(x);

/*
Var vs. Let:

Remember how, since ES6, we now have three keywords for variables: var, let, and const?

Const is pretty straight forward; it is a constant that cannot be re-expressed.

Var and let seem to operate the same, right? Well, check out the below:
*/
var y = 12;

function varlet() {
    var y = 33;
    if (true) {
        let y = 45;
        console.log(y);
    }
    console.log(y);
}
varlet();
console.log(y);

//This is an insert!!!!!

//CONST scope bleeding
function consTest() {
    const scope = 1;
    if (true) {
        const scope = 2;
        console.log(scope);
    }
    console.log(scope);
}
consTest();

var vr = 56;
console.log(vr);

