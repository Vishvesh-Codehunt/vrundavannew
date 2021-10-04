function validate(){
    var name = document.getElementById("inputName");
    var email = document.getElementById("inputEmail4");
    var contact = document.getElementById("inputContact");
    var subject = document.getElementById("inputSubject");
    var address = document.getElementById("inputAddress");
    var timetocall = document.getElementById("inputCall");

    if (name.value.trim() == ""){
        name.style.border = "2px solid red";
        document.getElementById("np").style.display = "block";
        return false;
    } else if (email.value.trim() == ""){
        email.style.border = "2px solid red";
        document.getElementById("ep").style.display = "block";
        return false;
    } else if (contact.value.trim() == ""){
        contact.style.border = "2px solid red";
        document.getElementById("cp").style.display = "block";
        return false;
    } else if(contact.value.trim().lenght<10 || contact.value.trim().length>10){
        contact.style.border = "2px solid red";
        document.getElementById("lcp").style.display = "block";
        return false;
    } else if (subject.value.trim() == ""){
        subject.style.border = "2px solid red";
        document.getElementById("sp").style.display = "block";
        return false;
    } else if (address.value.trim() == ""){
        address.style.border = "2px solid red";
        document.getElementById("ap").style.display = "block";
        return false;
    } else if (timetocall.value.trim() == ""){
        timetocall.style.border = "2px solid red";
        document.getElementById("callp").style.display = "block";
        return false;
    } 
    else{
        return true;
    }
}