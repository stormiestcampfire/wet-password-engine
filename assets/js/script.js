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
    alert("Please select from the criteria following criteria for your password.")
    var askUserPasswordLength = prompt("Select a length for the password. It can anywhere from 8 to 128 characters.") 
  // asks user if they would like to add lowercase letters
    var askUserLowCase = confirm("Mix in lowercase letters?")
      if (askUserLowCase) {
      passwordCharacters += askUserLowCase;
      }
  // asks user if they would like to add uppercase letters
    var askUserUpCase = confirm("Mix in uppercase letters?");
      if (askUserUpCase) {
      passwordCharacters += askUserUpCase;
      }
  // asks user if they would like to add special characters
      var askUserSpecCase = confirm("Mix in special characters?");
      if (askUserSpecCase) {
        passwordCharacters += askUserSpecCase;
      }
  // asks user if they would like to add numbers to the password
      var askUserNum = confirm("Mix in numbers?");
      if (askUserNum) {
        passwordCharacters += askUserNum;
      }
     
}      
// Add event listener to generate button
function makePassword(){
  var password = writePassword
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  for (var i = 0; i <= askUserPasswordLength; i++) {
  var randomNum = Math.floor(Math.random() * passwordCharacters.length);
  password += passwordCharacters.substring(randomNum, randomNum +1);
}
}

generateBtn.addEventListener("click", writePassword);


console.log(generateBtn)



