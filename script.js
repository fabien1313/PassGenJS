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



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);


