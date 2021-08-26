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

// Initialize and add the map
function initMap() {
  // Your location
  const loc = {
    lat: 42.361145,
    lng: -71.057083
  };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({
    position: loc,
    map: map
  });
}