const URL = `http://localhost:3000/user`;

const substatus = document.getElementById("campo-sub-status");

//Btns
const buscar = document.getElementById("btn-buscar");
const excel = document.getElementById("btn-excel");

window.onload = () => {
    fetch(`${URL}/sms/substatus`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(function (data) {
            const resultFilter = data.filter(item => item.sub_status !== "" && item.sub_status !== "." && item.sub_status !== "-");

            for (let i in resultFilter) {
                substatus.innerHTML += `<option value="${resultFilter[i].sub_status.toUpperCase()}">${resultFilter[i].sub_status.toUpperCase()}</option>`;
            }
        })
        .catch(error => console.error("Deu ruim aqui", error))
}

buscar.addEventListener('click', () => {

    //limpa
    var node = document.getElementById("tbody-1");
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }

    const subStatus = document.getElementById('campo-sub-status').value;
    const empresa = document.getElementById('campo-empresa-sms').value;
    const mes = document.getElementById('campo-mes').value;


    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "sub_status": subStatus,
        "empresa_sms": empresa,
        "data_log": mes
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(URL+"/sms/filtro", requestOptions)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                let specific_tbody = document.getElementById('tbody-1');
                let row = specific_tbody.insertRow(-1);
                let status = row.insertCell(-1);
                let subStatus = row.insertCell(-1);
                let empresaSms = row.insertCell(-1);
                let proposta = row.insertCell(-1);
                let responsavel = row.insertCell(-1);
                let dataLog = row.insertCell(-1);
                let vendaSms = row.insertCell(-1);
                let auditoriaSms = row.insertCell(-1);
                let produto = row.insertCell(-1);
                let tipoOperacao = row.insertCell(-1);

                let statusText = document.createTextNode(`${data[i].status}`);
                status.appendChild(statusText);

                let subStatusText = document.createTextNode(`${data[i].sub_status}`);
                subStatus.appendChild(subStatusText);

                let empresaSmstext = document.createTextNode(`${data[i].empresa_sms}`);
                empresaSms.appendChild(empresaSmstext);

                let propostaText = document.createTextNode(`${data[i].proposta}`);
                proposta.appendChild(propostaText);

                let responsavelText = document.createTextNode(`${data[i].responsavel}`);
                responsavel.appendChild(responsavelText);

                let dataLogtext = document.createTextNode(`${data[i].data_log}`);
                dataLog.appendChild(dataLogtext);

                let vendaSmsText = document.createTextNode(`${data[i].venda_sms}`);
                vendaSms.appendChild(vendaSmsText);

                let auditoriaSmsText = document.createTextNode(`${data[i].auditoria_sms}`);
                auditoriaSms.appendChild(auditoriaSmsText);

                let produtoText = document.createTextNode(`${data[i].produto}`);
                produto.appendChild(produtoText);

                let tipoText = document.createTextNode(`${data[i].tipo}`);
                tipoOperacao.appendChild(tipoText);
            }
        })
        .catch(error => console.log('error', error));
})

excel.addEventListener('click', () => {
    let table2excel = new Table2Excel();
    table2excel.export(document.querySelector("#table-1"))
})