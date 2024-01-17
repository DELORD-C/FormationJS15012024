class Vehicule {    //on crée un schema/prototype qui nous permettra de créer des objets de ce type (nb : commme scheme en arabe)
    constructor(passager, vitesseMax, type, element, accelBtn, freinBtn) { //fonction qui se lance qd on instanciera/hydratera/creera un objet 
        this.passager = passager;//je stocke les parametres de constructor en tant qu'attributs de la class vehicule
        this.vitesseMax = vitesseMax;
        this.type = type;
        this.vitesse = 0;
        this.element = element;
        this.accelBtn = accelBtn;
        this.freinBtn = freinBtn;
        this.direction = "R";
        this.element.style.marginLeft = "0px";
        this.element.style.marginTop = "0px";
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
        switch (this.direction) {
            case "R":
                this.element.style.marginLeft = parseInt(this.element.style.marginLeft.slice(0, -2)) + this.vitesse + 'px';//slice (0-2) enlève les 2 derniers caractères donc le "px"
                break;

            case "L":
                this.element.style.marginLeft = parseInt(this.element.style.marginLeft.slice(0, -2)) - this.vitesse + 'px';//slice (0-2) enlève les 2 derniers caractères donc le "px"
                break;

            case "U":
                this.element.style.marginLeft = parseInt(this.element.style.marginTop.slice(0, -2)) - this.vitesse + 'px';//slice (0-2) enlève les 2 derniers caractères donc le "px"
                break;
        
            case "D":
                this.element.style.marginLeft = parseInt(this.element.style.marginTop.slice(0, -2)) + this.vitesse + 'px';//slice (0-2) enlève les 2 derniers caractères donc le "px"
                break;
        }
    }
}

//Tableau
let vehicules = [
    new Vehicule(1, 5, 'velo', document.getElementById('Velo'), document.getElementById('aVelo'), document.getElementById('fVelo')),//on instancie nos éléments
    new Vehicule(4, 150, 'Voiture', document.getElementById('Voiture'), document.getElementById('aVoiture'), document.getElementById('fVoiture'))
];

let boucle = setInterval(() => {
    let pressedBtn = document.querySelector("button:active");
    vehicules.forEach(vehicule => {
        if (pressedBtn == vehicule.accelBtn) {
            vehicule.accelerer();
        }

        if (pressedBtn == vehicule.freinBtn) {
            vehicule.freiner();
        }

        vehicule.avancer();
    });
}, 50);