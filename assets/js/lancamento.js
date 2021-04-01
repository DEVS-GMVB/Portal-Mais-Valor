const URL = `http://localhost:3000`;

const filial_filtro = document.getElementById("filial-pesquisa");
const supervisor_filtro = document.getElementById("supervisor-pesquisa");
const gerente_filtro = document.getElementById("gerente-pesquisa");
const filial_incluir = document.getElementById("filial-incluir");
const supervisor_incluir = document.getElementById("supervisor-incluir");
const gerente_incluir = document.getElementById("gerente-incluir");

//Maps
const modal = new Map();
const modalRow = new Map();


//Eventos de Botões
const botao_filtro = document.getElementById("btn-buscar");
const botao_troca_incluir = document.getElementById("buttonIncluir");


window.onload = () => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }

    fetch(URL + "/user/filial", requestOptions)
        .then(response => response.json()
            .then(function (data) {
                for (let i = 0; i < data.length; i++) {
                    filial_filtro.innerHTML += '<option value="' + data[i].filial + '">' + data[i].filial + '</option>;'
                    filial_incluir.innerHTML += '<option value="' + data[i].filial + '">' + data[i].filial + '</option>;'
                }
            }))
        .catch(error => console.log('error', error));

    fetch(URL + "/user/supervisor", requestOptions)
        .then(response => response.json())
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                supervisor_filtro.innerHTML += '<option value="' + data[i].parceiro + '">' + data[i].parceiro + '</option>;'
                supervisor_incluir.innerHTML += '<option value="' + data[i].parceiro + '">' + data[i].parceiro + '</option>;'

            }
        }).catch(error => console.log('error', error));

    fetch(URL + "/user/gerente", requestOptions)
        .then(response => response.json().then(function (data) {
            for (let i = 0; i < data.length; i++) {
                gerente_filtro.innerHTML += '<option value="' + data[i].gerente + '">' + data[i].gerente + '</option>;'
                gerente_incluir.innerHTML += '<option value="' + data[i].gerente + '">' + data[i].gerente + '</option>;'
            }
        })).catch(error => console.log('error', error));
}