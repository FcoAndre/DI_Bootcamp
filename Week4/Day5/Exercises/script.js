// // Exercise 1 - Change the navbar

// 1 - change the value od the id 

let newDiv = document.getElementById("navBar");
newDiv.setAttribute('id', "socialNetworkNavigation");  

// 2 - add  new li to the ul
// a - create a new li

let newLi = document.createElement('li');
let liTextNode = document.createTextNode("Logout")
newLi.appendChild(liTextNode);

let theUl = document.getElementsByTagName("ul")[0];
theUl.appendChild(newLi);




// // Exercise 2 - Users

// // 1 Change the name Pete to Richard

// let Pete = document.getElementsByTagName("li")[1];
// Pete.innerHTML = "Richard"; 

// // 2  Change  first name of the <ul> to your name

// let Francisco1 = document.getElementsByTagName("li")[0];
// let Francisco2 = document.getElementsByTagName("li")[2];
// Francisco1.innerHTML = "Francisco";
// Francisco2.innerHTML = "Francisco";

// // 3 - Add at the end of each <ul>, a <li> that says “Hey students”

// let li1 = document.createElement("li");
// let li2 = document.createElement("li");
// li1.innerHTML = "Hey students"
// li2.innerHTML = "Hey students"

// let ul1 = document.getElementsByTagName("ul")[0];
// let ul2 = document.getElementsByTagName("ul")[1];

// ul1.appendChild(li1);
// ul2.appendChild(li2);





// // Exercise 3 - Change the logo

// // Exercise 4 - Users and Style

// // Adding backgrounf and margin

// let divNew = document.getElementsByTagName('div')[0];
// divNew.style.background = 'lightblue';
// divNew.style.margin = '20px 20px 20px 20px'

// // removing jhon and add a border to Pete

// let parent = document.getElementsByTagName("ul")[0];
// let child = document.getElementsByTagName("li")[0];
// parent.removeChild(child);


// let newPete = document.getElementsByTagName("li")[0];
// newPete.style.border = '1px solid red'


// // change font size 

// let newTudo = document.getElementsByTagName('body')[0];
// newTudo.style.fontSize = '40px'

// // bonus - If the background color of the div is “light blue”,
// // alert “Hello x and y” (x and y are the users in the div)

// let x = document.getElementsByTagName('li')[0];
// let y = document.getElementsByTagName('li')[1];

// if (divNew.style.background = 'lightblue') {
//     alert("Hello x and y")
// }