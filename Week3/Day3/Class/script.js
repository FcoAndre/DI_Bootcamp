

//JS CONDITIONALS 

//Syntax

/*

if(condition){
	
  Task to perform

} else if(){}

else{}


*/

// let age = 20

// if (age > 18) {
// 	console.log("You're a big man");
// }


// let age = 20;

// if (age > 18) {

//   console.log("We can go to a pub together !!")

// } else {

// 	 console.log("Sorry...You have to stay at home tonight")

// }





//Strings

// var feeling = 'good';


// if (feeling == 'good'){

//   console.log('GREAT!')

//  } else if( feeling == 'bad'){

//     console.log('Im so Sorry!')

//   } else {

//   console.log('I dont Understand')
// }





// let age = 18;

// if (age === 20) {

//   console.log("It's your birthday !!");

// } else if (age > 18) {

//   console.log("We can go to a pub together !!");

// } else {

// 	console.log("Sorry...You have to stay at home tonight")
// }



// let number = 3;

// if (number > 2) {

// 	console.log('number is greater than 2');

// } else if( number === 2 ){

// 	console.log('number is equal to 2');

// } else{

// 	console.log('number is not greater than or equal to 2');

// }


//Negation
// let bool = false;
// console.log(!bool);



// var number = 2;

// if ( !(number > 2) ) {

// 	console.log('The condition is met');

// }



//var age = '18';

// if (age == 18) {
//     console.log("You're a big man")
// }


// if (age > 18) {

//     console.log("We can go to a pub together !!")

// } else {
//      console.log("Sorry...You have to stay at home tonight")
// }



// Inner if statements
// let age = 65;

// if (age > 18) {

//   if (age > 60) {

//     console.log("You are too old");

//   }

//   console.log("It's your birthday !!");

// }  else {
//   console.log("Sorry...You have to stay at home tonight")
// }



// if (age === 18) {

//     console.log("It's your birthday !!");

// } else if (age > 18) {

//     console.log("We can go to a pub together !!");

// } else {
//     console.log("Sorry...You have to stay at home tonight")
// }




//Exercise:
// Make a keyless car!

// This car will only let you drive if you are over 18. Make it do the following:

// Using prompt() and alert(), ask a user for their age.

// IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off
// IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!
// IF they say they are over 18, respond with: "Powering On. Enjoy the ride!"


// var age = prompt('What is Your Age?');

// if (age < 18){
// 	alert("Sorry, you are too young to drive this car. Powering off");

// } else if (age == 18){
// 	alert("Congratulations on your first year of driving. Enjoy the ride!");

// } else {
// 	alert("Powering On. Enjoy the ride!");
// } 





//SWITCH CONDITION



// let fruit = 'Papayas';

// fruit = fruit.toLowerCase();
// //console.log(fruit);


// switch (fruit) {

// 	case 'oranges':
// 	  console.log('Oranges are $0.59 a pound.');
//     break;

// 	case 'papayas':
// 	  console.log('papayas are $2.79 a pound.');
// 	  // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;

// 	default:
// 	  console.log('Sorry, we are out of ' + fruit + '.');
// }



// let fruit = 'Oranges';

// switch (fruit) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log('Sorry, we are out of ' + fruit + '.');
// }





// var favoriteColor = 'yellow';

// switch (favoriteColor) {

//   case 'blue': console.log('Favorite color is blue');
//     break;
//   case 'red': console.log('The favorite color is red');
//     break;
//   case 'yellow': console.log('The favorite color is yellow');
//     break;
//   default:
//     console.log('I dont know your favorite color');
//     break;

// }




// var expr = 'Papayas';

// switch (expr) {

//   case 'Oranges':

//     console.log('Oranges are $0.59 a pound.');
//     break;

//   case 'Mangoes':

//     console.log('Mangoes are $1.50 a pound.');
//     break;

//   case 'Papayas':

//     console.log('Papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;

//   default:
//     console.log('Sorry, we are out of ' + expr + '.');
// }




// // Default position 
// let fruit = 'Cherries';

// switch (fruit) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   default:
//     console.log('Sorry, we are out of ' + fruit + '.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
// }




// Exercises:

// Write as comments the steps of the resolution of this piece of code

// Guess what will be the result before checking it


// let a = 2 + 2;  //4

// switch (a) {
//   case 3:
//     alert( 'Too small' );
//     break;
//   case 4:
//     alert( 'Exactly!' );
//     break;
//   case 5:
//     alert( 'Too large' );
//     break;
//   default:
//     alert( "I don't know such values" );
// }



// let a = 2 + 2;  //4

// switch (a) {
//   case 4:
//     alert('Right!');
//     break;

//   case 3: // (*) grouped two cases
//   case 5:
//     alert('Wrong!');
//     alert("Why don't you take a math class?");
//     break;

//   default:
//     alert('The result is strange. Really.');
// }





// Introduction On Objects


// let person = {

//   firstName: "John",

//   lastName: "Doe",

//   age: 25

//   };

//console.log(person.firstName) // John

//console.log(person.lastName) // Doe

//console.log(person.age) // 25

//console.log(person["firstName"]) // John

//console.log(person) 

//Get the Keys
//console.log(Object.keys(person));

//Get Values
//console.log(Object.values(person));




// let person = {
// 	firstName: "John",
// 	lastName: "Doe",
// 	eyeColor: 'Blue'
// };

// person.firstName = "Isaac";
// person.eyeColor = "Green";
// person.height = "6'1 foot";
// person.picture = './images/image.jpg';

// console.log(person) 



//  let person = {
// 	firstName: "John",
// 	lastName: "Doe",
// 	age: 120
//   };



//   delete person.age

//   console.log(person) 



  // {
  //   lastName: "Doe",
  // };







// Exercise:

// Create a stuctured html file linked to a JS file

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".



// let person = {

// 	username: 'FiendRiver',
// 	password: 'notyourbusiness'
// }

// console.log(person);


// var database = [person];

// console.log(database);


// var newsfeed = [];

// let isaac = {

// 	username: 'isaac1',
// 	timeline: 'Coding with Javascript'
// }

// let shai = {

// 	username: 'shaico12',
// 	timeline: 'teacher\'s pet'
// }

// let sheryl = {

// 	username: 'sheryledery55',
// 	timeline: 'No More Corona!'
// }


// newsfeed.push(isaac, shai, sheryl);

// console.log('Newsfeed:', newsfeed);






//About Regex:

// A regular expression is an object that describes a pattern of characters.
// Regular expressions are used to perform pattern - matching and "search-and-replace" functions on text.

//https://www.youtube.com/watch?v=sXQxhojSdZM
//https://www.w3schools.com/jsref/jsref_obj_regexp.asp
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions
//Character classes: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes
// Test Your Regex: https://regex101.com/
//Learn More: https://www.youtube.com/watch?v=909NfO1St0A



// Example with Regex:

// var str = "Visit W3Schools";
// var patt = /w3schools/i;
// var result = str.match(patt);
// //console.log(result);

// if (result){

//   console.log('Yes')

// } else{

//   console.log('No');
// }

// Example explained:

// /w3schools/i  is a regular expression.
// w3schools  is a pattern (to be used in a search).
// i  is a modifier (modifies the search to be case-insensitive).



 //Regex Example 2: Test To Match an Email:

// var regex = /^.+@.+\..+$/;

// console.log(regex.test('johndoe@gmail.com'));