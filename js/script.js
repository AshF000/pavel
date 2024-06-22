let menu = document.getElementById("menuUl");
let body = document.body;

menu.style.maxHeight = "0px";

function toggleMenu() {
  if (menu.style.maxHeight == "0px") {
    menu.style.maxHeight = "100vh";
    body.style.overflow = "hidden";
  } else if (menu.style.maxHeight == "100vh") {
    menu.style.maxHeight = "0px";
    body.style.overflow = "auto";
  }
}

// DARK MODE TOGGLE FUNCTIONS //

// SELECTORS
const darkToggleBtn = document.querySelector("#toggle-a");

// STATE
const theme = localStorage.getItem("theme");
const toggleImg = localStorage.getItem("toggleImg");

// ON MOUNT
theme && document.body.classList.add(theme);
toggleImg && (darkToggleBtn.src = "images/light.png");

// HANDLERSX
handleDarkToggle = () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark-mode");
    darkToggleBtn.src = "images/light.png";
    localStorage.setItem("toggleImg", "dark.png");
  } else {
    localStorage.removeItem("theme");
    darkToggleBtn.src = "images/dark.png";
    localStorage.removeItem("toggleImg");
  }
};

// EVENT
darkToggleBtn.addEventListener("click", handleDarkToggle);
