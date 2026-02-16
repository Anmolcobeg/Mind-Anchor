document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = {
    name: name,
    email: email,
    password: password // ⚠ learning only
  };

  localStorage.setItem("stufoUser", JSON.stringify(user));

  alert("Account created successfully!");
  window.location.href = "signin.html";
});