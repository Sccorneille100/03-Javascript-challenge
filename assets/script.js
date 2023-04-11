// Assignment Code
var generateBtn = document.querySelector("#generate");

// function for generated passowrd
function generatePassword(){
  // chose character amount
  while(true){  
    var length = prompt("Chose password length between 8 and 128 charcters");
  //filter the input from the user

  if(isNaN(length)|| length=="") {
    alert("A number was not chosen, Please try again");
  } 
  else if(length < 8 || length > 128) {
    alert("Make sure it's a number between 8 and 128.");
  }
 else{
  break;
 }
 };
  
  // asks the user what characters they want in their password
  var lower=true;
  var upper = confirm("Would you like uppercase in your Password?");
  var numb = confirm("Would you like numbers in your password?");
  var special = confirm("Would you like special characters in you password?");

  // this would hold all the possible combination of letter numbers and char
  var lowerCaseLetter = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseLetter = lowerCaseLetter.toUpperCase();
  var specialLetter = "!@$#%?&*.,~";
  var number = "1234567890";
  var polis = "";
  passwordText = "";

 
  // combines variables so all characters chosen can be used in the generated password
  if(lower) {
    polis   += lowerCaseLetter;
  }

  if(upper) {
    polis   += lowerCaseLetter.toUpperCase();
  }

  if(numb) {
    polis   += number
    passwordText += number.charAt(Math.floor(Math.random() * number.length))
    console.log(polis  );
  }

  if(special) {
    polis   += specialLetter
    passwordText += specialLetter.charAt(Math.floor(Math.random() * specialLetter.length));
  }
   console.log(passwordText);
  for(var i = passwordText.length; i < length; i++) {
  passwordText += polis.charAt(Math.floor(Math.random() * polis.length))

  }
 console.log (passwordText);
  return passwordText;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);