// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// function de agregar nombres
function agregarAmigo() {
  const input = document.getElementById("amigo");
  if (!input) { console.error("No existe amigo en el DOM"); return; }

  const nombre = input.value.trim();
  if (nombre === "") {
    alert("Por favor, inserte un nombre");
    return;
  }

  amigos.push(nombre);
  input.value = "";
  input.focus();
  actualizarLista();
  console.log("amigos:", amigos);
}

