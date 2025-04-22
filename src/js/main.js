'use strict';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

// LANDING
document.addEventListener("DOMContentLoaded", () => {

    //Query
  const menuToggle = document.querySelector(".js_hamburgerMenu");
  const menu = document.querySelector(".js_menu");
  const header = document.querySelector(".js_header");
  const closeBtn = document.querySelector(".js_menuClose");

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

    if (closeBtn) {
      closeBtn.addEventListener("click", () =>{
        menu.classList.remove("menu--active");
      });
  }}

  //Fondo del header al hacer scroll
  const scrollThreshold = 50;

  window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  });

  // MENU - Slider
  const sliderBox = document.querySelector(".slider-box");
  const slides = document.querySelectorAll(".slider-box li");

  if (sliderBox && slides.length > 0){
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
  }});

  // Fade LANDING
  AOS.init({
    duration: 1000, // duración de la animación en milisegundos
    once: true,     // la animación solo se ejecuta una vez
    easing: 'ease-in-out',
  });
