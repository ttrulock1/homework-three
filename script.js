// Assignment Code
var generateBtn = document.querySelector("#generate");

// Here are the function generator and the query selectors used.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// here I created the variables and 
// beginning on line 19 begins the while loop complete with if statements.
function generatePassword(){
  var lowercase= "abcdefghijklmnopqrstuvxyz" 
  var uppercase= lowercase.toUpperCase()
  var numbers= "1234567890"
  var special= "!@#$^%&*"
  var characters= "" 
  while(characters=== ""){
    if(confirm("Include lowercase characters?")){
      characters+=lowercase
    }
    if(confirm("Include uppercase characters?")){
      characters+=uppercase
    }
    if(confirm("Include number?")){
      characters+=numbers
    }
    if(confirm("Include special characters?")){
      characters+=special
    }
  }
  var password= ""
  var numberofcharacters= 0
  while(numberofcharacters<8 || numberofcharacters>128){
    numberofcharacters=Number(prompt("number of characters? Choose 8 to 128"))
  }
  for(var i=0; i<numberofcharacters; i++){
    var index= Math.floor(Math.random()*characters.length)
    password += characters[index]
  }
  return password
}

generateBtn.addEventListener("click", writePassword);
