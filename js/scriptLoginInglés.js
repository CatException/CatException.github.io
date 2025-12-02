function go() {
  if (
    document.forms["formLogin"].password.value === "admin" &&
    document.forms["formLogin"].login.value === "admin"
  ) {
    location.assign("main.html");
  } else {
    document.getElementById("error").innerHTML =
      "Password or user incorrect";
  }
}