/* =============== SHOW MENU =============== */
/* Added functionality to toggle the visibility of 
the navigation menu when the toggle button is clicked, 
and to hide the menu when the close button is clicked */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu show */
// Validate if constant exists
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
// Validate if constant exists
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/* =============== REMOVE MENU MOBILE =============== */
/* Implemented functionality to remove the mobile menu 
when any navigation link is clicked */
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')

    //When we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/* =============== CHANGE BACKGROUND HEADER =============== */
/* Implemented functionality to dynamically change the background 
of the header based on scroll position */
const scrollHeader = () => {
    const header = document.getElementById('header')

    /* when the scroll is greater than 50 viewport height, 
    add the scroll-header class to the header tag */
    this.scrollY >= 50 ? header.classList.add('bg-header')
        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)


/* =============== SCROLL SECTIONS ACTIVE LINK =============== */
/* Implemented functionality to highlight active navigation links 
based on scroll position */
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}


/* =============== SHOW SCROLL UP =============== */
/* Implemented functionality to display a scroll-to-top 
button when the user scrolls beyond a certain point */
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    // when the scroll is higher that 350vh, add the show-scroll class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/* =============== SCROLL REVEAL ANIMATION =============== */
/* Configure the Scroll Reveal library to animate elements 
when they come into view during scrolling */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

/* Implemented Scroll Reveal animations for various elements */
sr.reveal(`.home_data, .footer_container, .footer_group`)
sr.reveal(`.home_img`, { delay: 700, origin: 'bottom' })
sr.reveal(`.logos_img, .program_card, .pricing_card`, { interval: 100 })
sr.reveal(`.choose_img, .calculate_content`, { origin: 'left' })
sr.reveal(`.choose_content, .calculate_img`, { origin: 'right' })


/* =============== CALCULATE JS =============== */
/* Added JS variables to handle BMI calculation form elements */
const calculateForm = document.getElementById('calculate-form'),
    calculateCm = document.getElementById('calculate-cm'),
    calculateKg = document.getElementById('calculate-kg'),
    calculateMessage = document.getElementById('calculate-message')

const calculateBMI = (e) => {
    e.preventDefault()

    // We check if the fields have a value
    if (calculateCm.value === '' || calculateKg.value === '') {
        // Add and remove colour
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')

        // Show message
        calculateMessage.textContent = 'Please, fill all the fields*'

        // Remove message 3s later
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 3000)
    } else {
        // BMI Formula
        const cm = calculateCm.value / 100,
            kg = calculateKg.value,
            bmi = Math.round(kg / (cm * cm))

        // show BMI status
        if (bmi < 18.5) {
            // add colour and display message
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi}, is underweight`
        } else if (bmi < 25) {
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi}, is normal`
        } else {
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi}, is overweight`
        }

        // clean input fields
        calculateCm.value = ''
        calculateKg.value = ''

        // remove message after 4s
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 4000)
    }
}
calculateForm.addEventListener('submit', calculateBMI)


/* =============== EMAIL JS =============== */
/* Defined JS variables to manage the contact form 
elements for EmailJS integration */
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message'),
    contactUser = document.getElementById('contact-user')

const sendEmail = (e) => {
    e.preventDefault()

    // We check if the field has a value
    if (contactUser.value === '') {
        // add and remove colour
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')

        // show message
        contactMessage.textContent = 'You must enter an email'

        // remove message after 3s
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 3000)
    } else {
        /* Implemented EmailJS functionality to send form data */
        // serviceId - templateId - #form - publicKey
        emailjs.sendForm('service_1nllsid', 'template_op2u9yl', '#contact-form', 'jtPMwhZnrHV16l0xY')
            .then(() => {
                /* Added callback functions to handle successful form submission 
                and error handling in EmailJS integration */
                // show message and add colour
                contactMessage.classList.add('color-green')
                contactMessage.textContent = 'You have been registered successfully!'

                // remove message after 3s
                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 3000)
            }, (error) => {
                // mail sending error
                alert('Oops! Something went wrong...', error)
            })
        // clean input field
        contactUser.value = ''
    }
}