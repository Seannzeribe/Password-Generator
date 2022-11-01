// Assignment code here

var numbers = "0123456789";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "!@#$%^&*()_+{}:<>?";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  alert(password);
  passwordText.value = password;

}

function generatePassword(){
  var length = parseInt(prompt("Enter the length of your password"));
  // if the length is not a number
  if(isNaN(length) === true){
    length = alert("Pasword length must be provided as a number");
  }

  
  var hasNumeric = prompt("Should password include numbers?[yes/no]");
  var hasLowerCase = prompt("Should password include lowercase charcaters?[yes/no]");
  var hasUpperCase = prompt("Should password include uppercase charcaters?[yes/no]");
  var hasSpecialCharacters = prompt("Should password include special charcaters?[yes/no]");
  

  var password = "";
  var possibleCharacters = "";

  if(hasNumeric === "yes"){
    possibleCharacters += numbers;
  }

  if(hasLowerCase === "yes"){
    possibleCharacters += lowerCase;
  }

  if(hasUpperCase === "yes") {
    possibleCharacters += upperCase;
  }

  if(hasSpecialCharacters === "yes"){
    possibleCharacters += specialCharacters;
  }

  // if the length is not in between 8 and 128 characters and user did not select any type of characters
  if(length < 8 || length > 128) {
    alert("Password length must be between 8 and 128 characters");
  }

  if(possibleCharacters.length === 0) {
    alert("You must select at least one type of character")
  }

  console.log(possibleCharacters); //0123456789
  // console.log(possibleCharacters[3])
  // 83
  for(let i = 0 ;i<length; i++){
    let randomCharacter = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
    password += randomCharacter;
  }

  return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);