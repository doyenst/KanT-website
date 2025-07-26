import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { firebaseConfig } from "./firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const messagesRef = ref(db, "messages");

document.getElementById("msgInput").addEventListener("keydown", e => {
  if (e.key === "Enter") sendMessage();
});

window.sendMessage = function() {
  const input = document.getElementById("msgInput");
  if (input.value.trim() !== "") {
    push(messagesRef, input.value);
    input.value = "";
  }
};

onChildAdded(messagesRef, data => {
  const div = document.createElement("div");
  div.textContent = data.val();
  document.getElementById("messages").appendChild(div);
});