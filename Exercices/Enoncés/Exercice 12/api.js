let liste = document.getElementById('?');

function apiCall () {
    let requete = new XMLHttpRequest();
    requete.onreadystatechange = function () {
        if (requete.readyState === 4) {
            let resultats = JSON.parse(requete.responseText);
            console.log(resultats);
            resultats.forEach(resultat => {
                let newElem = document.createElement('?');
                newElem.innerHTML = resultat;
                liste.append(newElem);
            });
        }
    }
    requete.open('GET', '?');
    requete.send();
}