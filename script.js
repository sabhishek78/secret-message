import { toggleHiddenElement, changeToFunkyColor } from "../modules/dom-functions.js";

let buttonElement = document.getElementById('secret-button');
let pElement = document.getElementById('p-element');

buttonElement.addEventListener("click", () => {
    toggleHiddenElement(pElement);
    changeToFunkyColor(buttonElement);
});