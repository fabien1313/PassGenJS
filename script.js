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
var generateBtn = document.querySelector("#generate");



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);


