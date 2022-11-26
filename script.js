// Assignment code here
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var numberOptions = '0123456789';
var symbols = '!@#$%^&*-+=';


var uppercaseLetter = uppercase[Math.floor(Math.random() * uppercase.length)];
var lowercaseLetter = lowercase[Math.floor(Math.random() * lowercase.length)];
var numberGen = numberOptions[Math.floor(Math.random() * numberOptions.length)];
var symbolGen = symbols[Math.floor(Math.random() * symbols.length)];

var criteriaGen = uppercaseLetter + lowercaseLetter + numberGen + symbolGen;

console.log(criteriaGen)

var userSelection = '';
var result = '';

// var passwordLength = prompt('How long does your password need to be?\nMinimum of 8 characters. Max of 128 characters.');

//Would prefer to name this generateSelection and call it in the generatePassword function.
function generatePassword(passwordLength) {

  var passwordLength = prompt('How long does your password need to be?\nMinimum of 8 characters. Max of 128 characters.');
    if(passwordLength >= 8 && passwordLength <= 128) {

      var numberSelection = confirm('Does the password need numbers?\nOk = Yes Cancel = No');
      var uppercaseSelection = confirm('Does the password need Uppercase letters?\nOk = Yes Cancel = No');
      var lowercaseSelection = confirm('Does the password need lowercase letters?\nOk = Yes Cancel = No');
      var symbolSelection = confirm('Does the password need Symbols?\nOk = Yes Cancel = No');

      if(!numberSelection && !uppercaseSelection && !lowercaseSelection && !symbolSelection) {
        alert('You must pick at least one criteria set.')
        return('You must pick at least one criteria set.')
      } 

      if(numberSelection && uppercaseSelection && lowercaseSelection && symbolSelection) {
        userSelection += uppercaseLetter + lowercaseLetter + numberGen + symbolGen; 
        // for(i = 1; i <= passwordLength; i++) {
        //   userSelection += passwordLength[Math.floor(Math.random() * userSelection.length)];
        //   }
        //   console.log(userSelection);
        //   return(userSelection);
      } 

      if(!numberSelection && !uppercaseSelection && !lowercaseSelection) {
        userSelection += symbolGen;
        for(i = 0; i < passwordLength; i++) {
          result += userSelection[Math.floor(Math.random() * userSelection.length)];
        }
      }     

      if(!numberSelection && !uppercaseSelection && !symbolSelection) {
        userSelection += lowercaseLetter;
      }
      if(!symbolSelection && !numberSelection && !lowercaseSelection) {
        userSelection += uppercaseLetter;
      }
      if(!symbolSelection && !uppercaseSelection && !lowercaseSelection) {
        userSelection += numberGen;
      }
      if(!numberSelection && !uppercaseSelection) {
        userSelection += lowercaseLetter + symbolGen;
      } 
      if(!numberSelection && !lowercaseSelection) {
        userSelection += symbolGen + uppercaseLetter;
      } 
      if(!numberSelection && !symbolSelection) {
        userSelection += uppercaseLetter + lowercaseLetter;
      } 
      if(!lowercaseSelection && !uppercaseSelection) {
        userSelection += numberGen + symbolGen;
      } 
      if(!uppercaseSelection && !symbolSelection) {
        userSelection += lowercaseLetter + numberGen;
      } 
      if(!lowercaseSelection && !symbolSelection) {
        userSelection += uppercaseLetter + numberGen;
      } 
      if(!numberSelection) {
        userSelection += uppercaseLetter + lowercaseLetter + symbolGen;
      } 
      if(!lowercaseSelection) {
        userSelection += uppercaseLetter + numberGen + symbolGen;
      } 
      if(!uppercaseSelection) {
        userSelection += lowercaseLetter + numberGen + symbolGen;
        for(i = 0; i < passwordLength; i++) {
          result += userSelection[Math.floor(Math.random() * userSelection.length)];
        }
      } 
      if(!symbolSelection) {
        userSelection += uppercaseLetter + lowercaseLetter + numberGen;
      } 

      for(i = 0; i < passwordLength; i++) {
            result += userSelection[Math.floor(Math.random() * userSelection.length)];
          }
      
      return(result);


    } else {  
      alert('Password must be between 8 and 128 characters.');
      return('Please pick a number between 8 and 128 characters.')
    }

  }
 
// function generatePassword() {

//   var passwordLength = prompt('How long does your password need to be?\nMinimum of 8 characters. Max of 128 characters.');
//   if(passwordLength >= 8 && passwordLength <= 128) {
//     generateSelection();
//     console.log(userSelection);
//   for(i = 0; i < passwordLength; i++) {
//     userSelection += passwordLength[Math.floor(Math.random() * userSelection.length)];
//   }
  
//   return(userSelection);

// } else       
// alert('Password must be between 8 and 128 characters.');
// return('Please pick a number between 8 and 128 characters.')
// }


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

