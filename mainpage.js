async function convertSensitivity(){
    const aimlabs_sensitivity= document.getElementById("inputSensi").value;
    const response= await fetch("http://localhost:3000/initial_sens",{
        method: "POST",
        headers : {"Content-Type" : "application/json"},
        body: JSON.stringify({
            a : aimlabs_sensitivity
        })
    })
    const data = await response.json();
    document.getElementById("bgmiSensi").innerText = "BGMI Sensi: " + data.bgmisens;
    document.getElementById("codSensi").innerText = "COD Sensi: " + data.codmsens;
    document.getElementById("fortnitefSensi").innerText = "Fortnite Sensi: " + data.fortnitesens;
    document.getElementById("freefireSensi").innerText = "Free Fire Sensi: " + data.freefiresens;
}