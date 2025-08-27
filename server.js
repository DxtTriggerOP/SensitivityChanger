const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

function codmsens(a){
    const sens = a*3;
    return sens;
}
function freefiresens(a){
    const sens = a*3.5;
    return sens;
}
function fortnitesens(a){
    const sens = a*4;
    return sens;
}
function bgmisens(a){
    const sens = a*3.5;
    return sens;
}

app.post("/initial_sens",(req,res) => {
    const a = parseInt(req.body.a);
    
    const codm_sens = codmsens(a);
    const freefire_sens = freefiresens(a);
    const fortnite_sens = fortnitesens(a);
    const bgmi_sens = bgmisens(a);

    res.json({
        codmsens : codm_sens,
        freefiresens : freefire_sens,
        fortnitesens : fortnite_sens,
        bgmisens : bgmi_sens
    })

})

app.listen(3000);