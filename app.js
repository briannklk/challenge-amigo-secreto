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

// muestra la lista (dificil)
function actualizarLista() {
  let lista = document.getElementById("listaAmigos");

  if (!lista) {
    const input = document.getElementById('amigo');
    if (!input) { console.error("No puedo crear la lista porque faltan amigos"); return; }
    lista = document.createElement('ul');
    lista.id = "listaAmigos";
    input.parentNode.insertBefore(lista, input.nextSibling);
    console.log(`Se creó <ul id="listaAmigos"> automáticamente`);
  }

  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// sorteo de los nombre ingfresados
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay nombres en la lista!");
    return;
  }
  const indice = Math.floor(Math.random() * amigos.length);
  const ganador = amigos[indice];
  const res = document.getElementById("resultado");
  if (res) res.textContent = `El amigo secreto es... ${ganador}`;
  else console.log("Resultado:", ganador);
}