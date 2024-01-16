let form = document.getElementById('form');

form.addEventListener('submit', checkForm);

function checkForm (event) {
    console.log(event);
    event.preventDefault(); // Annulation de l'envoi du formulaire
    let error = false;//on part du principe ou de base hay pas d'erreur

// Début test des champs

//UN ELEMENT 
    let fname = document.getElementById('fname'); //on recupère un élément (ici le nom)
    if (fname.value.length < 2) { //si la valeur est inférieur à 2 caractère c'est un erreur
        fname.style.border = "1px solid red";//on met une bordure rouge
        error = true;
    }
    else {
        fname.style.border = "1px solid #ccc";//on retire bordure si plus d'erreur
    }
//UN ELEMENT 

    let lname = document.getElementById('lname');
    if (lname.value.length < 2) {
        lname.style.border = "1px solid red";
        error = true;
    }
    else {
        lname.style.border = "1px solid #ccc";
    }

    let subject = document.getElementById('subject');
    if (subject.value.length < 10) {
        subject.style.border = "1px solid red";
        error = true;
    }
    else {
        subject.style.border = "1px solid #ccc";
    }


    let email = document.getElementById('email');
    let regex1 = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;//regex du mail
    if (!email.value.match(regex1)) {//on test et renvoie faux si c'est pas de match (donc faut ajouter '!' pcq on veut l'erreur du regex)
        email.style.border = "1px solid red";
        error = true;
    }
    else {
        email.style.border = "1px solid #ccc";
    }

    let phone = document.getElementById('phone');
    let regex2 = /^(\+33|0)[1-9](\d\d){4}$/;//regex du tel
    if (!phone.value.match(regex2)) {//on test et renvoie faux si c'est pas de match (donc faut ajouter '!' pcq on veut l'erreur du regex)
        phone.style.border = "1px solid red";
        error = true;
    }
    else {
        phone.style.border = "1px solid #ccc";
    }
    
    

    // Fin de tests des champs
    
    
    // Si pas d'erreurs, on envoi le formulaire
    if (!error) {
        form.submit();
    }
}