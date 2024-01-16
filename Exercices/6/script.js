
let texte = document.getElementById('id');
let button = document.getElementById('btn');
    button.addEventListener ('click', function () {
        if (confirm() == true) {
        texte.remove();
        }
})