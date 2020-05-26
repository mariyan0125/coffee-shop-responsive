// MENU ANIMATION
const navButton = document.querySelector('.navigation__button');
const navBackground = document.querySelector('.navigation__background');
const navNav = document.querySelector('.navigation__nav');
const navLinks = document.querySelectorAll('.navigation__item');
const navList = document.querySelector('.navigation__list');

const humburger = document.querySelector('#navi-toggle');


const toggleNav = () => {
  navBackground.classList.toggle('is-open');
  
  navLinks.forEach((link, index) => {
    if(link.style.animation) {
      link.style.animation = ''
    } else {
    link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.4}s`;
    }
  });

  navNav.classList.toggle('is-shown');
}

const openLink = () => {

  if(humburger.checked) {
    humburger.checked = false;
  }
  toggleNav();
  
}

navButton.addEventListener('click', toggleNav);

navList.addEventListener('click', openLink);




// IMAGE BOX FADE IN UP ANIMATION INSIDE THE ABOUT SECTION
const animatedImgBox = () => {
  const imgBox = document.querySelector('.img-box');
  const imgBoxPhotos = document.querySelectorAll('.img-box__photo');
  const imgBoxPosition = imgBox.getBoundingClientRect().top;
  const screenPosition = window.innerHeight/2;

  if(imgBoxPosition < screenPosition) {
    imgBoxPhotos.forEach((photo, index) => {
      photo.style.animation = `moveInBottom 0.6s ease-in-out forwards ${index/7 + 0.3}s`;
    });
}}

window.addEventListener('scroll', animatedImgBox);

