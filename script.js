
// Firebase-Konfiguration
const firebaseConfig = {
  apiKey: "AIzaSyD7pz_Eh0IbmEdoR9h9Z5DFRn3uImwrDjE",
  authDomain: "authenticationchata.firebaseapp.com",
  projectId: "authenticationchata",
  storageBucket: "authenticationchata.appspot.com",
  messagingSenderId: "1007787760984",
  appId: "1:1007787760984:web:5039a1ae973edbc19b192d",
};

// Firebase initialisieren
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function login() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).then(result => {
    window.location.href = "chat.html";
  });
}

function logout() {
  auth.signOut().then(() => {
    window.location.href = "index.html";
  });
}

function sendMessage() {
  const input = document.getElementById("message-input");
  const text = input.value;
  if (text.trim()) {
    const messages = document.getElementById("messages");
    const div = document.createElement("div");
    div.textContent = text;
    div.classList.add("message", "sent");
    messages.appendChild(div);
    input.value = "";
  }
}
