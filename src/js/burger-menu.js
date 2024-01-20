document.addEventListener('DOMContentLoaded', () => {
    'use strict'
    setBurgerMenu()
})

const setBurgerMenu = () => {
    const burgerMenu = document.querySelector('.burger__menu')
    const header = document.querySelector('.header')
    const navigation = document.querySelector('.navigation')
    const linkElement = document.querySelectorAll('.nav-item')

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('burger__active')
        navigation.classList.toggle('open__menu')
        if (document.body.style.overflow === 'hidden') {
            document.body.style.backgroundColor = 'white'
            header.style.backgroundColor = 'inherit'
            document.body.style.overflow = 'visible'
        } else {
            document.body.style.overflow = 'hidden'
            header.style.backgroundColor = 'black'
            document.body.style.backgroundColor = 'black'
        }
    })

    linkElement.forEach(link => {
        link.addEventListener('click', () => {
            burgerMenu.classList.remove('burger__active')
            navigation.classList.remove('open__menu')
            if (document.body.style.overflow === 'hidden') {
                document.body.style.backgroundColor = 'white'
                header.style.backgroundColor = 'inherit'
                document.body.style.overflow = 'visible'
            } else {
                document.body.style.overflow = 'hidden'
                header.style.backgroundColor = 'black'
                document.body.style.backgroundColor = 'black'
            }
        })
    })



    window.addEventListener("resize", () => {
        if (window.innerWidth > 1440) {
            burgerMenu.classList.remove('burger__active')
            navigation.classList.remove('open__menu')
            header.style.backgroundColor = 'inherit'
            document.body.style.backgroundColor = 'white'
            document.body.style.overflow = 'scroll'
        }
    });
}