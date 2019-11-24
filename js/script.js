// Getd id's of required elements
var date = document.getElementById("date");
var itemCode = document.getElementById("itemCode");
var itemName = document.getElementById("itemName");
var itemCost = document.getElementById("itemCost");
var itemQty = document.getElementById("itemQty");
var addItem = document.getElementById("addItem");
var textArea = document.getElementById("textArea");
var pad = "           ";

//Set Invoice Header

var title = "No.".padEnd(10) + pad+ "Item Code".padEnd(10)+pad+"Item Name".padEnd(40)+pad+"Item Cost".padEnd(10) +pad+"Item Qty".padEnd(10)+pad+"Line Cost\n";
title +="---------------------------------------------------------------------------------------------------------------------"+"\n";
//textArea.value += invoiceArray;
//Initialize the array and counter
var invoiceArray = "";
var i=0;
var subTotal = 0;
textArea.value = title;
var currentTime = new Date();
var month = currentTime.getMonth() + 1;
var day = currentTime.getDate();
var year = currentTime.getFullYear();
console.log(month + "/" + day + "/" + year);
date.value = month + "/" + day + "/" + year;

addItem.onclick = function(){

    var line_cost = parseFloat(itemCost.value) * parseInt(itemQty.value);

    invoiceArray = parseInt(i.toString().padEnd(5))+1+pad;

    invoiceArray += itemCode.value.padEnd(10)+pad;

    invoiceArray += itemName.value.padEnd(40)+pad;

    invoiceArray += itemCost.value.padEnd(10,' ')+pad;

    invoiceArray += itemQty.value.padEnd(10,' ')+pad;

    invoiceArray += line_cost.toString().padEnd(10,' ')+"\n";

    textArea.value += invoiceArray;

    itemCode.value="";
    itemName.value="";
    itemQty.value="";
    itemCost.value="";
    i++;
}
