// import {navigation,description,location} from "./homePage.js"
import {menu,starterContainer,saladContainer,mainCourseC,beverageContainer} from "./menuPage.js"
import "./styles.css";
console.log("test");
let menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", () => {
    document.querySelector(".content").remove();
});
