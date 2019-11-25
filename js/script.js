// Getd id's of required elements
var date = document.getElementById("date");
var itemCode = document.getElementById("itemCode");
var itemName = document.getElementById("itemName");
var itemCost = document.getElementById("itemCost");
var itemQty = document.getElementById("itemQty");
var addItem = document.getElementById("addItem");
var textArea = document.getElementById("textArea");

var subtotal = document.getElementById("subtotal");
var salestax = document.getElementById("salestax");
var totalcost = document.getElementById("totalcost");

var genInvoice = document.getElementById("genInvoice");
var printInvoice = document.getElementById("printInvoice");

//Declaring Variables
var pad = "           ";
var item_cost=0;
var item_qty=0;


//Set the status of the Add Item/Print/Generate Invoice Buttons
printInvoice.disabled = true;
genInvoice.disabled = false;
addItem.disabled = false;

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
//console.log(month + "/" + day + "/" + year);
date.value = month + "/" + day + "/" + year;

//Code for what happens when the "Add Item" button is clicked
addItem.onclick = function(){
//Validate values that we enter
    //Validating Item Code
    if (itemCode.value == ""){
        alert("Enter a valid Item Code");
        itemCode.focus();
        return;
    }
    //Validating Item Cost and checking if it is a number
    //console.log((itemCost.value));
    if (itemCost.value == ""){
        alert("Enter a valid cost");
        itemCost.focus();
        return;
    }

    if(isNaN(itemCost.value)){
        alert("Not a valid cost");
        itemCost.focus();
        return;
    }

item_cost =  parseFloat(itemCost.value).toFixed(2);

//Validating Item Qty and checking if it is a number
    if (itemQty.value == ""){
        alert("Enter a quantity");
        itemQty.focus();
        return;
    }

    if(isNaN(itemQty.value)){
        alert("Not a valid quantity");
        itemQty.focus();
        return;
    }

item_qty =  parseInt(itemQty.value);
//Calculate the line cost
    var line_cost = parseFloat(itemCost.value) * parseInt(itemQty.value);
    line_cost = parseFloat(line_cost);
//Add it to the sub total
    subTotal += line_cost;
    //console.log(subTotal);
    subtotal.value = subTotal.toFixed(2);

    invoiceArray = parseInt(i.toString().padEnd(5))+1+pad;

    invoiceArray += itemCode.value.padEnd(10)+pad;

    invoiceArray += itemName.value.padEnd(40)+pad;

    invoiceArray += item_cost.padEnd(10,' ')+pad;

    invoiceArray += itemQty.value.padEnd(10,' ')+pad;

    invoiceArray += line_cost.toFixed(2).padEnd(10,' ')+"\n";


//Display the array string in the text area
    textArea.value += invoiceArray;

    //Empty values when button is clicked
    itemCode.value="";
    itemName.value="";
    itemQty.value="";
    itemCost.value="";
    i++;
}

genInvoice.onclick = function(){
//Get value of Sales Tax
    var salesTax = 1;
    //console.log(salesTax.value);
    if (salestax.value != ""){
        salesTax = parseFloat(salestax.value);
        //console.log(salesTax);
    }else if (salestax.value = ""){
        salesTax = parseFloat(salesTax);
        //console.log(salesTax);
    }

    //Finding the total cost and showing it in the corresponding box
    var totalCost = subTotal + subTotal*salesTax*0.01;
    totalcost.value = totalCost;
    //Once total cost is calculated and invoice is generated, another item cannot be added
    addItem.disabled = true;
    printInvoice.disabled = false;
    genInvoice.disabled = false;
}

printInvoice.onclick = function(){
    //Disable the Generate Invoice Button once Print is given
    genInvoice.disabled = true;
    }
