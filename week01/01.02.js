//CHALLENGE 1 
//Who's name is longer?

/*
Write two variables. ONe will store your name and the other will store a friend's name. Find out what property you can use to check how long the names are. Console log how many letters are in each name. 
*/

/* SILVER
Expand on what you have already done and writing a conditional statement to see how has the longer name. Using string interpolation console log who's name is longer
Example Result: My name is longer than Adam's. 
*/

/* GOLD
In the console log include how many letters difference there are between the names. 
Example Result: Adam's name is shorter than mine by 4 letters. 
There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!
*/
//BRONZE
let secondPerson= 'noland'; 
console.log(secondPerson.length); // 6

let firstPerson = 'erin'; 
console.log(secondPerson.length - firstPerson.length); // 2 
//SILVER
if (secondPerson.length > firstPerson.length){ 
    console.log(`${secondPerson}'s name is longer`); // noland's name is longer
} else if (noland.length < erin.length){
    console.log('Erin\'s name is longer'); 
} else if (noland.length == erin.length){
    console.log('the names are the same length!');
}
//GOLD
let string = 'Noland\'s name is longer by how many letters:';
console.log(string, secondPerson.length - firstPerson.length); //Noland's name is longer by how many letters: 2

//      INSTRUCTORS ANSWER
//bronze
let myName = "Noland"; //This is a globally scoped variable: access it from anywhere in your code
let friend = 'Erin'; //This is also globally scoped variable.

console.log(myName.length); // 6
console.log(friend.length); // 4
//SILVER
if (myName.length > friend.length){ 
    console.log(`${friend}'s name is shorter than ${myName}'s name.`) //if this was not true, it would skip to the else if statement. 
} else if (myName.length < friend.length) {
    console.log(`${friend}'s name is longer than ${myName}'s name.`) 
}
//GOLD
let myName = 'Noland'
let friend = 'Erin'

if (myName.length > friend.length){
    let letters = myName.length - friend.length; //This is a locally scoped variable: it is inside the if statement and can not be replicated in the rest of the code 
    console.log(`${friend}'s name is shorter than mine by ${letters} letters`);
} else if (myName.length < friend.length) {
    let letters = friend.length - myName.length; 
    console.log(`${friend}'s name is longer than mine by ${letters} letters`);
} else { //if the two above conditions are not met, make a catch all known as else. 
    console.log('Our names are the same length'); 
}

//CHALLENGE 2
//TYPES CHALLENGE

/*BRONZE
Create an Object that contains a string, boolean, and an object
Console.log the type of one of the values in the object. 
*/
/*SILVER
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/

//INSTRUCTOR'S ANSWER

let myObject = {
    michael: 'string',
    dwight: 4, 
    pam: true, 
    ryan: { //Shorthand for object
        angela: 'sample' //key of angela who's value is sample 
    }
}

console.log(typeof myObject.dwight); // dot notation grabs the out-most layer: the myObject bucket and typeof shows us that the number we dove into and grabbed is infact a number. 
console.log(typeof myObject.pam); //boolean 
console.log(typeof myObject.ryan); //object 
console.log(typeof myObject.ryan.angela); //sample is a string. 
//Silver
let myObject = {
    michael: 'string',
    dwight: 4, 
    pam: true, 
    ryan: { //Shorthand for object
        angela: 'sample' //key of angela who's value is sample 
    }, 
    creed: undefined
}

let value = myObject.creed; //this allows us to not type myObject.ryan.angela every time we typed the word value below and saves alot of time. 

if (typeof value === 'string') {
    console.log('this value is a string')
} else if (typeof value === 'number') {
    console.log('this value is a number')
} else if (typeof value === 'boolean') {
    console.log('this value is a boolean');
} else if (typeof value === 'object') {
    console.log('this value is an object'); 
} else {
    console.log('what are you?'); //when we dive into creed: undefined it is not a string, number, boolean, or an object. 
}










