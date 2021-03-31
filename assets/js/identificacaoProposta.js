const URL = 'http://localhost:3000';

let supervisor = document.getElementById('Sup')
let gerente = document.getElementById('Gere')
let tipoOperacao = document.getElementById('TpOperacao')
let prod = document.getElementById('Produto')
const buttonUpdateIP = document.getElementById("updateIP")

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

function dateNow() {
    let date = new Date();
    let dateNow = `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    return dateNow;
}


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
    arrayIds: arrayIds = [],
    arrayLinhas: arrayLinhas = [],
    arrayCodigos: arrayCodigos = [],
    arrayRows: arrayRows = []
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

    fetch(URL + '/user/proposta/identificacao/filtro', requestOptions).
    then(response => response.json().then(function (data) {
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

            arrays.arrayIds.push(data[i].codigo)
            arrays.arrayRows.push(row)

            altera.innerHTML = ` 
            <div class="actions ml-3" style="text-align: center;">
                <a href="#" class="action-item mr-2" data-toggle="modal" onclick="updateIdentProp(arrays.arrayIds[${i}], arrays.arrayRows[${i}])"
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
        nome: $("#NmCliente").val(),
        parceiro:dataSession.nome,
        supervisor:dataSession.supervisor,
        gerente:dataSession.gerente,
        id_acesso:dataSession.id_acesso,
        cpf_parceiro:dataSession.cpf_user,
        cpf_supervisor:dataSession.supervisor_cpf,
        cpf_gerente:dataSession.gerente_cpf,
        data_inclusao: dateNow()
    }

    const raw = JSON.stringify(body)

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL + '/user/proposta/identificacao/inclusao', requestOptions).
    then(response => response.json().then(function (data) {

        if (data.resp === "Proposta já existente") {
            $('#alertFalhaAcesso').show();
            $('#alertFalhaAcesso').fadeIn(300).delay(3000).fadeOut(400);
            document.getElementById("alertFalhaAcesso").textContent = "Não foi possível incluir identificação da proposta, já existente"
        } else {
            $('#alertSucessoAcesso').show();
            $('#alertSucessoAcesso').fadeIn(300).delay(3000).fadeOut(400);
            document.getElementById("alertSucessoAcesso").textContent = "Identificação proposta incluido com sucesso!"
        }

    })).catch(error => console.log('error: ', error))

}

function updateIdentProp(codigo, rows) {
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    const body = {
        codigo: codigo
    }

    const raw = JSON.stringify(body)

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL + "/user/proposta/identificacao/modal", requestOptions).
    then(response => response.json().then(function (data) {
        //Passando o código no momento em que popula
        arrays.arrayCodigos.push(data.codigo)
        buttonUpdate.codigo.push(arrays.arrayCodigos.pop())
        buttonUpdate.linhaTable.push(rows)

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
        $("#NomeCliente").val(data.nome)

    })).catch(error => console.log('erro: ', error))

}

// Intermediário transporter de dados

const buttonUpdate = {
    codigo: codigo = [],

    linhaTable: linhaTable = [],

    changeID: function () {
        const codi = this.codigo[this.codigo.length - 1] // O(1)
        return codi;
    },
    changeRows: function () {
        const r = this.linhaTable[this.linhaTable.length - 1] // O(1)
        return r;
    }
}

function updateIP() {
    let cod = buttonUpdate.changeID()
    let l = buttonUpdate.changeRows()

    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    const nomeCli = $("#NCliente").val()
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

    const body = {
        codigo: cod,
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
        responsavel:dataSession.nome,
        data_atualizacao: dateNow()
    }

    const raw = JSON.stringify(body)

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL + '/user/proposta/identificacao/atualizar', requestOptions).
    then(response => response.json().then(function (data) {

        var input = document.querySelectorAll("form#files input[type='file']")
        var codigo = data.codigo

        var data = new FormData()
        input.forEach(file => {
            // console.log(file.name)
            data.append(file.name, file.files[0])
        })


        fetch(URL + `/user/proposta/identificacao/atualizar/arquivos?codigo=${codigo}`, {
            method: 'POST',
            body: data,
        }).then(response => response.json().then((data) => {

            updateTbody(l.cells)

            $('#sucesso').show();
            $('#sucesso').fadeIn(300).delay(3000).fadeOut(400);
            document.getElementById("sucesso").textContent = "Alteração da Identificação proposta feita com sucesso!"

        })).catch((error) => {
            console.error(error)
        })

    })).catch(erro => console.log('error: ', erro))
}


function deleteFields() {
    $("#camposIdentificacaoProposta").each(function () {
        this.reset()
    })
}

function updateTbody(cells) {
    cells[1].textContent = $("#NCliente").val();
    cells[2].textContent = $("#CpfCli").val()
}

const botao_excel = document.getElementById("planilhaExcel");

botao_excel.addEventListener('click', () => {
  var table2excel = new Table2Excel();
  table2excel.export(document.querySelector("#table"));

})