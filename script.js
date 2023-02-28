"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

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
// Smooth Scrolling ---> Learn More(Button)
btnScrollTo.addEventListener("click", function (e) {
  section1.scrollIntoView({ behavior: "smooth" });
});

///////////////////////////////////////////////
// Page Navigation
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

// Event Delegation
// 1. Add Event Listener to common parent
// 2. Determine what element originated the event
document.querySelector(".nav__links").addEventListener("click", function (e) {
  // console.log(e.target);
  e.preventDefault();
  // Matching Strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

///////////////////////////////////////////////
// Selecting Elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector(".header");
// const allSections = document.querySelectorAll(".section");
// console.log(allSections);

// document.getElementById("section--1");
// const allButtons = document.getElementsByTagName("button");
// console.log(allButtons);

// console.log(document.getElementsByClassName("btn"));

///////////////////////////////////////////////
// Creating and Inserting Elements
// const message = document.createElement("div");
// message.classList.add("cookie-message");
// message.textContent = `We use cookies for improved functionality and analytics.`;
// message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it !!</button>`;

// header.prepend(message);
// header.append(message); // Here we are not able to see the message at both places in header. We can just see the appended one and not the prepended one.
// This is because it moves the element and not copy it.To do so we need to first clone as shown :-

// header.append(message.cloneNode(true)); // Now we can see the msg at both places

// Also we have before and after
// header.before(message);
// header.after(message);

///////////////////////////////////////////////
// Deleting Elements
// document
//   .querySelector(".btn--close-cookie")
//   .addEventListener("click", function () {
//     message.remove();
//   });

///////////////////////////////////////////////
// Styles
// message.style.backgroundColor = "#37383d";
// message.style.width = "120%";

// console.log(message.style.width); // we get value bcoz this is the inline style that we added
// console.log(message.style.color); // we get nothing bcoz this is either the css in other file or there is no such property

// console.log(getComputedStyle(message).color); //here using this function we can get he styles

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 40 + "px";

// Custom css property
// document.documentElement.style.setProperty("--color-primary", "orangered");

///////////////////////////////////////////////
// Attributess
// const logo = document.querySelector(".nav__logo");
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// logo.alt = "Beautiful Minimalist Logo";

// Non-standard attributes
// console.log(logo.designer); //undefined
// console.log(logo.getAttribute("designer")); //abhi
// logo.setAttribute("company", "Bankist");

///////////////////////////////////////////////
// Classes
// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();

///////////////////////////////////////////////
// // Smooth Scrolling
// const btnScrollTo = document.querySelector(".btn--scroll-to");
// const section1 = document.querySelector("#section--1");

// btnScrollTo.addEventListener("click", function (e) {
// const s1coords = section1.getBoundingClientRect();
// console.log(s1coords);

// console.log(e.target.getBoundingClientRect());

// console.log("Current Scroll (X/Y) ", window.pageXOffset, window.pageYOffset);

// console.log(
//   "height/width viewport",
//   document.documentElement.clientHeight,
//   document.documentElement.clientWidth
// );

// Scroll
// window.scrollTo(
//   s1coords.left + window.pageXOffset,
//   s1coords.top + window.pageYOffset
// );

// // Smooth
// window.scrollTo({
//   left: s1coords.left + window.pageXOffset,
//   top: s1coords.top + window.pageYOffset,
//   behavior: "smooth",
// });

//   section1.scrollIntoView({ behavior: "smooth" });
// });

///////////////////////////////////////////////
// Events types and Event Handlers
// const h1 = document.querySelector("h1");

// const alertH1 = function (e) {
//   alert("AddEventListener ");
// };

// h1.addEventListener("mouseenter", alertH1);

// setTimeout(() => {
//   h1.removeEventListener("mouseenter", alertH1);
// }, 3000);

// Old Way
// h1.onmouseenter = function (e) {
//   alert("OnMouseEnter ");
// };

///////////////////////////////////////////////
//
