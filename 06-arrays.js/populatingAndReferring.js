

let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheese cake', 'hotdog'];
let newFood = food.slice(3);
food.push("pizza"); //push() adds a item to the END of the array

food.splice(3, 0, "Banana"); //splice can add an item to an array (1- position in array, 0- cuts/deletes how many from the array, "banana"-inserts new item at index 1)


console.log(newFood);
console.log(food);

food.pop();
console.log(food);

// for (f in food) {
//     console.log(food[f] + " " + f);
// }

// for (var i = 0; i < food.length; i++) {
//     console.log(food[i]);
// }

