
//CREATION DE CLASS
class dateVac {
    constructor(argDebut, argFin) {
        this.debut = argDebut;
        this.fin = argFin;
        this.duree = (Date.parse(argFin) - Date.parse(argDebut)) / 60 / 60 / 24 / 1000;
        this.element = null;//attribut dans lequel on va stocker l'element HTML correspondant à la date (de base vide)
    }
}


//CREATION D'UN TABLEAU VIDE
let dates = []

//FONCTION QUI LANCE NOS AUTRES FONCTIONS QD ON AJOUTE UN DATE
function trakdate (debut ,fin) {//on def notre fonction de calcule de date/durée
    let date = new dateVac(debut, fin);//on cree un nouvel objet de notre class
    dates.push(date); //on mets nos valeurs dans un tableau
    displayDate(date);//on lance la fonction qui affiche les dates
    sendDates();//on lance la fonction qui envoie les dates vers notre json
}



//AFFICHER LES DATES
function displayDate(date) {
    let tr = document.createElement('tr');
    date.element = tr;
    let tddebut = document.createElement('td');
    tddebut.innerHTML = date.debut;

    let tdfin = document.createElement('td');
    tdfin.innerHTML = date.fin;

    let tdduree = document.createElement('td');
    tdduree.innerHTML = date.duree + " jours";

    let tdaction = document.createElement('td');

    let buttonDelete = document.createElement('button');//chaque date a un bouton delete
    buttonDelete.classList.add('dateDelete');
    buttonDelete.innerHTML = 'Supprimer';

    let index = dates.indexOf(date)//choper l'index de la date qu'on ajoute
    buttonDelete.setAttribute("onclick", "removeDate(" + index + ")");// ajoute l'attribut onclick au bouton + la fonction remove date (nb : on a concatener index pour avoir le chiffre et pas texte)

    tdaction.append(buttonDelete);

    tr.append(tddebut, tdfin, tdduree, tdaction);
    document.getElementById('tbody').append(tr);

    
}

function removeDate(index) {//
    let date = dates[index];//
    date.element.remove();//retire du HTML
    dates.splice(index, 1);//retire du JS
    sendDates();//renvoie les modifs au serveur
}


//

//ENVOIE DATE A JSON POUR HEBERGER
async function sendDates() {
    console.log(dates);
    await fetch("api.php", {
        method: 'PUT',// spé à cette API (doc e blob),
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(dates)//conversion de notre tableau des dates en json 
    });
}




//SI ON ENVOIE DES DATES SUR LE FORM, ON STOCK LES DATES + ON LANCE LA FONCTION TRAKDATE
let formtrak = document.getElementById('formtrak');//on trouve le formulaire
formtrak.addEventListener('submit', (event) => {
    event.preventDefault();//pour pas que la page se charge
    let debut = document.getElementById('debut').value//on stock nos valeurs
    let fin = document.getElementById('fin').value
    trakdate(debut, fin);//on lance la fonction
})




//ON RECUPERE LES DATES DI JSON PR LES AFFICHER + LES METTRE DANS NOTRE TABLEAU JS 
async function init () {
    let response = await fetch("api.json", {
        method: 'GET',// spé à cette API (doc e blob),
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    });
    let data = await response.json();
    console.log(data);
    data.forEach(apiDate => {
        let date = new dateVac(apiDate.debut, apiDate.fin);//on cree un nouvel objet de notre class
        dates.push(date); //on mets nos valeurs dans un tableau
        displayDate(date);//on lance la fonction qui affiche les dates
    });
}

init();