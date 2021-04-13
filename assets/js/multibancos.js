const URL = 'http://localhost:3000/'

//blurs
const banco = document.getElementById("campo-banco");
//campos
const convenio = document.getElementById('campo-convenio');
const regra = document.getElementById("campo-regra");

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
    console.log(convenio.value)
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

    fetch(URL+"user/calculadora/regras", requestOptions)
        .then(response => response.json())
        .then(data => {
            regra.innerHTML = ``;

            for (let i in data) {
                regra.innerHTML += '<option value="' + data[i].regra + '">' + data[i].regra + '</option>;'
            }
        })
        .catch(error => console.log('error', error));
})