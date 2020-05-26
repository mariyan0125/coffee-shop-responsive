"use strict";

// MENU ANIMATION
var navButton = document.querySelector('.navigation__button');
var navBackground = document.querySelector('.navigation__background');
var navNav = document.querySelector('.navigation__nav');
var navLinks = document.querySelectorAll('.navigation__item');
var navList = document.querySelector('.navigation__list');
var humburger = document.querySelector('#navi-toggle');

var toggleNav = function toggleNav() {
  navBackground.classList.toggle('is-open');
  navLinks.forEach(function (link, index) {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = "navLinkFade 0.5s ease forwards ".concat(index / 7 + 0.4, "s");
    }
  });
  navNav.classList.toggle('is-shown');
};

var openLink = function openLink() {
  if (humburger.checked) {
    humburger.checked = false;
  }

  toggleNav();
};

navButton.addEventListener('click', toggleNav);
navList.addEventListener('click', openLink); // IMAGE BOX FADE IN UP ANIMATION INSIDE THE ABOUT SECTION

var animatedImgBox = function animatedImgBox() {
  var imgBox = document.querySelector('.img-box');
  var imgBoxPhotos = document.querySelectorAll('.img-box__photo');
  var imgBoxPosition = imgBox.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 2;

  if (imgBoxPosition < screenPosition) {
    imgBoxPhotos.forEach(function (photo, index) {
      photo.style.animation = "moveInBottom 0.6s ease-in-out forwards ".concat(index / 7 + 0.3, "s");
    });
  }
};

window.addEventListener('scroll', animatedImgBox);
