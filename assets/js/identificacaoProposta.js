//const URL = `https://api-portalmaisvalor.herokuapp.com`;
const URL = 'http://localhost:3000'

let supervisor = document.getElementById('Sup')
let gerente = document.getElementById('Gere')
let tipoOperacao = document.getElementById('TpOperacao')
let prod = document.getElementById('Produto')

window.onload = function () {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(URL + "/user/supervisor", requestOptions)
        .then(response => response.json())
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                supervisor.innerHTML += '<option value="' + data[i].parceiro + '">' + data[i].parceiro + '</option>;'
            }
        }).catch(error => console.log('error', error));

    fetch(URL + "/user/gerente", requestOptions)
        .then(response => response.json().then(function (data) {
            for (let i = 0; i < data.length; i++) {
                gerente.innerHTML += '<option value="' + data[i].gerente + '">' + data[i].gerente + '</option>;'
            }
        })).catch(error => console.log('error', error));

    fetch(URL + "/user/proposta/tipo", requestOptions)
        .then(response => response.json())
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                tipoOperacao.innerHTML += '<option value="' + data[i].tipo + '">' + data[i].tipo + '</option>;'
            }
        })

    fetch(URL + "/user/proposta/produto", requestOptions)
        .then(response => response.json())
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                prod.innerHTML += '<option value="' + data[i].produto + '">' + data[i].produto + '</option>;'

            }
        })
}

const arrays = {
    arrayCpfs: arrayCpfs = [],
    arrayLinhas: arrayLinhas = []
}

const sessionBrowser = {
    tipo_usuario: sessionStorage.getItem('tipo_usuario', 'tipo_usuario'),
    cnpj_matr: sessionStorage.getItem('cnpj_matriz', 'cnpj_matriz'),
    perfil: sessionStorage.getItem('perfil', 'perfil'),
    nome: sessionStorage.getItem('nome', 'nome')
}

function search() {

    var node = document.getElementById("Lista");
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const cpf = $("#cpf").val()
    const parcpromo = $("#ParcPromo").val()
    const proposta = $("#Prop").val()
    const mes = $("#Mes").val()
    const tipo = $("#Tipo").val()
    const dtCadastro = $("#DtCad").val()
    const supervisor = $("#Sup").val()
    const gerente = $("#Gere").val()

    const body = {
        cnpj_matriz: sessionBrowser.cnpj_matr,
        perfil: sessionBrowser.perfil,
        tipo_usuario: sessionBrowser.tipo_usuario,
        nome: sessionBrowser.nome,
        cpf: cpf,
        parceiro: parcpromo,
        proposta: proposta,
        mes: mes,
        tipo: tipo,
        data_envio: dtCadastro,
        supervisor: supervisor,
        gerente: gerente
    }

    const raw = JSON.stringify(body)

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL+'/user/proposta/identificacao/filtro', requestOptions).
    then(response => response.json().then(function (data) {
        // console.log(data)

        for (let i = 0; i < data.length; i++) {
            let specific_tbody = document.getElementById('Lista');
            let row = specific_tbody.insertRow(-1);
            let propostas = row.insertCell(-1)
            let nomeCliente = row.insertCell(-1)
            let cpfCliente = row.insertCell(-1)
            let dataCadastro = row.insertCell(-1)
            let parceiroProm = row.insertCell(-1)
            let vlEntregue = row.insertCell(-1)
            let convenio = row.insertCell(-1)
            let Tipo = row.insertCell(-1)
            let Status = row.insertCell(-1)
            let dataAtualizacao = row.insertCell(-1)
            let logAlteracao = row.insertCell(-1)
            let altera = row.insertCell(-1)

            let propostasText = document.createTextNode(`${data[i].proposta}`);
            propostas.appendChild(propostasText);

            let nomeClineteText = document.createTextNode(`${data[i].nome}`);
            nomeCliente.appendChild(nomeClineteText);

            let cpfClienteText = document.createTextNode(`${data[i].cpf}`);
            cpfCliente.appendChild(cpfClienteText);

            let dataCadastroText = document.createTextNode(`${data[i].data_envio}`);
            dataCadastro.appendChild(dataCadastroText);

            let parceiroPromText = document.createTextNode(`${data[i].parceiro}`);
            parceiroProm.appendChild(parceiroPromText);

            let vlEntregueText = document.createTextNode(`${data[i].entregue}`);
            vlEntregue.appendChild(vlEntregueText)

            let convenioText = document.createTextNode(`${data[i].convenio}`);
            convenio.appendChild(convenioText);

            let TipoText = document.createTextNode(`${data[i].tipo}`);
            Tipo.appendChild(TipoText);

            let StatusText = document.createTextNode(`${data[i].status}`);
            Status.appendChild(StatusText);

            let dataAtualizacaotext = document.createTextNode(`${data[i].data_atualizacao}`);
            dataAtualizacao.appendChild(dataAtualizacaotext);

            let logAlteracaoText = document.createTextNode(``);
            logAlteracao.appendChild(logAlteracaoText);

            arrays.arrayCpfs.push(data[i].cpf)


            altera.innerHTML = ` 
            <div class="actions ml-3" style="text-align: center;">
                <a href="#" class="action-item mr-2" data-toggle="modal" onclick="updateIdentProp(arrays.arrayCpfs[${i}])"
                    data-target=".modal-incluirdocumentacao"
                    title="Incluir Documentação" id="btnAlterar">
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>`
        }
    })).catch(error => console.log('error: ', error))
}

function insert() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

    const body = {
        proposta: $("#NPosposta").val(),
        data_envio: $("#DtCadastro").val(),
        mes: $("#MesRef").val(),
        status: $("#Status").val(),
        entregue: $("#ValorEntregue").val(),
        banco_origi: $("#BancoOrgi").val(),
        produto: $("#Produto").val(),
        tipo: $("#TpOperacao").val(),
        cpf: $("#CpfCliente").val(),
        nome: $("#NmCliente").val()
    }

    const raw = JSON.stringify(body)

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch('http://localhost:3000/user/proposta/identificacao/inclusao', requestOptions).
    then(response => response.json().then(function (data) {
        if(data.resp === "Proposta já existente") {
            $('#alertFalhaidentProposta').show();
            $('#alertFalhaidentProposta').fadeIn(300).delay(3000).fadeOut(400);
            document.getElementById("alertFalhaidentProposta").textContent = "Não foi possível incluir identificação da proposta, já existente"
        } else {
            $('#alertSucessoidentProposta').show();
            $('#alertSucessoidentProposta').fadeIn(300).delay(3000).fadeOut(400);
            document.getElementById("alertSucessoidentProposta").textContent = "Identificação proposta incluido com sucesso!"
        }

    })).catch(error => console.log('error: ', error))

}

function updateIdentProp(cpf) {
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    const body = {
        cpf: cpf
    }

    const raw = JSON.stringify(body)

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL+"/user/proposta/identificacao/modal", requestOptions).
    then(response => response.json().then(function (data) {
        $("#NomeCliente").val(data.nome)
        $("#DDDTelefone").val(data.telefone_ddd_1)
        $("#TelCliente").val(data.telefone)
        $("#Correntista").val(data.correntista)
        $("#TelConfirm").val(data.telefone_confirmacao)
        $("#SistemaTel").val(data.sistema_tel)
        $("#ExerctTemp").val(data.exercito)
        $("#SenhaExerct").val(data.senha_exercito)
        $("#Sexo").val(data.sexo)
        $("#Email").val(data.email)
        $("#DtNasci").val(data.data_nascimento)
        $("#UFEnd").val(data.endereco_uf_comercial)
        $("#CpfCli").val(data.cpf)
        $("#NCliente").val(data.nome)
        $("#Observacao").val(data.observacao)
        // $("#NomeCliente").val(data.nome)

    })).catch(error => console.log('erro: ', error))

}

function updateIProposta(){
    //alert('hfdsk')

    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    const nomeCli = $("#NomeCliente").val()
    const dddtel = $("#DDDTelefone").val()
    const tel = $("#telCli").val()
    const correntista = $("#Correntista").val()
    const telConfimacao = $("#TelConfirm").val()
    const sistemaTel = $("#SistemaTel").val()
    const exercTemp = $("#ExerctTemp").val()
    const senhaExer = $("#SenhaExerct").val()
    const sexo = $("#Sexo").val()
    const email = $("#Email").val()
    const dtNascimento = $("#DtNasci").val()
    const uf = $("#UFEnd").val()
    const cpf = $("#CpfCli").val()
    const observacao = $("#Observacao").val()
    const file1 = $("#file-1").val()
    const file2 = $("#file-2").val()
    const file3 = $("#file-3").val()
    const file4 = $("#file-4").val()
    const file5 = $("#file-5").val()
    const file6 = $("#file-6").val()
    const file7 = $("#file-7").val()
    const file8 = $("#file-8").val()
    const file9 = $("#file-9").val()

    const body = {
        nome: nomeCli,
        telefone_ddd_1: dddtel, //não tenho certeza
        telefone: tel,
        correntista: correntista,
        telefone_confirmacao: telConfimacao,
        sistema_tel: sistemaTel,
        exercito: exercTemp,
        senha_exercito: senhaExer,
        sexo: sexo,
        email_cliente: email,
        data_nascimento: dtNascimento,
        uf: uf,
        cpf: cpf,
        observacao: observacao,
        arquivo1: file1,
        arquivo2: file2,
        arquivo3: file3,
        arquivo4: file4,
        arquivo5: file5,
        arquivo6: file6,
        arquivo7: file7,
        arquivo8: file8,
        arquivo9: file9,
    }

    const raw = JSON.stringify(body)

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL+'', requestOptions).
    then(response => response.text().then(function (data) {
        /*if (arquivo1 != ok) {
           alert('Adicione um aquivo')
        } else{
            alert('Alteração feita')
        }*/
        
    })).catch(erro => console.log('error: ', erro))
}


function deleteFields() {
    $("#camposIdentificacaoProposta").each(function () {
        this.reset()
    })
}