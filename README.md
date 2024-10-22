# JAVASCRIPT-ALGORITHMS-AND-DATA-STRUCTURE-CERTIFICATION

## Solution to the problems of the JavaScript Algorithms and Data Structures Certifications of www.freecodecamp.org

# JAVASCRIPT - ALGORITHMS AND DATA STRUCTURE CERTIFICATION 
_________________________________________________________________________________________________________________________________________________________________________________
_________________________________________________________________________________________________________________________________________________________________________________

# ES6

## ES6: Use Destructuring Assignment to Assign Variables from Arrays

ES6 makes destructuring arrays as easy as destructuring objects.

One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.

Destructuring an array lets us do exactly that:

```html
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2
```

The variable <code>a</code> is assigned the first value of the array, and <code>b</code> is assigned the second value of the array. We can also access the value at any index in an array with destructuring by using commas to reach the desired index:

```html
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5
```

Use destructuring assignment to swap the values of <code>a</code> and <code>b</code> so that <code>a</code> receives the value stored in <code>b</code>, and <code>b</code> receives the value stored in <code>a</code>.

```html
let a = 8, b = 6;
// Only change code below this line
[a,b] = [b,a];
console.log(a,b);
```

## ES6: Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.

The result is similar to ```html Array.prototype.slice()```, as shown below:

```html
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]
```

Variables <code>a</code> and <code>b</code> take the first and second values from the array. After that, because of the rest parameter's presence, <code>arr</code> gets the rest of the values in the form of an array. The rest element only works correctly as the last variable in the list. As in, you cannot use the rest parameter to catch a subarray that leaves out the last element of the original array.
_________________________________________________________________________________________________________________________________________________________________________________
Use destructuring assignment with the rest parameter to perform an effective ```html Array.prototype.slice()``` so that <code>arr</code> is a sub-array of the original array source with the first two elements omitted.

```html
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // Only change code below this line
  const [a,b, ...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
```

## ES6: Use Destructuring Assignment to Pass an Object as a Function's Parameters

In some cases, you can destructure the object in a function argument itself.

Consider the code below:

```html
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
  // do something with these variables
}
```

This effectively destructures the object sent into the function. This can also be done in-place:

```html
const profileUpdate = ({ name, age, nationality, location }) => {
  /* do something with these fields */
}
```
When <code>profileData</code> is passed to the above function, the values are destructured from the function parameter for use within the function.

_________________________________________________________________________________________________________________________________________________________________________________

Use destructuring assignment within the argument to the function <code>half</code> to send only <code>max</code> and <code>min</code> inside the function.

```html
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max,min}) => (max + min) / 2.0; 
// Only change code above this line
```

## ES6: Create Strings using Template Literals

A new feature of ES6 is the template literal. This is a special type of string that makes creating complex strings easier.

Template literals allow you to create multi-line strings and to use string interpolation features to create strings.

Consider the code below:

```html
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old.
```
A lot of things happened there. Firstly, the example uses backticks (<code>`</code>), not quotes (<code>'</code> or <code>"</code>), to wrap the string. Secondly, notice that the string is multi-line, both in the code and the output. This saves inserting <code>\n</code> within strings. The <code>${variable}</code> syntax used above is a placeholder. Basically, you won't have to use concatenation with the <code>+</code> operator anymore. To add variables to strings, you just drop the variable in a template string and wrap it with <code>${ and }</code>. Similarly, you can include other expressions in your string literal, for example <code>${a + b}</code>. This new way of creating strings gives you more flexibility to create robust strings.

_________________________________________________________________________________________________________________________________________________________________________________

Use template literal syntax with backticks to create an array of list element (<code>li</code>) strings. Each list element's text should be one of the array elements from the <code>failure</code> property on the <code>result</code> object and have a <code>class</code> attribute with the value <code>text-warning</code>. The <code>makeList</code> function should return the array of list item strings.

Use an iterator method (any kind of loop) to get the desired output (shown below).

```html
[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
```

```html
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  for (let i=0; i<arr.length; i++){
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
```

## ES6: Write Concise Object Literal Declarations Using Object Property Shorthand

ES6 adds some nice support for easily defining object literals.

Consider the following code:

```html
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
```
<code>getMousePosition</code> is a simple function that returns an object containing two properties. ES6 provides the syntactic sugar to eliminate the redundancy of having to write <code>x: x</code>. You can simply write <code>x</code> once, and it will be converted to <code>x: x</code> (or something equivalent) under the hood. Here is the same function from above rewritten to use this new syntax:

```html
const getMousePosition = (x, y) => ({ x, y });
```
_________________________________________________________________________________________________________________________________________________________________________________

Use object property shorthand with object literals to create and return an object with <code>name</code>, <code>age</code> and <code>gender</code> properties.

```html
const createPerson = (name, age, gender) => ({
  // Only change code below this line
  
    name,
    age,
    gender
  
  // Only change code above this line
});
```

## ES6: Write Concise Declarative Functions with ES6

When defining functions within objects in ES5, we have to use the keyword <code>function</code> as follows:

```html
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
```
With ES6, You can remove the <code>function</code> keyword and colon altogether when defining functions in objects. Here's an example of this syntax:

```html
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
```
_________________________________________________________________________________________________________________________________________________________________________________

Refactor the function <code>setGear</code> inside the object code><bicycle</code> to use the shorthand syntax described above.

```html

// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
```
## ES6: Use class Syntax to Define a Constructor Function

ES6 provides a new syntax to create objects, using the <code>class</code> keyword.

It should be noted that the <code>class</code> syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such
as Java, Python, Ruby, etc.

In ES5, we usually define a constructor function and use the <code>new</code> keyword to instantiate an object.

```html
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
```

The <code>class</code> syntax simply replaces the constructor function creation:

```html
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
```

It should be noted that the <code>class</code> keyword declares a new function, to which a constructor is added. This constructor is invoked when <code>new</code> is called to create a new object.

## Notes:

UpperCamelCase should be used by convention for ES6 class names, as in <code>SpaceShuttle</code> used above.
The constructor method is a special method for creating and initializing an object created with a class. You will learn more about it in the Object Oriented Programming section of the JavaScript Algorithms And Data Structures Certification.

_________________________________________________________________________________________________________________________________________________________________________________

Use the <code>class</code> keyword and write a constructor to create the <code>Vegetable</code> class.

The <code>Vegetable</code> class allows you to create a vegetable object with a property <code>name</code> that gets passed to the constructor.

```html
// Only change code below this line
class Vegetable {
    constructor(name) {
        this.name = name;
    }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
```
_________________________________________________________________________________________________________________________________________________________________________________
_________________________________________________________________________________________________________________________________________________________________________________

# INTERMEDIATE ALGORITHM SCRIPTING

## Intermediate Algorithm Scripting: Sum All Numbers in a RangePassed

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, <code>sumAll([4,1])</code> should return <code>10</code> because sum of all the numbers between 1 and 4 (both inclusive) is <code>10</code>.

```html
function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sum = 0;
  for (let i = min; i <= max; i++){
    sum = sum + i;
  }
  return sum;
}

sumAll([1, 4]);
```

## Intermediate Algorithm Scripting: Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

## Note
You can return the array with its elements in any order.

```html
function diffArray(arr1, arr2) {
  var newArr = [];

  function onlyInone(firstarr, secondarr) {
    // Looping through an array to find elements that don't exist in another array
    for (var i = 0; i < firstarr.length; i++) {
      if (secondarr.indexOf(firstarr[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(firstarr[i]);
      }
    }
  }

  onlyInone(arr1, arr2);
  onlyInone(arr2, arr1);

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```
                            
## Intermediate Algorithm Scripting: Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that
are of the same value as these arguments.

## Note
You have to use the <code>arguments</code> object.

```html
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}
```

## Intermediate Algorithm Scripting: Wherefore art thou

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is ```htmls[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]```, and the second argument is ```html{ last: "Capulet" }```, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

```html
function whatIsInAName(collection, source) {
  var arr = Object.keys(source);
  // Only change code below this line
  return collection.filter(function(obj) {
    return arr.map(function(key){
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    })
    .reduce(function(a, b){
      return a && b;
    });
  });
}

  // Only change code above this line

  // filter the collection

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
```

## Intermediate Algorithm Scripting: Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

```html
function spinalCase(str) {
  return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
}

spinalCase('This Is Spinal Tap');
```

## Intermediate Algorithm Scripting: Pig Latin

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

_________________________________________________________________________________________________________________________________________________________________________________

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

```html
function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let consonants = str.match(consonantRegex);
  return consonants !== null ? str.replace(consonantRegex, "").concat(consonants).concat("ay")
    : str.concat("way");
}

translatePigLatin("california");
```

## Intermediate Algorithm Scripting: Search and Replace (NOT SOLVED YET)

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

## Note

Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

```html
function myReplace(str, before, after) {
  var words=str.split(" ");
  for (var i=0;i<words.length;i++){
  words[i]=words[i].replace(before,after);
}
return words.join(" ");
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```

## Adaptation as a repository: Andrés R. Bucheli.

