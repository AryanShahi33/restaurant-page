let navigation = document.querySelector(".navigation");
let header = document.querySelector(".header");
let home = document.createElement("button");
home.textContent = "Home";
home.id = "home";
navigation.appendChild(home);
let menu = document.createElement("button");
menu.textContent = "Menu";
menu.id = "menu"
navigation.appendChild(menu);
let about = document.createElement("button");
about.textContent = "About";
about.id = "about";
header.appendChild(navigation);
navigation.appendChild(about);

let content = document.querySelector(".content");
let bannerContainer = document.createElement("div");
bannerContainer.classList = "banner";
let banner = document.createElement("h1");
banner.textContent = "XYZ Restaurant";
bannerContainer.appendChild(banner);
// content.appendChild(bannerContainer);
let description = document.createElement("div");
description.id = "description";
// content.appendChild(description);
let p = document.createElement("p");
p.textContent = "Welcome To XYZ Restaurant";
description.appendChild(p);
p = document.createElement("p");
p.textContent = "Authentic Home Made Fresh Food"
description.appendChild(p);

let hours = document.createElement("div");
hours.classList = "hours";
let openingHours = document.createElement("span");
openingHours.textContent = "Hours"
hours.appendChild(openingHours);
openingHours = document.createElement("span");
openingHours.textContent = "Sunday: 8am - 8pm"
hours.appendChild(openingHours);
openingHours = document.createElement("span");
openingHours.textContent = "Monday: 8am - 8pm"
hours.appendChild(openingHours);
openingHours = document.createElement("span");
openingHours.textContent = "Tuesday: 8am - 8pm"
hours.appendChild(openingHours);
openingHours = document.createElement("span");
openingHours.textContent = "Wednesday: 8am - 8pm"
hours.appendChild(openingHours);
openingHours = document.createElement("span");
openingHours.textContent = "Thursday: 8am - 8pm"
hours.appendChild(openingHours);
openingHours = document.createElement("span");
openingHours.textContent = "Friday: 8am - 8pm"
hours.appendChild(openingHours);
openingHours = document.createElement("span");
openingHours.textContent = "Saturday: 8am - 8pm"
hours.appendChild(openingHours);
// content.appendChild(hours);

let locationContainer = document.createElement("div");
locationContainer.classList = "location";
// content.appendChild(locationContainer);
let location = document.createElement("h2");
location.textContent = "Location";
locationContainer.appendChild(location);
let address = document.createElement("div");
address.textContent = "123 Rockford Hills";
locationContainer.appendChild(address);

export {content,bannerContainer,navigation,description,locationContainer,hours,header};