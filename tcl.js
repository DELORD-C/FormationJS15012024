async function afficherBus() {
    let username = 'sibade9452@rentaen.com'
    let password = 'Sibade9452'
    let headers = new Headers();
    headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
    headers.set('accept', 'application/json');
    headers.set("Access-Control-Allow-Origin", "*")
    headers.set("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
    headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")

    let response = await fetch("https://data.grandlyon.com/fr/datapusher/ws/rdata/tcl_sytral.tclpassagearret/all.json?maxfeatures=-1be", {
        headers: headers,
        method: "GET"
    });
    let data = await response.json();
    console.log(data);
}

afficherBus();



let bus = document.createElement('td');
bus.innerHTML = data.ligne;
let arret = 
arret.innerHTML = arret.idtarretdestination;
let horaire = document.createElement('td');
horaire.innerHTML = horaire.delaipassage;

if (data.filter((element) => element.arretId == 456 && element.ligne == 28));