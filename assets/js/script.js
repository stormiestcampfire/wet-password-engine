// Assignment Code
var generateBtn = document.querySelector("#generate");
  // Setting  possible characters in a password.
  var charsPossible = "qwertyuiopasdfghjklzxcvbnm QWERTYUIOPASDFGHJKLZXCVBNM 1234567890 ~!@#$%^&*()_-+="
  // This sets the maximum amount of characters in a password to 12.
  var passwordLength = 12

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * charsPossible.length);
  password += charsPossible.substring(randomNumber, randomNumber +1);
 }

 console.log(password)