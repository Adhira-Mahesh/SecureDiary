const emailInput = document.getElementById("floatingInput");
const passwordInput = document.getElementById("floatingPassword");
const createBtn = document.getElementById("creatBtn");
const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", () => {
  emailInput.value = "";
  passwordInput.value = "";
});
createBtn.addEventListener("click",()=>{
    alert("Account created");
    window.location.href = "index.html"
})