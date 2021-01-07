
generate = document.getElementById("generate");
generate.addEventListener("click",generatePwd);

  var char =  "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYYZ";
  var special = "!#$%&()*+-./:;<=>?@[]^_{|{}`~";
  var num = "0123456789";
  var password = "";

  //random password function will add characters to the var char if user selects at propts. 
  //after the prompts are selected, the random password for loop will run until its the user's chosen
  //length
  function randomPwd(){
    var pwdLength = prompt("How many characters?");
    var upperChar = confirm("Upper case characters?");
    var specialChar = confirm("Special characters?");
    var numChar = confirm("Number characters?");
    if (pwdLength < 8){
      pwdLength = 8;
    }
    if (pwdLength > 128){
      pwdLength = 128;
    }
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
      password += char.charAt(Math.floor(Math.random() * char.length));
    }
  }
//password is made '' every time function is ran to let the user use the app multiple times

  function generatePwd(){
    password= "" ;
    randomPwd() ;
    document.getElementById("password").value = password ;
    copyPwd();
    }
    
//password will be automatically copied onto user's clipboard after running generatePwd()
  function copyPwd(){
    password = document.getElementById("password");
    password.select();
    document.execCommand('copy');
    alert("Password copied!");
  }
    




    
    

  


 



    



  
