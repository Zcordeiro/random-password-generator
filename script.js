// Assignment code here
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var numberOptions = '0123456789';
var symbols = '!@#$%^&*-+=';

function generatePassword() {
  var userSelection = '';
  var result = [];
  var temp = [];

  
  var passwordLength = prompt('How long does your password need to be?\nMinimum of 8 characters. Max of 128 characters.');
  if (passwordLength >= 8 && passwordLength <= 128) {

    var numberSelection = confirm('Does the password need numbers?\nOk = Yes Cancel = No');
    var uppercaseSelection = confirm('Does the password need Uppercase letters?\nOk = Yes Cancel = No');
    var lowercaseSelection = confirm('Does the password need lowercase letters?\nOk = Yes Cancel = No');
    var symbolSelection = confirm('Does the password need Symbols?\nOk = Yes Cancel = No');

    if (!numberSelection && !uppercaseSelection && !lowercaseSelection && !symbolSelection) {
      alert('You must pick at least one criteria set.')
      return ('You must pick at least one criteria set.')
    }

    if (numberSelection) {
      userSelection += numberOptions;
      temp.push(numberOptions[Math.floor(Math.random() * numberOptions.length)]);
    }
    if (lowercaseSelection) {
      userSelection += lowercase;
      temp.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
    }
    if (uppercaseSelection) {
      userSelection += uppercase;
      temp.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
    }
    if (symbolSelection) {
      userSelection += symbols;
      temp.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }
  
    for (let i = 0; i < passwordLength; i++) {
      result.push(userSelection[Math.floor(Math.random() * userSelection.length)]);
    }
    console.log(result);
    for (let i = 0; i < temp.length; i++) {
      result[i] = temp[i];
      console.log(temp[i], result[i]);
    }
    console.log(temp);
    console.log(result);
    
    return result.join('');

  } else {
    alert('Password must be between 8 and 128 characters.');
    return ('Please pick a number between 8 and 128 characters.')
  }
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);