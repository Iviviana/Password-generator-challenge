// Assignment code here

var pwCriteria = {
  length: "",
  lowercase: "",
  uppercase: "",
  numeric: "",
  spCharacters: "",
};

var characterSelection = function (){

  //Lowercase letters option prompt
  pwCriteria.lowercase=window.prompt("Would you like to include lowercase characters in your password? Type yes or no ");
  pwCriteria.lowercase = pwCriteria.lowercase.toLowerCase();
  if (pwCriteria.lowercase === "yes") {
      window.alert("You have selected to include lowercase letters in your password");
      pwCriteria.lowercase=true;
  } else if(pwCriteria.lowercase === "no") {
      window.alert("You selected to not use lowercase letters in your password.");
      pwCriteria.lowercase=false;
  }

  //Uppercase letters prompt
  pwCriteria.uppercase=window.prompt("Would you like to include uppercase letters in your password? Type yes or no");
  pwCriteria.uppercase=pwCriteria.uppercase.toLowerCase();
  if(pwCriteria.uppercase === "yes") {
    window.alert("You have selected to use uppercase letters in your password");
    pwCriteria.uppercase=true;
  } else if(pwCriteria.uppercase === "no") {
    window.alert("You have selected to not use uppercase letters in your password");
    pwCriteria.uppercase=false;
  }

  //Numeric characters prompt
  pwCriteria.numeric=window.prompt("Would you like to include numeric values in your password? Type yes or no");
  pwCriteria.numeric=pwCriteria.numeric.toLowerCase();
  if(pwCriteria.numeric === "yes") {
    window.alert("You have selected to include numeric values in your password");
    pwCriteria.numeric=true;
  }else if(pwCriteria.numeric === "no") {
    window.alert("You have selected to not include numeric values in your password.");
    pwCriteria.numeric=false;
  }

  //Special characters prompt
  pwCriteria.spCharacters=window.prompt("Would you like to include special characters in your password? Type yes or no");
  pwCriteria.spCharacters=pwCriteria.spCharacters.toLowerCase();
  if(pwCriteria.spCharacters === "yes") {
    window.alert("You have selected to use special characters in your password.");
    pwCriteria.spCharacters=true;
  } else if(pwCriteria.spCharacters === "no") {
    window.alert("You have selected to not use special characters in your password.");
    pwCriteria=false;
  }
  //If none of the options are selected
  if(pwCriteria.lowercase === false &&
      pwCriteria.uppercase === false &&
      pwCriteria.numeric === false &&
      pwCriteria.spCharacters === false) {
        window.alert("You must select at least one character type to generate a password.");
        characterSelection();
      }
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);