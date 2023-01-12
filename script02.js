const passwordCharacters = {
    specialCharacters: [
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
    ],
    numericCharacters: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    lowerCasedCharacters: [
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
    ],
    upperCasedCharacters: [
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
    ]
}


// Function to prompt user for password options
function getPasswordOptions() {
    let getPassLength = prompt("Choose between 10 and 64 characters:");
    if (getPassLength < 10 || getPassLength > 64) {
        alert("Try again");
    } else {
        let lowerCaseOption = confirm("Include lower case?");
        let upperCaseOption = confirm("Include upper case?");
        let specialCharOption = confirm("Include special characters?");
        let numbersOption = confirm("Include numbers?");    
        
    }
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
    return "Password";
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