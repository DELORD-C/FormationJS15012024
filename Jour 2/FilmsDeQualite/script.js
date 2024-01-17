// AFFICHER LE TOP 10 DES FILMS 
async function afficherFilms() {
    let response = await fetch("https://api.themoviedb.org/3/tv/popular?language=fr-FR&page=1&api_key=625b3e1220c0fca7c7ac7f6fcca786ac");//fetch fait une requete pour recuperer l'API & await bloque l'excecution du script tant que fetch est pas résolu (mais faut être dans fonction asynchrone)
    let data = await response.json();//recuper les data de la pages des films dans un json (pcq avant on avait que la réponse encodée)
    let films = data.results;//recuperer que les data des  films avec la propriété results (qui est spé à cette API)
    films.forEach(film => {//pour chaque films on crée nos éléments
        let tr = document.createElement('tr');
        let nom = document.createElement('td');
        nom.innerHTML = film.name;
        let note = document.createElement('td');
        note.innerHTML = film.vote_average + " / 10";
        let resume = document.createElement('td');
        resume.innerHTML = film.overview;
        let affiche = document.createElement('td');
        affiche.innerHTML = "<img src='https://image.tmdb.org/t/p/w500" + film.backdrop_path + "'>";
        tr.append(nom, note, resume, affiche);
        document.getElementById('tbody').append(tr);
    });
}
afficherFilms();


// FORM DE RECHERCHE DE FILMS
let form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    search();
});

async function search () {
    let value = document.getElementById('recherche').value;
    let response = await fetch("https://api.themoviedb.org/3/search/movie?language=fr-FR&api_key=625b3e1220c0fca7c7ac7f6fcca786ac&query=" + value);
    let data = await response.json();//recuper les data de la pages des films dans un json (pcq avant on avait que la réponse encodée)
    let films = data.results;//recuperer que les data des  films avec la propriété results (qui est spé à cette API)
    document.getElementById('tbody').remove();//supprimer tous les autres résultats déjà présents (donc ici le top 10)+barre de chargement
    document.getElementById('loading').style.display = "block";
    let pages = data.total_pages;//récup le nb total de page

    let tablebody = document.createElement('tbody');//on crée un nouveau tableau (pour le remplacer)->pas obligé mais c'est pour différer le résultats (performance)
    tablebody.setAttribute('id', 'tbody');

    for (let page = 1; page <= pages; page++) { // Pour chaque page, je vais chercher les infos qui correspondent
        let progress = 80 - (page / pages * 80);
        document.getElementById('loading').style.boxShadow = "inset white -" + progress + "vw 0 0 0";
        console.log("inner white -" + progress + "vw 0 0 0");
        let response = await fetch("https://api.themoviedb.org/3/search/movie?language=fr-FR&api_key=625b3e1220c0fca7c7ac7f6fcca786ac&query=" + value + "&page=" + page);
        let data = await response.json();
        let films = data.results;
        films.forEach(film => {
            let tr = document.createElement('tr');
            let nom = document.createElement('td');
            nom.innerHTML = film.title;
            let note = document.createElement('td');
            note.innerHTML = film.vote_average + " / 10";
            let resume = document.createElement('td');
            resume.innerHTML = film.overview;
            let affiche = document.createElement('td');
            affiche.innerHTML = "<img src='https://image.tmdb.org/t/p/w500" + film.backdrop_path + "'>";
            tr.append(nom, note, resume, affiche);
            tablebody.append(tr);
        });
    }
    document.getElementById('loading').style.display = "none";
    document.getElementById('loading').style.boxShadow = "inset white -80vw 0 0 0";
    document.getElementById('table').append(tablebody);
}


