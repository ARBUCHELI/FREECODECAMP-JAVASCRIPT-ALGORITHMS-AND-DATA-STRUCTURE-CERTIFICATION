We can access the data inside arrays using indexes.

Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use zero-based indexing, so the first element in an array has an index of 0.


Example

var array = [50,60,70];
array[0];
var data = array[1];
array[0] is now 50, and data has the value 60.

Note: There shouldn't be any spaces between the array name and the square brackets, like array [0]. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

Create a variable called myData and set it to equal the first value of myArray using bracket notation.

Solution:

// Setup
var myArray = [50,60,70];

// Only change code below this line
var myData = myArray[0];
