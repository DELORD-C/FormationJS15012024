let search = document.getElementById('search');
let alt = alt.setAttribute('alt', '');

search.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        let keyword = search.value;
        let elementsListe = document.getElementsByTagName('li');
        if (keyword == '') {
            for (let element of elementsListe) {
                element.style.display = 'block';
            }
        }
        else {
            for (let element of elementsListe) {
                if (element.innerHTML === keyword) {
                    element.style.display = 'block';
                }
                else {
                    element.style.display = 'none';
                }
            }         
        }
    }
});



