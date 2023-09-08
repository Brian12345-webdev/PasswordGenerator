// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = prompt("Please enter a password length between 8 and 128 characters");
  if (passwordLength < 8 || passwordLength > 128) 
    alert("Please enter a password length between 8 and 128 characters");
  var numbers = confirm("Would you like to use numbers in your password?");
  var lowercase = confirm("Would you like to use lowercase letters in your password?");
  var uppercase = confirm("Would you like to use uppercase letters in your password?");
  var specialCharacters = confirm("Would you like to use special characters in your password?");
  
  // store a string of possible user choices, consolidate in to one big string
  var possibleCharacters = "";
  if (numbers) {
    possibleCharacters += "0123456789"
  }
  if (lowercase) {
    possibleCharacters += "abcdefghijklmnopqrstuvwxyz"
  }
  if (uppercase) {
    possibleCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if (specialCharacters) {
    possibleCharacters += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
  }
  
var bucketCharacters = "";
  for (var i = 0; i < possibleCharacters.length; i++)
  {
    if (bucketCharacters.length < passwordLength)
    {
      bucketCharacters += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
    }
  }

return bucketCharacters; 
  
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
