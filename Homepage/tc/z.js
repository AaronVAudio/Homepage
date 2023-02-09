function myClick() {
    var name=document.getElementById("name").value;
    if (name.toLowerCase()==="alicia") {
        document.getElementById("output").innerHTML = "Ugh, you again.";
        document.getElementById("output2").innerHTML = "";
        document.body.style.backgroundColour = "black";
    } else if (name==="") {
        document.getElementById("output").innerHTML = "Enter a name.";
        document.getElementById("output2").innerHTML = "";
    } else {
        document.getElementById("output").innerHTML = "Hello, " + name;
        document.getElementById("output2").innerHTML = "";
    }
}
function myClick2() {
    var name=document.getElementById("name").value;
    if (document.getElementById("output").innerHTML === "THE" || document.getElementById("output").innerHTML === "") {
    } else if (document.getElementById("output").innerHTML === "You know how this goes.") {
        if (confirm("You're ok I guess.")) {
            document.getElementById("output").innerHTML = "";
            document.getElementById("output2").innerHTML = "";
            open("y.html", "_self");
        } else {
            document.getElementById("output").innerHTML = ":P";
            document.getElementById("output2").innerHTML = "";
        }
    } else if (document.getElementById("output2").innerHTML === "You found everything.") {
        if (confirm("Ok, one more.")) {
            document.getElementById("output").innerHTML = "THE";
            document.getElementById("output2").innerHTML = "END";
        } else {
            open("y.html", "_self");
        }
    } else if (name.toLowerCase() === "alicia" && document.getElementById("output").innerHTML === "Ugh, you again.") {
        document.getElementById("output2").innerHTML = "You came back.";
    } else if (name==="") {
    } else if (name.toLowerCase() !== "alicia") {
        document.getElementById("output2").innerHTML = "I've been expecting you.";
    }
}
function myClick3() {
    var name=document.getElementById("name").value;
    if (document.getElementById("output").innerHTML === "THE" || document.getElementById("output").innerHTML === "") {
    } else if (name.toLowerCase()==="alicia") {
        document.getElementById("output").innerHTML = "You know how this goes.";
        document.getElementById("output2").innerHTML = "";
    } else if (name==="") {
    } else {
        document.getElementById("output").innerHTML = "Very clever.";
        document.getElementById("output2").innerHTML = "You found everything.";
    }
}