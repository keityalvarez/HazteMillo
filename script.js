let capital = 10000;
let nombre = "";
let sexo = "";

function empezarJuego() {
    nombre = document.getElementById("nombre").value || "Jugador";
    sexo = document.getElementById("sexo").value;
    document.getElementById("inicio").classList.add("hidden");
    document.getElementById("juego").classList.remove("hidden");
    document.getElementById("mensajeBienvenida").innerText = `¡Bienvenido, ${nombre}! Administra bien tu dinero para hacerte millonario.`;
}

function invertir(opcion, costo) {
    if (capital < costo) {
        agregarRegistro(`❌ No tienes suficiente dinero para ${opcion}.`);
        return;
    }

    capital -= costo;
    document.getElementById("capital").innerText = capital;
    
    let ganancia = Math.floor(Math.random() * 5000) + 2000;
    setTimeout(() => {
        capital += ganancia;
        document.getElementById("capital").innerText = capital;
        agregarRegistro(`✅ Tu inversión en ${opcion} generó una ganancia de $${ganancia}.`);
    }, 3000);

    agregarRegistro(`📉 Has invertido en ${opcion}. Esperando resultados...`);
}

function trabajar() {
    let ganancia = Math.floor(Math.random() * 2000) + 500;
    capital += ganancia;
    document.getElementById("capital").innerText = capital;
    agregarRegistro(`💼 Trabajaste y ganaste $${ganancia}.`);
}

function agregarRegistro(mensaje) {
    let registro = document.getElementById("registro");
    let nuevoItem = document.createElement("li");
    nuevoItem.innerText = mensaje;
    registro.appendChild(nuevoItem);
}
