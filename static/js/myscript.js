function validate(){
    var first_name = document.getElementById("inputFirstName");
    var last_name = document.getElementById("inputLastName");
    var email = document.getElementById("inputEmail4");
    var contact_number = document.getElementById("inputNumber4");
    var experience = document.getElementById("inputExperience");
    var date = document.getElementById("inputDate4");
    var file = document.getElementById("inputFile4");
    if (first_name.value == ""){
        first_name.style.border = "2px solid red";
        document.getElementById("fp").style.display = "block";
        return false;
    } else if(last_name.value == ""){
        last_name.style.border = "2px solid red";
        document.getElementById("lp").style.display = "block";
        return false;
    } else if(email.value == ""){
        email.style.border = "2px solid red";
        document.getElementById("ep").style.display = "block";
        return false;
    } else if(contact_number.value == ""){
        contact_number.style.border = "2px solid red";
        document.getElementById("cp").style.display = "block";
        return false;
    } else if(contact_number.value.length < 10 || contact_number.value.length > 10){
        contact_number.style.border = "2px solid red";
        document.getElementById("contactlen").style.display = "block";
        return false;
    } else if(experience.value == ""){
        experience.style.border = "2px solid red";
        document.getElementById("wp").style.display = "block";
        return false;
    } else if(experience.value.length>=3){
        experience.style.border = "2px solid red";
        document.getElementById("year").style.display = "block";
        return false;
    } else if(date.value == ""){
        date.style.border = "2px solid red";
        document.getElementById("dp").style.display = "block";
        return false;
    } else if(file.value == ""){
        file.style.border = "2px solid red";
        document.getElementById("fip").style.display = "block";
        return false;
    }
    else {
        return true;
    }
}
