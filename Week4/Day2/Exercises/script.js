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

var valores = prompt("how much did you pay? tell us separting everything by comma.")

var valores2 =  valores.split(',');


var x =0
console.log(x)
function myTip(){
  for (i=0; i<3 ; i++)
    if (valores2[i]<50)
      console.log(valores2[i])
        x = 2*valores2  // this *2 was just to make that it was working as a number
       console.log(x)

  // ---- tried many ways to make this value to become a number but it didnt work


}
myTip();
