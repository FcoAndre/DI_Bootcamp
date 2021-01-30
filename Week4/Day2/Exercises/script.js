//  Exercise 1 : Keyless Car

// var age = prompt('Qual a sua idade?');

// function checkDriverAge(age) {
//     if (age > 18) {
//         alert("You are old enough to drive, Powering On. Enjoy the ride!")
//     } else if (age < 18) {
//         alert("Sorry, you are too young to drive this car. Powering off")
//     } else if (age == 18) {
//         alert("Congratulations on your first year of driving. Enjoy the ride!")
//     } else {
//         alert("I do not understand you")
//     }
// }

// checkDriverAge(age);










// Exercise 2 : What’s In My Wallet ?


// const changeEnough = function (coins, price)  {
//     let coinsTotal = [coins[0]*0.25, coins[1]*0.10, coins[2]*0.05, coins[3]*0.01];
//         coinsTotal= [coinsTotal[0]+coinsTotal[1]+coinsTotal[2]+coinsTotal[3]];

//         if(coinsTotal>=price) {
//             console.log("True")
//         }
//         else{
//             console.log("False")
//         }

// }

// changeEnough([2, 100, 0, 0], 14.11);
// changeEnough([0, 0, 20, 5], 0.75) ;









// Exercise 3

// numerototal =0

// for (let numero  = 0; numero  <= 500; numero ++){


//      if (0 == numero % 23){
//        console.log (numero + " " + "is a multiple"); 
//        numerototal = numerototal +numero
//            }
//     }

//     console.log(numerototal + ' is the total')









// Exercise 4

// let amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100
// }

// let obj = prompt('What do you want to add to your basket?');

// function checkBasket(obj){
//     if(obj in amazonBasket){

//             alert("This item was already added to your basket")
//         }

//     else{
//         alert("This item was not added to your basket yet");
//     }
// }

//     checkBasket(obj);





// Exercise 5



//   let shoppingList = ["banana", "orange", "apple"];

//   let stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// let prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 


// function myBill(){
//   sum = 0
//   for (i = 0 ; i < shoppingList.length ; i++) {
//    preco = (prices[shoppingList[i]])
//     sum = sum + preco
//     // sum = prices.shoppingList[i];
//   }
// }


// myBill()
// console.log("The total price is $"+sum)







// Exercise 6

// const valores = prompt("how much did you pay? tell us separting everything by comma.")

// const valores2 =  valores.split(',');

// let totalTips = [];
// let totalTotal = [];


// function myTip(){
//   for (let i=0; i<3 ; i++){
//     if (valores2[i]<50){
//       x = 0.2*valores2[i]; 
//       totalTips.push(x)
//     }
//     if (valores2[i]>50 && valores2[i]<200) {
//         y = 0.15*valores2[i];
//         totalTips.push(y)
//       }
//     if (valores2[i]>200) {
//       z = 0.1*valores2[i]
//       totalTips.push(z)
//     }
// }
// }
// myTip(); // Gives how much was the tip

// function myTotal(){
//   for (let i=0; i<3 ; i++){
//     if (valores2[i]<50){
//       x = 1.2*valores2[i]; 
//       totalTotal.push(x)
//     }
//     if (valores2[i]>50 && valores2[i]<200) {
//         y = 1.15*valores2[i];
//         totalTotal.push(y)
//       }
//     if (valores2[i]>200) {
//       z = 1.1*valores2[i]
//       totalTotal.push(z)
//     }
// }
// }

// myTotal(); // Gives how much was the total

// console.log(totalTips)
// console.log(totalTotal)











// 7 

// check price hotel

// do {
//   numdays = prompt("How many nights you gonna stay?");
// }
// while (isNaN(numdays))


// function hotel_cost() {
//   x = numdays * 140
//   return x
// }
// hotel_cost();

// // check price flight

// destination = 1

// function plane_ride_cost() {
//   while (!(isNaN(destination))) {
//     destination = prompt("What is yout destination?");
//   }
//   if (destination == "London") {
//     var price1 = 183;
//     return price1;
//     }
//   if (destination == "Paris") {
//     var price2 = 220;
//     return price2;
//   }
//   if (destination !== "Paris"|| destination !== "London"){
//     var price3 = 300;
//     return price3;
//   }
// }

// plane_ride_cost();

// // check price car

// do {
//   numcars = prompt("For how many days you need a car?");
// }
// while (isNaN(numdays))


// function rental_car_cost() {
//   z = numcars * 40
//   return z
// }
// rental_car_cost();

// // check total


// function total_vacation_cost() {
//   console.log("The hotels costs " + hotel_cost() + " the flight ticket costs " + plane_ride_cost() + " and the car costs " + rental_car_cost())
// }

// total_vacation_cost();

