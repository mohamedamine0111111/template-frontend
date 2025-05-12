const burger = document.querySelector('.burger-menu');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('is-open');
});
