'use strict';

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