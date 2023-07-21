// Assignment Code
var generateBtn = document.querySelector("#generate");

var passLower = prompt('Would you like a password with lower-case characters? Y [yes] or N [no]')

if (passLower == 'Y' || 'yes') {
  passLower = true
}
  else {
    passLower = false
  }

var passUpper = prompt('Would you like a password with upper-case characters? Y [yes] or N [no]');

if (passUpper == 'Y' || 'yes') {
  passUpper = true
}
  else {
    passUpper = false
  }

var passSpecial = prompt('Would you like the password to contain special characters? Y [yes] or N [no]')

if (passSpecial == 'Y' || 'yes') {
  passSpecial = true
}
  else {
    passSpecial = false
  }

var passLength = prompt("Please enter a password length between 8 and 128 characters.")

if (passLength < 8 || passLength > 128) {
  // confirm('Please enter a valid number of characters.')
    if (confirm('Please enter a valid number of characters.') == true) {
      passLength = prompt("Please enter a password length between 8 and 128 characters.")
    }
    else {''}
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
