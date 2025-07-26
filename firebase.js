import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const messagesRef = collection(db, "messages");
const messagesDiv = document.getElementById("messages");
const usernameInput = document.getElementById("username");
const messageInput = document.getElementById("messageInput");

onSnapshot(query(messagesRef, orderBy("timestamp")), (snapshot) => {
  messagesDiv.innerHTML = "";
  snapshot.forEach(doc => {
    const data = doc.data();
    const msg = document.createElement("div");
    msg.textContent = `${data.sender}: ${data.message}`;
    messagesDiv.appendChild(msg);
  });
});

window.sendMessage = async () => {
  const sender = usernameInput.value.trim();
  const message = messageInput.value.trim();
  if (!sender || !message) return;
  await addDoc(messagesRef, {
    sender,
    message,
    timestamp: serverTimestamp()
  });
  messageInput.value = "";
};
