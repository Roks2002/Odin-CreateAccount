function validatePasswords(event) {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm_password").value;
  const errorMessage = document.getElementById("error_message");

  if (password === "" || confirmPassword === "") {
    errorMessage.style.display = "none";
  } else if (password !== confirmPassword) {
    event.preventDefault();
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
}
