// Continue → Show password popup
document.getElementById("continue-btn").onclick = () => {
  document.querySelector(".welcome-box").style.display = "none";
  document.querySelector(".floating-container").style.display = "none";
  document.getElementById("pw-overlay").classList.remove("hidden");
};

// Password check
document.getElementById("pw-btn").onclick = () => {
  const pw = document.getElementById("pw-input").value;
  const msg = document.getElementById("pw-msg");

  if (pw === "nailla25") {
    document.getElementById("pw-overlay").style.display = "none";
    document.getElementById("site").hidden = false;

    // Start floating emojis after password is correct
    startFloatingEmojis();
  } else {
    msg.textContent = "Incorrect password 💔";
    msg.style.color = "red";
  }
};

// 🎈 Floating emojis logic
function createEmoji(type) {
  const emoji = document.createElement("div");
  emoji.className = "float-item";
  emoji.textContent = type === "heart" ? "❤" : "🧸";

  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.top = "110%";
  emoji.style.animationDuration = 4 + Math.random() * 3 + "s"; // 4–7s

  document.body.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 7000);
}

function startFloatingEmojis() {
  setInterval(() => createEmoji("heart"), 400);  // Every 0.2s
  setInterval(() => createEmoji("teddy"), 900);  // Every 0.3s
}
