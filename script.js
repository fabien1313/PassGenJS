//MY README BREAKDOWN:
  
//Create prompts for password criteria:
//-Length (at least 8 characters and no more than 128 characters)
//-character types to include or not (lowercase, uppercase, numeric, and/or special characters)
//When all prompts are answered then a password should be validated and at least one character type should be selected
//When all prompts are answered a password is generated that matches the chosen criteria
//Then the password is either displayed in an alert or written on the page.

//array for lowercase
//array for upper
//array for numbers
//array for special characters


// Grabbing element from HTML
var generateBtn = document.querySelector("#generate");

// Setting up my arrays to filter into my function/generatePassword
let lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 's', 'y', 'z'];
let upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'S', 'Y', 'Z'];
let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let special = ['~', '`', '!', '@', '#', '$', '%', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '<', '>', ':', ';'];


function generatePassword() {

  // What the user is selecting in prompts (yes/no)
  var userChoice = []
// confirms from user set into one string
  var userInput = '';

  // Global scope var (arrays)
  lower
  upper
  number
  special

  // pw length prompt along w/ conditional 8-128 required char and isNaN alert.
  let passWLength = prompt('How many characters would you like your password to be? ');
  if(passWLength < 8 || passWLength > 128){
    window.alert("Pick between 8 and 128 characters");
    return generatePassword();
  } else if(isNaN(passWLength)) {
    window.alert("Please pick a number")
      return generatePassword();
  } 

  // confirm (yes/no) prompts to send to userChoice var
  let passwordLower = window.confirm("Would you like to add lowercase letters?");
  let passwordUpper = window.confirm("Would you like to add uppercase letters?");
  let passwordNumber = window.confirm("Would you like to add numbers?");
  let passwordSpecial = window.confirm("Would you like to add special characters?");

  // if these are true than they will be pushed into userChoice. False will not be pushed
  if (passwordLower) {
    userChoice.push(lower);
  }
  if (passwordUpper) {
    userChoice.push(upper);
  }
  if (passwordNumber) {
    userChoice.push(number);
  }
  if (passwordSpecial) {
    userChoice.push(special);
  }

  // Generates prompt for not selecting a confirm. Must select atleast one char type.
  if(passwordLower === false && passwordUpper === false && passwordNumber === false && passwordSpecial === false){
    window.alert("Please select at least one character type")
    return generatePassword();
  }

   /* 
    userChoice
  [
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 's', 'y', 'z'],
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'S', 'Y', 'Z'],
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    ['~', '`', '!', '@', '#', '$', '%', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '<', '>', ':', ';']
  ]

  #2
  answer
  
  */

  // loop to generate passwords/get passwords into a single String.
  for (let index = 0; index < passWLength; index++) {
    var answer = letsMakeItRandom(userChoice)
    var answerSum = letsMakeItRandom(answer)
    userInput = userInput + answerSum;
  }
  return userInput
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);


