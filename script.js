stargame()// Variables globales
let playerName = "";
let playerGender = "";
let capital = 10000;

// Función para iniciar el juego después de personalizar
function startGame() {
    playerName = document.getElementById("name").value;
    playerGender = document.getElementById("gender").value;

    if (playerName === "") {
        alert("Por favor, escribe tu nombre.");
        return;
    }

    // Ocultar pantalla de personalización y mostrar el juego
    document.getElementById("customization-screen").style.display = "none";
    document.getElementById("game-container").style.display = "block";

    // Mostrar mensaje de bienvenida con el nombre del jugador
    document.getElementById("welcome-message").innerHTML = `¡Bienvenido, ${playerName}!`;

    // Actualizar la visualización del capital
    document.getElementById("capital").innerText = capital;
}

// Función para abrir una tienda
function openStore() {
    if (capital >= 5000) {
        capital -= 5000;
        logAction("Has abierto una tienda. ¡Empieza a ganar clientes!");
    } else {
        logAction("No tienes suficiente capital para esta acción.");
    }
    updateCapital();
}

// Función para invertir en acciones
function invest() {
    if (capital >= 3000) {
        capital -= 3000;
        logAction("Has invertido en acciones. Espera el rendimiento.");
    } else {
        logAction("No tienes suficiente capital para esta acción.");
    }
    updateCapital();
}

// Función para crear una startup
function startStartup() {
    if (capital >= 7000) {
        capital -= 7000;
        logAction("Has creado una startup. ¡Atrae inversionistas!");
    } else {
        logAction("No tienes suficiente capital para esta acción.");
    }
    updateCapital();
}

// Función para actualizar el capital en pantalla
function updateCapital() {
    document.getElementById("capital").innerText = capital;
}

// Función para registrar las acciones en el juego
function logAction(message) {
    let logDiv = document.getElementById("log");
    let newEntry = document.createElement("p");
    newEntry.innerText = message;
    logDiv.appendChild(newEntry);
}
let capital = 10000;

function chooseBusiness(type) {
    let cost = 0;
    let message = '';

    if (type === 'tienda') {
        cost = 5000;
        message = 'Has abierto una tienda. ¡Empieza a ganar clientes!';
    } else if (type === 'inversiones') {
        cost = 3000;
        message = 'Has invertido en acciones. ¡Esperemos que suban!';
    } else if (type === 'startup') {
        cost = 7000;
        message = 'Has iniciado una startup. ¡Buena suerte con tu idea!';
    }

    if (capital >= cost) {
        capital -= cost;
        updateCapital();
        addLog(message);
    } else {
        addLog('No tienes suficiente capital para esta acción.');
    }
}

function updateCapital() {
    document.getElementById('capital').innerText = `$${capital.toLocaleString()}`;
}

function addLog(message) {
    const logMessages = document.getElementById('log-messages');
    const newLog = document.createElement('li');
    newLog.textContent = message;
    logMessages.appendChild(newLog);
}
