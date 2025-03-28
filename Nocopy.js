"use strict";

// 1. Prevent Text Copying
document.addEventListener("copy", function (event) {
  event.preventDefault();
  alert("Copying is not allowed on this site! 🚫");
});

// 2. Detect Print Screen and Screenshots
document.addEventListener("keydown", function (event) {
  if (event.key === "PrintScreen") {
    alert("Screenshots are not allowed! 🚫");
    event.preventDefault();
  }
});

// 3. Prevent Screenshot Using Clipboard Monitoring
setInterval(() => {
  navigator.clipboard
    .readText()
    .then((text) => {
      if (text.length > 0) {
        alert("Unauthorized copying detected! 🚫");
      }
    })
    .catch((err) => {
      // Do nothing if clipboard access is blocked
    });
}, 2000);

// 4. Disable Right-Click (To prevent inspect and copying)
document.addEventListener("contextmenu", (event) => event.preventDefault());
