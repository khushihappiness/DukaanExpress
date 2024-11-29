function logout()
{
      localStorage.removeItem("user_name");
      window.location.href="index.html";
}
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="User name: "+user_name;

function toggleProfileDropdown() {
      var dropdown = document.getElementById("profileDropdown");
      if (dropdown.style.display === "none" || dropdown.style.display === "") {
          dropdown.style.display = "block";
      } else {
          dropdown.style.display = "none";
      }
  }

  // Close dropdown when clicking outside of it
  window.onclick = function(event) {
      if (!event.target.matches('.profile')) {
          var dropdown = document.getElementById("profileDropdown");
          if (dropdown.style.display === "block") {
              dropdown.style.display = "none";
          }
      }
  }