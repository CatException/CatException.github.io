function go() {
  if (
    document.forms["formLogin"].password.value === "admin" &&
    document.forms["formLogin"].login.value === "admin"
  ) {
    location.assign("main.html");
  } else {
    alert("Porfavor ingrese, nombre de usuario y contraseña correcta");
  }
}
