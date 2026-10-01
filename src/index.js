import {navigation,description,location} from "./homePage.js"
import "./styles.css";
console.log("test");
let menu = document.querySelector("#menu");
menu.addEventListener("click", () => {
    document.querySelector(".content").remove();
});
