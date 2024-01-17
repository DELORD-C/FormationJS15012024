// Pour def des variables on utilise let ou var mais let est mieux pcq si on mets sans faire exprès le même nom de variable, il nous le dit alors qu'avec var il va nous le remplace 
let nombre = 3,
    texte = 'test',
    tableau = [1, 2, 3, 15];
// pour def des variables, pas la peine de remettre let à chaque fois, juste mais virgule, c'est plus clean

// console.log(tableau)

let resultat = 40 % 6;

// console.log(resultat)




function prime (x = 10, display = false) {
    let current = 0
    for (let i = 0; current < x; i++) {
        let isPrime = true;
        for (let y = 2; y < i; y++) {
            if (i % y == 0) {
                isPrime = false
                break;
            }
        }
        if (isPrime) {
            if (display) {
                console.log(i);
            }
            current++;
            if (current == x && !display) {
                console.log(i);
            }
        }
    }
}

// VERSION AVEC WHILE
// function prime (x) {
//     let current = 0, i = 0
//     while (current < x) {
//         let isPrime = true;
//         for (let y = 2; y < i; y++) {
//             if (i % y == 0) {
//                 isPrime = false
//                 break;
//             }
//         }
//         if (isPrime) {
//             console.log(i);
//             current++;
//         }
//         i++;
//     }
// }

prime();

tableau.forEach(element => {
    // console.log(element);
});

let n = 0
while (n < 10) {
    n++
}

// if (a < b) {

// }
// else if (a > b) {

// }
// else {

// }

// switch (nombre) {
//     case 1:
//         console.log('un');
//         break;

//     case 2:
//         console.log('deux');
//         break;

//     case 3:
//         console.log('deux');
//         break;

//     default:
//         console.log('autre')
// }

// >
// >=
// <
// <=
// ==
// !=
// ===
// !==

function test () {
    return 'test';
}

let variable = test();



function addition(a = 0, b = 10) {
    return a + b;
}

let c = addition(50);