// Getd id's of required elements
var date = document.getElementById("date");
var itemCode = document.getElementById("itemCode");
var itemName = document.getElementById("itemName");
var itemCost = document.getElementById("itemCost");
var itemQty = document.getElementById("itemQty");
var addItem = document.getElementById("addItem");
var textArea = document.getElementById("textArea");

//Adding a padding left and right of the strings
/*var padLeft = function(text,width,pad){
    if (arguments.length<2 || arguments.length>3){
        return "";
    }
    if (arguments.length == 2){
        pad="";
    }
    var result = text.toString();
    while(result.length<width){
        result = pad+result;
    }
    return result;
}

var padRight = function(text,width,pad){
    if (arguments.length<2 || arguments.length>3){
        return "";
    }
    if (arguments.length == 2){
        pad="";
    }
    var result = text.toString();
    while(result.length<width){
        result = result+pad;
    }
    return result;
}
*/
//Set Invoice Header
var title = "Number" + "         "+ "Item Code"+"                              "+"Item Name"+"                                    "+"Item Cost" + "                    "+"Item Qty"+"          "+"Line Cost\n";
title +="----------------------------------------------------------------------------------------------------------------------------------------------------"+"\n";
textArea.value = title;
//Initialize the array and counter
var invoiceArray = [];
var i=0;
//  textArea.value = invoiceArray;
var currentTime = new Date();
var month = currentTime.getMonth() + 1;
var day = currentTime.getDate();
var year = currentTime.getFullYear();
console.log(month + "/" + day + "/" + year);
date.value = month + "/" + day + "/" + year;



addItem.onclick = function(){

    /*list += padRight("Item Name",40) + "";
    list += "Quantity ";
    list += "Item Cost";
    list += "Line Cost\n";*/

    /*list+=padRight("",10,"-") + " ";
    list+=padRight("",40,"-") + " ";
    list += "- ";
    list += padRight("",9,"-")+ " ";
    list += padRight("",9,"-")+ "\n";*/

    invoiceArray = i+1+"                   "+itemCode.value +"                                      "+itemName.value+"                                           "+itemCost.value+"                    "+itemQty.value+"\n";
    //console.log(list);
    textArea.value += invoiceArray;

    itemCode.value="";
    itemName.value="";
    itemQty.value="";
    itemCost.value="";
    i++;
}
