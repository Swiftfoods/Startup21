function validateForm(){
    let x = document.forms["myform"]["email"].value;
    if(x == ""){
        alert ("Enter your Email address");
    }
    let y = document.forms["myform"]["password"].value;
    if(y == ""){
        alert ("Please input your password");
    }
    async function login(){
      const api_url = 'https://swiftfoodng-api.herokuapp.com/API/v1/auth/customers/login'
    };
   const response = res.json();
    if(response.status === true){
      window.location.href = response.redirect('homepage.html');
    } else if (response.status === false){
      alert("Email or Password Invalid")
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
    let f = document.forms["myform2"]["phone"].value;
    if (f == "") {
      alert("Enter your Phone Number");
      return false;
    }
    let c = document.forms["myform2"]["email"].value;
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



function showPage(panelIndex, color){
  var buttons= document.querySelectorAll("input.btn");
 var pages = document.querySelectorAll("div.page");

  buttons.forEach(function(node){
   node.style.fontWeight='';
  });
  buttons[panelIndex].style.backgroundColor= color;
  pages.forEach(function(node){
    node.style.display="none"
  });
  pages[panelIndex].style.display="flex";

}



function validateForm4(){
  let a = document.forms["myform4"]["branch_name"].value;
  if (a == "") {
    alert("Branch name must be filled out");
    return false;
  }
  let b = document.forms["myform4"]["state"].value;
  if (b == "") {
    alert("State must be filled out");
    return false;
  }
  let h = document.forms["myform4"]["city"].value;
  if (h == "") {
    alert("City must be filled out");
    return false;
  }
  let f = document.forms["myform4"]["phone_number"].value;
  if (f == "") {
    alert("Enter your Phone Number");
    return false;
  }
  let c = document.forms["myform4"]["email_address"].value;
  if (c == "") {
    alert("Email must be filled out");
    return false;
  }
  let d = document.forms["myform4"]["password"].value;
  if (d == "") {
    alert("Enter a password");
    return false;
  }
  let g = document.forms["myform4"]["t_c"].checked;
  if (g == false) {
    alert("Agree to the T's and C's.");
    return false;
  }
  let e = document.forms["myform4"]["confirm_password"].value;
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

function popupMenu() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
a
fetch('https://swiftfoodapi.herokuapp.com/API/v1/customers', {method:'GET', mode:'no-cors'})
.then(res => {
  if (res.ok) {
    console.log('Successful');
  } else{
    console.log('Not Successful')
  }
})
.then(data => console.log(data))
.catch(error=> console.log('ERROR'))