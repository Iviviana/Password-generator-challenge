# Password Generator Starter Code

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page


// Assignment Code
var generateBtn = document.querySelector("#generate");


var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numeric = ["1","2","3","4","5","6","7","8","9","0"];
var special = ["!","@","$","%","&","(",")","?","/","+","=","~","*","#"];

function getPositioninArray(arrayLength) {

  var randomNumber=Math.random();
  var randomValue=randomNumber*arrayLength;
  return Math.floor(randomValue);
}
function randomUpperCase() {

  var randomPosition=getPositioninArray(uppercase.length);
  return uppercase[randomPosition];
}
function randomLowerCase() {

  var randomPosition=getPositioninArray(lowercase.length);
  return lowercase[randomPosition];
}
function randomSpecial() {

  var randomPosition=getPositioninArray(special.length);
  return special[randomPosition];
}
function randomNumericValue() {
  var randomPosition=getPositioninArray(numeric.length);
  return numeric[randomPosition];
}


function generatePassword() {

  var includeSpecialCharacter=true;
  var includeUppercase=true;
  var includeLowercase=true;
  var includeNumbers=true;
  var passwordLength=10;

  var password="";

  if(includeSpecialCharacter) {
    password+=generateRandomSpecialCharacter();
  }
  if(includeUppercase) {
    password+=generateRandomUppercase();
  }
  if(includeLowercase) {
    password+=generateRandomLowercase();
  }
  if(includeNumbers) {
    password+=generateRandomNumber();
  }

  for(var i=password.length;i<passwordLength;i++) {
    var characterToGenerate="uppercase";

    if(characterToGenerate==="uppercase") {
      password+=generateRandomUppercase();
    }

    return password;
  }
}


console.log(generatePassword)
console.log(generatePassword)
console.log(generatePassword)