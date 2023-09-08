// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = prompt("Please enter a password length between 8 and 128 characters");
  if (passwordLength < 8 || passwordLength > 128) 
    alert("Please enter a password length between 8 and 128 characters");
  var Numbers = prompt("Would you like to use numbers in your password?");
  var Lowercase = prompt("Would you like to use lowercase letters in your password?");
  var Uppercase = prompt("Would you like to use uppercase letters in your password?");
  var SpecialCharacters = prompt("Would you like to use special characters in your password?");
  return; writePassword//this is where I am stuck, The write password function is undefined.
  
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
