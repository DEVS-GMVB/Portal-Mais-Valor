const URL = `http://localhost:3000/user`;
const status = document.getElementById("campo-status");
const buscar = document.getElementById("btn-buscar");
const excel = document.getElementById("btn-excel");

window.onload = () => {
    fetch(`${URL}/logs/status`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(data => {
            const notNull = data.filter(item => item.status !== null && item.status !== undefined);

            for (let i in notNull) {
                status.innerHTML += `<option value=${notNull[i].status}> ${notNull[i].status} </option>`
            }
        })
        .catch(error => console.error(error))
}

buscar.addEventListener('click', () => {
    //limpa
    var node = document.getElementById("tbody-1");
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }

    //campos
    const status = document.getElementById("campo-status").value;
    const tipo = document.getElementById('campo-tipo').value;
    const mes = document.getElementById('campo-mes').value;


    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "status": status,
        "tipo": tipo,
        "mes": mes
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(URL + "/logs/filtro", requestOptions)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                let specific_tbody = document.getElementById('tbody-1');
                let row = specific_tbody.insertRow(-1);
                let codigo = row.insertCell(-1);
                let proposta = row.insertCell(-1);
                let status = row.insertCell(-1);
                let tipo = row.insertCell(-1);
                let dataLog = row.insertCell(-1);
                let statusAtual = row.insertCell(-1);
                let mes = row.insertCell(-1);
                let produto = row.insertCell(-1);
                let usuario = row.insertCell(-1);
                let vendaSms = row.insertCell(-1);
                let auditoriaSms = row.insertCell(-1);
                let valorEntregue = row.insertCell(-1);
                let cpfCliente = row.insertCell(-1);

                let codigoText = document.createTextNode(`${data[i].codigo}`);
                codigo.appendChild(codigoText);

                let propostaText = document.createTextNode(`${data[i].proposta}`);
                proposta.appendChild(propostaText);

                let statusText = document.createTextNode(`${data[i].status}`);
                status.appendChild(statusText);

                let tipoText = document.createTextNode(`${data[i].tipo}`);
                tipo.appendChild(tipoText);

                let dataLogtext = document.createTextNode(`${data[i].data_log}`);
                dataLog.appendChild(dataLogtext);

                let statusAtualText = document.createTextNode(`${data[i].status_atual}`);
                statusAtual.appendChild(statusAtualText);

                let mesText = document.createTextNode(`${data[i].mes}`);
                mes.appendChild(mesText);

                let produtoText = document.createTextNode(`${data[i].produto}`);
                produto.appendChild(produtoText);

                let usuarioText = document.createTextNode(`${data[i].usuario}`);
                usuario.appendChild(usuarioText);

                let vendaSmsText = document.createTextNode(`${data[i].venda_sms}`);
                vendaSms.appendChild(vendaSmsText);

                let auditoriaSmsText = document.createTextNode(`${data[i].auditoria_sms}`);
                auditoriaSms.appendChild(auditoriaSmsText);

                let valorEntregueText = document.createTextNode(`${data[i].entregue}`);
                valorEntregue.appendChild(valorEntregueText);

                let cpfClienteText = document.createTextNode(`${data[i].cpf}`);
                cpfCliente.appendChild(cpfClienteText);
            }
        })
        .catch(error => console.log('error', error));
})

excel.addEventListener('click', () => {
    let table2excel = new Table2Excel();
    table2excel.export(document.querySelector("#table-1"));
})