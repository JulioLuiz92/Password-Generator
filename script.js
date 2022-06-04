// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() 
{
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

/* These following functions composed essentialy by prompets will give the opportunity
to choose which criteria and or which characters they want to their password. If user
chooses unvalid answers, same prompt will just return to the screen*/
function initialPrompt()
{
  var value = 0;

  while  (value == NaN || (value != 1 && value != 2 && value != 3))
  {
    value = parseInt(prompt("Which criteria would you like to include?\n\n1 - length\n2 - type\n3 - both\n"));
  } 

    return value;
}

function lengthPrompt()
{  
  var passwordLength = 0;

  while  (passwordLength == NaN || passwordLength < 8 || passwordLength > 128)
  {
    passwordLength =  parseInt(prompt("How many letters would you like to include, between 8 and 128 characters?"));
  }

  return passwordLength;   
}

function hasUpperCases()
{
  var value = 0;

  while  (value == NaN || (value !=1 && value !=2))
  {
    value =  parseInt(prompt("Would you like to include uppercase to your password?\n\n1 - Yes\n2 - No\n"));
  }

  if (value == 1)
  {
    return true;
  } 
  else 
  {
    return false;
  }  
}

function hasLowerCases()
{
  var value = 0;

  while  (value == NaN || (value !=1 && value !=2))
  {
    value =  parseInt(prompt("Would you like to include lowercase to your password?\n\n1 - Yes\n2 - No\n"));
  }

  if (value == 1)
  {
    return true;
  } 
  else 
  {
    return false;
  }  
}

function hasNumbers()
{
  var value = 0;

  while  (value == NaN || (value !=1 && value !=2))
  {
    value =  parseInt(prompt("Would you like to include numbers to your password?\n\n1 - Yes\n2 - No\n"));
  }

  if (value == 1)
  {
    return true;
  } 
  else 
  {
    return false;
  }  
}

function hasSymbols()
{
  var value = 0; 

  while  (value == NaN || (value !=1 && value !=2))
  {
    value =  parseInt(prompt("Would you like to include symbols to your password?\n\n1 - Yes\n2 - No\n"));
  }

  if (value == 1)
  {
    return true;
  } 
  else 
  {
    return false;
  }  
}
/* This function will show the original prompt from other functions, giving the option to users
to select their preferred criterias to create a safe and randomic password, as it is composed by createPassword() as well. */
function generatePassword()
{
var selectedCriteria = initialPrompt();

var passwordLength = 128; /*This will be default value if user doesn't choose the password length */

var useUpper = true;
var useLower = true;
var useNumbers = true;
var useSymbols = true;

if (selectedCriteria == 1)
{
  passwordLength = lengthPrompt();
}
else if (selectedCriteria == 2) 
{
  useUpper = hasUpperCases();
  useLower = hasLowerCases();
  useNumbers = hasNumbers();
  useSymbols = hasSymbols();
  
}
else if (selectedCriteria == 3) 
{
  passwordLength = lengthPrompt();

  useUpper = hasUpperCases(); 
  useLower = hasLowerCases();
  useNumbers = hasNumbers();
  useSymbols = hasSymbols(); 
}

/* In case selected Criteria is Character type or lenght plus character type, and the user
replies No for all c type, it will generate a password withh all characters types by default */

if ((selectedCriteria == 2 || selectedCriteria == 3) && 
(useUpper == false && useLower == false && useNumbers == false && useSymbols == false) )
{
  useUpper = true;
  useNumbers = true; 
  useLower = true;
  useSymbols = true;

} 

return createPassword(passwordLength, useUpper, useLower, useNumbers, useSymbols);
}


/* This function is crutial to generatePassword(), as it will sort and slice the characters by choosen types, and will return it as a string, forming a proper password   */
function createPassword(length, useUpper, useLower, useNumbers, useSymbols) 
{
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbols = ["!", "#", "$", "&", "%", "'", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "~", "`", "{", "|", "}", "."];

  var password = [];
  if (useUpper)
  {
   password = password.concat(uppercase);
  }
  console.log("upper: " + password);
  if (useLower)
  {
    password = password.concat(lowercase);
  }
  console.log("lower: " + password);
  if (useNumbers)
  {
    password =  password.concat(numbers);
  }
  console.log("numbers: " + password);
  if (useSymbols)
  {
    password = password.concat(symbols);
  }
  

  password = password.sort(() => Math.random() - 0.5);

  console.log("sort: " + password);

  password = password.slice(0, length);

  console.log("slice: " + password);
  
  password = password.join('');

  return password;


} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
