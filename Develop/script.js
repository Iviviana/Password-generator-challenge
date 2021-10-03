// Assignment code here

var upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numericValue = ["1","2","3","4","5","6","7","8","9","0"];
var specialChar = ["!","@","$","%","&","(",")","?","/","+","=","~","*","#"];

var pwCriteria = {
  length: 0,
  lowercase: "",
  uppercase: "",
  numeric: "",
  spCharacters: "",
};

var characterSelection = function (){

  //Length of password prompt
  pwCriteria.length=parseInt(window.prompt("Select a value between 8 and 128"));
  if (Number.isNaN(pwCriteria.length)) {
    window.alert("This is not a number")
    return;
  }  else {
    window.alert("This is a number");
    if(pwCriteria.length >= 8 && pwCriteria.length <= 128) {
    window.alert("You've met the criteria")
    } else {
      window.alert("You have not met the criteria")
      return;
    }
  } 

//Lowercase option prompt
  pwCriteria.lowercase=window.confirm("Would you like to include lowercase letters in your password");
  if(pwCriteria.lowercase == true) {
    window.alert("You have selected to include lowercase letters in your password");
  } else { 
    window.alert("You selected to not use lowercase letters in your password.");

  }

  //Uppercase option prompt
  pwCriteria.uppercase=window.confirm("Would you like to include uppercase letters in your password");
  if(pwCriteria.uppercase == true) {
    window.alert("You have selected to include uppercase letters in your password");
  } else { 
    window.alert("You selected to not use uppercase letters in your password.");

  }

  //Numeric character prompt
  pwCriteria.numeric=window.confirm("Would you like to include numeric values in your password");
  if(pwCriteria.numeric == true) {
    window.alert("You have selected to include numeric values in your password");
  } else { 
    window.alert("You selected to not use numeric values in your password.");

  }

  //Special characters prompt
  pwCriteria.spCharacters=window.confirm("Would you like to include special characters in your password");
  if(pwCriteria.spCharacters == true) {
    window.alert("You have selected to include special characters in your password");
  } else { 
    window.alert("You selected to not use special characters in your password.");

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


function generatePassword() {
  characterSelection();
  var password="";
  var randomArray= []
  if (pwCriteria.lowercase === true) {
    randomArray=randomArray.concat(lowerLetters);
  }
  if (pwCriteria.uppercase === true) {
    randomArray=randomArray.concat(upperLetters);
  }
  if (pwCriteria.numeric === true) {
    randomArray=randomArray.concat(numericValue);
  }
  if (pwCriteria.spCharacters === true) {
    randomArray=randomArray.concat(specialChar);
  }
  
  for(var i=0; i<pwCriteria.length; i++) { 
    var randomPosition=Math.floor(Math.random() * randomArray.length)
    var element = randomArray[randomPosition];
    password=element+password
    
  }
  console.log(password)
  return password;
}

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