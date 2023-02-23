function loadPage() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.has("i")) {
        document.getElementById("inputArea").value = urlParams.get("i");
        document.getElementById("caesarIn").value = urlParams.get("r");
        document.getElementById("caesarOut").value = urlParams.get("w");
    }
}

function onSwap() {
    document.getElementById("inputArea").value = document.getElementById("outputArea").value;
    document.getElementById("outputArea").value = "";
}

function decode() {
    var rbType = document.getElementsByName("cipher");
    var rbEnDe = document.getElementsByName("encodedecode");
    var input = document.getElementById("inputArea").value;
    var encode = "";

    if (document.getElementById("inputArea").value == "dQw4w9WgXcQ") {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank").focus();
        return;
    }

    for (var i = 0; i < rbEnDe.length; i++) {
        if (rbEnDe[i].checked == true) {
            if (rbEnDe[i].value == "encode")
                encode = "encode";
            else if (rbEnDe[i].value == "decode")
                encode = "decode";
        }
    }

    for (var i = 0; i < rbType.length; i++) {
        if (rbType[i].checked == true) {
            if (rbType[i].value == "binary") {
                if (encode == "encode") {
                    var output = binaryEncode(input);
                    document.getElementById("outputArea").value = output;
                } else if (encode == "decode") {    
                    var output = binaryDecode(input);
                    document.getElementById("outputArea").value = output;
                } else {
                    document.getElementById("outputArea").value = input;
                }
            } else if (rbType[i].value == "hexadecimal") {
                if (encode == "encode") {
                    var output = hexEncode(input);
                    document.getElementById("outputArea").value = output;
                } else if (encode == "decode") {
                    var output = hexDecode(input);
                    document.getElementById("outputArea").value = output;
                } else {
                    document.getElementById("outputArea").value = input;
                }
            } else if (rbType[i].value = "caesar") {
                if (encode == "encode") {
                    var caesarIn = document.getElementById("caesarIn").value;
                    var caesarOut = document.getElementById("caesarOut").value;
                    var output = caesarEncode(input, caesarIn, caesarOut);
                    document.getElementById("outputArea").value = output;
                } else if (encode == "decode") {
                    var caesarIn = document.getElementById("caesarIn").value;
                    var caesarOut = document.getElementById("caesarOut").value;
                    var output = caesarDecode(input, caesarIn, caesarOut);
                    document.getElementById("outputArea").value = output;
                } else {
                    document.getElementById("outputArea").value = input;
                }
            } else {
                document.getElementById("outputArea").value = input;
            }
        }
    }
}

function binaryEncode(input) {
    var output = "";

    for (var i = 0; i < input.length; i++) {
        var charNum = input.charCodeAt(i);
        var outBin = charNum.toString(2);
        while (outBin.length < 8) {
            outBin = "0" + outBin;
        }
        output += outBin + " ";
    }

    return output;
}

function binaryDecode(input) {
    var output = "";
    var binLetter = "";

    for (var i = 0; i < input.length; i++) {
        if (!(input[i] == '0' || input[i] == '1' || input[i] == ' '))
            return "invalid input";
        if (input[i] == '0' || input[i] == '1') {
            binLetter += input[i];
        } else {
            var counter = 1;
            var charInt = 0;
            var splitString = binLetter.split("");
            var reverseString = splitString.reverse();
            binLetter = reverseString.join("");
            for (var j = 0; j < binLetter.length; j++) {
                charInt += parseInt(binLetter[j]) * counter;
                counter *= 2;
            }
            output += String.fromCharCode(charInt);
            binLetter = "";
        }
    }

    if (binLetter != "") {
        var counter = 1;
        var charInt = 0;
        var splitString = binLetter.split("");
        var reverseString = splitString.reverse();
        binLetter = reverseString.join("");
        for (var j = 0; j < binLetter.length; j++) {
            charInt += parseInt(binLetter[j]) * counter;
            counter *= 2;
        }
        output += String.fromCharCode(charInt);
        binLetter = "";
    }

    return output;
}

function hexEncode(input) {
    var output = "";

    for (var i = 0; i < input.length; i++) {
        var charNum = input.charCodeAt(i);
        var hex = charNum.toString(16);
        output += hex + " ";
    }

    return output;
}

function hexDecode(input) {
    var output = "";
    var token = 0;
    var first = true;

    for (var i = 0; i < input.length; i++) {
        var charChar = input[i].toLowerCase();
        if ((charChar >= 'a' && charChar <= 'f') || (charChar >= '0' && charChar <= '9'))
        {
            var charInt = parseInt(charChar, 16);
            if (first) {
                token += charInt * 16;
                first = false;
            } else {
                token += charInt;
                first = true;
                output += String.fromCharCode(token);
                token = 0;
            }
        }
    }

    return output;
}

function caesarEncode(input, cIn, cOut) {
    var output = "";

    var inChar = cIn.charCodeAt(0);
    var outChar = cOut.charCodeAt(0);
    var offset = 0;

    offset = inChar - outChar;
    
    for (var i = 0; i < input.length; i++) {
        if (input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90) {
            var index = input.charCodeAt(i) - 64;
            index -= offset;
            if (index <= 0) {
                index += 26;
            } else if (index >= 27) {
                index -= 26;
            }
            index += 64;
            output += String.fromCharCode(index);
        } else if (input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 122) {
            var index = input.charCodeAt(i) - 96;
            index -= offset;
            if (index <= 0) {
                index += 26;
            } else if (index >= 27) {
                index -= 26;
            }
            index += 96;
            output += String.fromCharCode(index);
        } else {
            output += input[i];
        }
    }

    return output;
}

function caesarDecode(input, cIn, cOut) {
    return caesarEncode(input, cOut, cIn);
}

function share() {
    var outputVal = encodeURIComponent(document.getElementById("outputArea").value.trim());
    var replaceVal = document.getElementById("caesarIn").value;
    var withVal = document.getElementById("caesarOut").value;

    var shareURL = "https://avdev.ca/cipher/index.html?";
    if (outputVal !== "") {
        shareURL += "i=" + outputVal;
    }
    if (replaceVal !== "") {
        shareURL += "&r=" + replaceVal;
    }
    if (withVal !== "") {
        shareURL += "&w=" + withVal;
    }
    navigator.clipboard.writeText(shareURL);
    alert("Copied URL");
}