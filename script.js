// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var pwLength = Number(prompt("How long should your password be? (8-128 characters)")); //could use a drop down menu to ensure the user can only pick numbers

  //tests to make sure user entered a correct value
  while (!Number.isInteger(pwLength) || pwLength < 8 || pwLength > 128) {
    alert("Incorrect Value. Try Again");
    pwLength = Number(prompt("How long should your password be? (8-128 characters)"));
  }

  //pw criteria
  var lowerCase = confirm("Do you want lowercase letters?");
  var upperCase = confirm("Do you want uppercase letters?");
  var numeric = confirm("Do you want numeric values?");
  var specialChar = confirm("Do you want special characters?");

  //use an array to store all character types and push them to the end instead of testing for each possible scenario
  var charTypes = [];

  if (lowerCase) {
    charTypes.push("abcdefghijklmnopqrstuvwxyz"); //adds lowercase
  }

  if (upperCase) {
    charTypes.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ"); //adds uppercase
  }

  if (numeric) {
    charTypes.push("0123456789"); //adds numbers
  }

  if (specialChar) {
    charTypes.push("!@#$%^&*()_+~`|}{[]:;?><,./-="); //adds special characters
  }

  if (charTypes.length === 0) { //tests to see if the user selected no for each prompt
    alert("No parameters chosen, no password possible");
  } else {
    charTypes = charTypes.join(""); //combines all the character types into one string
  }

  function generatePassword(){
    var pw = "";
    for(var i=0; i < pwLength; i++){
      //somehow use math.random to select random characters from my charTypes array
      //charAt()?
      //(max - min) + min  "(charTypes.length - 0) + 0"
      pw=pw+charTypes.charAt(Math.random() * charTypes.length); //im hoping this adds a character at a random index of the charTypes string.
    }

    return pw; //sends the generated password back to where the function was called
  }

  var password = generatePassword(); //calls on the function, and sets the password equal to the returned value.
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);