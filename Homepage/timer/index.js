var countdownA, countdownB, time, displayA, displayB, countingA, countingB;

function startTimer(endTime, display) {
    if (display.id === "timeA") {
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

            if (--timerA < 0) {
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

            if (--timerB < 0) {
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
        displayA.textContent = "30:00";
        document.getElementById("statusA").textContent = "Available!";
        clearInterval(countdownA);
        countingA = false;
    } else if (button === "stopB") {
        displayB.textContent = "30:00";
        document.getElementById("statusB").textContent = "Available!";
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
        document.getElementById("statusA").textContent = "Finished at " + doneTime;
    } else if (button === "startB" && !countingB) {
        startTimer(done, displayB);
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