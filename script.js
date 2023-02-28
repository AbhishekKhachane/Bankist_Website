"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);
btnsOpenModal.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

///////////////////////////////////////////////
// Selecting Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections);

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

console.log(document.getElementsByClassName("btn"));

///////////////////////////////////////////////
// Creating and Inserting Elements
const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = `We use cookies for improved functionality and analytics.`;
message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it !!</button>`;

// header.prepend(message);
header.append(message); // Here we are not able to see the message at both places in header. We can just see the appended one and not the prepended one.
// This is because it moves the element and not copy it.To do so we need to first clone as shown :-

// header.append(message.cloneNode(true)); // Now we can see the msg at both places

// Also we have before and after
// header.before(message);
// header.after(message);

///////////////////////////////////////////////
// Deleting Elements
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
  });

///////////////////////////////////////////////
// Styles
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

console.log(message.style.width); // we get value bcoz this is the inline style that we added
console.log(message.style.color); // we get nothing bcoz this is either the css in other file or there is no such property

console.log(getComputedStyle(message).color); //here using this function we can get he styles

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + "px";

// Custom css property
document.documentElement.style.setProperty("--color-primary", "orangered");

///////////////////////////////////////////////
// Attributess
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = "Beautiful Minimalist Logo";

// Non-standard attributes
console.log(logo.designer); //undefined
console.log(logo.getAttribute("designer")); //abhi
logo.setAttribute("company", "Bankist");

///////////////////////////////////////////////
// Classes
// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();
