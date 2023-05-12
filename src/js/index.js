// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";

const insureMenuElement = document.getElementById("menu-insure");
const projectInsureElement = document.getElementById("project-insure");

const easybankMenuElement = document.getElementById("menu-easybank");
const projectEasybankElement = document.getElementById("project-easybank");

const typemasterMenuElement = document.getElementById("menu-typemaster");
const projectTypemasterElement = document.getElementById("project-typemaster");

const clipboardMenuElement = document.getElementById("menu-clipboard");
const projectClipboardElement = document.getElementById("project-clipboard");

function handleInsureProject() {
  projectInsureElement.classList.remove("hide");
  projectEasybankElement.classList.add("hide");
  projectTypemasterElement.classList.add("hide");
  projectClipboardElement.classList.add("hide");
}

function handleEasybankProject() {
  projectEasybankElement.classList.remove("hide");
  projectInsureElement.classList.add("hide");
  projectTypemasterElement.classList.add("hide");
  projectClipboardElement.classList.add("hide");
}

function handleTypemasterProject() {
  projectTypemasterElement.classList.remove("hide");
}

function handleClipboardProject() {
  projectClipboardElement.classList.remove("hide");
}

insureMenuElement.addEventListener("click", handleInsureProject);

easybankMenuElement.addEventListener("click", handleEasybankProject);

typemasterMenuElement.addEventListener("click", handleTypemasterProject);

clipboardMenuElement.addEventListener("click", handleClipboardProject);
