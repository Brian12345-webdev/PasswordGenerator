// I am not sure why the queryselector is there since there is no "#generate" in CSS ask tutor
// var generateBtn = document.querySelector("#generate");
var length = Number(prompt("Enter a number between 8 and 128")),
    charType = prompt("Enter a character type: special, numberic, uppercase, lowercase"),
    password = writePassword();

// Write password to the #password input
function writePassword() {
  var charset = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    number: "0123456789",
    special: '~!@#$%^&*()_+{}|:"<>?`-=[]\;,./"'
    // var password = generatePassword();
    // var passwordText = document.querySelector("#password");

    //passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Copy Text button
// function copyPassword() {
//     var copyText = document.getElementById("password");
//     copyText.select();
//     document.execCommand("Copy Password");
// }