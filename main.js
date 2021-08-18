import "tailwindcss/tailwind.css"

const NavBtn = document.querySelector('#NavBtn');
const NavClose = document.querySelector('#NavClose');
const NavBar = document.querySelector('#NavBar');

NavBtn.addEventListener('click', (e) => {
  e.preventDefault();
  NavBar.classList.add('sm:flex');
  NavBar.classList.remove('sm:hidden');
});

NavClose.addEventListener('click', (e) => {
  e.preventDefault();
  NavBar.classList.add('sm:hidden');
  NavBar.classList.remove('sm:flex');
});