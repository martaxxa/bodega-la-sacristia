'use strict';

// LANDING
document.addEventListener("DOMContentLoaded", () => {

    //Query
  const menuToggle = document.querySelector(".js_hamburgerMenu");
  const menu = document.querySelector(".js_menu");
  const header = document.querySelector(".js_header");

  //Menú desplegable
  if (menuToggle && menu) {
    menuToggle.addEventListener("mouseenter", (event) => {
      menu.classList.add("menu--active");
    });

    menu.addEventListener("mouseleave", (event) => {
      menu.classList.remove("menu--active");
    });

    menu.addEventListener("mouseenter", (event) => {
      event.stopPropagation();
    });

    menu.addEventListener("mouseleave", () => {
      menu.classList.remove("menu--active");
    });
  } else {
    console.error("Uno o más elementos no se encontraron en el DOM");
  }

  //Fondo del header al hacer scroll
  const scrollThreshold = 50;

  window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  });
});

// MENU

//Query
document.addEventListener("DOMContentLoaded", function () {
  const sliderBox = document.querySelector(".slider-box");
  const slides = document.querySelectorAll(".slider-box li");
  const totalSlides = slides.length;
  let index = 0;

  const firstClone = slides[0].cloneNode(true);
  sliderBox.appendChild(firstClone);

  function moveSlider() {
    index++;

    sliderBox.style.transition = "transform 0.5s ease-in-out";
    sliderBox.style.transform = `translateX(-${index * 100}%)`;

    if (index === totalSlides) {
      setTimeout(() => {
        sliderBox.style.transition = "none";
        sliderBox.style.transform = "translateX(0)";
        index = 0;
      }, 700);
    }
  }

  setInterval(moveSlider, 3000); // Cambia cada 3 segundos
});
