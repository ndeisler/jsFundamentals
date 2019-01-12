/********************* 
OBJECTS
***********************
An object is a data type that constists of key/value pairs. 

let name = {
    (1)    (2)
  key   :   'value';
  (3)  (4)    (5)
}
1- Name of the object, how its identified
2- All of the data for an object is contained in curly braces
3- this is the name of the specific data inside the object
4- The data name and value are separated by a colon
5- The value of the data. Each key/value pairing ends with a comma */


var netflix = {
    id: 9,
    name: "Super Store",
        season1: {
        seasonInfo: {
            episodeInfo : [
            { episode: 1, episodeName: "Pilot"},
            { episode: 2, episodeName: "Magazine Profile"},
            { episode: 3, episodeName: "Shots and Salsa"},
            { episode: 4, episodeName: "Mannequin"},
            { episode: 5, episodeName: "Shoplifter"},
            { episode: 6, episodeName: "Secret Shopper"},
            { episode: 7, episodeName: "Color Wars"},
            { episode: 8, episodeName: "Wedding Day Sale"},
            { episode: 9, episodeName: "All-Nighter"},
            { episode: 10, episodeName: "Demotion"},
            { episode: 11, episodeName: "Labor"}
            ]
        }
        },
        season2: {},
        season3: {}
    };

// console.log("all data:", netflix);
// console.log("season info:", netflix.season1.seasonInfo);
console.log("episode info:", netflix.season1.seasonInfo.episodeInfo[0].episodeName);

//blank is my fav ep from season blank

var favEp = netflix.season1.seasonInfo.episodeInfo[4].episodeName;
var epNum = netflix.season1.seasonInfo.episodeInfo[4].episode;

var season = Object.keys(netflix)[2]; //this is how you find the name of the key part of the keyvalue pair
console.log(season);
console.log(`My favorite episode is episode ${epNum}, ${favEp}, from ${season}`);

let spaceJam = {
    toonSquad: {
      human: 'Michael Jordan',
      rabbit1: 'Bugs Bunny',
      rabbit2: 'Lola Bunny',
      duck: 'Daffy Duck',
      tDevil: 'Tasmanian Devil',
      bird: 'Tweety',
      cat: 'Sylvester',
      pig: 'Porky Pig'
    },
    monstars: {
      0: 'Bupkus',
      1: 'Bang',
      2: 'Nawt',
      3: 'Pound',
      4: 'Blanko'
    },
    nbaPlayers: {
      phoenixSuns: 'Charles Barkley',
      newJerseyNets: 'Shawn Bradley',
      newYorkNicks: 'Patrick Ewing',
      charlotteHornets1: 'Larry Johnson',
      charlotteHornets2: 'Muggsy Bogues'
    }
  }

let myKeysPlayers = Object.keys(spaceJam.nbaPlayers);
let playerValues = Object.values(spaceJam.nbaPlayers);

console.log(myKeysPlayers);;
console.log(playerValues);

console.log(spaceJam.nbaPlayers);



var zuc = garden.vegetable;
var zuc2 = Object.values(garden.vegetable);
var myKeys = Object.keys(garden);

console.log(zuc);
console.log(zuc2);
console.log(myKeys);

console.log(Object.keys(garden)[2]);


let x = "vegetable";

console.log(garden[x]);

let baking = {};
baking["zucchini"] = 'better make some bread!';

console.log(baking);
console.log([baking[garden["vegetable"]]]);


let garden = {
    vegetable: "zucchini",
    flower: "sun flower",
    fruit: "grape",
    water: true,
    sun: true,
    size: 10
};

var veg = garden["vegetable"];
var fl = garden.flower;
console.log(veg);
console.log(fl);

let x = "water";
Object.keys(garden).forEach(i => {
    if (i === x) {
        console.log("there is water: " + garden[x]);
    }   
})













  

