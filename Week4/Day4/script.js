var numero = prompt("Choose a starting number");
var numeroinicio = numero
var qtd = "bottles";
var retirada = 1;

while (numero > 0) {
  if (numero == 1)  {
    var beer = "bottle"
    console.log("Take " + retirada++  + " down, pass it around")
  }
  if (retirada == 1){
    console.log(numero + " " + qtd + " of beer on the wall");
    console.log(numero + " bottles of beer");
    console.log("Take " + retirada++  + " down, pass it around")
    numero = numero -1
  }
    console.log(numero + " " + qtd + " of beer on the wall");
    console.log(numero + " " + qtd + " of beer");
    console.log("Take " + retirada++ + " down, pass them around");
    numero = numero - retirada+1;
    if (numero > 0) {
      if (numero == 1){
        console.log("Take " + retirada++ + " down, pass it around")
      }
        console.log(numero + " " + qtd + " of beer on the wall");
    } else {
        console.log("Go to the store and buy some more, " + numeroinicio + " bottles of beer on the wall...");
    }
}

