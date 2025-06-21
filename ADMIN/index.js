document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-login");
    const loginHeading = document.getElementById("login-heading");
    const registrationFields = document.getElementById("registration-fields");
    const loginBtn = document.getElementById("login-btn");
  
    toggleButton.addEventListener("click", () => {
      if (toggleButton.textContent === "Switch to Register") {
        loginHeading.textContent = "Register";
        toggleButton.textContent = "Switch to Login";
        registrationFields.style.display = "block";
        loginBtn.textContent = "Register";
      } else {
        loginHeading.textContent = "Login";
        toggleButton.textContent = "Switch to Register";
        registrationFields.style.display = "none";
        loginBtn.textContent = "Login";
      }
    });
  
    document.getElementById("login-form").addEventListener("submit", (event) => {
      event.preventDefault();
      // Add your login/register logic here, e.g., field validation, etc.
      alert(`${loginHeading.textContent} successful!`);
    });
  });
  