const URL = 'http://localhost:3000/user';
const URL_API_CEP = 'https://viacep.com.br/ws/';

//COMBOS => SELECTS
const bancoSelect = document.getElementById("banco-proposta");
const bancoFiltro = document.getElementById("banco-pesquisa");
const tipoFiltro = document.getElementById("tipo-pesquisa");
const tipoSelect = document.getElementById("tipo-preventivo");
const tipoSelect2 = document.getElementById("tipo-operacao-proposta");
const produtoFiltro = document.getElementById("produto-pesquisa");
const produtoSelect = document.getElementById("produto-proposta");
const statusFiltro = document.getElementById("status-pesquisa");
const statusSelect = document.getElementById("status-preventivo");
const statusSelect2 = document.getElementById("status-proposta");
const supervisores = document.getElementById("supervisor-proposta");
const empresaSelect = document.getElementById("empresa-proposta");
const subStatus = document.getElementById("sub-status-proposta");
const bancoPortador = document.getElementById("banco-portador-proposta");
//EVENTOS
const cep = document.getElementById("cep-proposta");

// window.onload = () => {

//     fetch(`${URL}/proposta/aguardando/banco`, {
//             method: 'GET',
//             redirect: 'follow'
//         })
//         .then(response => response.json().then(function (data) {
//             for (const {
//                     banco
//                 } of data) {
//                 bancoSelect.innerHTML += `<option value="${banco}">${banco}</option>`;
//                 bancoFiltro.innerHTML += `<option value="${banco}">${banco}</option>`;
//             }
//         }));

//     fetch(`${URL}/proposta/aguardando/tipo`, {
//             method: 'GET',
//             redirect: 'follow'
//         })
//         .then(response => response.json().then(function (data) {
//             for (const {
//                     tipo
//                 } of data) {
//                 tipoFiltro.innerHTML += `<option value="${tipo}">${tipo}</option>`;
//                 tipoSelect.innerHTML += `<option value="${tipo}">${tipo}</option>`;
//                 tipoSelect2.innerHTML += `<option value="${tipo}">${tipo}</option>`;
//             }
//         }));

//     fetch(`${URL}/proposta/aguardando/produto`, {
//             method: 'GET',
//             redirect: 'follow'
//         })
//         .then(response => response.json().then(function (data) {
//             for (const {
//                     produto
//                 } of data) {
//                 produtoFiltro.innerHTML += `<option value="${produto}">${produto}</option>`;
//                 produtoSelect.innerHTML += `<option value="${produto}">${produto}</option>`;
//             }
//         }));

//     fetch(`${URL}/proposta/aguardando/status`, {
//             method: 'GET',
//             redirect: 'follow'
//         })
//         .then(response => response.json().then(function (data) {
//             for (const {
//                     status
//                 } of data) {
//                 statusFiltro.innerHTML += `<option value="${status}">${status}</option>`;
//                 statusSelect.innerHTML += `<option value="${status}">${status}</option>`;
//                 statusSelect2.innerHTML += `<option value="${status}">${status}</option>`;

//             }
//         }));

//     fetch(`${URL}/supervisor`, {
//             method: 'GET',
//             redirect: 'follow'
//         })
//         .then(response => response.json().then(function (data) {
//             for (const {
//                     parceiro
//                 } of data) {
//                 supervisores.innerHTML += `<option value="${parceiro}">${parceiro}</option>`;
//             }
//         }));

//     fetch(`${URL}/proposta/empresas`, {
//             method: 'GET',
//             redirect: 'follow'
//         })
//         .then(response => response.json().then(function (data) {
//             for (const {
//                     empresa
//                 } of data) {
//                 empresaSelect.innerHTML += `<option value="${empresa}">${empresa}</option>`;
//             }
//         }));

//     fetch(`${URL}/proposta/substatus`, {
//             method: 'GET',
//             redirect: 'follow'
//         })
//         .then(response => response.json().then(function (data) {
//             for (const {
//                     sub_status
//                 } of data) {
//                 subStatus.innerHTML += `<option value="${sub_status}">${sub_status}</option>`;
//             }
//         }));

//     fetch(`${URL}/proposta/bancos`, {
//             method: 'GET',
//             redirect: 'follow'
//         })
//         .then(response => response.json().then(function (data) {
//             for (const {
//                     banco
//                 } of data) {
//                 bancoPortador.innerHTML += `<option value="${banco}">${banco}</option>`;
//             }
//         }));
// }

cep.addEventListener('blur', async () => {

    const data = await fetch(`${URL_API_CEP}/${cep.value.replace(/-/g, "")}/json`).then(response => (response.status === 200) ? response.json() : {
        message: "CEP Inválido"
    });
    
    $("#cidade-endereco-proposta").val(data.localidade);
    $("#endereco-proposta").val(data.logradouro);
    $("#bairro-proposta").val(data.bairro);
    $("#complemento-proposta").val(data.complemento);
    $("#uf-endereco-proposta").val(data.uf)

    document.getElementById("uf-endereco-proposta").focus();

});

// let testeObj = {}

// const teste670 = document.querySelectorAll("#form-proposta input");
// teste670.forEach((item) => {
//     testeObj[item.getAttribute('id')] = item.value;
// });

// console.log(testeObj)

// // const raw = JSON.stringify()

// const teste = {
//     valor: 344,
//     cnpj: 2,
// }

// const teste2 = {
//     valor: 3441,
//     cnpj: 2,
// }

// const teste3 = {
//     valor: 3442,
//     cnpj: 3,
// }
// const teste4 = {
//     valor: 3442,
//     cnpj: 3,
// }

// const teste5 = {
//     valor: 3442,
//     cnpj: 3,
// }
// const teste6 = {
//     valor: 3442,
//     cnpj: 3,
// }
// const teste7 = {
//     valor: 3442,
//     cnpj: 3,
// }
// const teste8 = {
//     valor: 3442,
//     cnpj: 2,
// }
// const teste9 = {
//     valor: 3442,
//     cnpj: 3,
// }


// const testeArray = [teste,teste2,teste3, teste4, teste5, teste6, teste7, teste8, teste9]
// const map = new Map();
// let testeValor;

// for (let i = 0; i < testeArray.length; i++) {

//     for (let j = i + 1; j < testeArray.length; j++) {
//         if(testeArray[j].cnpj === testeArray[i].cnpj) {
//             testeValor = 0;
//             testeValor += testeArray[i].valor + testeArray[j].valor
//         }
//     }
//     map.set(testeArray[i].cnpj, testeValor);
// }

// console.log(map);