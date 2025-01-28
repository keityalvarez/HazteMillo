let capital = 10000;
let nombre = "";
let genero = "";
let inversiones = [];

function iniciarJuego() {
    nombre = document.getElementById("nombre").value;
    genero = document.getElementById("genero").value;
    document.getElementById("titulo").innerText = `Hola ${nombre}, empieza tu camino al éxito`;
    document.getElementById("inicio").style.display = "none";
    document.getElementById("juego").style.display = "block";
}

function invertir(tipo, costo) {
    if (capital >= costo) {
        capital -= costo;
        inversiones.push(tipo);
        document.getElementById("capital").innerText = `$${capital}`;
        document.getElementById("mensaje").innerText = `Has invertido en ${tipo}. Espera a ver los resultados.`;
    } else {
        document.getElementById("mensaje").innerText = "No tienes suficiente capital para esta inversión.";
    }
}

function siguienteTurno() {
    let evento = generarEvento();
    capital += evento.ganancia;
    document.getElementById("capital").innerText = `$${capital}`;
    document.getElementById("eventos").innerText = evento.mensaje;
}

function generarEvento() {
    const eventos = [
        { mensaje: "¡Tu negocio está en auge! Ganas $2,000", ganancia: 2000 },
        { mensaje: "El mercado cayó. Pierdes $1,500", ganancia: -1500 },
        { mensaje: "Recibes una inversión sorpresa. Ganas $3,000", ganancia: 3000 },
        { mensaje: "Tienes gastos inesperados. Pierdes $1,000", ganancia: -1000 }
    ];
    return eventos[Math.floor(Math.random() * eventos.length)];
}
