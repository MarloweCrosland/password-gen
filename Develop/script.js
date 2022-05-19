// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = genPass();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function genPass(){
  // give prompts asking for password criteria
  window.alert ('Please choose your password criteria by typing yes or no');
  var askChars = window.prompt ('Would you like to use special characters?');
  var askNums = window.prompt ('Numbers?');
  var askCaps = window.prompt ('capital letters?');
  var askLows = window.prompt ('lowercase letters?');
  var howMany = window.prompt ('choose a length of at least 8 characters and no more than 128 characters');
  



  // possible chars to choose from
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var allCaps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var randomNum = '1234567890'
  var specialChar = '~!@#$%^&*_-+=`|\(){}[]:;<>,.?/()';
  
  // if user selects yes, the password contains special chars
  // create an empty array for characters from the lists selected)
  passArray = ['']

  if (askChars === 'Yes' || askChars === "YES" || askChars === 'yes'){
    passArray.push(specialChar)};
  if (askNums === 'Yes' || askNums === "YES" || askNums === 'yes'){
    passArray.push(randomNum)};
  
  if (askCaps === 'Yes' || askCaps === "YES" || askCaps === 'yes'){
    passArray.push(allCaps)};

    if (askLows === 'Yes' || askLows === "YES" || askLows === 'yes'){
      passArray.push(lowerCase)};



 // get a random number with max at howmany
 var randomNum = getRandomInt(howMany);
  function getRandomInt(max){
    return Math.floor(Math.random()*max);
  }

}

 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


genPass();

console.log(passArray)



// i am trying to include all of the possible character choices inside an array and then randomly select
//inside the array up to the number of the characters chosen