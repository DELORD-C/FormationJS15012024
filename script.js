function changeTitleColor () {
    let title = document.getElementsByTagName('h1')[0];
    title.style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
}



let button2 = document.querySelector("#btn");
button2.addEventListener('click', () => {
    let spoiler = document.getElementsByTagName('img')[0];
    spoiler.style.filter = "blur(0px)";
});



let texte = document.getElementsByTagName('p')[0];

texte.addEventListener('mouseover', () => {
    console.log('test');
    texte.innerHTML = 'Bonjour, bienvenue chez Dawan.';

});




document.addEventListener('keydown', (event) => {
    if (event = 'k'){        
        let spans = document.querySelectorAll("#principale span");
        spans.forEach(span => {
            if (span.innerText == "Element 1"){
                span.style.color = 'red';
            }  
        });

        // let div = document.querySelector("#principale");
        // div.lastElementChild.firstElementChild.children[1].style.color = 'red';
    }
});

document.addEventListener('', () => {
})