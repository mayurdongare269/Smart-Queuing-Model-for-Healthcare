document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle-login");
  const loginHeading = document.getElementById("login-heading");
  const registrationFields = document.getElementById("registration-fields");
  const loginBtn = document.getElementById("login-btn");
  const errorMessage = document.getElementById("error-message"); // change

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
    // change

    errorMessage.style.display = "none"; // Reset error message display

    const email = document.getElementById("id").value.trim();
    const password = document.getElementById("password").value.trim();
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value;

    // Basic validation
    if (loginHeading.textContent === "Register") {
        if (!name || age <= 0) {
            errorMessage.textContent = "Please provide a valid name and age.";
            errorMessage.style.display = "block";
            return;
        }
    }

    if (!validateEmail(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        errorMessage.style.display = "block";
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters.";
        errorMessage.style.display = "block";
        return;
    }

    // change


    alert(`${loginHeading.textContent} successful!`);
    window.location.href = 'patient-dashboard.html';
  });


  function validateEmail(email) {
          const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return re.test(email);
      }

});


// document.addEventListener("DOMContentLoaded", () => {
//   const toggleButton = document.getElementById("toggle-login");
//   const loginHeading = document.getElementById("login-heading");
//   const registrationFields = document.getElementById("registration-fields");
//   const loginBtn = document.getElementById("login-btn");
//   const errorMessage = document.getElementById("error-message");

//   toggleButton.addEventListener("click", () => {
//     if (toggleButton.textContent === "Switch to Register") {
//       loginHeading.textContent = "Register";
//       toggleButton.textContent = "Switch to Login";
//       registrationFields.style.display = "block";
//       loginBtn.textContent = "Register";
//     } else {
//       loginHeading.textContent = "Login";
//       toggleButton.textContent = "Switch to Register";
//       registrationFields.style.display = "none";
//       loginBtn.textContent = "Login";
//     }
//   });

//   document.getElementById("login-form").addEventListener("submit", (event) => {
//     event.preventDefault();
//     errorMessage.style.display = "none"; // Reset error message display

//     const email = document.getElementById("id").value.trim();
//     const password = document.getElementById("password").value.trim();
//     const name = document.getElementById("name").value.trim();
//     const age = document.getElementById("age").value;

//     // Basic validation
//     if (loginHeading.textContent === "Register") {
//       if (!name || age <= 0) {
//         errorMessage.textContent = "Please provide a valid name and age.";
//         errorMessage.style.display = "block";
//         return;
//       }

//       // Use Firebase Authentication to register the user
//       firebase.auth().createUserWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//           // Registration successful
//           const user = userCredential.user;
//           console.log('User registered:', user);
//           alert('Registration successful!');
//           window.location.href = 'patient-dashboard.html'; // Redirect after successful registration
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessageText = error.message;
//           errorMessage.textContent = `Error: ${errorMessageText}`;
//           errorMessage.style.display = "block";
//         });
//     } else {
//       // Use Firebase Authentication to sign in the user
//       firebase.auth().signInWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//           // Sign-in successful
//           const user = userCredential.user;
//           console.log('User logged in:', user);
//           alert('Login successful!');
//           window.location.href = 'patient-dashboard.html'; // Redirect after successful login
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessageText = error.message;
//           errorMessage.textContent = `Error: ${errorMessageText}`;
//           errorMessage.style.display = "block";
//         });
//     }
//   });

//   function validateEmail(email) {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
//   }
// });
