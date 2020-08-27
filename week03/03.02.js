// SOME QUICK NOTES ON OBJECTS AND ARRAYS

let obj1 = {
    a: 0, 
    b: 1
}; 

console.log(obj1.a); // 0 

let obj2 = {
    a: 0, 
    b: 1
}; 

console.log(obj1 === obj2); // false, because they are being compared by how they are referenced. They are not the same object in the computers memory although they do have the same values. 

obj2 = obj1; // this is saying make both objects point to the same values. 

obj2.a = 88; 

console.log(obj1); // {a: 88, b: 1} since we made obj2 = obj1 then the values, if changed, are changed in both objects. 



let empty = []; 

function checkIfEmpty (arr) {
    return arr.length === 0; 
}

console.log(checkIfEmpty(empty)); // true 




function assignKKToString (str) {
    str = 'King Kong'; // this is a locally sourced string 
    //add return str; to console.log the word King Kong 
}

let str = 'Godzilla'; // 

assignKKToString(str); // add str = before this to make console.log log King Kong 

console.log(str); // Godzilla 


// OPTIONAL LESSON ON EQUALITY FOR OBJECTS/ARRAYS
let obj1 = {
    a: 1,
    b: 2
  };
  let obj2 = {
    a: 1, 
    b: 2
  };
  console.log(obj1 === obj2);  // prints false because they are different objects!
  let obj2 = obj1;  // now they are the exact same object
  console.log(obj1 === obj2);  // prints true
  let arr1 = [0, 1, 2];
  let arr2 = arr1;  // same goes for arrays
  console.log(arr1 === arr2);  // prints true because they're the same array
  arr2.push(7);  // we can alter that array using either variable
  console.log(arr1);  // [0, 1, 2, 7]
  let str1 = 'cat';  // strings are compared by value, though
  let str2 = str1;  // this makes str2 a COPY of str1
  str2 = str2 + ' in the hat';  // this does not alter str1!
  console.log(str1);  // prints 'cat'
  function objFunction (obj) {  // a function can alter an object without returning a new object
    obj.sweet = true;
  }
  let obj = {};
  objFunction(obj);  // modifies object "in-place"
  console.log(obj);  // prints {sweet: true}
  function strFunction (str) {  // with strings, we have to return a new string to alter it
    str = str + ' with a bone to pick'
    return str
  }
  let str = 'a woman';
  str = strFunction(str);  // we set str equal to the return value of the function, a new string
  console.log(str);





