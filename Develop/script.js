
generate = document.getElementById("generate");
generate.addEventListener("click",generatePwd);

  var char =  "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYYZ";
  var special = "!#$%&()*+-./:;<=>?@[]^_{|{}`~";
  var num = "0123456789";
  var password = "";

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

  function generatePwd(){
    password= "" ;
    randomPwd() ;
    //document.getElementById("password").placeholder = password;
    document.getElementById("password").value = password ;
    copyPwd();
    }
    // function copyText(password) {
    //   navigator.clipboard.writeText(password);
    // } 
    

  
    function copyPwd(){
    password = document.getElementById("password");
    password.select();
    document.execCommand('copy');
    alert("you copied it");
  }
    




    
    

  


 



    



  
