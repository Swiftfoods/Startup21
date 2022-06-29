function validateForm(){
    let x = document.forms["myform"]["email"].value;
    if(x == ""){
        alert ("Enter your Email address");
    }
    let y = document.forms["myform"]["password"].value;
    if(y == ""){
        alert ("Please input your password");
    }
}

function validateForm2(){
    let a = document.forms["myform2"]["first_name"].value;
    if (a == "") {
      alert("First name must be filled out");
      return false;
    }
    let b = document.forms["myform2"]["last_name"].value;
    if (b == "") {
      alert("Last name must be filled out");
      return false;
    }
    let c = document.forms["myform2"]["email_address"].value;
    if (c == "") {
      alert("Email must be filled out");
      return false;
    }
    let d = document.forms["myform2"]["password"].value;
    if (d == "") {
      alert("Enter a password");
      return false;
    }
    let g = document.forms["myform2"]["t_c"].checked;
    if (g == false) {
      alert("Agree to the T's and C's.");
      return false;
    }
    let e = document.forms["myform2"]["confirm_password"].value;
    if (e == "") {
      alert("Confirm your password");
      return false;
    }
    if(e === d){
        return true;
    }else {
        alert ("Passwords do not match!");
        return false;
    }
}

function validateForm3(){
  let x = document.forms["myform3"]["Email"].value;
  if(x == ""){
      alert ("Enter your Email address");
  }
}