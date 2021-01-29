let pcomissao = document.getElementById('idPorcComissao');
let secundario = document.getElementById('idSecundario');
let psecundario = document.getElementById('idPorcSecundario');
let terceario = document.getElementById('idTerceario');
let pterceario = document.getElementById('idPorcTerceario');
let quaternario = document.getElementById('idQuartenario');
let pquaternario = document.getElementById('idPorcQuaternario');
let parceiroPromotor = document.getElementById('idParceiroPromotor');

let supervisor = document.getElementById('id-porc-supervisor');
let gerente = document.getElementById('id-porc-gerente');
let idpquaternario = document.getElementById('id-porc-quaternario');
let maxComissao = document.getElementById('id-max-comissao');
let idquaternario = document.getElementById('id-quaternario');

let ceParcPromo = document.getElementById('id-ce-parceiro-promotor');
let ceSupervisor = document.getElementById('id-ce-supervisor');
let ceGerente = document.getElementById('id-ce-gerente');
let cequaternario = document.getElementById('id-ce-quaternario');
let ceMaxComissao = document.getElementById('id-max-comissao');

let gmgParcPromo = document.getElementById('id-gmg-parcpromo');
let gmgGupervisor = document.getElementById('id-gmg-supervisor');
let gmgGerente = document.getElementById('id-gmg-gerente');
let gmgQuaternario = document.getElementById('id-gmg-quaternario');
let gmgMaxComissao = document.getElementById('id-gmg-max-comissao');

let grjParcPromo = document.getElementById('id-grj-parcpromo');
let grjSupervisor = document.getElementById('id-grj-supervisor');
let grjGerente = document.getElementById('id-grj-gerente');
let grjQuaternario = document.getElementById('id-grj-quaternario');
let grjMaxComissao = document.getElementById('id-grj-max-comissao');

let tmParcpromo = document.getElementById('id-tm-parcpromo');
let tsParcPromo = document.getElementById('id-ts-parcpromo');
 

const comissao = document.getElementById('comissao');

comissao.addEventListener('click', () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-type", "application/json");

    var raw = JSON.stringify({
        pcomissao,
        secundario,
        psecundario,
        terceario,
        pterceario,
        quaternario
    })

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch("rota", requestOptions).
    then(response => response.json()).
    then(result => {
        for(let value of result) {
            let specific_tbody = document.getElementById('list');
            let row = specific_tbody.insertRow(-1);
            let pcomissao = row.insertCell(-1);
        }
    }).catch(error => console.log(error))
})


