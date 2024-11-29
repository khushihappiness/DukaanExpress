// Get the signup button and add a click event listener
document.addEventListener("DOMContentLoaded", () => {
  const signupButton = document.querySelector("#signupButton");
  const googleButton = document.querySelector("#googleButton");

  signupButton.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default form submission

      const email = document.querySelector("#email").value.trim();
      const password = document.querySelector("#password").value.trim();
      const gst = document.querySelector("#gst").value.trim();

      if (email && password && gst) {
          window.location.href = "retailer.html"; // Redirect to the main page
      } else {
          alert("Please fill out all fields before signing up.");
      }
  });

  googleButton.addEventListener("click", () => {
      window.location.href = "https://accounts.google.com/signin"; // Redirect to Google Sign-In
  });
});
