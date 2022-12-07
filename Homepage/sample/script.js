var name;
var outputTop;
var outputBottom;

addEventListener('load', function(e) {
  outputTop = document.getElementById("outputTop");
  outputBottom = document.getElementById("outputBottom");
});


function myClick() {
  name = document.getElementById("name").value;
  outputTop.innerHTML = "Hello, " + name;
}

function topClick() {
  if (outputBottom.innerHTML === "You will see.") {
    alert("Soon.");
  } else {
    outputBottom.innerHTML = "It's good to see you.";
  }
}

function bottomClick() {
  outputTop.innerHTML = "We will have so much fun.";
  outputBottom.innerHTML = "You will see.";
}