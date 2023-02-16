function myClick() {
    var name=document.getElementById("name").value;
    sessionStorage.setItem("name", name);
    if (name.toLowerCase()==="alicia") {
        document.getElementById("output").innerHTML = "Oh, you found this one, too.";
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
    } else if (document.getElementById("output").innerHTML === "Well, keep going.") {
        if (confirm("I'm actually glad you're here.")) {
            document.getElementById("output").innerHTML = "";
            document.getElementById("output2").innerHTML = "";
            open("y.html", "_self");
        } else {
            document.getElementById("output").innerHTML = ":P";
            document.getElementById("output2").innerHTML = "";
        }
    } else if (document.getElementById("output2").innerHTML === "to see.") {
        if (!confirm("Continue?")) {
            document.getElementById("output").innerHTML = "THE";
            document.getElementById("output2").innerHTML = "END";
        } else {
            open("y.html", "_self");
        }
    } else if (name.toLowerCase() === "alicia" && document.getElementById("output").innerHTML === "Oh, you found this one, too.") {
        document.getElementById("output2").innerHTML = "I didn't expect you here.";
    } else if (name==="") {
    } else if (name.toLowerCase() !== "alicia") {
        document.getElementById("output2").innerHTML = "I've been expecting you.";
    }
}
function myClick3() {
    var name=document.getElementById("name").value;
    if (document.getElementById("output").innerHTML === "THE" || document.getElementById("output").innerHTML === "") {
    } else if (name.toLowerCase()==="alicia") {
        document.getElementById("output").innerHTML = "Well, keep going.";
        document.getElementById("output2").innerHTML = "";
    } else if (name==="") {
    } else {
        document.getElementById("output").innerHTML = "There's so much more";
        document.getElementById("output2").innerHTML = "to see.";
    }
}