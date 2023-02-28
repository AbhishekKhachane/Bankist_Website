"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

const nav = document.querySelector(".nav");

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
// Tabbed Component

// BAD PRACTICE
// tabs.forEach((t) => {
//   t.addEventListener("click", function () {
//     console.log("object");
//   });
// });

// GOOD PRACTICE  --> Add addEventListener to common parent
tabsContainer.addEventListener("click", function (e) {
  // Matching Strategy
  const clicked = e.target.closest(".operations__tab");

  // Guard Clause
  if (!clicked) {
    return;
  }

  // Remove active classes
  tabs.forEach((t) => {
    t.classList.remove("operations__tab--active");
  });

  tabsContent.forEach((c) => {
    c.classList.remove("operations__content--active");
  });

  // Activate Tab
  clicked.classList.add("operations__tab--active");

  // Activate Content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

///////////////////////////////////////////////
// Menu Fade Animation
const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};

// passing argument to handler
nav.addEventListener("mouseover", handleHover.bind(0.5));

nav.addEventListener("mouseout", handleHover.bind(1));

///////////////////////////////////////////////
// Sticky
const initialCoords = section1.getBoundingClientRect();
window.addEventListener("scroll", function () {
  if (window.scrollY > initialCoords.top) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
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
// Traversing DOM
// const h1 = document.querySelector("h1");

// // Going Downwards : child
// // querySelector finds child
// console.log(h1.querySelectorAll(".highlight"));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = "white";
// h1.lastElementChild.style.color = "orangered";

// // Going Upwards : parent
// // closest finds parent
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest(".header").style.background = "var(--gradient-secondary)";
// h1.closest("h1").style.background = "var(--gradient-primary)";

// // Going Sideways : siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
