
let image =  document.getElementsByTagName('img')[0];
let button =  document.getElementById('btn');
button.addEventListener('click', () => { 
    image.remove();
});

