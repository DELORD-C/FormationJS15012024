## NB

* Pour def des variables on utilise let ou var mais let est mieux pcq si on mets sans faire exprès le même nom de variable, il nous le dit alors qu'avec var il va nous le remplace 
* Pour def des variables, pas la peine de remettre let à chaque fois, juste mais virgule, c'est plus clean

```js
let nombre = 3,
    texte = 'test',
    tableau = [1, 2, 3, 15];
```


&nbsp;

&nbsp;





### ALGO QUI CALCULE LES 10 PREMIER NOMBRES PREMIERS 
*On aurait pu utiliser un while*

```js
function prime (x) {
    let current = 0
    for (let i = 0; current < x; i++) {
        let isPrime = true;
        for (let y = 2; y < i; y++) {
            if (i % y == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i);
            current++;
        }
    }
}
prime(10);

```



&nbsp;
&nbsp;



## Les comparateurs 

```
>
>=
<
<=
==
!=
===
!==
```


&nbsp;
&nbsp;
&nbsp;
&nbsp;





### Notre html 

```html
    <h1>INDEX</h1>
    <button>Change</button>
    <button id="btn">Spoiler</button>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ELmebDj32WD8iv6SJyo8gZGIcnPOE8jcU352kUgneA&s" style="filter: blur(10px); transition: 0.3s">
    <p>Lorem ipsumoujtji</p>
    <div></div>
    <div id="principale">
        <div>
            <div>
                <span>Element</span>
                <span>Element</span>
                <span>Element</span>
            </div>
            <div>
                <span>Element</span>
                <span>Element</span>
                <span>Element</span>
            </div>
        </div>
        <div>
            <div>
                <span>Element</span>
                <span>Element 1</span>
                <span>Element</span>
            </div>
            <div>
                <span>Element</span>
                <span>Element</span>
                <span>Element</span>
            </div>
        </div>
    </div>
    <div></div>

    <script src="script.js"></script>
```





&nbsp;
&nbsp;
### Pour que le h1 change de couleur en cliquant sur le bouton "change":

```js
let button = document.getElementsByTagName('button')[0];
button.addEventListener('click', () => {
    let title = document.getElementsByTagName('h1')[0];
    title.style.color = 'red';
});
```




&nbsp;
&nbsp;
### Pour que l'image devienne nette en cliquant sur le bouton "spoiler" :

```js
let button2 = document.querySelector("#btn");
button2.addEventListener('click', () => {
    let spoiler = document.getElementsByTagName('img')[0];
    spoiler.style.filter = "blur(0px)";
});
```




&nbsp;
&nbsp;
### Pour que le texte change quand je passe ma sourie devant :
```js
let texte = document.getElementsByTagName('p')[0];

texte.addEventListener('mouseover', () => {
    console.log('test');
    texte.innerHTML = 'Bonjour, bienvenue chez Dawan.';

});
```




&nbsp;
&nbsp;
### Pour que le texte "Element 1 devienne rouge quand j'appuie sur la touche k (avec un foreach donc un peu lourd):
```js
document.addEventListener('keydown', (event) => {
    if (event = 'k'){        
        let spans = document.querySelectorAll("#principale span");
        spans.forEach(span => {
            if (span.innerText == "Element 1"){
                span.style.color = 'red';
            }  
        });    
        }
});
```




&nbsp;
&nbsp;
### Pour que le texte "Element 1 devienne rouge quand j'appuie sur la touche k (avec selecteur css child donc plus optimal):
```j
document.addEventListener('keydown', (event) => {
    if (event = 'k'){        
        let div = document.querySelector("#principale");
         div.lastElementChild.firstElementChild.children[1].style.color = 'red';
            }  
        });    
        }
});
```

&nbsp;
&nbsp;
&nbsp;
## Les événements les + importants
|Nom|Définition|
|-|-|
|DOMContentLoaded|Se lance lorsque tous les éléments HTML sont chargés|
|change|Se lance lorsque l'élément input cible change de valeur (donc cpé aux champs de form)|
|click|🐱‍🏍|
|drag (dragstart/dragend/etc...)|Se lance lors des différents évènnements de drag and drop|
|focus|Se lance lorsque l'utilisateur met le focus sur l'élément|
|keydown|Se lance lorsque on appuie sur une touche|
|scroll|🐱‍🏍|
