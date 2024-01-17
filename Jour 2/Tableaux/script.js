

let tab = [1, 'test', 10]
let tab2 = {
    "message" : "https://images.dog.ceo/breeds/terrier-irish/n02093991_287.jpg",
    "status" : "success"
}

let spans = document.getElementsByTagName('span');
tab.push("banane", 5, 67, tab2); // Ajouter un ou plusieurs éléments dans un tableau

tab.splice(3, 2); // Retier un ou plusieurs éléments d'un tableau (remove que pr enlever dans HTML)


tab.forEach(plouf => {
    if (typeof(plouf) == 'number') {
        // console.log(plouf);
    }
});

for (let index = 0; index < tab.length; index++) {
    let plouf = tab[index];
    if (typeof(plouf) == 'number') {
        // console.log(plouf);
    }
}



let tab3 = tab.slice(2, 4) // Créer une copie partielle d'un tableau

tab.pop();//supprime le dernier élement du tableau 
let pop = tab.pop();//récupère le dernier élement du tableau 
    
tab.shift()//supprime le premier élement du tableau (on peut aussi le récup si on le mets dans une variable)

tab.reverse()//inverse le tableau



let alpha = ["b", "a", "z", "e", "r", "t", "y", "u", "i", "o", "p"]
alpha.sort();//tri du plus petit au plus grand + ordre alphabetique



let beta = ["b", "a", "z", "e", "r", "t", "y", "u", 15, 45, 78, 12, "i", "o", "p"]

let recherche1 = beta.find((element) => typeof(element) == 'number');//retourne le premier element respectant le test
let rechercheAll = beta.filter((element) => typeof(element) == 'number');//retourne ts les elements respectant le test

console.log(rechercheAll);