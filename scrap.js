


function uppercaseLetter() {
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var uppercaseGen = Math.floor(Math.random() * uppercase.length);
    return(uppercase[uppercaseGen]);
}

function lowercaseLetter() {
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var lowercaseGen = Math.floor(Math.random() * lowercase.length);
    return(lowercase[lowercaseGen]);
}

function number() {
    var numberOptions = '0123456789';
    var numberGen = Math.floor(Math.random() * numberOptions.length);
    return(numberOptions[numberGen]);
}

function symbol() {
    var symbols = '!@#$%^&*-+=';
    var symbolGen = Math.floor(Math.random() * symbols.length);
    return(symbols[symbolGen]);
}

function criteria() { 
    return(uppercaseLetter()+lowercaseLetter()+number()+symbol()) 
}

function generatePassword() {
var passwordLength = prompt('How long does your password need to be?\nMinimum of 8 characters. Max of 128 characters.');
for(i = 0; i < passwordLength; i++) {
    return(criteria(Math.floor(Math.random() * passwordLength)));
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







// var noNumber = symbol()+uppercaseLetter()+lowercaseLetter();
// var passwordLength = prompt('How long does your password need to be?\nMinimum of 8 characters. Max of 128 characters.');
// function passwordLength() {prompt('How long does your password need to be?\nMinimum of 8 characters. Max of 128 characters.');}

function generateSelection() {

    var passwordLength = prompt('How long does your password need to be?\nMinimum of 8 characters. Max of 128 characters.');
      if(passwordLength >= 8 && passwordLength <= 128) {
  
        var numberSelection = confirm('Does the password need numbers?\nOk = Yes Cancel = No');
        var uppercaseSelection = confirm('Does the password need Uppercase letters?\nOk = Yes Cancel = No');
        var lowercaseSelection = confirm('Does the password need lowercase letters?\nOk = Yes Cancel = No');
        var symbolSelection = confirm('Does the password need Symbols?\nOk = Yes Cancel = No');
  
        if(!numberSelection && !uppercaseSelection && !lowercaseSelection && !symbolSelection) {
          alert('You must pick at least one criteria set.')
          return('You must pick at least one criteria set.')
        } else 
        if(numberSelection && uppercaseSelection && lowercaseSelection && symbolSelection) {
          userSelection += criteriaChoice.allChoices;
          //allChoices();  
        } else
        if(!numberSelection && !uppercaseSelection && !lowercaseSelection) {
          userSelection += criteriaChoice.onlySymbol;
        } else
        if(!numberSelection && !uppercaseSelection && !symbolSelection) {
          userSelection += criteriaChoice.onlyLower;
        }
        if(!symbolSelection && !numberSelection && !lowercaseSelection) {
          userSelection += criteriaChoice.onlyUpper;
        }
        if(!symbolSelection && !uppercaseSelection && !lowercaseSelection) {
          userSelection += criteriaChoice.onlyNumber;
        }
        if(!numberSelection && !uppercaseSelection) {
          userSelection += criteriaChoice.noNumberUpper;
        } else 
        if(!numberSelection && !lowercaseSelection) {
          userSelection += criteriaChoice.noNumberLower;
        } else
        if(!numberSelection && !symbolSelection) {
          userSelection += criteriaChoice.noNumberSymbol;
        } else       
        if(!lowercaseSelection && !uppercaseSelection) {
          userSelection += criteriaChoice.noUpperLower;
        } else
        if(!uppercaseSelection && !symbolSelection) {
          userSelection += criteriaChoice.noUpperSymbol;
        } else
        if(!lowercaseSelection && !symbolSelection) {
          userSelection += criteriaChoice.noLowerSymbol;
        } else
        if(!numberSelection) {
          userSelection += criteriaChoice.noNumber;
          //criteriaChoice.noNumber
        } else 
        if(!lowercaseSelection) {
          userSelection += criteriaChoice.noLower;
        } else
        if(!uppercaseSelection) {
          userSelection += criteriaChoice.noUpper;
        } else
        if(!symbolSelection) {
          userSelection += criteriaChoice.noSymbol;
        } 
  
        console.log(userSelection);
  
        for(i = 0; i < passwordLength; i++) {
        userSelection += criteriaChoice(Math.floor(Math.random() * passwordLength.length));
        }
        
        return(userSelection);
  
  
      } else {  
        alert('Password must be between 8 and 128 characters.');
        return('Please pick a number between 8 and 128 characters.')
      }
    }








    var userSelection = '';
// var noNumber = symbol()+uppercaseLetter()+lowercaseLetter();
// var passwordLength = prompt('How long does your password need to be?\nMinimum of 8 characters. Max of 128 characters.');
// function passwordLength() {prompt('How long does your password need to be?\nMinimum of 8 characters. Max of 128 characters.');}

function generateSelection() {
  var numberSelection = confirm('Does the password need numbers?\nOk = Yes Cancel = No');
  var uppercaseSelection = confirm('Does the password need Uppercase letters?\nOk = Yes Cancel = No');
  var lowercaseSelection = confirm('Does the password need lowercase letters?\nOk = Yes Cancel = No');
  var symbolSelection = confirm('Does the password need Symbols?\nOk = Yes Cancel = No');

  if(!numberSelection && !uppercaseSelection && !lowercaseSelection && !symbolSelection) {
    alert('You must pick at least one criteria set.')
    return('You must pick at least one criteria set.')
  } else 
  if(numberSelection && uppercaseSelection && lowercaseSelection && symbolSelection) {
    userSelection += criteriaChoice.allChoices;
    //allChoices();  
  } else
  if(!numberSelection && !uppercaseSelection && !lowercaseSelection) {
    userSelection += criteriaChoice.onlySymbol;
  } else
  if(!numberSelection && !uppercaseSelection && !symbolSelection) {
    userSelection += criteriaChoice.onlyLower;
  }
  if(!symbolSelection && !numberSelection && !lowercaseSelection) {
    userSelection += criteriaChoice.onlyUpper;
  }
  if(!symbolSelection && !uppercaseSelection && !lowercaseSelection) {
    userSelection += criteriaChoice.onlyNumber;
  }
  if(!numberSelection && !uppercaseSelection) {
    userSelection += criteriaChoice.noNumberUpper;
  } else 
  if(!numberSelection && !lowercaseSelection) {
    userSelection += criteriaChoice.noNumberLower;
  } else
  if(!numberSelection && !symbolSelection) {
    userSelection += criteriaChoice.noNumberSymbol;
  } else       
  if(!lowercaseSelection && !uppercaseSelection) {
    userSelection += criteriaChoice.noUpperLower;
  } else
  if(!uppercaseSelection && !symbolSelection) {
    userSelection += criteriaChoice.noUpperSymbol;
  } else
  if(!lowercaseSelection && !symbolSelection) {
    userSelection += criteriaChoice.noLowerSymbol;
  } else
  if(!numberSelection) {
    userSelection += criteriaChoice.noNumber;
    //criteriaChoice.noNumber
  } else 
  if(!lowercaseSelection) {
    userSelection += criteriaChoice.noLower;
  } else
  if(!uppercaseSelection) {
    userSelection += criteriaChoice.noUpper;
  } else
  if(!symbolSelection) {
    userSelection += criteriaChoice.noSymbol;
  } 

  } 



  var criteriaChoice = {
    allChoices: symbol()+uppercaseLetter()+lowercaseLetter()+number(),
    noNumber: symbol()+uppercaseLetter()+lowercaseLetter(),
    noUpper: number()+symbol()+lowercaseLetter(),
    noLower: number()+symbol()+uppercaseLetter(),
    noSymbol: number()+uppercaseLetter()+lowercaseLetter(),
    noNumberSymbol: uppercaseLetter()+lowercaseLetter(),
    noNumberUpper: symbol()+lowercaseLetter(),
    noNumberLower: uppercaseLetter()+symbol(),
    noUpperLower: symbol()+number(),
    noUpperSymbol: lowercaseLetter()+number(),
    noLowerSymbol: uppercaseLetter()+number(),
    onlyNumber: number(),
    onlyUpper: uppercaseLetter(),
    onlyLower: lowercaseLetter(),
    onlySymbol: symbol()
  }