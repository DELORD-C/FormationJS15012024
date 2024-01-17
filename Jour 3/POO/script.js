class Vehicule {    //on crée un schema/prototype qui nous permettra de créer des objets de ce type (nb : commme scheme en arabe)
    constructor(passager, vitesseMax, type) { //fonction qui se lance qd on instanciera/hydratera/creera un objet 
        this.passager = passager;//je stocke les parametres de constructor en tant qu'attributs de la class vehicule
        this.vitesseMax = vitesseMax;
        this.type = type;
        this.vitesse = 0;
        this.position = 0;
    }
    
    accelerer() {
        if (this.vitesse < this.vitesseMax) {
            this.vitesse += 10;//"*=" est un sucre qui veut dire "this.vitesse + 10"
        }
    }
    
    freiner() {
        if (this.vitesse > 0) {
            this.vitesse -= 10;
        }
    }
}

let voiture = new Vehicule(4, 150, 'Voiture');//on instancie un objet
// let velo = new Vehicule(1, 30, 'Velo');//on instancie un objet


let boucle = setInterval(() => {
    if (voiture.vitesse > 0) {
        voiture.position += voiture.vitesse;
        document.getElementById('Voiture').style.marginLeft = voiture.position + 'px';
    }
}, 500);

function accelererVoiture () {
    voiture.accelerer();
}

function freinerVoiture () {
    voiture.freiner();
}