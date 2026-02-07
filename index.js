const firebaseConfig = {
    apiKey: "AIzaSyDSr-Kaf0KlT9gXy69zewb_FHPoTVQQrN8",
    authDomain: "radio-del-mencho-y-graci-ce687.firebaseapp.com",
    databaseURL: "https://radio-del-mencho-y-graci-ce687-default-rtdb.firebaseio.com",
    projectId: "radio-del-mencho-y-graci-ce687",
    storageBucket: "radio-del-mencho-y-graci-ce687.firebasestorage.app",
    messagingSenderId: "187554749831",
    appId: "1:187554749831:web:de0167c117ea8d51ca4722"
};

if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig); }
const db = firebase.database();

const chatForm = document.getElementById('chatForm');
const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');
let nick = prompt("Ingresa tu nombre para el chat:") || "Oyente";

chatForm.onsubmit = (e) => {
    e.preventDefault();
    const text = messageInput.value.trim();
    if(text){
        db.ref('messages').push({ user: nick, text: text });
        messageInput.value = '';
    }
};

db.ref('messages').limitToLast(20).on('child_added', (snap) => {
    const m = snap.val();
    const d = document.createElement('div');
    d.style.marginBottom = "8px";
    d.innerHTML = `<span style="color:#4e6bff; font-weight:bold;">${m.user}:</span> ${m.text}`;
    chatMessages.appendChild(d);
    chatMessages.scrollTop = chatMessages.scrollHeight;
});
let currentStep = 0;
const slideTrack = document.getElementById('adCarousel');
const totalSlides = document.querySelectorAll('.ad-slide.collage').length;

function autoScroll() {
    currentStep++;
    if (currentStep >= totalSlides) {
        currentStep = 0; // Vuelve al inicio
    }
    // Mueve el carrusel hacia la izquierda
    slideTrack.style.transform = `translateX(-${currentStep * 100}%)`;
}

// Inicia el carrusel
setInterval(autoScroll, 4000);