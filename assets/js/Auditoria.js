const URL = 'http://localhost:3000/user'

let supervisor = document.getElementById('campo-supervisor');
let statusAudiitoria = document.getElementById('campo-auditoria');
let statusProposta = document.getElementById('campo-status-proposta');
let venda = document.getElementById('campo-venda');
let operador = document.getElementById('campo-operador');
let tipo = document.getElementById('campo-tipo');
let mes = document.getElementById('campo-mes');

window.onload = function(){

    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }

    fetch(URL + '/auditoria/supervisor', requestOptions)
    .then(response => response.json().then(function (data){
        for(let i = 0; i < data.length; i++){
            supervisor.innerHTML += '<option value="' + data[i].supervisor + '">' + data[i].supervisor + '</option>;'
        }
    })).catch(error => console.log('error', error));

    fetch(URL + '/auditoria/status', requestOptions)
    .then(response => response.json().then(function (data){
        for(let i = 0; i < data.length; i++){
            statusAudiitoria.innerHTML += '<option value="' + data[i].status_auditoria + '">' + data[i].status_auditoria + '</option>;'
        }
    })).catch(error => console.log('error', error));

    fetch(URL + '/auditoria/venda', requestOptions)
    .then(response => response.json().then(function (data){
        for(let i = 0; i < data.length; i++){
            venda.innerHTML += '<option value="' + data[i].tipo_operacao + '">' + data[i].tipo_operacao + '</option>;'
        }
    })).catch(error => console.log('error', error));

    fetch(URL + '/auditoria/operador', requestOptions)
    .then(response => response.json().then(function (data){
        for(let i = 0; i < data.length; i++){
            operador.innerHTML += '<option value="' + data[i].usuario + '">' + data[i].usuario + '</option>;'
        }
    })).catch(error => console.log('error', error));

    fetch(URL + '/auditoria/tipo', requestOptions)
    .then(response => response.json().then(function (data){
        for(let i = 0; i < data.length; i++){
            tipo.innerHTML += '<option value="' + data[i].tipo + '">' + data[i].tipo + '</option>;'
        }
    })).catch(error => console.log('error', error));

    fetch(URL + '/auditoria/mes', requestOptions)
    .then(response => response.json().then(function (data){
        for(let i = 0; i < data.length; i++){
            mes.innerHTML += '<option value="' + data[i].mes + '">' + data[i].mes + '</option>;'
        }
    })).catch(error => console.log('error', error));

    fetch(URL + '/auditoria/status/proposta', requestOptions)
    .then(response => response.json().then(function (data){
        for(let i = 0; i < data.length; i++){
            statusProposta.innerHTML += '<option value="' + data[i].status + '">' + data[i].status + '</option>;'
        }
    })).catch(error => console.log('error', error));
}