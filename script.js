let dinero = 10000;

document.getElementById("empezar").addEventListener("click", function() {
    let nombre = document.getElementById("nombre").value;
    let sexo = document.getElementById("sexo").value;
    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    document.getElementById("seleccion-personaje").style.display = "none";
    document.getElementById("juego").style.display = "block";
    
    let personajeImg = sexo === "hombre" ? "hombre.png" : "mujer.png";
    document.getElementById("personaje").src = personajeImg;

    document.getElementById("registro").innerHTML = `Bienvenido, ${nombre}. ¡Empieza a invertir!`;
});

function actualizarDinero() {
    document.getElementById("dinero").innerText = `$${dinero}`;
}

function registrarEvento(mensaje) {
    let registro = document.getElementById("registro");
    registro.innerHTML += `<p>${mensaje}</p>`;
}

function abrirTienda() {
    if (dinero >= 5000) {
        dinero -= 5000;
        actualizarDinero();
        registrarEvento("Has abierto una tienda. ¡Empieza a ganar clientes!");
    } else {
        registrarEvento("No tienes suficiente capital para abrir una tienda.");
    }
}

function invertirAcciones() {
    if (dinero >= 3000) {
        dinero -= 3000;
        let ganancia = Math.random() > 0.5 ? 5000 : -3000;
        dinero += ganancia;
        actualizarDinero();
        let resultado = ganancia > 0 ? "Ganaste dinero con las acciones." : "Perdiste dinero con las acciones.";
        registrarEvento(resultado);
    } else {
        registrarEvento("No tienes suficiente capital para invertir en acciones.");
    }
}

function crearStartup() {
    if (dinero >= 7000) {
        dinero -= 7000;
        let exito = Math.random() > 0.7;
        if (exito) {
            dinero += 20000;
            registrarEvento("Tu startup ha sido un éxito. ¡Ganaste $20,000!");
        } else {
            registrarEvento("Tu startup fracasó y perdiste la inversión.");
        }
        actualizarDinero();
    } else {
        registrarEvento("No tienes suficiente capital para crear una startup.");
    }
}
