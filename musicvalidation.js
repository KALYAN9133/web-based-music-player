function validatelogin(){
    var name = document.getElementById("mailid");
    var password = document.getElementById("pass");
    text="";

    if(mailid.value.trim()==null|| mailid.value.trim()==""){
        text="Enter valid mailid...";
        document.getElementById("text1").innerHTML=text;
        return false;
    }
    else if(password.value.trim()==null || password.value.trim()==""){
        text="Enter valid password...";
        document.getElementById("text2").innerHTML=text;
        return false;
    }
    else{
        return true;
    }
}
