let textarea = document.getElementById("textarea");
let form = document.getElementById("form");
let button = document.getElementById("button");
let loadingMessage = document.getElementById("loading");
let errorMessage = document.getElementById("error");
let successMessage = document.getElementById("success");

form.onsubmit = handleFormSubmit;
textarea.oninput = handleTextareaChange;
async function handleFormSubmit(e) {
  e.preventDefault();
  disable(textarea);
  disable(button);
  show(loadingMessage);
  hide(errorMessage);
  try {
    await submitForm(textarea.value);
    show(successMessage);
    hide(form);
  } catch (error) {
    show(errorMessage);
    errorMessage.textContent = error.message;
  } finally {
    hide(loadingMessage);
    enable(textarea);
    enable(button);
  }
}
function handleTextareaChange() {
  hide(errorMessage);
  if (textarea.value.trim().length === 0) {
    disable(button);
  } else {
    enable(button);
  }
}
function show(e) {
  e.style.display = "";
}
function hide(el) {
  el.style.display = "none";
}
function enable(el) {
  el.disabled = false;
}
function disable(el) {
  el.disabled = true;
}

function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === "pabna") {
        resolve();
      } else {
        reject(new Error("worng anser ! try again"));
      }
    }, 3000);
  });
}
