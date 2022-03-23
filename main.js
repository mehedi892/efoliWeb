//Navbar Responsive

let mobileMenuIcon = document.querySelector('.mobileMenuIcon');
let mainMenuDiv = document.getElementById('navMenu');

mobileMenuIcon.addEventListener('click', () =>{
    mainMenuDiv.classList.toggle("mobile");
});