document.getElementById('chatForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir recargar la página
    sendMessage();
});

function sendMessage() {
    const inputElem = document.getElementById('inputMessage');
    const messageAreaElem = document.getElementById('messageArea');

    const messageText = inputElem.value;

    if (messageText) {
        const messageElem = document.createElement('div');
        messageElem.textContent = messageText;
        messageAreaElem.appendChild(messageElem);

        inputElem.value = '';  // Limpiar el campo de entrada
    }
}

function clearChat() {
    const chatBox = document.getElementById('messageArea');
    chatBox.innerHTML = '';
}
