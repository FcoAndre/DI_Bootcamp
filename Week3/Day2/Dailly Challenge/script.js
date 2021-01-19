// Remove the Banana from the array.

var fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

console.log(fruits) // Inicial

fruits.shift();

console.log(fruits);


// Sort the array in order.


fruits.sort();

console.log(fruits);


// Put “Kiwi” at the end of the array.

fruits.push("Kiwi");

console.log(fruits);

// Remove “Apples” from the array. Don’t use the same method as in the question 1.


fruits.splice(0,1)

console.log(fruits);

// Sort the array in reverse order. 
// (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’]) 
// You should have at the end: ["Kiwi", "Oranges", "Blueberries"]


fruits.reverse();

console.log(fruits);


// Access the item “Oranges”. 
// let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// could not do it

var moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(moreFruits[1][1][0]);