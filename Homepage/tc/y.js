function myClick(button) {
    var x = document.getElementById("thing");
    if (button === "butt") {
        if (x.style.color === "yellow" || x.style.color === "#ffff00") {
            x.style.color = "brown";
        } else {
            x.style.color = "yellow";
        }
    }
    else if (button === "thing") {
        document.getElementById("go").style.display = "block";
        document.getElementById("thing").style.marginTop = "100%";
    }
}