let userInfo = document.querySelector("#user_info");
let userDom = document.querySelector("#user");
let logoutUser = document.querySelector("#logoutuser");
let links = document.querySelector("#homelogin");
let logoutBtn = document.querySelector("#logoutuser");

let username = localStorage.getItem("username");
if (username) {
  links.remove();
  // userInfo.style.display = "flex";
  userDom.innerHTML = username;
  logoutUser.innerHTML = "Logout";
}

logoutBtn.addEventListener("click", function () {
  localStorage.clear();
  setTimeout(() => {
    window.location = "account.html";
  }, 1500);
});
