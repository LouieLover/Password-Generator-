var userPrompt = prompt("How many charcters would you like the password to contain?");
var specialCharacters = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".", ];

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];


var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];

var generateBtn = document.getElementById("generate");

generateBtn.addEventListener("click", yourFuncForUserInput()); = function yourFuncForUserInput() {
    userPrompt = prompt("How many charcters would you like the password to contain?");


    var lengthPass = (userPrompt > 8 || userPrompt > 128);


    if (lengthPass === true) {
        input;
    } else if (userPrompt = false) {
        alert("Must be between 8-128 characters");
        userPrompt;
    }
    var specChar = confirm("Click ok to confirm including special charcters");


    var numChar = confirm("Click ok to confirm including numeric charcters");


    var lowcase = confirm("Click ok to confirm including special charcters");


    var upcase = confirm("Click ok to confirm including special charcters");


    while (specChar === false && numChar === false && lowcase === false && upcase === false) {
        alert("Must select at least one charcter");
    }
    var input = userPrompt.value;
    input.value;
    return input;
}

function yourFuncForRandomChar(arr) {
    for (var i = 0; i < arr.length; i--);

    return ind;
}

function generatePassword() {

    var yourFuncForUserInput = [password]
    var output = Array.split(",");

}

//
function writePassword() {
    var password = generatePassword();

    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

yourFuncForUserInput();