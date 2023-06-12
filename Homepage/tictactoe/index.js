var turn = "X";
var win = false;
var turns = 0;
cheat = false;
cheatP = false;

function loadPage() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.has("cheat")) {
        cheat = true;
        cheatP = true;
        document.getElementById("name").innerHTML = "Tic Tac Toe";
    }
}

function onClick(button) {
    if (button === "status") {
        if (!cheat) {
            cheat = true;
            if (win) {
                if (turn === "X") {
                    turn = "O";
                } else {
                    turn = "X";
                }
                document.getElementById("status").innerHTML = turn;
            }
            win = false;
            document.getElementById("name").innerHTML = "Tic Tac Toe";
        } else {
            cheat = false;
            document.getElementById("name").innerHTML = "TicTacToe";
        }
    } else {
        var bgnum = Math.floor(Math.random()*16777215);
        var bg = bgnum.toString(16);
        var txt = (16777215 - bgnum).toString(16);
    
        document.body.style.backgroundColor = "#" + bg;
        document.body.style.color = "#" + txt;

        if (button === "new") {
            document.getElementById("a1").innerHTML = "";
            document.getElementById("b1").innerHTML = "";
            document.getElementById("c1").innerHTML = "";
            document.getElementById("a2").innerHTML = "";
            document.getElementById("b2").innerHTML = "";
            document.getElementById("c2").innerHTML = "";
            document.getElementById("a3").innerHTML = "";
            document.getElementById("b3").innerHTML = "";
            document.getElementById("c3").innerHTML = "";
            win = false;
            turn = "X";
            turns = 0;
            cheat = false;
            document.getElementById("name").innerHTML = "TicTacToe";
            document.getElementById("status").innerHTML = turn;
        } else if (!win) {
            if (document.getElementById(button).innerHTML === "" || cheat) {
                if (cheat && document.getElementById(button).innerHTML ==="") {
                    turns = turns + 1;
                }
                
                document.getElementById(button).innerHTML = turn;
                
                if (!cheat) {
                    turns = turns + 1;
                }
                
                if (!cheatP) {
                    cheat = false;
                }

                document.getElementById("name").innerHTML = "TicTacToe";

                var a1 = document.getElementById("a1").innerHTML;
                var b1 = document.getElementById("b1").innerHTML;
                var c1 = document.getElementById("c1").innerHTML;
                var a2 = document.getElementById("a2").innerHTML;
                var b2 = document.getElementById("b2").innerHTML;
                var c2 = document.getElementById("c2").innerHTML;
                var a3 = document.getElementById("a3").innerHTML;
                var b3 = document.getElementById("b3").innerHTML;
                var c3 = document.getElementById("c3").innerHTML;

                if (a1 === b1 && a1 === c1 && a1 !== "") {
                    win = true;
                    document.getElementById("status").innerHTML = turn + " WINS!";
                } else if (a2 === b2 && a2 === c2 && a2 !== "") {
                    win = true;
                    document.getElementById("status").innerHTML = turn + " WINS!";
                } else if (a3 === b3 && a3 === c3 && a3 !== "") {
                    win = true;
                    document.getElementById("status").innerHTML = turn + " WINS!";
                } else if (a1 === a2 && a2 === a3 && a1 !== "") {
                    win = true;
                    document.getElementById("status").innerHTML = turn + " WINS!";
                } else if (b1 === b2 && b2 === b3 && b1 !== "") {
                    win = true;
                    document.getElementById("status").innerHTML = turn + " WINS!";
                } else if (c1 === c2 && c1 === c3 && c1 !== "") {
                    win = true;
                    document.getElementById("status").innerHTML = turn + " WINS!";
                } else if (a1 === b2 && a1 === c3 && a1 !== "") {
                    win = true;
                    document.getElementById("status").innerHTML = turn + " WINS!";
                } else if (a3 === b2 && a3 === c1 && a3 !== "") {
                    win = true;
                    document.getElementById("status").innerHTML = turn + " WINS!";
                } else if (turns === 9) {
                    if (!cheat) {
                        win = true;
                    }
                    document.getElementById("status").innerHTML = "TIE!";
                } else {
                    if (turn === "X") {
                        turn = "O";
                    } else {
                        turn = "X";
                    }
                    document.getElementById("status").innerHTML = turn;
                }
            }
        }
    }
}