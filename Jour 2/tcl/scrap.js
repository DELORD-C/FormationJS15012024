async function afficherBus() {
    let response = await fetch("https://data.grandlyon.com/fr/datapusher/ws/rdata/tcl_sytral.tclpassagearret/all.json?maxfeatures=-1be", {
        // headers: headers,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": 'application/json',
            "Authorization": 'Basic ' + btoa(username + ":" + password)
        },
        method: "GET"
    });
    let data = await response.json();
    console.log(data);
}

afficherBus();