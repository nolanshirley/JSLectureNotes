/*
************
 ARRAYS
************
    - Arrays are used to store multiple values in a single variable
        - there are array methods that allow us to traverse, as well as mutate, the data being held by an array
    - arrays are 0 indexed, meaning the first item in an array will have an index of 0, and the last item will have an index of the arrays length -1
    MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

let arr = ['this is the first element', 'this is the second element', 'this is the third element']; 
console.log(arr[0]); // logs 'this is the first element' 
console.log(arr[1]); // logs 'this is the second element' 
console.log(arr[arr.length - 1]); // logs 'this is the third element' 
console.log(arr.length); // 3, because the .length property starts counting at 1 instead of the indexed value of 0 
console.log(typeof arr); // object because in JS an object is defined as anything that can hold multiple values

//the Array() constructor is used to create Array objects. An object is defined in JS as anything that can hold multipe values. 

let test = new Array(); 
console.log(test); // []

let testTwo = new Array(3); //let TestTwo = [ , , ] 
console.log(testTwo); 
console.log(testTwo.length); 

testTwo[1] = 'did it work'
console.log(testTwo); // [   , 'did it work',   ]

/*
    - It's important to note that if you use the array constructor to create an array, and pass in a number, you are creating an array with an initial size. However, if you pass in more than one argument, you create array that holds those values. 
*/

let nums = Array(1, 2, 3, 4, 5); // JavaScript allows you to omit the new operator when using the array constructor
console.log(nums); // [1, 2, 3, 4, 5]

let strings = new Array('this', 'is', 'a', 'test'); 
console.log(strings); 

// let arr = [1, 2, 3, 4, 5]; -> this is the literal syntax for building an array

/*
************
 FOR EACH
************
    - the forEach() method runs a function once for each element in an array
        - the forEach() method is essentially another way to loop over information
    MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

let boardGames = ['Monopoly', 'Clue', 'Risk', 'CandyLand', 'Catan', "Sorry"]; 

for (let index = 0; index < boardGames.length; index++) {
    console.log(boardGames[index]); 
}

// CONCISE BODY ANONYMOUS ARROW FUNCTION
boardGames.forEach(game => console.log(game)); 

// BLOCK-BODY ANONOYMOUS ARROW FUNCTION
boardGames.forEach(game => {
    console.log(game); 
})

// TRADITIONAL FUNCTION -> there is no reason to give the function a name because you wouldn't call it outside of the forEach... 
boardGames.forEach(function (game) {
    console.log(game); 
})

/*
************
 METHODS
************
    MDN Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#
*/
// To access a specific element in an array use bracket notation along with its index value.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList[0]); // returns celery

// Array.length → returns the number of elements in the array
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.length); // returns 5

// Array.push() → adds element to the end of the array
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
shoppingList.push("salt");
console.log(shoppingList);

// Array.pop() → removes the last element in the array and returns that element.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
shoppingList.pop();
console.log(shoppingList);

// Array.unshift() → adds a new element at the beginning of the array
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
shoppingList.unshift("salt");
console.log(shoppingList);

// Array.shift() → removes the first element in an array, and returns that element.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
shoppingList.shift();
console.log(shoppingList);

// Array.map() → transforms the elements in the original array by calling the given function once for each element in the array.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.map(item => item.toUpperCase())); 

// Array.filter() → creates a new array with only the elements that pass the test in a given function.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.filter(item => item.startsWith("l")));

console.log(shoppingList.filter(item => {
    return item.startsWith('g'); // need to put return keyword in a block-body arrow function to get an output 
}))

let filter = shoppingList.filter(item => item.startsWith('o')); 
console.log(filter); // ['oranges']

// Array.find() → returns the first element in an array that passes a test given as a function.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.find(item => item.startsWith("l"))); 

// Array.reduce() → executes a given function for each value of the array and returns a single value.
let costs = [2.00, 3.00, 4.00, 13.00];
console.log(costs.reduce((total, cost) => total + cost)); // 22

console.log(costs.reduce((accumulator, currentValue) => {
    return accumulator + currentValue // 32
}, 10))

// Array.includes() → determines whether an array has a specific element.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.includes("limes")); // true 
console.log(shoppingList.includes("salt")); // false 

// Array.indexOf() → search the array for a specific element and returns its first index. Returns -1 when element is not found
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"]
console.log(shoppingList.indexOf("lemons")); // 2
console.log(shoppingList.indexOf("salt")); // -1

// Array.findIndex() → returns the index of the first element in an array that passes the test in a given function. Returns -1 when element is not found
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.findIndex(item => item.startsWith("g"))); // 3

// Array.every() → checks if all elements in an array pass a test given as a function. If there is 1 element that returns a false value, the function returns false and does not check the rest of the elements
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.every(item => item.length > 1)); 

// Array.concat() → merge two or more arrays, and returns a new array.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
let anotherList = ["salt", "mint leaves", "olives"];
console.log(shoppingList.concat(anotherList));

// Array.slice() → selects a part of an array, and returns a new array. Selects the elements starting at the provided start argument, and ends at, but does not include, the provided end argument.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.slice(1, 3)); // ['limes', 'lemons']

// Array.splice() → add/removes elements in an array and returns the removed elements. First argument takes in an integer that specifies at what index to add/remove elements. Second argument takes in the number of items to be removed. Optional third argument takes in the new elements to be added to the array.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
shoppingList.splice(2, 1);
console.log(shoppingList); 
shoppingList.splice(2, 1, "cherries");
console.log(shoppingList);

// Array.sort() → sorts the items in an array. The sort order can either be alphabetic or numeric, and either ascending or descending. By default, sort() orders the values as strings in alphabetical and ascending order. Can take in a compare function which indicates if you want to sort by ascending or descending.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.sort());

let costs = [3, 2, 13, 4];
console.log(costs.sort((numOne, numTwo) => numTwo - numOne));
//want to sort by descending order
console.log(costs.sort((a, b) => a - b));
//want to sort by ascending order

// Array.reverse() → reverses the order of the elements in an array.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.reverse());

// Array.toString() → converts an array into a string.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.toString());

// Array.join() → converts the elements of an array into a string. Can accept an optional parameter, "separator", which indicates how the elements will be separated. Default separator is a comma.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.join("! and ")); // the comma changes to a ! and adds a space before the and 

// Lastly, an ES6 feature: the spread operator. The spread operator, indicated by these 3 dots "…" expands the contents of the array and takes it out of the array structure.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(...shoppingList);

/*
************
  OBJECTS
************
    - The Object class represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities.
    MDN Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
*/
let netflix = {
    id: 1,
    name: "The Office",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                episode: 1,
                episodeName: "Pilot"
            },
            {
                episode: 2,
                episodeName: "Diversity Day"
            },
            {
                episode: 3,
                episodeName: "Health Care"
            },
            {
                episode: 4,
                episodeName: "The Alliance"
            },
            {
                episode: 5,
                episodeName: "Basketball"
            },
            ]
        }
    },
    season2: {},
    season3: {}
};

console.log(netflix.season1.seasonInfo.episodeInfo[2].episodeName); // Health Care 

/*
    JSON OBJECTS
        - JSON stands for JavaScript Object Notation
        - The JSON syntax is derived from JavaScript Object Notation syntax, but the JSON format is text only
        - JSON exists as a string — useful when you want to fetch data from a server. It needs to be converted to a native JavaScript object if you want to access the data.
        - show them what JSON data looks like in browser ---> https://rickandmortyapi.com/api/character/ -> control + click to access!
        - https://jsonformatter.org/ --- > paste in text from above
        - we will talk more about JSON data when we start working with API's
*/

/*
************
OBJECT BRACKET NOTATION/PROPERTY ACCESSORS 
************
    - Property accessors provide access to an object's properties by using the dot notation or the bracket notation.
    MDN Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
*/

let dog = {}; 

// setters -> the keys in objects are strings that's why name and breed are wrapped in quotes with key value pairs 
dog['name'] = 'Luna'
dog['breed'] = 'Siberian Husky'
console.log(dog); // {name: 'Luna', breed: 'Siberian Husky; }

// all keys in objects are strings, even though they aren't wrapped in quotes 
let test = Object.keys(dog); 
console.log(test); 
console.log(typeof test[0]); // string 

// Using square brackets is necessary when you may not be able to use dot notation to dig through an object
let testObj = {
    "Spaces Here": true, 
    noSpaces: true,
    "1": true
}

console.log(testObj.noSpaces); // true
console.log(testObj["Spaces Here"]); // you can not use dot notation to access keys if the keys has spaces., use bracket notation. 
console.log(testObj[1]); // you have to use square brackets to grab the key that happens to be number








// FIRST CHALLENGE IN REPL.IT

function count(i) {
    console.log(i); 
     if (i % 2 === 0) {
          console.log('the number is even'); 
      } else {
          console.log('the number is odd'); 
  }}
  
  for (let i=0; i<=10; i++) {
    count2(i); 
  }
  
// if/else statement into a ternary

function count2(i) {
    console.log(i); 
    (i % 2 === 0) ? console.log('the number is even') : console.log('the number is odd') 
}

