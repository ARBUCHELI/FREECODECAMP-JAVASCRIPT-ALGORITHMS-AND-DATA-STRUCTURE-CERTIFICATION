Just as we can build a string over multiple lines out of string literals, we can also append variables to a string using the plus equals (+=) operator.

Example:

var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
ourStr would have the value freeCodeCamp is awesome!.

Set someAdjective to a string of at least 3 characters and append it to myStr using the += operator.
                                                                                                                                          
Solution:
// Change code below this line

var someAdjective = "Wonderful!!";
var myStr = "Learning to code is ";
myStr += someAdjective;
