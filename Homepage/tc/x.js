var page = "1";
var user = "";

function myLoad() {
    user = sessionStorage.getItem("name");
    if (user === null) {
        user = "Come";
    }
}

function onClick(button) {
    if (page === "1") {
        if (button === "b1") {
            document.getElementById("content").innerHTML = "You can't see the floor over the pile of boxes.<br>A child has left a ball in the middle of the floor.<br>You step on it and slip, hitting your head.<br><br><span class='bolded'>YOU DIED</span>";
            document.getElementById("b1").innerHTML = "Start Over";
            document.getElementById("b2").style.display = "none";
            document.body.style.background = "red";
            page = "end";
        } else if (button === "b2") {
            document.getElementById("content").innerHTML = "You exit the tech hallway and see that the mall is still open.";
            document.getElementById("b1").innerHTML = "Go Through The Mall";
            document.getElementById("b2").innerHTML = "Go Through The Kitchen";
            page = "2b";
        }
    } else if (page === "2b") {
        if (button === "b1") {
            document.getElementById("content").innerHTML = "You enter the staff hallway from the mall, and continue down to the elevator room.<br>You can smell popcorn. The door to the kitchen is propped open.";
            document.getElementById("b1").innerHTML = "Go To Kitchen";
            document.getElementById("b2").innerHTML = "Go Down Elevator";
            page = "3c";
        } else if (button === "b2") {
            document.getElementById("content").innerHTML = "You enter the kitchen.<br>They have a lot of orders and are very busy.<br>You smell popcorn.";
            document.getElementById("b1").innerHTML = "Take Some Popcorn";
            document.getElementById("b2").innerHTML = "Continue To Garbage Room";
            page = "3d";
        }
    } else if (page === "3c") {
        if (button === "b1") {
            document.getElementById("content").innerHTML = "You enter the kitchen.<br>They have a lot of orders and are very busy.<br>You smell popcorn.";
            document.getElementById("b1").innerHTML = "Take Some Popcorn";
            document.getElementById("b2").innerHTML = "Continue To Garbage Room";
            page = "3d";
        } else if (button === "b2") {
            document.getElementById("content").innerHTML = "You take the elevator down.<br>You hear something large moving outside the door.<br>The door opens, and you slowly step outside.<br>You hear a roar.<br>You feel something heavy hit you, and everything goes dark.<br><br><span class='bolded'>You have been eaten by The Creature.</span>";
            document.getElementById("b1").innerHTML = "Start Over";
            document.getElementById("b2").style.display = "none";
            document.body.style.background = "red";
            page = "end";
        }
    } else if (page === "3d") {
        if (button === "b1") {
            document.getElementById("content").innerHTML = "You take some popcorn, then continue on your way.<br>You enter the elevator room, press the button, and wait for the elevator.<br>You take the elevator down.<br>You hear something large moving outside the door.<br>The door opens, and you slowly step outside.<br>You hear a roar.<br>You hear a deep voice...<br><br>\""+user+"...\"<br><br>\""+user+"...\"<br><br><span class='bolded'You have awakened The Creature.</span>";
            document.getElementById("b1").innerHTML = "Run";
            document.getElementById("b2").innerHTML = "Throw The Popcorn";
            document.getElementById("overlay").style.opacity = "50%";
            page = "4a";
        } else if (button === "b2") {
            document.getElementById("content").innerHTML = "You enter the elevator room.";
            document.getElementById("b1").innerHTML = "Go Back To Kitchen";
            document.getElementById("b2").innerHTML = "Go Down Elevator";
            page = "3c";
        }
    } else if (page === "4a") {
        if (button === "b1") {
            document.getElementById("content").innerHTML = "You try to run, but you hear something crashing behind you.<br>You feel something heavy hit you, and everything goes dark.<br><br><span class='bolded'>You have been eaten by The Creature.</span>";
            document.getElementById("b1").innerHTML = "Start Over";
            document.getElementById("b2").style.display = "none";
            document.getElementById("overlay").style.display = "none";
            document.getElementById("overlay").style.opacity = "0%";
            document.body.style.background = "red";
            page = "end";
        } else if (button === "b2") {
            document.getElementById("content").innerHTML = "You throw the popcorn into the darkness.<br>You hear another roar, and something huge crashing away from you.<br>You quickly dash to the garbage room and dump the boxes and bags.<br>You run back to the elevator, and hurriedly mash the buttons.<br>You hear a distant roar, and the crashing sound approaches as the doors begin to close.<br>You see a huge shadow at the last second as the door closes and the elevator begins to rise.<br><br><span class='bolded'>You have evaded The Creature.<br>You have successfully taken down the garbage.<br>Congratulations!</span>";
            document.getElementById("b1").innerHTML = "THE END";
            document.getElementById("b2").style.display = "none";
            document.getElementById("overlay").style.display = "none";
            document.getElementById("overlay").style.opacity = "0%";
            document.body.style.background = "gold";
            page = "win";
        }
    } else if (page === "end") {
        if (button === "b1") {
            document.getElementById("content").innerHTML = "<span class='bolded'>Beginning</span><br><br>You are standing in the tech hallway.<br>You have been tasked with taking down the garbage.";
            document.getElementById("b1").innerHTML = "Try To Lift It";
            document.getElementById("b2").innerHTML = "Use The Cart";
            document.getElementById("b2").style.display = "inline";
            document.getElementById("overlay").style.display = "block";
            page = "1";
            document.body.style.background = "lightgreen";
        }
    } else if ( page === "win") {
        if (button === "b1") {
            if (confirm("yay")) {
                open("hi.html", "_self");
            }
        }
    }
}