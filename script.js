
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
