const URL = "http://localhost:3000/user";
//Selects
const produtoSelect = document.getElementById("campo_produto");
const tipoSelect = document.getElementById("campo-tipo");
const bancoOrigiSelect = document.getElementById("campo-banco");
const statusSelect = document.getElementById("campo-status");
const supervisorSelect = document.getElementById("campo-supervisor");
const usuarioSelect = document.getElementById("campo-usuario");
//Btns
const buscar = document.getElementById("btn-buscar");

window.onload = () => {
    fetch(`${URL}/proposta/produto`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(function (data) {
            for (const i in data) {
                if (Object.hasOwnProperty.call(data, i)) {
                    const {
                        produto
                    } = data[i];
                    produtoSelect.innerHTML += `<option value="${produto}">${produto}</option>`
                }
            }
        })
        .catch(error => console.error(error))

    fetch(`${URL}/proposta/tipo`, {
            method: "GET",
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(function (data) {
            for (const i in data) {
                if (Object.hasOwnProperty.call(data, i)) {
                    const {
                        tipo
                    } = data[i];
                    tipoSelect.innerHTML += `<option value="${tipo}">${tipo}</option>`;
                }
            }
        })
        .catch(error => console.error(error))

    fetch(`${URL}/bancoOrigi`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(function (data) {
            for (const i in data) {
                if (Object.hasOwnProperty.call(data, i)) {
                    const {
                        banco
                    } = data[i];
                    bancoOrigiSelect.innerHTML += `<option value="${banco}">${banco}</option>`;
                }
            }
        })
        .catch(error => console.error(error))

    fetch(`${URL}/proposta/status`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(function (data) {
            for (const i in data) {
                if (Object.hasOwnProperty.call(data, i)) {
                    const {
                        status
                    } = data[i];
                    statusSelect.innerHTML += `<option value="${status}">${status}</option>`;
                }
            }
        })
        .catch(error => console.error(error))

    fetch(`${URL}/supervisor`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(function (data) {
            for (const i in data) {
                if (Object.hasOwnProperty.call(data, i)) {
                    const {
                        parceiro
                    } = data[i];
                    supervisorSelect.innerHTML += `<option value="${parceiro}">${parceiro}</option>`;
                }
            }
        })
        .catch(error => console.error(error))

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "supervisor": sessionStorage.getItem('nome')
    })


    fetch(`${URL}/pendencia/usuario`, {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(function (data) {
            for (const i in data) {
                if (Object.hasOwnProperty.call(data, i)) {
                    const {
                        parceiro
                    } = data[i];
                    usuarioSelect.innerHTML += `<option value="${parceiro}">${parceiro}</option>`;
                }
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

    const produto = document.getElementById('campo-produto').value;
    const banco = document.getElementById('campo-banco').value;
    const tipo = document.getElementById('campo-tipo').value;
    const status = document.getElementById('campo-status').value;
    const supervisor = document.getElementById('campo-supervisor').value;
    const mes = document.getElementById('campo-mes').value;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "produto": produto,
        "banco_origi": banco,
        "tipo": tipo,
        "status": status,
        "supervisor": supervisor,
        "mes": mes
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(URL+"/pendencia/buscar", requestOptions)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                let specific_tbody = document.getElementById('tbody-1');
                let row = specific_tbody.insertRow(-1);
                let dtLog = row.insertCell(-1);
                let pendencia = row.insertCell(-1);
                let motivo = row.insertCell(-1);
                let proposta = row.insertCell(-1);
                let cpfCliente = row.insertCell(-1);
                let supervisor = row.insertCell(-1);
                let bancoOrigi = row.insertCell(-1);
                let tipo = row.insertCell(-1);
                let statusAtual = row.insertCell(-1);

                let dtLogText = document.createTextNode(`${data[i].data_log}`);
                dtLog.appendChild(dtLogText);

                let pendenciaText = document.createTextNode(`${data[i].codigo}`);
                pendencia.appendChild(pendenciaText);

                let motivoText = document.createTextNode(`texte`);
                motivo.appendChild(motivoText);

                let propostaText = document.createTextNode(`${data[i].proposta}`);
                proposta.appendChild(propostaText);

                let cpfClienteText = document.createTextNode(`${data[i].cpf}`);
                cpfCliente.appendChild(cpfClienteText);

                let supervisorText = document.createTextNode(`${data[i].supervisor}`);
                supervisor.appendChild(supervisorText);

                let bancoOrigiText = document.createTextNode(`${data[i].banco_origi}`);
                bancoOrigi.appendChild(bancoOrigiText);

                let tipoText = document.createTextNode(`${data[i].tipo}`);
                tipo.appendChild(tipoText);

                let statusAtualText = document.createTextNode(`${data[i].status_atual}`);
                statusAtual.appendChild(statusAtualText);

            }
        }).catch(error => console.log('error', error));
});