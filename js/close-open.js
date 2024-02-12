


document.addEventListener('DOMContentLoaded', function () {
    const openButton = document.getElementById('open-button');
    const closeButton = document.getElementById('button-close');

    openButton.addEventListener('click', function () {
    toggleMenu();
    });

    closeButton.addEventListener('click', function () {
    toggleMenu();
    });

    function toggleMenu() {
        const modal = document.querySelector('.backdrop');
        modal.classList.toggle('is-open');
    }

    const openButtonMobile = document.getElementById('open-button-mobile');
    const closeButtonMobile = document.getElementById('button-close-mobile');
    const menuLinks = document.querySelectorAll('.button-nav');

    openButtonMobile.addEventListener('click', function () {
    toggleMobile();
    });

    closeButtonMobile.addEventListener('click', function () {
    toggleMobile();
    });

    menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
    toggleMobile();
    });
    });

    function toggleMobile() {
        const modalMobile = document.querySelector('.nav-mobile-container');
        modalMobile.classList.toggle('is-open');
    }
})
