const URL = 'http://localhost:3000/'
//Selects
const tipoOperacao = document.getElementById("tipo-operacao-incluir");
const produto = document.getElementById("produto-incluir");
const bancoPortado = document.getElementById("banco-portador-incluir");
//blurs
const banco = document.getElementById("campo-banco");
//campos
const convenio = document.getElementById('campo-convenio');
const regra = document.getElementById("campo-regra");
const dataCalculo = document.getElementById("campo-data-calculo");
//btn
const btnSimular = document.getElementById("btn-simular");
const btnSalvar = document.getElementById("btn-salvar");
const btnIncluir = document.getElementById("incluir-button");
const btnNovaSimulacao = document.getElementById("btn-nova-simulacao");

window.onload = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(URL + "user/proposta/tipo", requestOptions)
        .then(response => response.json())
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                tipoOperacao.innerHTML += '<option value="' + data[i].tipo + '">' + data[i].tipo + '</option>;'
            }
        })

    fetch(URL + "user/proposta/produto", requestOptions)
        .then(response => response.json())
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                produto.innerHTML += '<option value="' + data[i].produto + '">' + data[i].produto + '</option>;'
            }
        })


    fetch(URL + "user/proposta/bancos", requestOptions)
        .then(response => response.json())
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                bancoPortado.innerHTML += '<option value="' + data[i].banco + '">' + data[i].banco + '</option>;'
            }
        })
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
    //Set date
    let data = new Date();
    dataCalculo.value = `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`;

    let valorParcela = document.getElementById("campo-valor-parcela").value;
    let valorContrato = document.getElementById("campo-valor-contrato").value;

    const {
        coef,
        taxa
    } = await tratarPromise(buscaCoefTaxa());
    if (!taxa) {

    }
    //Setar a taxa no campo de taxa A.M
    $("#campo-taxaAM").val(taxa);


    if (valorContrato) {
        const valorParcelaCampo = parseFloat(valorContrato.replace(/\./g, "")) * parseFloat(coef.replace(/\,/g, '.'));
        $("#campo-valor-parcela").val(`${valorParcelaCampo.toLocaleString('pt-br', {style: 'currency',currency: 'BRL'})}`);
    } else if (valorParcela) {
        const valorContratoCampo = parseFloat(valorParcela.replace(/\./g, "")) / parseFloat(coef.replace(/\,/g, "."));
        $("#campo-valor-contrato").val(`${valorContratoCampo.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        })}`);
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

    console.log(banco, convenio, regra, prazo);

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

    // console.log(resultado)

    return resultado;
}

btnSalvar.addEventListener('click', () => {
    $("#valor-parcela-incluir").val($("#campo-valor-parcela").val());

    $("#valor-entregue-incluir").val($("#campo-valor-contrato").val());

    $("#convenio-incluir").val($("#campo-convenio").val());
})

btnIncluir.addEventListener('click', () => {
    const dateNow = {
        date: () => {
            let date = new Date();
            let dateNow = `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
            return dateNow;
        }
    }



    //variaveis de sessao
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
    //**falta incluir na session */
    // const supervisor = sessionStorage.getItem() 
    // const gerente = sessionStorage.getItem()

    //inputs modal Nova proposta
    const numeroProposta = document.getElementById('numero-proposta-incluir');
    const dataCadastroIncluir = document.getElementById('data-cadastro-incluir');
    const banco = document.getElementById('banco-incluir');
    const status = document.getElementById('status-inclir');
    const produto = document.getElementById('produto-incluir');
    const tipoOperacao = document.getElementById('tipo-operacao-incluir');
    const valorEntregue = document.getElementById('valor-entregue-incluir');
    const valorTroco = document.getElementById('valor-troco-incluir');
    const convenio = document.getElementById('convenio-incluir');
    const bancoPortador = document.getElementById('banco-portador-incluir');
    const portabilidade = document.getElementById('portabilidade-incluir');
    const valorParcela = document.getElementById('valor-parcela-incluir');
    const seguro = document.getElementById('seguro-incluir');
    const parcelasPagas = document.getElementById('parcelas-pagas-incluir');
    const nomeCliente = document.getElementById('nome-cliente-incluir');
    const cpfCliente = document.getElementById('cpf-cliente-incluir');
    const ddd = document.getElementById('ddd-incluir');
    const telefoneCliente = document.getElementById('telefone-cliente-incluir');
    const correntista = document.getElementById('correntista-incluir');
    const telefoneSmsCliente = document.getElementById('telefone-sms-incluir');
    const matricula = document.getElementById('matricula-incluir');
    const desejaAgendarHorario = document.getElementById('agendar-horario-confirmacao-incluir');
    const melhorDatata = document.getElementById('melhor-data-incluir');
    const melhorHorario = document.getElementById('melhor-horario-incluir');
    const exercitoTemporario = document.getElementById('exercito-temporario-incluir');
    const codigoExercito = document.getElementById('codigo-exercito-incluir');
    const sexo = document.getElementById('sexo-incluir');
    const dataNascimento = document.getElementById('data-nascimento-incluir');
    const email = document.getElementById('email-incluir');
    const uf = document.getElementById('uf-incluir');
    const observacao = document.getElementById('observacao-incluir');

    const body = {
        // parceiro, id_acesso, supervisor, gerente, tipo_parceiro, 
        parceiro: dataSession.nome,
        id_acesso: dataSession.id_acesso,
        supervisor: dataSession.gerente,
        gerente: dataSession.supervisor,
        proposta: numeroProposta.value,
        data_envio: dataCadastroIncluir.value,
        banco: banco.value,
        // status:status.value,
        produto: produto.value,
        tipo: tipoOperacao.value,
        entregue: valorEntregue.value,
        valor_troco: valorTroco.value,
        convenio: convenio.value,
        banco_port1: bancoPortador.value,
        numero_portabilidade: portabilidade.value,
        parcela: valorParcela.value,
        seguro: seguro.value,
        qtdp_pagaport1: parcelasPagas.value,
        nome: nomeCliente.value,
        cpf: cpfCliente.value,
        telefone_ddd_1: ddd.value,
        telefone1: telefoneCliente.value,
        correntista: correntista.value,
        telefone4: telefoneSmsCliente.value,
        matricula: matricula.value,
        agendamento: desejaAgendarHorario.value,
        dia: melhorDatata.value,
        horario: melhorHorario.value,
        exercito: exercitoTemporario.value,
        senha_exercito: codigoExercito.value,
        sexo: sexo.value,
        data_nascimento: dataNascimento.value,
        email_cliente: email.value,
        uf: uf.value,
        observacao: observacao.value,
        cpf_supervisor: dataSession.supervisor_cpf,
        cpf_gerente: dataSession.gerente_cpf,
        cpf_parceiro: dataSession.cpf_user,
        data_inclusao: dateNow.date()
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(body);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(URL + "user/proposta/inclusao", requestOptions)
        .then(response => response.json())
        .then(function (data) {

            // console.log(data);
            var codigo = data.codigo;

            var input = document.querySelectorAll('form#files input[type="file"]')

            var data = new FormData()
            input.forEach(file => {
                data.append(file.name, file.files[0])
            });


            fetch(URL + `user/proposta/inclusao/arquivos?codigo=${codigo}`, {
                    method: 'POST',
                    body: data
                })
                .then((response) => response.json())
                .then((result) => {
                    console.log(result);
                })
                .catch((error) => {
                    console.error(error);
                });

        }).catch(error => console.log('error', error))

    $('#success').show();
    $('#success').fadeIn(300).delay(3000).fadeOut(400);
    document.getElementById("success").textContent = "Proposta incluida com sucesso"

})

btnNovaSimulacao.addEventListener('click', (e) => {
    const reset = document.querySelectorAll("#form-reset input")
    reset.forEach((item) => {
        item.value = ``;
    })
}, true)