let search = document.getElementById('search');

search.addEventListener('keydown', function(event) {
    
    if (event.key === 'Enter') {
        let keyword = search.value;
        let elementsListe = document.getElementsByTagName('img');
        if (keyword == '') {//si la personne tape rien, on affiche tout 
            for (let element of elementsListe) {
                element.style.display = 'block';
            }
        }
        else {
            for (let element of elementsListe) {
                console.log("test")
                let alt = element.getAttribute('alt');
                if (alt === keyword) {
                    element.style.display = 'block';
                }
                else {
                    element.style.display = 'none';
                }
            }         
        }
    }
});



