const URL = 'http://localhost:3000';


//Campos de filtro
const produtoFiltro = document.getElementById("produto-filtro");
const bancoPortabilidadeFiltro = document.getElementById("banco-protabilidade-filtro");
const empresaFiltro = document.getElementById("empresa-filtro");
const substatusFiltro = document.getElementById("sub-status-filtro");
const supervisorFiltro = document.getElementById("supervisor-filtro");
const gerenteFiltro = document.getElementById("gerente-filtro");


//Dados na sessão
const dataSession = {
    id_acesso: sessionStorage.getItem('id_acesso', 'id_acesso'),
    status: sessionStorage.getItem('status', 'status'),
    perfil: sessionStorage.getItem('perfil', 'perfil'),
    nome: sessionStorage.getItem('nome', 'nome'),
    supervisor: sessionStorage.getItem('supervisor', 'supervisor'),
    gerente: sessionStorage.getItem('gerente', 'gerente'),
    cnpj_matr: sessionStorage.getItem('cnpj_matriz', 'cnpj_matriz'),
    cpf_user: sessionStorage.getItem('cpf_usuario', 'cpf_usuario'),
    tipo_usuario: sessionStorage.getItem('tipo_usuario', 'tipo_usuario'),
    supervisor_cpf: sessionStorage.getItem('supervisor_cpf', 'supervisor_cpf'),
    gerente_cpf: sessionStorage.getItem('gerente_cpf', 'gerente_cpf')
}


window.onload = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    

    fetch(URL + "/user/proposta/produto", requestOptions)
        .then(response => response.json())
        .then(function (data) {
            data.forEach(element => {
                produtoFiltro.innerHTML += `<option value =${element.produto}>${element.produto}</option>`;
            });
        })


    fetch(URL + "/user/proposta/bancos", requestOptions)
        .then(response => response.json())
        .then(function (data) {
            data.forEach(element => {
                bancoPortabilidadeFiltro.innerHTML += `<option value =${element.banco}>${element.banco}</option>`;
            });
        })

    fetch(URL + "/user/proposta/empresas", requestOptions)
        .then(response => response.json())
        .then(function (data) {
            data.forEach(element => {
                empresaFiltro.innerHTML += `<option value =${element.empresa}>${element.empresa}</option>`;
            });
        })

    fetch(URL + "/user/proposta/substatus", requestOptions)
        .then(response => response.json())
        .then(function (data) {
            data.forEach(element => {
                substatusFiltro.innerHTML += `<option value =${element}>${element}</option>`;
            });
        })


    fetch("http://localhost:3000/user/supervisor", requestOptions)
        .then(response => response.json())
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                supervisorFiltro.innerHTML += '<option value="' + data[i].parceiro + '">' + data[i].parceiro + '</option>;'
            }
        }).catch(error => console.log('error', error));

    fetch("http://localhost:3000/user/gerente", requestOptions)
        .then(response => response.json().then(function (data) {
            for (let i = 0; i < data.length; i++) {
                gerenteFiltro.innerHTML += '<option value="' + data[i].gerente + '">' + data[i].gerente + '</option>;'
            }
        })).catch(error => console.log('error', error));

    const raw = JSON.stringify({
        nome: dataSession.nome
    })

    fetch(URL + '/user/vinculo', {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }).then(response => response.json().then(function (data) {
        const selectParent = document.getElementById("vinculo-filtro");
        selectParent.innerHTML = `<option value=${data} selected> ${data} </option>`

    })).catch(error => console.log('error', error))
}