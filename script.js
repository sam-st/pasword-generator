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
    console.log(charTypes);
  }

  function generatePassword(){
    var pw = "";
    for(var i=0; i < pwLength; i++){
      //somehow use math.random to select random characters from my charTypes array
      //charAt()?
      //(max - min) + min
      pw=pw+charTypes.charAt(Math.random() * charTypes.length); //im hoping this adds a character at a random index of the charTypes string.
      console.log(pw);
    }

    return pw; //sends the generated password back to where the function was called
  }

  var password = generatePassword(); //calls on the function, and sets the password equal to the returned value.
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//i want to generate 8-128 random numbers, symbols, letters
// add the generated character to the end of the current string
//return a string value that is hopefully 8 characters long and randomly generated.

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters