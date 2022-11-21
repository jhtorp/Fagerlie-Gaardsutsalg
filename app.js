// Burger on Click

document.addEventListener('DOMContentLoaded', nav)
function nav() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.topnav');
    burger.addEventListener('click', () => {
        nav.classList.toggle('show')
    })
    const navLink = document.querySelectorAll('.nav-link').forEach(navLink => {
        navLink.addEventListener('click', () => {
            nav.classList.toggle('show')
        })

    })



}




//Preload fix

setTimeout(function () {
    document.body.className = "";
}, 500);