/*
LITERALS: representation of value that we write in JS
*/

console.log(`string ${3 + 7}`); // string 10

let x = -4.8; 

console.log(x); 
console.log(-4.8); 

let obj = {
    a: 4, 
    b: 9,
    c: 38, 
}; 

console.log(false); 

console.log(null); 

console.log(undefined); 

console.log(typeof undefined); 

let arr = [8, 14, 66, 30, null]; 

console.log(arr[5]); //undefined 

/*
STATEMENTS vs. EXPRESSIONS
*/

//Bella -> this points to the value of bella being my dog. 
//Bella is a good dog. -> this is a statement/sentence that does not point to something.
//statements in JS
let x = 5; 

if (3 > 0) {
    console.log('three is greater than zero')
}

for (let i of ['a' + 'nt', 'b' + 'at', 'c' + 'at']) {
    console.log(i); 
}
//expressions
for (let i of true ? [0,1,2] : ['a', 'b', 'c']){
    console.log(i); // 0 1 2 
}


//Literals are expressions and can use operators 

/*
SCOPE
*/

let x = 5; 

for (let i of [0, 1, 2]) {
    console.log(`${i}: ${x}`) // this is a globally scoped x 
}

let x = 6; 

for(let i of [0, 1, 2]) {
    let x = 2; // this is a locally scoped x 
    console.log(`${i}: ${x}`) 
}

let x = 8; 

for(let i of [0, 1, 2]) {
    let x = 2; 
    let j = 9; 
    for(let j of ['a', 'b', 'c']); 
    console.log(`${i}, ${j}, ${x}`);
}

function addNumbers (a, b) {
    console.log(a + b); 
}

addNumbers(3,10); // 13

/* 
HOISTING
*/

console.log(x); //5

let x = 5; //cannot access x before initilization 



function functionTwo () {
    console.log(functionOne()); 
}

functionTwo(); //we are invoking functionTwo before we actually define functionOne

function functionOne() {
    return 4; 
} 





function getWeather (zipcode, date, format) {
    let weather; 

    // ...
    let result = getFromServer(zipcode); 
    // ...


    return weather; 
}

function getFromServer (zipcode) {
    // ... 
    parseResults(res); 
    // ...
}

function parseResults (results) {

}

/*
CHALLENGE 

Given dogArray, create a new array dogstatements. 
In dogStatements, you should have "______ is a good god" if the dog's name is 12 characters or less. 
If the dog's name is greater than 10 characters, you should have "_____ is a VERY good dog "
*/

const dogArray = ['whippet', 'st bernard', 'goldendoodle', 'skye terrier', 'chinese crested'];

//['whippet is a good dog', 'st bernard is a good dog', etc.]

//PLEASE USE: for-in or for-of, and a ternary 

// let arr = []; 
// arr.push(0); // [0]
// arr.push(1); // [1]
// arr.push(2); // [2]

// console.log(arr); = [0, 1, 2]

let dogStatements = []; 

for (let dog of dogArray) {
    dogStatements.push( (dog.length <= 12) ? `${dog} is a good dog` : `${dog } is a VERY good dog`); //ternary 
}

console.log(dogStatements); 



let str = 'the enormous hamster'; 

console.log(str[4]); // bracket notation accesses the number of characters in the string which is 4


//for every statement of the dogStatements array: 
for (let statement of dogStatements) {
// create an array
    let arr = []; 
// for every letter of the statement: 
    for (let index in statement) {
// if it is even-indexed, make it lower case and add it to the array
// if it is odd-indexed, make it Upper case and add it to the array
    if (index % 2 == 0 ){
        arr.push(statement[index].toLowerCase()); 
    } else {
        arr.push(statement[index].toUpperCase()); 
    }
  }
// turn the array into a string
let str = arr.join('')
// print out the string
console.log(str); 
}


