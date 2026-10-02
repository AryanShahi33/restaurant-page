
let body = document.body;
let menu = document.createElement("div");
menu.classList = "menu";
let menuContent = document.createElement("div");
menuContent.classList = "content";
let starterContainer = document.createElement("div");
starterContainer.classList = "starterContainer";
let starterHeader = document.createElement("h2");
starterHeader.textContent = "Starters";
starterContainer.appendChild(starterHeader);
let starters = document.createElement("p");
starters.textContent = "Garlic Bread";
starters = document.createElement("p");
starters.textContent = "Mozzarella Sticks";
starterContainer.appendChild(starters);
starters = document.createElement("p");
starters.textContent = "Stuffed Mushrooms";
starterContainer.appendChild(starters);

let saladContainer = document.createElement("div");
saladContainer.classList = "saladContainer";
let saladHeader = document.createElement("h2");
saladHeader.textContent = "Salads";
saladContainer.appendChild(saladHeader);
let salads = document.createElement("p");
salads.textContent = "Greek Salad";
saladContainer.appendChild(salads);
salads = document.createElement("p");
salads.textContent = "Caesar Salad"
saladContainer.appendChild(salads);
salads = document.createElement("p");
salads.textContent = "Caprese Salad"
saladContainer.appendChild(salads);

let mainCourseC = document.createElement("div");
mainCourseC.classList = "mainCourseC";
let mainCourseH = document.createElement("h2");
mainCourseH.textContent = "Main Course";
mainCourseC.appendChild(mainCourseH);
let mainCourse = document.createElement("p");
mainCourse.textContent = "Grilled Salmon";
mainCourseC.appendChild(mainCourse);
mainCourse = document.createElement("p");
mainCourse.textContent = "Chicken Parmesan";
mainCourseC.appendChild(mainCourse);
mainCourse = document.createElement("p");
mainCourse.textContent = "Vegetable Stir Fry";
mainCourseC.appendChild(mainCourse);
mainCourse = document.createElement("p");
mainCourse.textContent = "Buff Momo";
mainCourseC.appendChild(mainCourse);

let beverageContainer = document.createElement("div");
beverageContainer.classList = "beverageContainer";
let beverageHeader = document.createElement("h2");
beverageHeader.textContent = "Beverages";
beverageContainer.appendChild(beverageHeader);
let beverage = document.createElement("p");
beverage.textContent = "Milk Tea";
beverageContainer.appendChild(beverage);
beverage = document.createElement("p");
beverage.textContent = "Iced Latte";
beverageContainer.appendChild(beverage);
beverage = document.createElement("p");
beverage.textContent = "Oreo Milkshake";
beverageContainer.appendChild(beverage);
beverage = document.createElement("p");
beverage.textContent = "Lemon Tea";
beverageContainer.appendChild(beverage);

export {menuContent,menu,starterContainer,saladContainer,mainCourseC,beverageContainer};