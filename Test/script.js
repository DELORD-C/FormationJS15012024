// https://carte.tcl.fr/api/disruptions?line=line:tcl:38


async function afficherBus() {
    let response = await fetch("https://carte.tcl.fr/api/disruptions?line=line:tcl:38", {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": 'application/json',
            // "Authorization": 'Basic ' + btoa(username + ":" + password)
        },
        method: "GET"
    });
    let data = await response.json();
    console.log(data);
}

afficherBus();