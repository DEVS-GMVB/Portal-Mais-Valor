const URL = "http://localhost:3000/user";

//Tbody's
const dadosPropostas = document.getElementById("dados-proposta");
const integradasDia = document.getElementById("integradas-dia");
const integradaMes = document.getElementById("integradas-mes");
const farolTotal = document.getElementById("farol-total");
const preCadastro = document.getElementById("tbody-pre-cadastro");
const preAnalise = document.getElementById("tbody-fase-pre-analise");
const faseConfirmacao = document.getElementById("tbody-fase-confirmacao");
const faseDigitacao = document.getElementById("tbody-fase-digitacao");
const faseSaldo = document.getElementById("tbody-fase-saldo");
const faseAcompanhamento = document.getElementById("tbody-fase-acompanhamento");

window.onload = () => {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    }

    const dataAtual = dataAtualFormatada();


    fetch(`${URL}/filas/dadospropostas/busca`, requestOptions)
        .then(response => response.json())
        .then(function (data) {
            const {
                qtd,
                valor
            } = data[0];

            dadosPropostas.innerHTML =
                `
            <tr style="text-align: center;">
                <th scope="row">${dataAtual}</th>
                <td>${qtd}</td>
                <td>${valor}</td>
            </tr>
            `
        })
        .catch(error => console.error(error));

    fetch(`${URL}/filas/integradasdia/buscar`, requestOptions)
        .then(response => response.json())
        .then(function (data) {
            const {
                qtd,
                valor
            } = data[0];

            integradasDia.innerHTML =
                `
            <tr style="text-align: center;">
                <th scope="row">${dataAtual}</th>
                <td>${qtd}</td>
                <td>${valor}</td>
            </tr>
            `
        })
        .catch(error => console.error(error))


    fetch(`${URL}/filas/integradasmes/buscar`, requestOptions)
        .then(response => response.json())
        .then(function (data) {
            const mesEspecifico = `${new Date().getMonth()+1}/${new Date().getFullYear()}`;

            const {
                qtd,
                valor
            } = data[0];

            integradaMes.innerHTML =
                `
            <tr style="text-align: center;">
                <th scope="row">${mesEspecifico}</th>
                <td>${qtd}</td>
                <td>${valor}</td>
            </tr>
            `
        })
        .catch(error => console.error(error));

    fetch(`${URL}/filas/precadastro/busca`, requestOptions)
        .then(response => response.json())
        .then(function (data) {
            const linhas = data.registrosLinhas;
            let totalProducao = 0;
            let totalQuantidade = 0;
            let totalAceito = 0;
            let totalNegado = 0;
            linhas.forEach(item => {
                preCadastro.innerHTML +=
                    `
                    <tr style="text-align: center;">
                        <th scope="row">${item.status}</th>
                        <th scope="row">${item.qtd}</th>
                        <th scope="row">${item.valor}</th>
                        <th scope="row">${item.data_envio}</th>
                        <th scope="row">${item.qtd_dentro}</th>
                        <th scope="row">${item.qtd_fora}</th>
                        <th scope="row">${totalProducao+=parseFloat(item.valor)}</th>
                        <th scope="row">${totalQuantidade+=Number(item.qtd)}</th>
                        <th scope="row">${totalAceito+=Number(item.qtd_dentro)}</th>
                        <th scope="row">${totalNegado+=Number(item.qtd_fora)}</th> 
                    </tr>
                `
            })
        })
        .catch(error => console.error(error));

    fetch(`${URL}/filas/faroltotal/buscar`, requestOptions)
        .then(response => response.json())
        .then(function (data) {
            const {
                qtd_dentro,
                qtd_fora
            } = data[0];

            farolTotal.innerHTML =
                `<tr style="text-align: center;">
                            
                <td>${qtd_dentro}</td>
                <td>${qtd_fora}</td>
           
            </tr>`
        })
        .catch(error => console.error(error));

    fetch(`${URL}/filas/preanalise/buscar`, requestOptions)
        .then(response => response.json())
        .then(function (data) {
            let totalProducao = 0;
            let totalQuantidade = 0;
            let totalAceito = 0;
            let totalNegado = 0;
            data.forEach(item => {
                preAnalise.innerHTML +=
                    `
                    <tr style="text-align: center;">
                        <th scope="row">${item.status}</th>
                        <th scope="row">${item.qtd}</th>
                        <th scope="row">${item.valor}</th>
                        <th scope="row">${item.data_atualizacao}</th>
                        <th scope="row">${item.qtd_dentro}</th>
                        <th scope="row">${item.qtd_fora}</th>
                        <th scope="row">${(totalProducao+=parseFloat(item.valor.replace(',','.')) * 1000).toLocaleString('pt-br', {
                            style: "currency",
                            currency: "BRL"
                        })}</th>
                        <th scope="row">${totalQuantidade+=Number(item.qtd)}</th>
                        <th scope="row">${totalAceito+=Number(item.qtd_dentro)}</th>
                        <th scope="row">${totalNegado+=Number(item.qtd_fora)}</th> 
                    </tr>
                `
            })
        })
        .catch(error => console.error(error));

    fetch(`${URL}/filas/confirmacao/buscar`, requestOptions)
        .then(response => response.json())
        .then(function (data) {
            let totalProducao = 0;
            let totalQuantidade = 0;
            let totalAceito = 0;
            let totalNegado = 0;
            data.forEach(item => {
                faseConfirmacao.innerHTML +=
                    `
                    <tr style="text-align: center;">
                        <th scope="row">${item.status}</th>
                        <th scope="row">${item.qtd}</th>
                        <th scope="row">${item.valor}</th>
                        <th scope="row">${item.data_atualizacao}</th>
                        <th scope="row">${item.qtd_dentro}</th>
                        <th scope="row">${item.qtd_fora}</th>
                        <th scope="row">${totalProducao+=parseFloat(item.valor)}</th>
                        <th scope="row">${totalQuantidade+=Number(item.qtd)}</th>
                        <th scope="row">${totalAceito+=Number(item.qtd_dentro)}</th>
                        <th scope="row">${totalNegado+=Number(item.qtd_fora)}</th> 
                    </tr>
                `
            })
        })
        .catch(error => console.error(error));

    fetch(`${URL}/filas/digitacao/buscar`, requestOptions)
        .then(response => response.json())
        .then(function (data) {
            let totalProducao = 0;
            let totalQuantidade = 0;
            let totalAceito = 0;
            let totalNegado = 0;
            data.forEach(item => {
                faseDigitacao.innerHTML +=
                    `
                    <tr style="text-align: center;">
                        <th scope="row">${item.status}</th>
                        <th scope="row">${item.qtd}</th>
                        <th scope="row">${item.valor}</th>
                        <th scope="row">${item.data_atualizacao}</th>
                        <th scope="row">${item.qtd_dentro}</th>
                        <th scope="row">${item.qtd_fora}</th>
                        <th scope="row">${totalProducao+=parseFloat(item.valor)}</th>
                        <th scope="row">${totalQuantidade+=Number(item.qtd)}</th>
                        <th scope="row">${totalAceito+=Number(item.qtd_dentro)}</th>
                        <th scope="row">${totalNegado+=Number(item.qtd_fora)}</th> 
                    </tr>
                `
            })
        })
        .catch(error => console.error(error));

    fetch(`${URL}/filas/saldo/buscar`, requestOptions)
        .then(response => response.json())
        .then(function (data) {
            let totalProducao = 0;
            let totalQuantidade = 0;
            let totalAceito = 0;
            let totalNegado = 0;
            data.forEach(item => {
                faseSaldo.innerHTML +=
                    `
                    <tr style="text-align: center;">
                        <th scope="row">${item.status}</th>
                        <th scope="row">${item.qtd}</th>
                        <th scope="row">${item.valor}</th>
                        <th scope="row">${item.data_atualizacao}</th>
                        <th scope="row">${item.qtd_dentro}</th>
                        <th scope="row">${item.qtd_fora}</th>
                        <th scope="row">${totalProducao+=parseFloat(item.valor)}</th>
                        <th scope="row">${totalQuantidade+=Number(item.qtd)}</th>
                        <th scope="row">${totalAceito+=Number(item.qtd_dentro)}</th>
                        <th scope="row">${totalNegado+=Number(item.qtd_fora)}</th> 
                    </tr>
                `
            })
        })
        .catch(error => console.error(error));

    fetch(`${URL}/filas/acompanhamento/buscar`, requestOptions)
        .then(response => response.json())
        .then(function (data) {
            let totalProducao = 0;
            let totalQuantidade = 0;
            let totalAceito = 0;
            let totalNegado = 0;
            data.forEach(item => {
                faseAcompanhamento.innerHTML +=
                    `
                    <tr style="text-align: center;">
                        <th scope="row">${item.status}</th>
                        <th scope="row">${item.qtd}</th>
                        <th scope="row">${item.valor}</th>
                        <th scope="row">${item.data_atualizacao}</th>
                        <th scope="row">${item.qtd_dentro}</th>
                        <th scope="row">${item.qtd_fora}</th>
                        <th scope="row">${(totalProducao+=parseFloat(item.valor.replace(',','.').replace('R$','')) * 1000).toLocaleString('pt-br', {
                            style: "currency",
                            currency: "BRL"
                        })}</th>
                        <th scope="row">${totalQuantidade+=Number(item.qtd)}</th>
                        <th scope="row">${totalAceito+=Number(item.qtd_dentro)}</th>
                        <th scope="row">${totalNegado+=Number(item.qtd_fora)}</th> 
                    </tr>
                `
            })
        })
        .catch(error => console.error(error));
}

function dataAtualFormatada() {
    const data = new Date();
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
}