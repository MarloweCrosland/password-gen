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
  var lowerCase = ('abcdefghijklmnopqrstuvwxyz');
  var allCaps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var randomNum = '1234567890'
  var specialChar = '~!@#$%^&*_-+=`|\(){}[]:;<>,.?/()';
  
  // if user selects yes, the password contains special chars
  // create an empty array for characters from the lists selected)
  

    var passArray = []

  if (askChars === 'Yes' || askChars === "YES" || askChars === 'yes'){
    passArray.push(specialChar.split(''))};
  if (askNums === 'Yes' || askNums === "YES" || askNums === 'yes'){
    passArray.push(randomNum.split(''))};
  
  if (askCaps === 'Yes' || askCaps === "YES" || askCaps === 'yes'){
    passArray.push(allCaps.split(''))};

    if (askLows === 'Yes' || askLows === "YES" || askLows === 'yes'){
      passArray.push(lowerCase.split(''))};

      if (confirm('have you chosen at least one character type?') == false){
        genPass();
      }
      

  

// use .split to make strings into char arrays
// use .flat to remove nested arrays

console.log(passArray.flat());


// shuffle function
let arrayShuffle = function(arr){
  let newPos,
  temp;

  for(let i = arr.length -1; i > 0; i--){
    newPos = Math.floor(Math.random() * (i+1));
    temp= arr[i];
    arr[i] = arr[newPos];
    arr[newPos] = temp;
  }
  return arr;
};

//shuffle the passArray

var newArray = arrayShuffle(passArray.flat());

console.log(newArray);

// make the newArray as short as the user wanted (howMany)


var howLong = parseInt(howMany)

newArray.length = howLong
console.log(newArray);
// expected output: shuffled chars of specified length (howMany)


//concatenate & display the password in textarea
document.getElementById('password').value = 'Your password is ' + newArray.join('');
}

 genPass();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

