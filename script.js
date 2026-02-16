document.getElementById("signinForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const storedUser = JSON.parse(localStorage.getItem("stufoUser"));

  if (!storedUser) {
    alert("No account found. Please sign up first.");
    return;
  }

  if (email === storedUser.email && password === storedUser.password) {
    alert("Welcome back, " + storedUser.name);
    window.location.href = "focus.html";
  } else {
    alert("Invalid email or password");
  }
});

