The less than or equal to operator (<=) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, it returns true. 
If the number on the left is greater than the number on the right, it returns false. Like the equality operator, the less than or equal to operator converts data types.

Examples

4   <= 5
'7' <= 7
5   <= 5
3   <= 2
'8' <= 4
                                    
In order, these expressions would evaluate to true, true, true, false, and false.

Add the less than or equal to operator to the indicated lines so that the return statements make sense.
                                    
Solution:
                                    
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);
