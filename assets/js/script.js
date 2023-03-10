// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let getPasswordLength = 0;

// Function to prompt user for password options
function getPasswordOptions() {
  // GET PROMPTS INTO VARIABLES
  getPasswordLength = prompt("Length of password :");
  // console.log(getPasswordLength); //TEST

  // VALIDATE PASSWORD LENGTH
  if (getPasswordLength < 10 || getPasswordLength > 64) {
    // getPasswordLength FALSE;
    // return ERROR MESSAGE;
    alert("Enter password between 10 and 64 characters");


  } else {
    // getPasswordLength TRUE;

    // concat all the true validation in new array
    let newPassword = [];

    let confirmLowerCase = confirm("Include lower case letters?");
    let confirmUpperCase = confirm("Include upper case letters?");
    let confirmSpecial = confirm("Include special characters?");
    let confirmNumber = confirm("Include numbers?");

    // Loop through user input length
    for (let i = 0; i < getPasswordLength; i++){
      // VALIDATE LOWER CASE
      if(confirmLowerCase){
        // Add lower case to array
        newPassword = newPassword.concat(getRandom(lowerCasedCharacters));
      }

      // VALIDATE UPPER CASE
      if(confirmUpperCase){
        newPassword = newPassword.concat(getRandom(upperCasedCharacters));
      }

      // VALIDATE SPECIAL CHAR
      if(confirmSpecial){
        newPassword = newPassword.concat(getRandom(specialCharacters));
      }

      // VALIDATE NUMBERS
      if(confirmNumber){
        newPassword = newPassword.concat(getRandom(numericCharacters));
      }
    }

    // Shuffle characters in new array
    for (let i = newPassword.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = newPassword[i];
      newPassword[i] = newPassword[j];
      newPassword[j] = temp;
    }

    // Turn new password into a string
    newPassword = newPassword.join("");

    return newPassword;
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  // GET RANDOM ELEMENT FROM ARRAY AND ASSING IT TO VARIABLE RANDOM
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  // When GENERATE PASSWORD button is clicked call password options and return new password
  if (generateBtn) {
    return getPasswordOptions();
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  password = password.slice(0, getPasswordLength);

  // console.log(password.length); //TEST

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);