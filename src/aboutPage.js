let body = document.body;
let aboutContent = document.createElement("div");
aboutContent.classList = "content";
let contactContainer = document.createElement("div");
contactContainer.classList = "contactContainer";
let contactHeader = document.createElement("h2");
contactHeader.textContent = "Contact Us";
let contact = document.createElement("p");
contact.textContent = "For bookings and reservations for any type of events contact us at"
contactContainer.appendChild(contact);
contact = document.createElement("p");
contact.textContent = "+977 000 111 0000"
contactContainer.appendChild(contact);

export {aboutContent,contactContainer};
