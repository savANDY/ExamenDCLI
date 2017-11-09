var misUsuarios =["Mikel","Ane","Endika"];
var misContrasenas=["11","22","33"];
var misRoles=["usu","admin","usu"];

function mostrarLogin(x) {
  if (x == "si") {
  document.getElementById("miLogin").style.display = "block";
  document.getElementById("idUsuario").value = "";
  document.getElementById("idContrasena").value = "";

} else if (x == "no") {
  document.getElementById("miLogin").style.display = "none";
}
}

function soloDigitos(e) {
    var keychar;
    var teclanum;

    teclanum = e.which;
    keychar = String.fromCharCode(teclanum);

    if (keychar < "0" || keychar > "9") {
        return false;
    } else {
        return true;
    }
}

function comprobarUsuario() {
  var usuario = document.getElementById("idUsuario").value;
  var pass = document.getElementById("idContrasena").value;
  var existe = false;

  if (!(usuario == "") && !(pass == "")) {
  for (i = 0; i < misUsuarios.length; i++) {
    if (misUsuarios[i] == usuario) {
      if (misContrasenas[i] == pass) {
        existe = true;
        document.getElementById("miPerfil").innerHTML = usuario;
        mostrarLogin("no");
        mostrarNoticias();
        if (misRoles[i] == "admin") {
          mostrarInsertarNoticia();
        } else {
          document.getElementById("crearNoticia").style.display = "none";
        }
      }
    }
  }
  if (!existe) {
    alert("El usuario o la contraseña no existen");
  }
} else {
  alert("Los campos no pueden estar vacios");
}
}

function mostrarNoticias() {
  document.getElementById("elementos").style.display = "block";
}

function mostrarInsertarNoticia() {
  document.getElementById("crearNoticia").style.display = "block";
}

function aniadirNoticia() {
  var titulo = document.getElementById("idNoticiaNuevaTitulo").value;
  var noticia = document.getElementById("idNoticiaNuevaTexto").value;

  var div = document.createElement("div");
  div.className = "texto";
  div.innerHTML = "<h3>" + titulo + "</h3><p>" + noticia + "</p>";

document.getElementById("elementos").appendChild(div);
}
