class Vehicule {    //on crée un schema/prototype qui nous permettra de créer des objets de ce type (nb : commme scheme en arabe)
    constructor(passager, vitesseMax, type, element, ABtn, FBtn, LBtn, RBtn) { //fonction qui se lance qd on instanciera/hydratera/creera un objet 
        this.passager = passager;//je stocke les parametres de constructor en tant qu'attributs par default de la class vehicule
        this.vitesseMax = vitesseMax;
        this.type = type;
        this.vitesse = 0;
        this.element = element;
        this.ABtn = ABtn;
        this.FBtn = FBtn;
        this.LBtn = LBtn;
        this.RBtn = RBtn;
        this.direction = "R";
        this.element.style.left = "0px";
        this.element.style.top = "0px";
    }
    
    accelerer() {
        if (this.vitesse < this.vitesseMax) {
            this.vitesse += 1;//"*=" est un sucre qui veut dire "this.vitesse + 10"
        }
    }
    
    freiner() {
        if (this.vitesse > 0) {
            this.vitesse -= 1;
        }
    }

    avancer() {
        switch (this.direction) {//on fait un cas en fonction de chaque direction
            case "R":
                this.element.style.left = parseInt(this.element.style.left.slice(0, -2)) + this.vitesse + 'px';//slice (0-2) enlève les 2 derniers caractères donc le "px"
                break;//parseInt = pour transformer en nb entier 

            case "L":
                this.element.style.left = parseInt(this.element.style.left.slice(0, -2)) - this.vitesse + 'px';//slice (0-2) enlève les 2 derniers caractères donc le "px"
                break;

            case "U":
                this.element.style.top = parseInt(this.element.style.top.slice(0, -2)) - this.vitesse + 'px';//slice (0-2) enlève les 2 derniers caractères donc le "px"
                break;
        
            case "D":
                this.element.style.top = parseInt(this.element.style.top.slice(0, -2)) + this.vitesse + 'px';//slice (0-2) enlève les 2 derniers caractères donc le "px"
                break;
        }
    }

    tournerGauche () {//on fait des cas en fonction de la position de base (ex : si on etait tt droit, on va en haut)
        switch (this.direction) {
            case 'R':
                this.direction = 'U';
                break;
            case 'U':
                this.direction = 'L';
                break;
            case 'L':
                this.direction = 'D';
                break;
            case 'D':
                this.direction = 'R';
                break;
        }
    }

    tournerDroite () {
        switch (this.direction) {
            case 'R':
                this.direction = 'D';
                break;
            case 'U':
                this.direction = 'R';
                break;
            case 'L':
                this.direction = 'U';
                break;
            case 'D':
                this.direction = 'L';
                break;
        }
    }
}

//pas default keypressed vaut faux
let keyPressed = false;

document.addEventListener('keydown', (event) => {//si on appuie sur une touche, keypressed prends la valeur de cette touche
    keyPressed = event.key;
    console.log(keyPressed);
});

document.addEventListener('keyup', (event) => {//si on relache la touche, keypressed repasse à faux
    keyPressed = false;
});




//Tableau pour tous les gérer en mm temps
let vehicules = [
    new Vehicule(1, 5, 'velo', document.getElementById('Velo'), 'z', 's', 'q', 'd'),//on instancie nos éléments
    new Vehicule(4, 150, 'Voiture', document.getElementById('Voiture'), 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight')
];

let boucle = setInterval(() => {
    vehicules.forEach(vehicule => {
        switch (keyPressed) {
            case vehicule.ABtn://ici on verfie que keypressed = Abtn donc la bonne touche 
                vehicule.accelerer();
                break;
            case vehicule.FBtn://idem...
                vehicule.freiner();
                break;
            case vehicule.LBtn:
                vehicule.tournerGauche();
                break;
            case vehicule.RBtn:
                vehicule.tournerDroite();
                break;
        }

        vehicule.avancer();
    });
}, 50);

