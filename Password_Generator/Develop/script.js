// //Variable Declaration Section
var charString = "";
var charLength = 0;
var yesUpperCase = false;
var yesLowerCase = false;
var yesNumbers = false;
var yesSpecialChar = false;

// //Character Definition Section
var charUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charLowerCase = "abcdefghijklmnopqrstuvwxyz";
var charNumber = "1234567890";
var charSpecial = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Choosing a Character Length Section
function chooseCharLength() {
  let passwordLength = parseInt(prompt("How long would you like your password to be? (Please choose between 8-128 characters)"));
  if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter in a valid character length (Please choose between 8-128 characters");
    chooseCharLength();
  }
  charLength = passwordLength;
}

//Prompt for which character you would like to use
function promptSelection() {
  yesUpperCase = confirm("Would you like your password to contain Upper Case letters?");
  yesLowerCase = confirm("Would you like your password to contain Lower Case letters?");
  yesNumbers = confirm("Would you like your password to contain Numbers?");
  yesSpecialChar = confirm("Would you like your password to contain Special letters?");
  if (!yesUpperCase && !yesLowerCase && !yesNumbers && !yesSpecialChar) {
    alert("You need to choose at least one type of character!")
    promptSelection();
  }
}

//Defining Get Criteria Function
function getCriteria() {
  chooseCharLength();
  promptSelection();
}

//Defining Generate Password Function
function generatePassword() {
  getCriteria();
  constructCriteria();
  return constructPassword();
}

//Defining the password based on the prompt selections:
function constructCriteria() {
  if (yesUpperCase) {
    charString += charUpperCase;
  }
  if (yesLowerCase) {
    charString += charLowerCase;
  }
  if (yesNumbers) {
    charString += charNumber;
  }
  if (yesSpecialChar) {
    charString += charSpecial;
  }
}

//Constructing the password based on the criteria selected from the user
function constructPassword() {
  let password = "";
  for (i = 0; i < charLength; i++) {
    password += charString[Math.floor(Math.random() * charString.length)];
  }
  charString = "";
  charLength = 0;
  yesUpperCase = false;
  yesLowerCase = false;
  yesNumbers = false;
  yesSpecialChar = false;
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
