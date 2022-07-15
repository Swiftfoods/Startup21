function validateForm() {
  let x = document.forms["myform"]["email"].value;
  if (x == "") {
    alert("Enter your Email address");
  }
  let y = document.forms["myform"]["password"].value;
  if (y == "") {
    alert("Please input your password");
  }
}

//window.location.href = JSON.parse(this.responseText).url;
// function validateForm2() {
//   let a = document.forms["myform2"]["first_name"].value;
//   if (a == "") {
//     alert("First name must be filled out");
//     return false;
//   }
//   let b = document.forms["myform2"]["last_name"].value;
//   if (b == "") {
//     alert("Last name must be filled out");
//     return false;
//   }
//   let f = document.forms["myform2"]["phone"].value;
//   if (f == "") {
//     alert("Enter your Phone Number");
//     return false;
//   }
//   let c = document.forms["myform2"]["email"].value;
//   if (c == "") {
//     alert("Email must be filled out");
//     return false;
//   }
//   let d = document.forms["myform2"]["password"].value;
//   if (d == "") {
//     alert("Enter a password");
//     return false;
//   }
//   let g = document.forms["myform2"]["t_c"].checked;
//   if (g == false) {
//     alert("Agree to the T's and C's.");
//     return false;
//   }
//   let e = document.forms["myform2"]["confirm_password"].value;
//   if (e == "") {
//     alert("Confirm your password");
//     return false;
//   }
//   if (e === d) {
//     return true;
//   } else {
//     alert("Passwords do not match!");
//     return false;
//   }
// }

function validateForm3() {
  let x = document.forms["myform3"]["Email"].value;
  if (x == "") {
    alert("Enter your Email address");
  }
}

function showPage(panelIndex, color) {
  var buttons = document.querySelectorAll("input.btn");
  var pages = document.querySelectorAll("div.page");

  buttons.forEach(function (node) {
    node.style.fontWeight = "";
  });
  buttons[panelIndex].style.backgroundColor = color;
  pages.forEach(function (node) {
    node.style.display = "none";
  });
  pages[panelIndex].style.display = "flex";
}

function validateForm4() {
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
  if (e === d) {
    return true;
  } else {
    alert("Passwords do not match!");
    return false;
  }
}

function validateForm3() {
  let x = document.forms["myform3"]["Email"].value;
  if (x == "") {
    alert("Enter your Email address");
  }
}

const myForm = document.getElementById("myform2");

myForm.addEventListener("submit", registerCustomer);
async function registerCustomer(e) {
  e.preventDefault();
  try {
    let first_name = document.forms["myform2"]["first_name"].value;
    let last_name = document.forms["myform2"]["last_name"].value;
    let password = document.forms["myform2"]["password"].value;
    let password2 = document.forms["myform2"]["confirm_password"].value;
    let email = document.forms["myform2"]["email"].value;
    let phone = document.forms["myform2"]["phone"].value;
    let terms = document.forms["myform2"]["t_c"].checked;
    // if (!first_name) {
    //   alert("First name must be filled out");
    //   return false;
    // }
    // if (!last_name) {
    //   alert("Last name must be filled out");
    //   return false;
    // }
    // if (!phone) {
    //   alert("Enter your Phone Number");
    //   return false;
    // }
    // if (!email) {
    //   alert("Email must be filled out");
    //   return false;
    // }
    // if (!password) {
    //   alert("password must be filled out");
    //   return false;
    // }
    // if (!password2) {
    //   alert("please confirm your password");
    //   return false;
    // }
    // if (password !== password2) {
    //   return alert("Passwords do not match");
    // }
    // if (terms == false) {
    //   return alert("Agree to the Terms and Conditions.");
    // }
    const request = await fetch(
      "http://127.0.0.1:5000/api/v1/auth/customers/register",
      {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          first_name,
          last_name,
          phone,
          email,
          password,
        }),
      }
    );
    console.log(request);
    const response = await request.json();
    if (response.status) {
      alert("Registration Successful");
      console.log(response.data);
      console.log(response.message);
      window.location.href = "login.html";
    } else {
      console.log(response.message);
      console.log(response.error);
    }
    console.log(response);
  } catch (error) {
    console.log();
  }
}
