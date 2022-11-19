// Burger on Click

document.addEventListener('DOMContentLoaded', nav)
function nav() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.topnav');
    const navLink = document.querySelector('.nav-link');
    burger.addEventListener('click', () => {
        nav.classList.toggle('show')
    })

    navLink.addEventListener('click', () => {
        nav.classList.toggle('show')
    })


}


//Preload fix

setTimeout(function () {
    document.body.className = "";
}, 500);