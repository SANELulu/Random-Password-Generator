// Assignment Code

// Write password to the #password input
// function randomPwd() {
//   var password = randomPwd();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
  // result = document.getElementById("result");
// }


// Add event listener to generate button
//generateBtn.addEventListener("click", randomPwd());

// function randomPwd(){
//   for (var i = 0; i < pwdLength; i++){
//     result += char.charAt(Math.floor(Math.random() * char.length)); 
//   }
// }



  result = document.getElementById("password");
  var char =  "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYYZ";
  var special = "!#$%&()*+-./:;<=>?@[]^_{|{}`~";
  var num = "0123456789";
  // var pwdLength = prompt("How many characters?");
  // var upperChar = confirm("Upper case characters?");
  // var specialChar = confirm("Special characters?");
  // var numChar = confirm("Number characters?");
  var result = "";


  // if (upperChar === true){
  //   char = char.concat(upper);
  // }
  // if (specialChar === true){
  //   char = char.concat(special); 
  // }
  // if (numChar === true){
  //   char = char.concat(num); 
  // }
  
  // randomPwd();
  

  function randomPwd(){
    var pwdLength = prompt("How many characters?");
    var upperChar = confirm("Upper case characters?");
    var specialChar = confirm("Special characters?");
    var numChar = confirm("Number characters?");
    if (upperChar === true){
      char = char.concat(upper);
    }
    if (specialChar === true){
      char = char.concat(special); 
    }
    if (numChar === true){
      char = char.concat(num); 
    }
    for (var i = 0; i < pwdLength; i++){
      result += char.charAt(Math.floor(Math.random() * char.length)); 
      
    }
    console.log(char);
  console.log(result);
  }
  
 
  

  
    




    
    

  


 



    



  


