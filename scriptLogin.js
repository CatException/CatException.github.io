function go() {
  if (
    document.forms["formLogin"].password.value === "admin" &&
    document.forms["formLogin"].login.value === "admin"
  ) {
    location.assign("mainEspañol.html");
  } else {
    document.getElementById("error").innerHTML =
      "Contraseña o usuario incorrecto";
  }
}
