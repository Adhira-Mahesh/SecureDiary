
const emailInput = document.getElementById("floatingInput");
const passwordInput = document.getElementById("floatingPassword");
const loginBtn = document.getElementById("loginButton");
const resetBtn = document.getElementById("resetButton");
const signUpBtn = document.getElementById("signupButton");


loginBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
 if (email === "a" && password === "1") {
    window.location.href = "homePage.html";
  } else {
    alert("Invalid email or password!");
  }
  
});

// Reset button click
resetBtn.addEventListener("click", () => {
  emailInput.value = "";
  passwordInput.value = "";
});

signUpBtn.addEventListener("click", () => {
  window.location.href = "signupPage.html"
});
