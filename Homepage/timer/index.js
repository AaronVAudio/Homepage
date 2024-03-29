var countdownA, countdownB, time, displayA, displayB, countingA, countingB;

function startTimer(endTime, display) {
    if (display.id === "timeA") {
        document.getElementById("tabA").style.textShadow = "0px 0px 10px lightblue";
        document.getElementById("tabA").style.color = "lightblue";
        countingA = true;
        var minutesA, secondsA;
        countdownA = setInterval(function () {
            var currentTime = new Date();
            if (currentTime < endTime) {
                var remaining = new Date(endTime - currentTime);
            } else {
                var remaining = 0;
            }
            var timerA = remaining.getMinutes() * 60 + remaining.getSeconds();
            minutesA = parseInt(timerA / 60, 10);
            secondsA = parseInt(timerA % 60, 10);

            minutesA = minutesA < 10 ? "0" + minutesA : minutesA;
            secondsA = secondsA < 10 ? "0" + secondsA : secondsA;

            display.textContent = minutesA + ":" + secondsA;

            if (currentTime > endTime) {
                timerA = 0;
                display.textContent = "0:00";
                let newWin = window.open("about:blank", "Table A Done!", "width=200,height=200");

                newWin.document.write("Table A is Done!");
                newWin.focus();
                clearInterval(countdownA);
                countingA = false;
            }
        }, 1000);
    } else if (display.id === "timeB") {
        document.getElementById("tabB").style.textShadow = "0px 0px 10px lightblue";
        document.getElementById("tabB").style.color = "lightblue";
        countingB = true;
        var minutesB, secondsB;
        countdownB = setInterval(function () {
            var currentTime = new Date();
            if (currentTime < endTime) {
                var remaining = new Date(endTime - currentTime);
            } else {
                var remaining = 0;
            }
            var timerB = remaining.getMinutes() * 60 + remaining.getSeconds();
            minutesB = parseInt(timerB / 60, 10);
            secondsB = parseInt(timerB % 60, 10);

            minutesB = minutesB < 10 ? "0" + minutesB : minutesB;
            secondsB = secondsB < 10 ? "0" + secondsB : secondsB;

            display.textContent = minutesB + ":" + secondsB;

            if (currentTime > endTime) {
                timerB = 0;
                display.textContent = "0:00";
                let newWin = window.open("about:blank", "Table B Done!", "width=200,height=200");

                newWin.document.write("Table B is Done!");
                newWin.focus();
                clearInterval(countdownB);
                countingB = false;
            }
        }, 1000);
    }
}

function stopTimer(button) {
    if (button === "stopA") {
        document.getElementById("tabA").style.textShadow = "none";
        document.getElementById("tabA").style.color = "grey";
        displayA.textContent = "30:00";
        document.getElementById("statusA").textContent = "Available!";
        document.getElementById("startA").style.transform = "translateY(-5px)";
        document.getElementById("startA").style.boxShadow = "0px 5px 0px darkgreen";
        document.getElementById("stopA").style.transform = "translateY(0px)";
        document.getElementById("stopA").style.boxShadow = "0px 0px 0px darkred";
        clearInterval(countdownA);
        countingA = false;
    } else if (button === "stopB") {
        document.getElementById("tabB").style.textShadow = "none";
        document.getElementById("tabB").style.color = "grey";
        displayB.textContent = "30:00";
        document.getElementById("statusB").textContent = "Available!";
        document.getElementById("startB").style.transform = "translateY(-5px)";
        document.getElementById("startB").style.boxShadow = "0px 5px 0px darkgreen";
        document.getElementById("stopB").style.transform = "translateY(0px)";
        document.getElementById("stopB").style.boxShadow = "0px 0px 0px darkred";
        clearInterval(countdownB);
        countingB = false;
    }
}

function startClick(button) {
    var now = new Date();
    var done = new Date(now.getTime() + time*60000);
    if (done.getHours() <= 12) {
        var doneTime = done.getHours() + ":" + done.getMinutes() + "AM";
    } else {
        var doneHours = done.getHours() - 12;
        var minutes = done.getMinutes();
        if (minutes < 10) {
            var minuteString = "0" + minutes;
        } else {
            var minuteString = minutes;
        }
        var doneTime = doneHours + ":" + minuteString + "PM";
    }
    if (button === "startA" && !countingA) {
        startTimer(done, displayA);
        document.getElementById("startA").style.transform = "translateY(0px)";
        document.getElementById("startA").style.boxShadow = "0px 0px 0px darkgreen";
        document.getElementById("stopA").style.transform = "translateY(-5px)";
        document.getElementById("stopA").style.boxShadow = "0px 5px 0px darkred";
        document.getElementById("statusA").textContent = "Finished at " + doneTime;
    } else if (button === "startB" && !countingB) {
        startTimer(done, displayB);
        document.getElementById("startB").style.transform = "translateY(0px)";
        document.getElementById("startB").style.boxShadow = "0px 0px 0px darkgreen";
        document.getElementById("stopB").style.transform = "translateY(-5px)";
        document.getElementById("stopB").style.boxShadow = "0px 5px 0px darkred";
        document.getElementById("statusB").textContent = "Finished at " + doneTime;
    }
}

window.onload = function () {
    time = 30;
    countingA = false;
    countingB = false;
    displayA = document.querySelector('#timeA');
    displayB = document.querySelector('#timeB');
};