// Exercise 1 : Your Favorite Colors
// Create an array to hold your top colors.
// For each choice, console.log a string like: “My #1 choice is blue”, “My #2 choice is red” ect…
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the right suffix for the number.
// Hint : create an array of suffix to do the Bonus


// let cores = [ "Blue", "Red", "Black", "White" ]

// for (i=0; i<4; i++)
// {
// console.log('My #' + (i+1) + ' is ' + cores[i])
// }








// Exercise 2 : List Of People
// let people = ["Greg", "Mary", "Devon", "James"]

// Write the command to remove “Greg” from the array.

// let people = ["Greg", "Mary", "Devon", "James"]

// people.shift();

// console.log(people);

// Write the command to replace “James” by “Jason” in the array.

// people.splice (2,2,'Jason');

// console.log(people);

// // Write the command to add your name to the end of the array.

// people.push('Francisco');

// console.log(people);

// // Using a loop, iterate through this array and console.log all of the people.


// for (i=0; i<4; i++)
// {
// console.log(people[i])
// }


// Using a loop, iterate through this array and after console.log-ing “Jason”, exit from the loop.


// for (let i = 0; i < people.length; i++) {
// 	if (people[i-1] === 'Jason') { 
// 		break;
// 	  }
// 	console.log(people[i]); 
//   }


// Write the command to make a copy of the array using slice. 
// The copy should NOT include “Mary” or your name.


// console.log(people)

// var newpeople = people.slice(1,3)

// console.log(newpeople)

// Write the command that gives the indexOf where “Mary” is located. Look on google what indexOf is

// var nmary = people.indexOf('Mary')
// console.log(nmary)


// Write the command that gives the indexOf where “Foo” is located (this should return -1). Why does it return -1

// var nfoo = people.indexOf('Foo')
// console.log(nfoo)


// Write a variable called last which value is the last element of the array.

// var last = people.length;
// console.log(people[last-1])











// Exercise 3 : Repeat The Question

// let numero = prompt('Digite um numero');


// do {
//   var numero = prompt ('type a number')
//   console.log(numero)
// }
// while (numero < 10)













// Exercise 4 : Attendance - I was not able to do it

// let guestList = {
//   randy: "Germany",
//   karla: "France",
//   wendy: "Japan",
//   norman: "England",
//   sam: "Argentina"
// }

// var x = prompt ("What is the name?")


// if (x in guestList){
//   alert('Hi, I am ' + x + ' and I come from ' + guestList[x]) 
// }
// else {
//   alert("You can`t sit with us")
// }








// Exercise 5 : Family - Not Succeded!


// var family = {
//   mom: "Maria",
//   father: "Salan",
//   son: "Francisco",
//   cat: "Albert"
// };



// console.log(family);











// Exercise 6 : Secret Group - tried a function that I could get the up

// let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]

// for (let i=0; i<names.length ; i++)
// {
//     names[i]=names[i].charAt(0)
// }

// console.log(names)

// names.sort();

// console.log(names)
              
// let namestring = names.toString();

// console.log(namestring)

// namestring = namestring.replace(/,/g, "");

// console.log(namestring)


