/* =============== SHOW MENU =============== */
/* Added functionality to toggle the visibility of 
the navigation menu when the toggle button is clicked, 
and to hide the menu when the close button is clicked */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
// Validate if constant exists
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
// Validate if constant exists
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}