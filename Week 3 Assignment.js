// Create array of ages
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Find difference between last and first element
let ageDifference = ages[ages.length - 1] - ages[0];
console.log(ageDifference); 

// Add a new age and repeat the calculation
ages.push(17);
ageDifference = ages[ages.length - 1] - ages[0];
console.log(ageDifference); 

// Calculate the average age
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
let averageAge = sum / ages.length;
console.log(averageAge); 

// Create array of names
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

// Calculate average length of names
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length;
}
let averageLetters = totalLetters / names.length;
console.log(averageLetters); 

// Concatenate all names together
let allNames = "";
for (let i = 0; i < names.length; i++) {
  allNames += names[i] + " ";
}
console.log(allNames); 

// Access the last element of any array
let lastElement = ages[ages.length - 1];

// Access the first element of any array
let firstElement = ages[0];

// Create array of name lengths
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
}
console.log(nameLengths); 

// Calculate sum of elements in nameLengths
let sumOfNameLengths = 0;
for (let i = 0; i < nameLengths.length; i++) {
  sumOfNameLengths += nameLengths[i];
}
console.log(sumOfNameLengths); 

// Function to concatenate a word n times
function repeatWord(word, n) {
  let repeatedWord = "";
  for (let i = 0; i < n; i++) {
    repeatedWord += word;
  }
  return repeatedWord;
}
console.log(repeatWord("Hello", 3)); 

// Function to return full name
function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log(getFullName("John", "Doe")); 

// Function to check if sum of array is greater than 100
function sumGreaterThan100(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum > 100;
}
console.log(sumGreaterThan100([40, 30, 35])); 

// Function to calculate average of array
function calculateAverage(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

function compareArrayAverages(arr1, arr2) {
    //

    // Calculate average of elements in first array
    const avg1 = arr1.reduce((acc, val) => acc + val, 0) / arr1.length;
    
    // Calculate average of elements in second array
    const avg2 = arr2.reduce((acc, val) => acc + val, 0) / arr2.length;
    
    // Compare the averages and return true if avg1 is greater than avg2
    return avg1 > avg2;
  }
  
  function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
  }
  
/* This function takes two arguments, width and height, and calculates the area of a
rectangle by multiplying them. The calculated area is then returned from the function.
I created this function because calculating the area of a rectangle is a common mathematical problem,
and having a reusable function for it can be useful in various applications.
*/

function calculateArea(width, height) {
    const area = width * height;
    return area;
  }
  
  console.log(calculateArea(10, 5)); 