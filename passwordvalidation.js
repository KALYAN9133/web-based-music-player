
function showpassword(){ 
    var password=document.getElementById("pass"); 
    if(password.type=="password"){ 
       password.type="text"; 
    }else{ 
      password.type="password"; 
    } 
       
}