const curiosidades = {
    "renacimiento": "El Renacimiento fue una época en la que se redescubrieron las artes clásicas de Grecia y Roma. Artistas como Leonardo da Vinci y Miguel Ángel realizaron obras que aún son consideradas las más grandes de la historia del arte.",
    "barroco": "El Barroco se caracterizó por el uso de la luz y sombra para crear drama, profundidad y movimiento. Caravaggio fue uno de los artistas más representativos de este estilo.",
    "impresionismo": "El Impresionismo cambió la forma de ver el arte al captar momentos fugaces y la luz natural. Artistas como Claude Monet y Edgar Degas rompieron las reglas tradicionales de la pintura."
};

function mostrarCuriosidades(periodo) {
    document.getElementById("curiosidadTexto").innerText = curiosidades[periodo];
    document.getElementById("curiosidad").style.display = "block";
}

function cerrarCuriosidad() {
    document.getElementById("curiosidad").style.display = "none";
}