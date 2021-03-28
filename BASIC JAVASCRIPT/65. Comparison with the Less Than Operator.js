The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. 
Like the equality operator, the less than operator converts data types while comparing.

Examples

2   < 5
'3' < 7
5   < 5
3   < 2
'8' < 4
In order, these expressions would evaluate to true, true, false, false, and false.

Add the less than operator to the indicated lines so that the return statements make sense.
                        
Solution:
         
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
