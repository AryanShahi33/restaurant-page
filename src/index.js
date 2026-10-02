import {header,content,bannerContainer,navigation,description,locationContainer,hours} from "./homePage.js"
import {menuContent,menu,starterContainer,saladContainer,mainCourseC,beverageContainer} from "./menuPage.js"
import {aboutContent,contactContainer} from "./aboutPage.js"
import "./styles.css";
console.log("test");
let body = document.body;
body.appendChild(content);
header.appendChild(navigation);
content.appendChild(bannerContainer);
content.appendChild(description);
content.appendChild(hours);
content.appendChild(locationContainer);

let menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", () => {
    if (document.querySelector(".content") != null);{
        document.querySelector(".content").remove();
    }
    body.appendChild(menuContent);
    menuContent.appendChild(menu);
    menu.appendChild(starterContainer);
    menu.appendChild(mainCourseC);
    menu.appendChild(saladContainer);
    menu.appendChild(beverageContainer);
});

let homeButton = document.querySelector("#home");
homeButton.addEventListener("click", () => {
    if (document.querySelector(".content") != null){
        document.querySelector(".content").remove();
    }
    body.appendChild(content);
    content.appendChild(bannerContainer);
    content.appendChild(description);
    content.appendChild(hours);
    content.appendChild(locationContainer);
})

let aboutButton = document.querySelector("#about");
aboutButton.addEventListener("click", () => {
    if (document.querySelector(".content") != null){
        document.querySelector(".content").remove();
    }
    body.appendChild(aboutContent);
    aboutContent.appendChild(contactContainer);
})
