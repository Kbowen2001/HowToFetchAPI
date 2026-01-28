fetch("https://iskarr.github.io/austindonovan.github.io/api/business.json")
.then((response) => response.json())
.then((jsObject) => {
console.log(jsObject);
});

const URL =
"https://iskarr.github.io/austindonovan.github.io/api/business.json";

let cards = document.querySelector("div.cards");
let para = document.createElement("p");

fetch(URL)
.then((response) => response.json())
.then((jsObject) => {
let business = jsObject.business;

for (let i = 0; i < business.length; i++) {
// console.log(business[i].name);
// You must include your javascript below to display the following information:
// 1. business names, 2.business image,
// 3. business locations, 4. business descriptions
// Here is an example for the name to start you off.

// Creates card and places business name in h2 element
let card = document.createElement("section");
// Adds a classname to the section element above
card.className = "card";

// Create the image location, you can look up how to add image using javascript
let img = document.createElement("img");
img.src = business[i].imageurl;
img.alt = business[i].name;
card.appendChild(img);

let h2 = document.createElement("h2");
h2.textContent = business[i].name;
card.appendChild(h2);

// Include a business location
let location = document.createElement("p");
location.textContent = business[i].location;
card.appendChild(location);

// Include a business Description
let description = document.createElement("p");
description.textContent = business[i].description;
card.appendChild(description);

document.querySelector("div.cards").appendChild(card);
}
});