const URL = 'http://localhost:3000';

const insert = document.getElementById("insert");

const functionsRequests = {
    insert: () => {
        const cpf_cliente = $("#cpf_cliente").val();
        const motivo = $("#motivo").val();
        const parceiro = $("#parceiro").val();

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            cpf_cliente,
            motivo,
            parceiro
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(URL+"/user/lista/negra/inserir", requestOptions)
            .then(response => response.json())
            .then(result => {

                console.log(result);
                if(result.message === "Cpf já existente na lista negra") {
                    $('#error').show();
                    $('#error').fadeIn(300).delay(3000).fadeOut(400);
                    document.getElementById("error").textContent = "CPF cliente já existe na Lista Negra";

                } else {
                    $('#success').show();
                    $('#success').fadeIn(300).delay(3000).fadeOut(400);
                    document.getElementById("success").textContent = "CPF cliente incluido com sucesso na Lista Negra";
                }
            })
            .catch(error => console.log('error', error));
    }
}

const handleFunctionsRequests = {
    get: (target, name) => {
        if (target[name]) {
            return target[name];
        } else {
            throw new Error("Prop does not exist")
        }
    },

    set: (target, name, value) => {
        if (target[name]) {
            if (value) {
                target[name] = value
            } else {
                throw new Error("Value does not exist")
            }
        }
    }
}

const functionsRequestsProxy = new Proxy(functionsRequests, handleFunctionsRequests)

insert.addEventListener('click', () => {
    functionsRequestsProxy.insert()
})