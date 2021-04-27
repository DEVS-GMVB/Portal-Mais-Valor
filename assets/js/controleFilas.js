const URL = "http://localhost:3000/user";

//Tbody's
const dadosPropostas = document.getElementById("dados-proposta");
const integradasDia = document.getElementById("integradas-dia");
const integradaMes = document.getElementById("integradas-mes");

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
            console.log(data);
        })
        .catch(error => console.error(error))
}

function dataAtualFormatada() {
    const data = new Date();
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
}