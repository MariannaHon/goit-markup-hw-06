


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
})
