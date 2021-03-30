# JAVASCRIPT-ALGORITHMS-AND-DATA-STRUCTURE-CERTIFICATION

## Solution to the problems of the JavaScript Algorithms and Data Structures Certifications of www.freecodecamp.org

# JAVASCRIPT - ALGORITHMS AND DATA STRUCTURE CERTIFICATION 

# BASIC JAVASCRIPT




# Basic JavaScript: Build JavaScript Objects
You may have heard the term object before.
Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.
Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.
Here's a sample cat object:
var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
In this example, all the properties are stored as strings, such as - "name", "legs", and "tails". However, you can also use numbers as properties. You can even omit the quotes for single-word string properties, as follows:
var anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.
________________________________________
Make an object that represents a dog called myDog which contains the properties "name" (a string), "legs", "tails" and "friends".
You can set these object properties to whatever values you want, as long as "name" is a string, "legs" and "tails" are numbers, and "friends" is an array.
var myDog = {
// Only change code below this line
"name": "Chocho",
"legs": 4,
"tails": 1,
"friends": ["Lemurs", "Forest"]
// Only change code above this line
};

# Basic JavaScript: Accessing Object Properties with Dot Notation
There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.
Dot notation is what you use when you know the name of the property you're trying to access ahead of time.
Here is a sample of using dot notation (.) to read an object's property:
var myObj = {
  prop1: "val1",
  prop2: "val2"
};
var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2
________________________________________
Read in the property values of testObj using dot notation. Set the variable hatValue equal to the object's property hat and set the variable shirtValue equal to the object's property shirt.
// Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj.hat;   
var shirtValue = testObj.shirt;  

# Basic JavaScript: Accessing Object Properties with Bracket Notation
The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.
However, you can still use bracket notation on object properties without spaces.
Here is a sample of using bracket notation to read an object's property:
var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};
myObj["Space Name"]; // Kirk
myObj['More Space']; // Spock
myObj["NoSpace"];    // USS Enterprise
Note that property names with spaces in them must be in quotes (single or double).
________________________________________
Read the values of the properties "an entree" and "the drink" of testObj using bracket notation and assign them to entreeValue and drinkValue respectively.
// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

# Basic JavaScript: Accessing Object Properties with Variables
Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.
Here is an example of using a variable to access a property:
var dogs = {
  Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed); // "Doberman"
Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows:
var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
console.log(someObj[someProp]); // "John"
Note that we do not use quotes around the variable name when using it to access the property because we are using the value of the variable, not the name.
________________________________________
Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player.
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line

var playerNumber = 16;     
var player = testObj[playerNumber];

# Basic JavaScript: Updating Object Properties
After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. You can use either dot or bracket notation to update.
For example, let's look at ourDog:
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
Since he's a particularly happy dog, let's change his name to "Happy Camper". Here's how we update his object's name property: ourDog.name = "Happy Camper"; or ourDog["name"] = "Happy Camper"; Now when we evaluate ourDog.name, instead of getting "Camper", we'll get his new name, "Happy Camper".
________________________________________
Update the myDog object's name property. Let's change her name from "Coder" to "Happy Coder". You can use either dot or bracket notation.
// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.name = "Happy Coder";

# Basic JavaScript: Add New Properties to a JavaScript Object
You can add new properties to existing JavaScript objects the same way you would modify them.
Here's how we would add a "bark" property to ourDog:
ourDog.bark = "bow-wow";
or
ourDog["bark"] = "bow-wow";
Now when we evaluate ourDog.bark, we'll get his bark, "bow-wow".
Example:
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";
________________________________________
Add a "bark" property to myDog and set it to a dog sound, such as "woof". You may use either dot or bracket notation.
// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.bark = "wowowowowowowooooof";

# Basic JavaScript: Delete Properties from a JavaScript Object
We can also delete properties from objects like this:
delete ourDog.bark;
Example:
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;
After the last line shown above, ourDog looks like:
{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
________________________________________
Delete the "tails" property from myDog. You may use either dot or bracket notation.
// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
delete myDog.tails;

________________________________________________________________________________________________________________________________________________________________________________

## Basic JavaScript: Counting Cards

In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

Count Change:
(+1)   (2,3,4,5,6)
(0)     (7,8,9)
(-1)    (10, "J", "Q", "K", "A")

You will write a card counting function. It will receive a <code>card</code> parameter, which can be a number or a string, and increment or decrement the global <code>count</code> variable according to the card's value (see table). The function will then return a string with the current count and the string <code>Bet</code> if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (<code>Bet</code> or <code>Hold</code>) should be separated by a single space.

Example Output
<code>-3 Hold</code>
<code>5 Bet</code>

Hint
Do NOT reset <code>count</code> to 0 when value is 7, 8, or 9.
Do NOT return an array.
Do NOT include quotes (single or double) in the output.

```html
var count = 0;
var apuesta = "";

function cc(card) {
  // Only change code below this line
  if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6){
    count++;
  }
  else if (card === 7 || card === 8 || card === 9){
    count = count;
  }
  else {
    count--;
  }
  if (count <= 0){
    apuesta = "Hold";
  }
  if (count > 0){
    apuesta = "Bet";
  }

  return count+" "+apuesta;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
```
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

