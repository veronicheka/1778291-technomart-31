// Feedback Popup

const feedbackLink = document.querySelector(".button-contact");
const feedbackPopup = document.querySelector(".modal-feedback");
const feedbackClose = feedbackPopup.querySelector(".modal-close");
const feedbackForm = feedbackPopup.querySelector(".modal-form");
const feedbackName = feedbackPopup.querySelector(".modal-name");
const feedbackEmail = feedbackPopup.querySelector(".modal-email");
const feedbackMessage = feedbackPopup.querySelector(".modal-text");


let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}


feedbackLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-opened");

if (storage) {
    feedbackName.value = storage;
    feedbackEmail.focus();
} else {
  feedbackName.focus();
  }
});

  feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-opened");
    feedbackPopup.classList.remove("modal-error");
  });

  feedbackForm.addEventListener("submit", function (evt) {
    if (!feedbackName.value || !feedbackEmail.value || !feedbackMessage.value) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");
} else {
    if (isStorageSupport) {
    localStorage.setItem("login", feedbackName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (feedbackPopup.classList.contains("modal-opened")) {
        evt.preventDefault();
        feedbackPopup.classList.remove("modal-opened");
      }
    }
  });