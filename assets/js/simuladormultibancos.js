const URL = 'http://localhost:3000/'

//blurs
const banco = document.getElementById("campo-banco");
//campos
const convenio = document.getElementById('campo-convenio');
const regra = document.getElementById("campo-regra");
const dataCalculo = document.getElementById("campo-data-calculo");
//btn
const btnSimular = document.getElementById("btn-simular");

window.onload = () => {
    let data = new Date();
    dataCalculo.value = `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`
}

banco.addEventListener('blur', () => {
    if (banco.value) {

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json")

        const body = {
            banco: banco.value
        }

        const raw = JSON.stringify(body);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        }

        fetch(URL + 'user/calculadora/convenios', requestOptions).
        then(response => response.json().then(function (data) {
            convenio.innerHTML = ``

            for (let i = 0; i < data.length; i++) {
                convenio.innerHTML += '<option value="' + data[i].convenio + '">' + data[i].convenio + '</option>;'
            }
        })).catch(error => console.log('error', error));
    }
});

convenio.addEventListener('blur', () => {
    if (convenio.value) {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            convenio: convenio.value
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(URL + "user/calculadora/regras", requestOptions)
            .then(response => response.json())
            .then(data => {
                regra.innerHTML = ``;
                for (let i in data) {
                    regra.innerHTML += '<option value="' + data[i].regra + '">' + data[i].regra + '</option>;'
                }
            })
            .catch(error => console.log('error', error));
    }
})

btnSimular.addEventListener('click', async () => {
    let valorParcela = document.getElementById("campo-valor-parcela").value;
    let valorContrato = document.getElementById("campo-valor-contrato").value;


    const {coef, taxa} = await tratarPromise(buscaCoefTaxa());
    //Setar a taxa no campo de taxa A.M
    $("#campo-taxaAM").val(taxa);

    if(valorContrato) {
        let valorParcelaCampo = parseFloat(valorContrato) * parseFloat(coef);
        console.log(parseFloat(coef) + ' depois da converção')
        console.log(typeof parseFloat(coef))
        $("#campo-valor-parcela").val(valorParcelaCampo);
    } else if (valorParcela) {
        let valorContratoCampo = valorParcela / coef;
        $("#campo-valor-contrato").val(valorContratoCampo);
    }

    
})

async function tratarPromise(promise) {
    const resultado = await promise;
    return resultado;
}

async function buscaCoefTaxa() {
    let resultado;

    const banco = document.getElementById("campo-banco").value;
    const convenio = document.getElementById('campo-convenio').value;
    const regra = document.getElementById("campo-regra").value;
    const prazo = document.getElementById("campo-quantidade-parcela").value;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        prazo,
        banco,
        convenio,
        regra
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    await fetch(URL + "user/calculadora/coef", requestOptions)
        .then(response => response.json())
        .then(result => {
            resultado = result;
        })
        .catch(error => console.log('error', error));

    return resultado;
}