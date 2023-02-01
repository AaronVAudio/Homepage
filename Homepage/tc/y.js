function myClick() {
    var x = document.getElementById("thing");
    if (x.style.color === "yellow" || x.style.color === "#ffff00") {
        x.style.color = "brown";
    } else {
        x.style.color = "yellow";
    }
    document.getElementById("go").style.display = "block";
}