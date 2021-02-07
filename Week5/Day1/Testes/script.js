// function myFunction() {
//     var table = document.getElementById("sampleTable");
//     var row = table.insertRow(0);
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     cell1.innerHTML = "CELULA 1";
//     cell2.innerHTML = "CELULA 2";
//   }


// let para = document.createElement("p");
// let node = document.createTextNode("This is new."); para.appendChild(node);
// let element = document.querySelector("#div1"); element.appendChild(para);

let para2 = document.createElement("p");
let node2 = document.createTextNode("This is new.");
 para2.appendChild(node2);
let element2 = document.querySelector("#div1"); 
let child = document.querySelector("#p1"); element.insertBefore(para, child);