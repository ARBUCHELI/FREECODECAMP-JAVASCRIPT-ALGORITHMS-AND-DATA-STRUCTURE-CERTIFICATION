# JAVASCRIPT-ALGORITHMS-AND-DATA-STRUCTURE-CERTIFICATION

## Solution to the problems of the JavaScript Algorithms and Data Structures Certifications of www.freecodecamp.org

# JAVASCRIPT - ALGORITHMS AND DATA STRUCTURE CERTIFICATION 

## ES6

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



## INTERMEDIATE ALGORITHM SCRIPTING

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
                            
                            
