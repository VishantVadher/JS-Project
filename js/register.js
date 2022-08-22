// Register User

let regusername = document.querySelector("#regusername");
let regemail = document.querySelector("#regemail");
let regpassword = document.querySelector("#regpassword");

let registerBtn = document.querySelector("#reg_sign_in");

registerBtn.addEventListener("click", register);

function register(e) {
  e.preventDefault();
  
  console.log('query selector > > > > > ', regusername.value, regemail.value , regpassword.value)
  
  if (regusername.value === "" || regemail.value === "" || regpassword.value === "") {
    alert("Please Fill Data complete data");
  } else {
    localStorage.setItem("username", regusername.value);
    localStorage.setItem("email", regemail.value);
    localStorage.setItem("password", regpassword.value);

    setTimeout(() => {
      alert("Registered Successfully!!!");
      window.location = "account.html";
    }, 1500);
  }
}
