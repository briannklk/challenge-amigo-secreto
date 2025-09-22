// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

// function para ingresar nombres
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.ariaValueMax.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre");
        return;
    
    }
}
amigos.push(nombre);
input.value = "";
input.focus();
actualizarLista();

//mostrar lista (lo mas dificil) 
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        const li = document.getElementById("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
} 

// sorteo del amigo secereto al azar
