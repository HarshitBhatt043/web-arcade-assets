const subway = "popup_visited6";
let popupClosed = false;

function LoaderScript() {
  var script = document.createElement("script");
  script.src = "js/boot.js";
  script.onload = function () {
    AdditionalScript();
  };
  document.body.appendChild(script);
}

function AdditionalScript() {
  var script = document.createElement("script");
  script.src = "/js/main.js";
  document.body.appendChild(script);
}

function startTypingAnimation() {
  const title = document.getElementById("popup-title");
  const message = document.getElementById("popup-message");
  const titleText = "WAIT";
  const messageText = [
    "This is hard version of the game.",
    "No type of upgrades available.",
    "You will only get two boards per lvl.",
    "Do you want to see this announcement again?",
  ];

  const typingSpeed = 50;
  let currentIndex = 0;

  function typeNextLine() {
    if (currentIndex < messageText.length) {
      const line = document.createElement("div");
      message.appendChild(line);
      const lineText = messageText[currentIndex];
      let lineIndex = 0;

      function typeNextCharacter() {
        if (lineIndex < lineText.length) {
          line.textContent += lineText.charAt(lineIndex);
          lineIndex++;
          setTimeout(typeNextCharacter, typingSpeed);
        } else {
          currentIndex++;
          setTimeout(typeNextLine, typingSpeed);
        }
      }

      typeNextCharacter();
    }
  }

  typeText(title, titleText, 0, typingSpeed);
  setTimeout(typeNextLine, titleText.length * typingSpeed);
}

function typeText(element, text, index, speed) {
  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    setTimeout(function () {
      typeText(element, text, index, speed);
    }, speed);
  }
}

function closePopup() {
  const popup = document.getElementById("popup");
  const popupContent = document.querySelector(".popup-content");
  popupContent.style.animation =
    "popOut 0.5s ease forwards, fadeOut 0.5s ease forwards";
  setTimeout(function () {
    popup.style.display = "none";
    popupClosed = true;
    LoaderScript();
  }, 500);
}

document.getElementById("yesButton").addEventListener("click", function () {
  localStorage.setItem(subway, "yes");
  closePopup();
});

document.getElementById("noButton").addEventListener("click", function () {
  localStorage.setItem(subway, "no");
  closePopup();
});

document.getElementById("popup").addEventListener("click", function (event) {
  if (event.target === this) {
    closePopup();
  }
});

function checkLocalStorage() {
  const visited = localStorage.getItem(subway);
  if (visited !== "no") {
    const popup = document.getElementById("popup");
    const popupContent = document.querySelector(".popup-content");
    popup.style.display = "block";
    popupContent.style.animation =
      "popIn 0.5s ease forwards, fadeIn 0.5s ease forwards";
    startTypingAnimation();
  } else {
    LoaderScript();
  }
}

window.addEventListener("load", function () {
  checkLocalStorage();
});
