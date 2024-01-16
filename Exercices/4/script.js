function sapinDeNoel (x) {
    for (let i = 0; i < x; i++) { //compte les lignes 
        let ligne = '';
        let nbEspaces = x - i;
        let nbZeros = i * 2 + 1;
        for (let y = 0; y < nbEspaces; y++)//mets les espaces à chaque lignes qui s'ajoute
        {
            ligne = ligne + ' ';
        }
        for (let x = 0; x < nbZeros; x++)//mets les 0 à chaque lignes qui s'ajoute
        {
            ligne = ligne + '0';
        }
        console.log(ligne);
    }
}
sapinDeNoel (5);