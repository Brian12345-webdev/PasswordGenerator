var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Prompts
function generatePassword(){
    var passwordLength = prompt("Please enter the number of characters you want between 8 and 128")
    var lowercase = prompt("Do you want to include lowercase letters in your password?")
    var uppercase = prompt("Do you want to include uppercase letters in your password?")
    var special = prompt("Do you want to include special characters in your password?")
    var numbers = prompt("Do you want to include numbers in your password?")
}



