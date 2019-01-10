let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheese cake', 'hotdog'];

food.forEach(f => {
    console.log(f);
})

//OR

food.forEach(function(i, index) {
    console.log(i, index);
})

//Challenge creat a list of movies use forEach to list your movies
// add another movie at the end and replace one of you existing movies with another one

let movies = ["indiana Jones lost ark", "goonies", "birdbox", "ready player one", "the notebook"];

function arr(arr) {

    arr.forEach(function(i) {
        console.log(i);
    })

    arr.push("indiana jones last crusades");
    arr.splice(4, 1, "indiana jones temple of doom");
    console.log(arr);
    arr.forEach(f => {
        console.log(f);
    })
}

arr(movies);
