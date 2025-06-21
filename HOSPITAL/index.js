document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-login");
    const loginHeading = document.getElementById("login-heading");
    const registrationFields = document.getElementById("registration-fields");
    const loginBtn = document.getElementById("login-btn");
    const errorMessage = document.getElementById("error-message");

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
      errorMessage.style.display = "none"; // Reset error message display

        const role = document.getElementById("role").value;
        const id = document.getElementById("id").value.trim();
        const password = document.getElementById("password").value.trim();
        const name = document.getElementById("name").value.trim();
        const age = document.getElementById("age").value;
        const contact = document.getElementById("contact").value.trim();

        // Basic validation
        if (loginHeading.textContent === "Register") {
            if (!name || age <= 0 || !contact.match(/^[0-9]{10}$/)) {
                errorMessage.textContent = "Please enter valid name, age, and a 10-digit contact number.";
                errorMessage.style.display = "block";
                return;
            }
        }

        if (role === "") {
            errorMessage.textContent = "Please select a role.";
            errorMessage.style.display = "block";
            return;
        }

        if (password.length < 6) {
            errorMessage.textContent = "Password must be at least 6 characters.";
            errorMessage.style.display = "block";
            return;
        }

        // If validation passes, redirect to the dashboard
        alert(`${loginHeading.textContent} successful!`);
        window.location.href = 'hospital-dashboard.html';
    });
  });
  