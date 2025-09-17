// 'use strict';

// // element toggle function
// const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// // sidebar variables
// const sidebar = document.querySelector("[data-sidebar]");
// const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// // sidebar toggle functionality for mobile
// sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// // custom select variables
// const select = document.querySelector("[data-select]");
// const selectItems = document.querySelectorAll("[data-select-item]");
// const selectValue = document.querySelector("[data-select-value]");
// const filterBtn = document.querySelectorAll("[data-filter-btn]");

// select.addEventListener("click", function () { elementToggleFunc(this); });

// // add event in all select items
// for (let i = 0; i < selectItems.length; i++) {
//   selectItems[i].addEventListener("click", function () {

//     let selectedValue = this.innerText.toLowerCase();
//     selectValue.innerText = this.innerText;
//     elementToggleFunc(select);
//     filterFunc(selectedValue);

//   });
// }

// // filter variables
// const filterItems = document.querySelectorAll("[data-filter-item]");

// const filterFunc = function (selectedValue) {

//   for (let i = 0; i < filterItems.length; i++) {

//     if (selectedValue === "all") {
//       filterItems[i].classList.add("active");
//     } else if (selectedValue === filterItems[i].dataset.category) {
//       filterItems[i].classList.add("active");
//     } else {
//       filterItems[i].classList.remove("active");
//     }

//   }

// }

// // add event in all filter button items for large screen
// let lastClickedBtn = filterBtn[0];

// for (let i = 0; i < filterBtn.length; i++) {

//   filterBtn[i].addEventListener("click", function () {

//     let selectedValue = this.innerText.toLowerCase();
//     selectValue.innerText = this.innerText;
//     filterFunc(selectedValue);

//     lastClickedBtn.classList.remove("active");
//     this.classList.add("active");
//     lastClickedBtn = this;

//   });

// }

// // contact form variables
// const form = document.querySelector("[data-form]");
// const formInputs = document.querySelectorAll("[data-form-input]");
// const formBtn = document.querySelector("[data-form-btn]");

// // add event to all form input field
// for (let i = 0; i < formInputs.length; i++) {
//   formInputs[i].addEventListener("input", function () {

//     // check form validation
//     if (form.checkValidity()) {
//       formBtn.removeAttribute("disabled");
//     } else {
//       formBtn.setAttribute("disabled", "");
//     }

//   });
// }

// // page navigation variables
// const navigationLinks = document.querySelectorAll("[data-nav-link]");
// const pages = document.querySelectorAll("[data-page]");

// for (let i = 0; i < navigationLinks.length; i++) {
//   navigationLinks[i].addEventListener("click", function () {
//     const targetPage = this.textContent.trim().toLowerCase(); // امنع الفراغات وحول الحروف لصغيره

//     for (let j = 0; j < pages.length; j++) { // خلي الحلقة الداخلية تستخدم j مش i
//       if (pages[j].dataset.page.toLowerCase() === targetPage) {
//         pages[j].classList.add("active");
//         navigationLinks[i].classList.add("active");
//         window.scrollTo(0, 0);
//       } else {
//         pages[j].classList.remove("active");
//         navigationLinks[j].classList.remove("active"); // هنا ناخد j مش i
//       }
//     }
//   });
// }

// const words = [
//   " Frontend Developer",
//   " Backend Developer",
//   " Full Stack Engineer"
// ];

// const typingElement = document.querySelector(".typing-text");
// let wordIndex = 0;
// let charIndex = 0;

// function typeWord() {
//   if (charIndex < words[wordIndex].length) {
//     typingElement.textContent += words[wordIndex].charAt(charIndex);
//     charIndex++;
//     setTimeout(typeWord, 100);
//   } else {
//     setTimeout(() => {
//       typingElement.textContent = "";
//       charIndex = 0;
//       wordIndex = (wordIndex + 1) % words.length;
//       typeWord();
//     }, 1500);
//   }
// }

// window.addEventListener("DOMContentLoaded", () => {
//   typingElement.textContent = ""; // يمسح أي كلام سابق
//   typeWord();
// });

// // hire me button
// const hireBtns = document.querySelectorAll("[data-hire-btn]");
// const contactPage = document.querySelector("[data-page='contact']");

// hireBtns.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     // يخلي صفحة الكونتاكت active
//     for (let i = 0; i < pages.length; i++) {
//       pages[i].classList.remove("active");
//       navigationLinks[i].classList.remove("active");
//     }
//     contactPage.classList.add("active");

//     // يخلي اللينك بتاع الكونتاكت active
//     for (let i = 0; i < navigationLinks.length; i++) {
//       if (navigationLinks[i].innerHTML.toLowerCase() === "contact") {
//         navigationLinks[i].classList.add("active");
//       }
//     }

//     // scroll to top
//     window.scrollTo(0, 0);
//   });
// });
'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const targetPage = this.textContent.trim().toLowerCase();

    for (let j = 0; j < pages.length; j++) {
      if (pages[j].dataset.page.toLowerCase() === targetPage) {
        pages[j].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    }
  });
}

// typing effect
const words = [
  " Frontend Developer",
  " Backend Developer",
  " Full Stack Engineer"
];

const typingElement = document.querySelector(".typing-text");
let wordIndex = 0;
let charIndex = 0;

function typeWord() {
  if (charIndex < words[wordIndex].length) {
    typingElement.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWord, 100);
  } else {
    setTimeout(() => {
      typingElement.textContent = "";
      charIndex = 0;
      wordIndex = (wordIndex + 1) % words.length;
      typeWord();
    }, 1500);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  typingElement.textContent = "";
  typeWord();
});

// hire me button
const hireBtns = document.querySelectorAll("[data-hire-btn]");
const contactPage = document.querySelector("[data-page='contact']");

hireBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      pages[i].classList.remove("active");
      navigationLinks[i].classList.remove("active");
    }
    contactPage.classList.add("active");

    for (let i = 0; i < navigationLinks.length; i++) {
      if (navigationLinks[i].innerHTML.toLowerCase() === "contact") {
        navigationLinks[i].classList.add("active");
      }
    }

    window.scrollTo(0, 0);
  });
});
