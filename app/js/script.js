//BURGER MENU ON MOBILE DEVICES 
//add eventListener to burgerBtn
//create helper class with opacity property of 1 
//Add opacity property to navLinks of 0 

const burgerBtn = document.querySelector('.burgerBtn')
const overlay = document.querySelector('.overlay')
const navLinks = document.querySelector('.nav__links') //this needs to hide with the toggle
const heroContainer = document.getElementById('toggle-content')
const body = document.querySelector("body")

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burgerBtn--active')
    overlay.classList.toggle('has-fade')
    navLinks.classList.toggle('has-fade')
    heroContainer.classList.toggle('has-fade')

    if(overlay.classList.contains('has-fade')) {
        body.classList.remove('noScroll')
        navLinks.classList.remove('fade-in')
        navLinks.classList.add('fade-out')
        overlay.classList.remove('fade-in')
        overlay.classList.add('fade-out')
    } else {
        body.classList.add('noScroll')
        navLinks.classList.remove('has-fade')
        navLinks.classList.remove('fade-out')
        navLinks.classList.add('fade-in')
        overlay.classList.remove('has-fade')
        overlay.classList.remove('fade-out')
        overlay.classList.add('fade-in')
        
    }
})

//PROJECTS CARROUSEL 
//Variables
const projectBox = document.getElementsByClassName('project__box');
const slider = document.getElementById('slider');
const slideBtnLeft = document.querySelector('.carrousel__left');
const slideBtnRight = document.querySelector('.carrousel__right');

//Add event listeners for the buttons
//scroll left
slideBtnLeft.addEventListener('click', () => {
    slider.scrollBy({
        top: 0,
        left: -250,
        behavior: 'smooth'
    });

});
//scroll right
slideBtnRight.addEventListener('click', () => {
    slider.scrollBy({
        top: 0,
        left: 250,
        behavior: 'smooth'
    });
});

//FILTER BUTTONS FOR PROJECTS
//Variables
const filterBtn = document.querySelectorAll('.filterBtn');
const projects = document.querySelectorAll('.project__box');

filterBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        const filter = e.target.dataset.filter;

        projects.forEach((element) => {
            if(element.classList.contains(filter)) {
                element.style.display = 'block';
            } else {
                element.style.display = "none";
            }
        })

    
    })
    
});