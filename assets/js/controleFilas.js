const URL = `http://localhost:3000/user`;

const dadosPropostas = document.getElementById('tbody-dados-proposta');
const integradasDia = document.getElementById('tbody-integradas-dia');
const integradaMes = document.getElementById('tbody-integradas-mes');

function dataAtualFormatada() {
    const data = new Date()
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

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
        .catch(error => console.error(error))

    var node = document.getElementById("tbody-pre-cadastro");
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    fetch(URL+"/filas/precadastro/busca", requestOptions)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                let specific_tbody = document.getElementById('tbody-pre-cadastro');
                let row = specific_tbody.insertRow(-1);
                let status = row.insertCell(-1);
                let quantidade = row.insertCell(-1);
                let producao = row.insertCell(-1);
                let atualizacao = row.insertCell(-1);
                let aceito = row.insertCell(-1);
                let negado = row.insertCell(-1);
                let total = row.insertCell(-1);

                let statusText = document.createTextNode(`${data[i].status}`);
                status.appendChild(statusText);

                let quantidadeText = document.createTextNode(`${data[i].qtd}`);
                quantidade.appendChild(quantidadeText);

                let producaoText = document.createTextNode(`${data[i].valor}`);
                producao.appendChild(producaoText);

                let atualizacaoText = document.createTextNode(`${data[i].data_envio}`);
                atualizacao.appendChild(atualizacaoText);

                let aceitoText = document.createTextNode(`${data[i].qtd_dentro}`);
                aceito.appendChild(aceitoText);

                let negadoText = document.createTextNode(`${data[i].qtd_fora}`);
                negado.appendChild(negadoText);

                let totalText = document.createTextNode(``);
                total.appendChild(totalText);
            }
        }).catch(error => console.log('error', error));

}