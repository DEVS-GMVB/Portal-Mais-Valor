const URL = `http://localhost:3000/user`;

//Selects
const vendas = document.getElementById("campo-venda");
const mes = document.getElementById("campo-mes");
const operador = document.getElementById("campo-operador");
const tipoSelect = document.getElementById("campo-tipo");
const dataInclusao = document.getElementById("campo-data-inclusao");
const supervisorSelect = document.getElementById("campo-supervisor");
const statusAuditoria = document.getElementById("campo-auditoria");
const statusProposta = document.getElementById("campo-status-proposta");

//Btns
const btnFiltro = document.getElementById("btn-buscar");

window.onload = (e) => {
    fetch(`${URL}/auditoria/venda`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json())
        .then((data) => {
            for (const {
                    tipo_operacao
                } of data) {
                vendas.innerHTML += `<option value="${tipo_operacao}">${tipo_operacao}</option>`;
            }

        })
        .catch(error => console.error(error));

    fetch(`${URL}/auditoria/operador`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json())
        .then((data) => {
            for (const {
                    usuario
                } of data) {
                operador.innerHTML += `<option value="${usuario}">${usuario}</option>`;
            }

        })
        .catch(error => console.error(error));

    fetch(`${URL}/auditoria/tipo`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json())
        .then((data) => {
            for (const {
                    tipo
                } of data) {
                tipoSelect.innerHTML += `<option value="${tipo}">${tipo}</option>`;
            }

        })
        .catch(error => console.error(error));

    fetch(`${URL}/auditoria/supervisor`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json())
        .then((data) => {
            for (const {
                    supervisor
                } of data) {
                supervisorSelect.innerHTML += `<option value="${supervisor}">${supervisor}</option>`;
            }

        })
        .catch(error => console.error(error));

    fetch(`${URL}/auditoria/status`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json())
        .then((data) => {
            for (const {
                    status_auditoria
                } of data) {
                statusAuditoria.innerHTML += `<option value="${status_auditoria}">${status_auditoria}</option>`;
            }
        })
        .catch(error => console.error(error));

    fetch(`${URL}/auditoria/status/proposta`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json())
        .then((data) => {
            for (const {
                    status
                } of data) {
                statusProposta.innerHTML += `<option value="${status}">${status}</option>`;
            }
        })
        .catch(error => console.error(error));
}

btnFiltro.addEventListener('click', () => {
    let node = document.getElementById("list");
})

