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

// GET PROMPTS INTO GLOBAL VARIABLES

let getPasswordLength = prompt("Length of password :");
let confirmLowerCase = confirm("Include lower case letters?");
let confirmUpperCase = confirm("Include upper case letters?");
let confirmSpecial = confirm("Include special characters?");
let confirmNumber = confirm("Include numbers?");

// Function to prompt user for password options
function getPasswordOptions() {
  // VALIDATE PASSWORD LENGTH
    // if (getPasswordLength < 10 || getPasswordLength > 64) {
    //   return getPasswordLength;
    // } else {
    //   return ERROR MESSAGE;
    // }

  // VALIDATE LOWERCASE LETTERS
    // if(confirmLowerCase === true){
    //   include Lowercase letters
    // }

  // VALIDATE UPPERCASE LETTERS
    // if(confirmUpperCase === true){
    //   include Uppercase letters
    // }

  // VALIDATE SPECIAL LETTERS
    // if(confirmSpecial === true){
    //   include Special letters
    // }

  // VALIDATE NUMBERS
    // if(confirmNumber === true){
    //   include Numbers
    // }

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);