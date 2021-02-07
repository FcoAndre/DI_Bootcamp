// // Exercise 1

// // Give to all paragraphs inside the <article> tag the class of para_article.

// var newP = document.getElementsByTagName("p");
// for (p of newP) {
//     p.classList.add("para_article");
// }

// // Remove the last paragraph in the article.
// // console.log(newP[3])

// newP[3].remove();

// // Add an event listener so that when you click on the h2, it is removed from the DOM.


// var h2 = document.getElementsByTagName("h2")[0];
// h2.addEventListener("click", myFunctionh2);

// function myFunctionh2() {
//     h2.remove()
//   }

// //   Set the font size of the h1 to be a random pixel size from 0 to 100.

// var h1 = document.querySelector("h1");
// h1.style.fontSize = Math.random() * 100 + "px";


// //   Hide the 1st paragraph, when it’s clicked. (use the display property )

// newP[0].addEventListener('click', myFunctionp1);
//     function myFunctionp1(){
//     newP[0].style.display = "none";
// }

// //   Get the values from the inputs and append them to the end of the html, inside a table.

// let answer = document.getElementsByTagName("button")[0];
// let username = document.getElementsByTagName("label")[0];
// let reply = document.getElementsByTagName("label")[1];

// // I was not able to proceed with the function - could you please help me from here?




// Exercise 2 : Transform The Sentence

// Create a function called : getBold_items() that takes no parameter. 
// This function has to collect all the bold items inside the paragraph.


// let allBold = document.getElementsByTagName("strong");

// function getBold_items() {
//     for (paragraph of allBoldParagraph) {
//         console.log(paragraph);
//     }
// }


// // Create a function called : highlight() that changes the color
// // of each bold item to blue.

// function highlight() {
//     for(i = 0; i < allBold.length; i++) {
//       allBold[i].style.color = 'blue';
//     }
// }


// // Create a function called : return_normal() that changes 
// // the color of each bold item to black.


// function return_normal() {
//     for(i = 0; i < allBold.length; i++) {
//       allBold[i].style.color = 'black';
//     }
// }

// // Call the function highlight() onMouseOver and the function return_normal() onMouseOut
// // I need help here - tried many ways but none of them seem to work

// let strong = document.getElementsByTagName("strong");

// strong.addEventListener('mouseover', highlight); // I dont get why im getting error here
// strong.addEventListener('mouseout', return_normal);

// // bellow another way that I tried

// // strong.addEventListener("mouseover", function () {
// //     for(i = 0; i < allBold.length; i++) {
// //       allBold[i].style.color = 'blue';
// //     }
// // })



// // Exercice 3 : Volume Of A Sphere
// // Write a JavaScript program to calculate the volume of a sphere.


// function volumeTotal() {
//   var volume;
//   var raio = document.getElementById('radius').value;
//   volume = ((4/3) * 3.14* Math.pow(raio,3)).toFixed(2);
//   document.getElementById('volume').value = volume;
//   return false;
//  } 
// window.onload = document.getElementById('MyForm').onsubmit = volumeTotal;