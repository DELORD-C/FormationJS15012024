let form = document.getElementById('form');

form.addEventListener('submit', checkForm);

function checkForm (event) {
    console.log(event);
    event.preventDefault();

    let error = false;

    // ON VA TESTER NOS CHAMPS
    
    
    if (!error) {
        form.submit();
    }
}