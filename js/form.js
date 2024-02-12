const form = document.querySelector('#input-form');
const launchBtn = document.querySelector('#send');
const userEmailField = document.querySelector('#email');


function clearFormFields() {
    const modalFiends = formModal.querySelectorAll('input');

    modalFiends.forEach( field => { 
        field.value = ''
    });
}


form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);

    launchBtn.setAttribute('disabled', true)

    if (userEmailField?.value?.length > 30) {
        return;
    }

    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
    })
})