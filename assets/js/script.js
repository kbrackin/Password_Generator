// Assignment Code
var generateBtn = document.querySelector("#generate");

var collectCharacters = ""
// // Add event listener to generate button
generateBtn.addEventListener("click", function() {
  var passGen = writePassword();
  document.getElementById('password').setAttribute('placeholder', passGen)
}
)
var passLength;
 var pass = ''
function getPassInfo() {
 

// Select if the user wants lower case characters.
  var passLower = window.prompt('Would you like a password with lower-case characters? Y [yes] or N [no]')
  // var passLowerConfirm = (passLower && passLower.toLowerCase() == 'yes' || 'y')
  
  if (passLower == 'y' || passLower == 'yes') {
  alert('You have selected to add lower-case characters!')
  collectCharacters += 'abcdefghijklmnopqrstuvwxyz'
  console.log(passLower)
  }
    else {
    alert('You have selected to not add lower-case characters.')
    }
  
// Select if the user wants upper case characters.
  var passUpper = prompt('Would you like a password with upper-case characters? Y [yes] or N [no]');

    if (passUpper == 'y' || passUpper == 'yes') {
    alert('You have selected to add upper-case characters!')
    collectCharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
      else {
     alert('You have selected to not add upper-case characters.')
    }

// Select if the user wants special characters.
  var passSpecial = prompt('Would you like the password to contain special characters? Y [yes] or N [no]')
  var passSpecialConfirm = (passSpecial && passSpecial.toLowerCase() == 'yes' || 'y')

    if (passSpecial == 'y' || passSpecial == 'yes') {
   passSpecial = true
   alert('You have selected to add special characters!')
   collectCharacters += '!@#$%^&*()<>?'
  }
      else {
      passSpecial = false
      alert('You have selected to not add special characters.')
  }

//Select if the user wants numerics.
  var passNumeric = prompt('Would you like the password to contain numerics?')
    if (passNumeric == 'y' || passNumeric == 'yes') {
      passNumeric = true
      alert('You have selected to add numerics!')
      collectCharacters += '0123456789'
    }
      else {
        passNumeric = false
        alert('You have selected to not add numerics.')
      }
// Select how long the user wants the password to be. 
  passLength = prompt("Please enter a password length between 8 and 128 characters.")

    if (isNaN(passLength) || passLength < 8 || passLength > 128) {
  // confirm('Please enter a valid number of characters.')
      if (confirm('Please enter a valid number of characters.') == true) {
        passLength = prompt("Please enter a password length between 8 and 128 characters.")
      }
      else {
        alert(`You have selected to have a password length of ${passLength}.`)
      }
  }
}



// Write password to the #password input
function writePassword() {
  var password = getPassInfo();
  var passwordText = document.querySelector("#password");

 

  for (var i = 0; i < passLength; i++) {
  var passRandom = Math.floor(Math.random() * collectCharacters.length);
  pass += collectCharacters.charAt(passRandom)
  }
   passwordText.value = pass;
return pass
}


