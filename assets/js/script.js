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

function comenzar_chat() {

    const intro = document.getElementById('instruction');
    intro.style.display = 'none'; 
    const chat = document.getElementById('chat_init');
    chat.style.display = 'flex'; 
    clearChat();
    
}

function comenzar_chat2() {
    comenzar_chat();
    var foto_contacto = document.getElementById('foto_perfil');
    foto_contacto.src = 'assets/imgs/contacto 2.webp';
    var paragraph = document.getElementById('estado');
    paragraph.innerText = 'La intuición no existe, es conocimiento';
}

function comenzar_chat3() {
    comenzar_chat();
    var foto_contacto = document.getElementById('foto_perfil');
    foto_contacto.src = 'assets/imgs/contacto 3.webp';
    var paragraph = document.getElementById('estado');
    paragraph.innerText = '3231 123412535345 00101010110101';
}

function comenzar_chat4() {
    comenzar_chat();
    var foto_contacto = document.getElementById('foto_perfil');
    foto_contacto.src = 'assets/imgs/contacto 4.webp';
    var paragraph = document.getElementById('estado');
    paragraph.innerText = 'carpe diem';
}

function comenzar_chat5() {
    comenzar_chat();
    var foto_contacto = document.getElementById('foto_perfil');
    foto_contacto.src = 'assets/imgs/contacto 5.webp';
    var paragraph = document.getElementById('estado');
    paragraph.innerText = 'Siempre he sabido';
}

function comenzar_chat6() {
    comenzar_chat();
    var foto_contacto = document.getElementById('foto_perfil');
    foto_contacto.src = 'assets/imgs/contacto 6.webp';
    var paragraph = document.getElementById('estado');
    paragraph.innerText = 'Puede que yo haya sido el último, pero tú serás la primera';
}

function comenzar_chat7() {
    comenzar_chat();
    var foto_contacto = document.getElementById('foto_perfil');
    foto_contacto.src = 'assets/imgs/contacto 7.webp';
    var paragraph = document.getElementById('estado');
    paragraph.innerText = 'Somos solo visitantes';
}

function comenzar_chat8() {
    comenzar_chat();
    var foto_contacto = document.getElementById('foto_perfil');
    foto_contacto.src = 'assets/imgs/contacto 8.webp';
    var paragraph = document.getElementById('estado');
    paragraph.innerText = 'Todo es Uno, la paradoja de las paradojas';
}

function comenzar_chat9() {
    comenzar_chat();
    var foto_contacto = document.getElementById('foto_perfil');
    foto_contacto.src = 'assets/imgs/contacto 9.webp';
    var paragraph = document.getElementById('estado');
    paragraph.innerText = 'Open To Work';
}