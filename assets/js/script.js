// Assignment Code
var generateBtn = document.querySelector("#generate");
  // Possible characters in a password: "qwertyuiopasdfghjklzxcvbnm QWERTYUIOPASDFGHJKLZXCVBNM 1234567890 ~!@#$%^&*()_-+="
  //These are lists of possible characters.
  var charactersLowCase = "qwertyuiopasdfghjklzxcvbnm"
  var charactersUpCase = "QWERTYUIOPASDFGHJKLZXCVBNM"
  var charactersSpecial = "~!@#$%^&*()_-+="
  var charactersNum = "1234567890"

// Write password to the #password input
function writePassword() {
  var password = "";
  var passwordCharacters = "";
  // 
  var password = generatePassword();
  var askUserPasswordLength = prompt("Select a length for the password. It can anywhere from 8 to 128 characters.") 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


  for (var i = 0; i <= askUserpasswordLength; i++) {
    var randomNumber = Math.floor(Math.random() * charsPossible.length);
    password += charsPossible.substring(randomNumber, randomNumber +1);
 }

 function writePassword(password){
  var password = generatePassword();
  var pwTextArea = document.getElementById("#password");
  pwTextArea.value = password;
  return ("")
  
  }
 console.log(generateBtn) 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);