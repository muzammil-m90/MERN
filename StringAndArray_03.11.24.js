// String Method Tasks
// 1. Reverse a String
/* Task: Write a function that takes a string and returns it in reverse.
Example: reverseString("hello") ➔ "olleh"
Hint: Try using split(), reverse(), and join(). */

var name = "hello";
console.log("1. Reverse String");
console.log("-----------------");
function reverse()
{
    let splitName = name.split("");
    console.log(splitName);
    let reverseName = splitName.reverse();
    console.log(reverseName);
    let joinName = reverseName.join("");    
    console.log("Original String is :", name);
    console.log("Reverse String is  :", joinName);
}

// const dec = new reverse();
reverse();
console.log("\n");
// 2. Check for Palindrome
/* Task: Write a function to check if a string is a palindrome (reads the same forward and backward).
Example: isPalindrome("racecar") ➔ true, isPalindrome("hello") ➔ false
Hint: You could reverse the string and check equality with the original. */

let PalName = "malayala";
console.log("2. Pallindrome or Not");
console.log("---------------------");

function palindrome()
{
    let SplitName = PalName.split("");
    let reverseName = SplitName.reverse();
    let joinName = reverseName.join("");
    console.log("The Original String is :",PalName);
    console.log("The Reverse String is  :",joinName);
    if(PalName == joinName)
    {
        console.log("The Given String is Pallindrome");
    }
    else
    {
        console.log("The Given String is Not Pallindrome");
    }
}
palindrome();
console.log("\n");

// Count Vowels
/* Task: Write a function that counts the number of vowels in a given string.
Example: countVowels("hello world") ➔ 3
Hint: Use match() with a regular expression. */
console.log("3. Count Vowels");
console.log("---------------");

let VowelsWord = "Thank you";

function VowelsCount()
{
    let SplitName = VowelsWord.split("");
    console.log(SplitName);    
    let count = 0;

    for(let x in SplitName)
    {   
        // console.log(SplitName[x]);
        if(SplitName[x] == "a" || SplitName[x] == "e" || SplitName[x] == "i" || SplitName[x] == "o" || SplitName[x] == "u")
        {
            count += 1;
        }
    }
    console.log("Vowels Count in a Given string is :",count);

}
VowelsCount();


let VowelsWord1 = "Thank you";
console.log(VowelsWord1.match("ao")); // Need to Check with Mam

// Remove Duplicate Characters
/* Task: Write a function that removes duplicate characters from a string.
Example: removeDuplicates("hello") ➔ "helo"
Hint: Use a Set or indexOf() to filter unique characters. */
console.log("4. Duplicate Characters");
console.log("-----------------------");
let dupName = "helloo";
let addName = " ";

function duplicateChar()
{
let addName = " ";
let splitName = dupName.split("");
console.log(splitName);
for(x in splitName){
    console.log(splitName[x]);
    if(addName.includes(splitName[x]))
    {
        console.log(); // what to use here need to check with mam
    }
    else{
    addName += splitName[x];
    }
}
console.log("String after removing Duplicates :",addName);
}
duplicateChar();

// Find the Most Frequent Character
/* Task: Find the character that appears the most in a string.
Example: mostFrequentChar("hello world") ➔ "l"
Hint: Use an object to store the character counts.*/

// Extract Initials from Name
/* Task: Write a function that takes a full name and returns initials.
Example: getInitials("John Doe") ➔ "J.D"
Hint: Use split(), map(), and join(). */

// Find Substrings Between Two Characters
/*Task: Find all substrings in a string that are between two given characters.
Example: findSubstrings("hello world, hello again!", "h", "d") ➔ ["ello worl", "ello again"]
Hint: Use a regular expression with match(). */
 
// Array Method Tasks
// Remove Duplicates from Array
/* Task: Write a function that removes duplicate values from an array.
Example: removeDuplicates([1, 2, 2, 3, 4, 4]) ➔ [1, 2, 3, 4]
Hint: Use a Set or filter() with indexOf(). */

// Flatten a Nested Array
/* Task: Write a function that flattens a nested array (one level deep).
Example: flatten([1, [2, 3], [4, [5]]]) ➔ [1, 2, 3, 4, [5]]
Hint: Use flat(). */
console.log("\n");
console.log("9. Flat Array");
console.log("-------------");

let ArrayNum = [ 1, [2,3], [4,[5]]];

function flatArray()
{
console.log("Original :",ArrayNum);
console.log("Output   :",ArrayNum.flat());
}

flatArray();


// Find Common Elements Between Arrays
/* Task: Write a function that returns an array of elements that appear in both input arrays.
Example: findCommonElements([1, 2, 3], [2, 3, 4]) ➔ [2, 3]
Hint: Use filter() and includes(). */

// Chunk an Array
/* Task: Write a function that splits an array into chunks of a given size.
Example: chunkArray([1, 2, 3, 4, 5], 2) ➔ [[1, 2], [3, 4], [5]]
Hint: Use a loop or slice() inside a loop. */

// Count Occurrences of Elements
/* Task: Write a function that counts occurrences of each element in an array.
Example: countOccurrences(["a", "b", "a"]) ➔ { a: 2, b: 1 }
Hint: Use reduce() to build an object. */

// Find the Maximum and Minimum Numbers
/* Task: Write functions to find the maximum and minimum numbers in an array.
Example: findMax([1, 5, 3]) ➔ 5, findMin([1, 5, 3]) ➔ 1
Hint: Use Math.max() and Math.min() with the spread operator. */

// Sort an Array of Objects by Property
/* Task: Write a function that sorts an array of objects by a specific property.
Example: sortByProperty([{ name: "Alice", age: 25 }, { name: "Bob", age: 20 }], "age") ➔ [ { name: "Bob", age: 20 }, { name: "Alice", age: 25 } ]
Hint: Use sort() with a comparison function. */

// Split Array into Two Parts
/* Task: Write a function that splits an array into two parts at a given index.
Example: splitArray([1, 2, 3, 4, 5], 2) ➔ [[1, 2], [3, 4, 5]]
Hint: Use slice() to create the two parts. */

let sliceArray = [1,2,3,4,5];
console.log(sliceArray.slice(0,2));  // need to check with mam
