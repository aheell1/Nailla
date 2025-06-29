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
  } else {
    msg.textContent = "Incorrect password 💔";
    msg.style.color = "red";
  }
};
