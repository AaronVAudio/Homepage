var maxNum = 1000;
var solution = Math.floor(Math.random() * (maxNum + 1));
var guesses = 0;
console.log("98sbd87j9wev8uvds9j872345jgdij" + solution);

function myLoad() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.has("d")) {
        maxNum = parseInt(urlParams.get("d"));
        if (isNaN(maxNum) === true) {
            maxNum = 1000;
        }
        console.log(maxNum);
        solution = Math.floor(Math.random() * (maxNum + 1));
        console.log("98sbd87j9wev8uvds9j872345jgdij" + solution);
    }
    document.getElementById("title").innerHTML = "Choose A Number (0-" + maxNum + "):"
    document.getElementById("guesses").innerHTML = "Guesses: " + guesses;
    document.getElementById("input").focus();
}

function submitClick() {
    var inNum = document.getElementById("input").value;
    var inPercent = (solution - Math.abs(solution - inNum)) / solution;
    var redDec = Math.round(255 * inPercent);
    var blueDec = Math.round(255 * (1 - inPercent));
    
    var redHex = redDec.toString(16);
    if (redHex.length === 1) {
        redHex = "0" + redHex;
    }

    var blueHex = blueDec.toString(16);
    if (blueHex.length === 1) {
        blueHex = "0" + blueHex;
    }

    var hexCode = "#" + redHex + "33" + blueHex;
    document.getElementById("main").style.background = hexCode;
    
    if (parseInt(inNum) === solution) {
        document.getElementById("result").innerHTML = "CORRECT!";
        document.getElementById("main").style.background = "gold";
        document.getElementById("main").style.color = "purple";
    } else if (inNum < solution) {
        document.getElementById("result").innerHTML = "Too low!";
    } else if (inNum > solution) {
        document.getElementById("result").innerHTML = "Too high!";
    } else {
        document.getElementById("result").innerHTML = "what";
    }
    guesses++;
    document.getElementById("guesses").innerHTML = "Guesses: " + guesses;
    document.getElementById("input").focus();
}

function newClick() {
    solution = Math.floor(Math.random() * (maxNum + 1));
    console.log("98sbd87j9wev8uvds9j872345jgdij" + solution);
    document.getElementById("result").innerHTML = "";
    guesses = 0;
    document.getElementById("guesses").innerHTML = "Guesses: " + guesses;
    document.getElementById("input").value = "";
    document.getElementById("input").focus();
    document.getElementById("main").style.background = "#7F337F";
    document.getElementById("main").style.color = "yellow";
}