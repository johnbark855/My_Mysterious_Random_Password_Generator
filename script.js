//generate random password
function generate(){

  //set password length/complexity
  let complexity = document.getElementById("slider").value;

  //possible password values
  let values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+{}[]";

  let password ="";

  //create loop to choose the password charaters
  for(var i=0;i<=complexity; i++){
      password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length-1)));
  }

//add password to textbox/display area
document.getElementById("display").value=password;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}
//set default length of 25
document.getElementById("length").innerHTML="Length:25";

//function to set length according to the slider
document.getElementById("slider").oninput=function(){
  if(document.getElementById("slider").value>0){
    document.getElementById("length").innerHTML="length:" + document.getElementById("slider").value;
  }
  else{
    document.getElementById("length").innerHTML="length: 1" ;
  }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}

//Function to copy the generated password to clipboard
function copyPassword(){

  document.getElementById("display").select();

  document.execCommand("Copy");
  
  alert("Password copied to clipboard");

}
