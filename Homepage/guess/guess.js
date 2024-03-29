var maxNum = 1000;
var solution = Math.floor(Math.random() * (maxNum + 1));
var guesses = 0;
var startTime, endTime, started;
console.log("98sbd87j9wev8uvds9j872345jgdij" + solution);

function myLoad() {
    started = false;
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
    if (!started) {
        startTime = new Date();
        started = true;
    }
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
        document.getElementById("submit").style.display = "none";
        endTime = new Date();
        started = false;
        showStats();
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

function showStats() {
    var elapsed = new Date(endTime - startTime);
    var minutes = elapsed.getMinutes();
    var minutesString = "";
    if (minutes === 0) {
        minutesString = "00";
    } else if (minutes < 10) {
        minutesString = "0" + minutes;
    } else {
        mintutesString = minutes;
    }
    var seconds = elapsed.getSeconds();
    var secondsString = "";
    if (seconds === 0) {
        secondsString = "00";
    } else if (seconds < 10) {
        secondsString = "0" + seconds;
    } else {
        secondsString = seconds;
    }
    var average = new Date((endTime - startTime) / guesses);
    var avgMin = "";
    if (average.getMinutes() === 0) {
        avgMin = "00";
    } else if (average.getMinutes() < 10) {
        avgMin = "0" + average.getMinutes();
    } else {
        avgMin = average.getMinutes();
    }
    var avgSec = "";
    if (average.getSeconds() === 0) {
        avgSec = "00";
    } else if (average.getSeconds() < 10) {
        avgSec = "0" + average.getSeconds();
    } else {
        avgSec = average.getSeconds();
    }
    var statsString = "Total Time: "+ minutesString + ":" + secondsString + "." + elapsed.getMilliseconds() + "<br></br>Average Guess Time: " + avgMin + ":" + avgSec + "." + average.getMilliseconds();
    document.getElementById("stats").innerHTML = statsString;
}

function myPress() {
    if (window.event.keyCode === 13) {
        submitClick();
        document.getElementById("input").focus();
        document.getElementById("input").select();
    } else if (window.event.keyCode === 27) {
        newClick();
        document.getElementById("input").focus();
        document.getElementById("input").select();
    }
}

function newClick() {
    started = false;
    document.getElementById("stats").innerHTML = "";
    solution = Math.floor(Math.random() * (maxNum + 1));
    console.log("98sbd87j9wev8uvds9j872345jgdij" + solution);
    document.getElementById("result").innerHTML = "";
    guesses = 0;
    document.getElementById("guesses").innerHTML = "Guesses: " + guesses;
    document.getElementById("input").value = "";
    document.getElementById("input").focus();
    document.getElementById("main").style.background = "#7F337F";
    document.getElementById("main").style.color = "yellow";
    document.getElementById("submit").style.display = "inline-block";
}