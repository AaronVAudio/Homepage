var reset;

function pop(button) {
    button.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0), rgba(117, 19, 93, 0.25), rgba(245, 246, 252, 0.25)), radial-gradient(circle, black 0%, red, red 100%)";
}

function unpop() {
    var poppers = document.getElementsByClassName("popper");

    var i = 0;
    reset = setInterval(function() {
        if (i < 100) {
            poppers[i].style.backgroundImage = "linear-gradient(rgba(245, 246, 252, 0.25), rgba(117, 19, 93, 0.25), rgba(0, 0, 0, 0)), radial-gradient(circle, red 0%, red, black 100%)";
            i = i + 1;
            console.log(i);
        } else {
            console.log("done");
            clearInterval(reset);
        }
    }, 25);
}