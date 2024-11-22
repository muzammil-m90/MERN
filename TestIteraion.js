const arrValue = [5,6,7,8,9];

for(let x of arrValue)
{
    console.log(x);
}

const outValue = arrValue.forEach((val, ind) => {
 console.log(ind, val * 2);
}
)


// String Method Tasks
// Find the Most Frequent Character
/* Task: Find the character that appears the most in a string.
Example: mostFrequentChar("hello world") ➔ "l"
Hint: Use an object to store the character counts.*/

// Need to check with Mam


// Extract Initials from Name
/* Task: Write a function that takes a full name and returns initials.
Example: getInitials("John Doe") ➔ "J.D"
Hint: Use split(), map(), and join(). */

const nameInitial = "Mark Antony";
const splitName = nameInitial.split(" ");
// console.log(splitName);
const mapName = splitName.map(value => { 
 return value[0]
})
// console.log(mapName);
const joinName = mapName.join(".");
console.log("The Initials are :",joinName);



// Find Substrings Between Two Characters
/*Task: Find all substrings in a string that are between two given characters.
Example: findSubstrings("hello world, hello again!", "h", "d") ➔ ["ello worl", "ello again"]
Hint: Use a regular expression with match(). */

const StringName = "hello world, hello again!";
const matchName = StringName.match(/[hd]/gi);
console.log(matchName);
const removeName = StringName.replaceAll(matchName,"");
console.log(removeName);
// Need to check with Mam for this Answer


 
// Array Method Tasks
// Remove Duplicates from Array
/* Task: Write a function that removes duplicate values from an array.
Example: removeDuplicates([1, 2, 2, 3, 4, 4]) ➔ [1, 2, 3, 4]
Hint: Use a Set or filter() with indexOf(). */

const duplicateArrays = [1,2,2,3,4,4,5];
const afterDuplicate = [];   // need to check with mam , how to filter it without creating empty array 
const removeDuplicates = duplicateArrays.filter(value => {
  if(afterDuplicate.indexOf(value) === -1)
  {
    afterDuplicate.push(value);
  }
});
console.log("The After Duplicate Values are :",afterDuplicate);


// Find Common Elements Between Arrays
/* Task: Write a function that returns an array of elements that appear in both input arrays.
Example: findCommonElements([1, 2, 3], [2, 3, 4]) ➔ [2, 3]
Hint: Use filter() and includes(). */

const arr1 = [1,2,3];
const arr2 = [2,3,4];

const compare =  arr1.filter(value => {
return arr2.includes(value);
})
console.log("The common Values are : ",compare);



// Chunk an Array
/* Task: Write a function that splits an array into chunks of a given size.
Example: chunkArray([1, 2, 3, 4, 5], 2) ➔ [[1, 2], [3, 4], [5]]
Hint: Use a loop or slice() inside a loop. */


// Refered Google for this 
const arrayValue = [1,2,3,4,5];
const addArr = [];

for (let i =0; i<arrayValue.length; i += 2)
{
const splitArr = arrayValue.slice(i, i+2);
addArr.push(splitArr);
}
console.log("Chunk Arrays are :",addArr);



// Count Occurrences of Elements
/* Task: Write a function that counts occurrences of each element in an array.
Example: countOccurrences(["a", "b", "a"]) ➔ { a: 2, b: 1 }
Hint: Use reduce() to build an object. */

// Need to check with Mam , Reduce used to make the values to single using accumulator ?


// Find the Maximum and Minimum Numbers
/* Task: Write functions to find the maximum and minimum numbers in an array.
Example: findMax([1, 5, 3]) ➔ 5, findMin([1, 5, 3]) ➔ 1
Hint: Use Math.max() and Math.min() with the spread operator. */

const values = [1,2,3,4,5];
const Maximum = Math.max(...values);
const Minimum = Math.min(...values);
console.log("Maximum Values is :", Maximum);
console.log("Minimum Values is :", Minimum);


// Sort an Array of Objects by Property
/* Task: Write a function that sorts an array of objects by a specific property.
Example: sortByProperty([{ name: "Alice", age: 25 }, { name: "Bob", age: 20 }], "age") ➔ [ { name: "Bob", age: 20 }, { name: "Alice", age: 25 } ]
Hint: Use sort() with a comparison function. */
const people = [
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 20},
    {name: 'Charlie', age: 25},
    {name: 'Clara', age: 22},
  ];

  const sortOut = people.sort((age1, age2) => age1.age - age2.age);
  console.log("Sorted Arrays are :",sortOut);


// Split Array into Two Parts
/* Task: Write a function that splits an array into two parts at a given index.
Example: splitArray([1, 2, 3, 4, 5], 2) ➔ [[1, 2], [3, 4, 5]]
Hint: Use slice() to create the two parts. */
const splitArray = [1,2,3,4,5,6];
const array1 = splitArray.slice(0,2);
const array2 = splitArray.slice(2,4);
const array3 = splitArray.slice(4,6);
const array4 = [];
array4.push(array1,array2,array3);
console.log("Splitted Arrays are :",array4);