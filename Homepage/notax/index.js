var inString = "";
var inNum = 0.0;
var outNum = 0.0;
var tax = 0.0;

function onLoad() {
    document.getElementById("input").focus();
}

function myPress() {
    if (window.event.keyCode === 13) {
        document.getElementById("input").value = inNum;
        document.getElementById("input").select();
        document.getElementById("image2").style = "animation: bounce 0.8s normal ease-in-out";
    }
    
    inString = document.getElementById("input").value;
    inNum = parseFloat(inString);
    
    if (isNaN(inNum) === true) {
        inNum = 0;
    }
    
    outNum = inNum / 1.13;
    tax = inNum - outNum;
    
    var inString = inNum.toFixed(2);
    var taxString = tax.toFixed(2);
    var outString = outNum.toFixed(2);
    
    document.getElementById("output1").innerHTML = "With Tax:&nbsp&nbsp&nbsp$" + inString;
    
    if (inString.length === taxString.length) {
        document.getElementById("output2").innerHTML = "Tax:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp$" + taxString;
    } else {
        document.getElementById("output2").innerHTML = "Tax:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp$" + taxString;
    }
    if (inString.length === outString.length) {
        document.getElementById("output3").innerHTML = "Before Tax:&nbsp$" + outString;
    } else {
        document.getElementById("output3").innerHTML = "Before Tax:&nbsp&nbsp$" + outString;
    }
}

addEventListener("animationend", (event) => {});

onanimationend = (event) => {document.getElementById("image2").style = "animation: none";};