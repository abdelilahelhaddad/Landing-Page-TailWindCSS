import "tailwindcss/tailwind.css"

const NavBtn = document.querySelector('#NavBtn');
const NavClose = document.querySelector('#NavClose');
const NavBar = document.querySelector('#NavBar');

NavBtn.addEventListener('click', (e) => {
  e.preventDefault();
  NavBar.classList.add('md:flex');
  NavBar.classList.remove('md:hidden');
});

NavClose.addEventListener('click', (e) => {
  e.preventDefault();
  NavBar.classList.add('md:hidden');
  NavBar.classList.remove('md:flex');
});
