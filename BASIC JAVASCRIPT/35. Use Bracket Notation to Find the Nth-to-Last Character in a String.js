You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character.

For example, you can get the value of the third-to-last letter of the var firstName = "Charles" string by using firstName[firstName.length - 3]

Example:

var firstName = "Charles";
var thirdToLastLetter = firstName[firstName.length - 3];
thirdToLastLetter would have a value of the string l.

Use bracket notation to find the second-to-last character in the lastName string.

Hint: Try looking at the example above if you get stuck.

Solution:

// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line
