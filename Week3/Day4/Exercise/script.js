// Exercise 1: Simple If/Else Statement
// 1 - Create 2 variables, x and y. Each of them has a different numeric value.
// 2 - Write an if/else statement that checks the biggest number.
// If x equals 5 and y equals 2, the program should display:
// x is the biggest number


// var x = prompt('Define a value for x');
// var y = prompt('Define a value for y');


// if (x>y) {
//   alert("X is the biggest number")
// } else {
//   alert("Y is the biggest number")
// }





// Exercise 2: Chihuahua
// Create a variable newDog that is equal to the string “Chihuahua”.
// Check and display how many letters are in newDog.
// Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just use 2 console.log).
// Check if the variable newDog equals to “Chihuahua”
// if it does, display ‘I love Chihuahua, it’s my favorite dog breed’
// else, console.log ‘I dont care, I prefer cats’


// let newDog = "Chihuahua";
// let n = newDog.length;
// alert(n)

// console.log(newDog.toLowerCase())

// console.log(newDog.toUpperCase())


// if (newDog == "Chihuahua") {
//   alert("I love Chihuahua, it’s my favorite dog breed")
// } else {
//   alert("I dont care, I prefer cats")
// }





// Exercise 3: Even Or Not Even
// Ask a number to the user, and save it to a variable.
// Check if the variable is an even number
// If it is, display: “x is an even number’. Where x is the actual number of the user.
// If it isn’t, display “x is not an even number’. Where x is the actual number of the user


// var num = prompt('Define a value for x');

// if(num % 2 == 0) {
//   alert(num + ' is an even number.');
// } else {
//   alert(num + ' is an odd number.');
// }


// Exercise 4: Group Chat
// let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]
// Using the array above, console.log the number of users in a group conversation based on the following rules:
// If there is no one, display “no one is online”.
// If there is 1 person, display “<name_user> is online”.
// If there are 2 people, display “<name_user1> and <name_user2> are online”.
// If there are n>2 people, display the first two names and add “and n-2 more are online”.
// For example, if there are 5 users, it should display:
// name_user1, name_user2 and 3 more are online



// let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]

// let number = users.length
// let resto = number - 2

// let user0 = users[0];
// let user1 = users[1];


// switch (number) {
//   case 1:
//     alert(user0 + 'is online.');
//     break;
//   case 2:
//     alert(user0 + ' and ' + user1 + ' are online.');
//     break;
//   default:
//     alert(user0 + ', ' + user1 + ' and ' + resto + ' more are online.');
// }
