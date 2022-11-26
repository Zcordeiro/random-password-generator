// Assignment code here
// Variables that hold the different criteria possibilities
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var numberOptions = '0123456789';
var symbols = '!@#$%^&*-+=';

// function that generates the password.
function generatePassword() {
  //variables to give the final results.
  var userSelection = '';
  var result = [];
  var temp = [];

//prompts that decide our final result criteria.
  var passwordLength = prompt('How long does your password need to be?\nMinimum of 8 characters. Max of 128 characters.');
  if (passwordLength >= 8 && passwordLength <= 128) {

    var numberSelection = confirm('Does the password need numbers?\nOk = Yes Cancel = No');
    var uppercaseSelection = confirm('Does the password need Uppercase letters?\nOk = Yes Cancel = No');
    var lowercaseSelection = confirm('Does the password need lowercase letters?\nOk = Yes Cancel = No');
    var symbolSelection = confirm('Does the password need Symbols?\nOk = Yes Cancel = No');

    //If user selects no to all of the above they will see the message in this if statement.
    if (!numberSelection && !uppercaseSelection && !lowercaseSelection && !symbolSelection) {
      alert('You must pick at least one criteria set.')
      return ('You must pick at least one criteria set.')
    }

    //User criteria options, basically if the criteria is selected as true 
    //I add the criteria variable that matches it and add an item from that variable to the 'temp' array variable
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
  
    //Takes all of the user selected criteria options and adds them to the 'results' array at the length selected by the user 
    for (let i = 0; i < passwordLength; i++) {
      result.push(userSelection[Math.floor(Math.random() * userSelection.length)]);
    }


    //Makes sure the 'results' array has the correct items from the 'temp' array
    for (let i = 0; i < temp.length; i++) {
      result[i] = temp[i];
    }
   
   //Displays the final password by displaying the 'result' array but combines it as a string 
    return result.join('');

    //If user picks a number that isn't in the approved amount they should see this message.
  } else {
    alert('Password must be between 8 and 128 characters.');
    return ('Please pick a number between 8 and 128 characters.')
  }
}

//Code given to me below
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);