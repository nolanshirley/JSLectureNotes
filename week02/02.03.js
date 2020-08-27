/*
************
 FUNCTIONS
************
    - JavaScript functions are defined with the function keyword, and can be written as a function declaration or a function expression. 
        - function declarations are hoisted in our code, and run only when we call them. So any function in our code sits and waits to be ran until we call it by it's name. Think of it as student with his or her hand up, waiting to ask a question. That student doesn't ask their question until the teach calls upon them. 
        - function expressions are not hoisted, and are generally stored in variables
            - after a function has been stored in a variable, that variables name can then be called to run the function
    - functions without names are known as anonymous functions
*/

// FUNCTION DECLARATION
sayHello(); //still going to get the output of hi, because the function is hoisted. 

function sayHello() {
    console.log('hi'); 
}

sayHello; // this wont run because you dont have () next to sayHello that tell the function to run
sayHello(); //Parentheses are what tells the function to run

// FUNCTION EXPRESSION -> this does not get hoisted... see below
greetings(); //can not access 'greetings' before initilization 

let greetings = function () { // anonymous funciton that is stored in a variable greetings
    console.log('hello'); 
}

greetings(); // hello 

/*
************
 PARAMETERS
************
    - think of parameters as a newly declared variable that we haven't given a value to yet.
        - the value we pass into our function when we call the function to run (also known as an argument), is the value that gets assigned to the parameter.
    - general naming convention for function parameters: the parameter should be named something related to the information we're passing into the function. If we're passing in an integer, we may name our parameter num or number
*/

function myDog(husky) { // husky is the parameter that is a placeholder that has not been given a value. 
    console.log(`My dogs name is ${husky}`); 
}

myDog('Bella'); // 'Bella' is the argument, or the value we're passing to the parameter of husky. Answer: My dogs name is Bella 

let pet = myDog; // this is a function reference. Assigning the function of myDog to a variable named pet. We're not calling, or invoking the function. 

pet(); // this will run the function and show undefined because we have not defined an argument inside our pet variable. 
pet('Bella'); // My dogs name is Bella 

// MULTIPLE PARAMETERS AND ARGUMENTS 

function allMyDogs(smallHusky = '', bigHusky = '', bostonTerrier = '') { // = ' ' after every parameter allows you to eliminate the if else statment all together. Since it asigns a default value for each parameter. 

    // if (smallHusky === undefined || bigHusky === undefined || bostonTerrier === undefined){ 
    //     console.log('no arguments passed')
    // } else {
    //     console.log(`My dogs are named ${smallHusky}, ${bigHusky}, ${bostonTerrier}`);
    // }
}

allMyDogs(); // no arguments passed, because we did not assign our parameters any arguments inside the funciton we are calling. 
allMyDogs('Mira', 'Luna', 'Bella'); // the arguments we pass into our function call are assigned by position, or by order. First argument gets assigned to first parameter, etc. 

/*
************
   RETURN
************
    - functions can also manipulate the data sent to them, and return a new value
*/

// find avergae weight 

function calculator(one, two, three) {
    // console.log(one, two, three); 
    let totalWeight = one + two + three; 
    console.log(totalWeight); // 130 
    let average = Math.round(totalWeight / 3); // Math.round rounds the value to the nearest integer 
    console.log(average); // 43 is the average of the three dogs

    return Math.round(average); // can also use Math.round() here 
}

let averageWeight = calculator(60, 55, 15); // since we're returning a value from the function, we need a new variable to capture the return value. Then, when we invoke, or call, the calculator function - the value that we return from that function is the value that's assigned to the averageWeight variable. 
console.log(`My dogs weigh an average of ${averageWeight} lbs`); // My dogs weigh an average of 43 lbs 

/*
ARROW FUNCTIONS
*/

// concise-body arrow function: uses an expression to the right of the arrow 
let f = (x) => x + 5; 

console.log(f(40)); // 45


// Block-body arrow function : uses a block of code to the right of the arrow 
let g = (x) => {
    console.log(x); 
    return x + 6; 
}

console.log(g(7)); // undefined because we did not return a value, now add a return value. 
console.log(g(7)); // 13



const f0 = (x) => 3 * x; 
// These blocks of code, above and below, are the exact same functions. 
const f1 = (x) => {
    return 3 * x; 
};



const func = (x) => (() => 3 * x); //this function returns a function multiplied by 3

console.log(func(4)()); // 12


/*
BUILDING UP EXPRESSIONS 
*/

const returnFirstArg = (x, y) => x; 
const returnSecondArg = (x, y) => y; 

const returnThree = (x) => 3; 
const returnFalse = (x) => false; 



let v = returnFirstArg(4, 5); 

console.log(v); // 4



