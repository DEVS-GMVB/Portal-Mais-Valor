const URL = 'http://localhost:3000'
// VARS
let saldoDevSelect = document.getElementById("SaldoDev")
let dtSuperSelect = document.getElementById('DtPagSupervisor')
let statusSelect = document.getElementById("Status")
let apagar = document.getElementById("btnapagar")

// SELECTS
window.onload = function () {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }

    fetch(URL + "/user/statusSaldo/saldoDevedor", requestOptions)
        .then(response => response.json())
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                statusSelect.innerHTML += '<option value="' + data[i].status + '">' + data[i].status + '</option>;'


            }
        }).catch(error => console.log('error', error));
}

// OBJETOS
const arrays = {
    arrayUpdate: arrayUpdate = [],
    arrayLinhas: arrayLinhas = [],
    arrayChangeButtonsRows: arrayChangeButtonsRows = []
}

const breakModal = {
    empty: function () {
        $('.needs-validation').each(function () {
            this.reset();
        });
    },
    changeButtonUpdate: function (idCodigo, l) {

        arrays.arrayChangeButtonsRows.push(l)

        document.getElementById("divButton").innerHTML = `
        <button type="button" class="btn btn-primary btn-icon-label" id="btnIncluirSalvar"
        onclick="updateSaldoDevedor(${idCodigo}, arrays.arrayChangeButtonsRows.pop())">
            <span class="btn-inner--icon">
                <i class="fas fa-plus"></i>
            </span>
            <span class="btn-inner--text">Salvar Alteração</span>
        </button>
        `
    },
    changeButtonInsert: function () {
        document.getElementById("divButton").innerHTML = `
        <button type="button" class="btn btn-primary btn-icon-label" id="btnIncluirSalvar"
            onclick="insertSaldo()">
            <span class="btn-inner--icon">
                <i class="fas fa-plus"></i>
            </span>
            <span class="btn-inner--text">Incluir / Salvar Alteração</span>
        </button>
        `
    }
}


function insertSaldo() {
    //Campos
    const dtCad = $("#DtCadastro").val()
    const parc = $("#Parceiro").val()
    const Cpf = $("#Cpf").val()
    const mat = $("#matricula").val()
    const dtnasc = $("#DtNascimento").val()
    const conve = $("#Convenio").val()
    const Parcela = $("#Parcela").val()
    const bancoOrigi = $("#bancoOrigi").val()
    const idt = $("#IdtMargem").val()
    const saldo = $("#SaldoDev").val()
    const prazo = $("#PrazoRestante").val()
    const taxa = $("#TaxaJuros").val()

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

    const body = {
        data_envio: dtCad,
        parceiro: parc,
        cpf: Cpf,
        matricula: mat,
        data_nascimento: dtnasc,
        convenio: conve,
        parcela: Parcela,
        banco_origi: bancoOrigi,
        idt_margem: idt,
        saldo_devedor: saldo,
        prazo_restante: prazo,
        taxa_juros: taxa
    }
    const raw = JSON.stringify(body)

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL + "/user/incluirSaldo/saldoDevedor", requestOptions).
    then(response => response.text()).
    then(function (res) {
        if (res === "Não foi possível incluir saldo, já existente") {
            $('#alertFalhaSaldo').show();
            $('#alertFalhaSaldo').fadeIn(300).delay(3000).fadeOut(400);
            document.getElementById("alertFalhaSaldo").textContent = "Não foi possível incluir saldo, já existente"
        } else {
            $('#alertSucessoSaldo').show();
            $('#alertSucessoSaldo').fadeIn(300).delay(3000).fadeOut(400);
            document.getElementById("alertSucessoSaldo").textContent = "Saldo incluido com sucesso!"
        }

    }).catch(error => console.log('erro: ', error))

}

apagar.addEventListener('click', () => {
    $("#idForm").each(function () {
        this.reset();
    })
})

function Buscar() {

    var node = document.getElementById("listItens");
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const parceiro = $("#ParcPromo").val()
    const status = $("#Status").val()

    const body = {
        parceiro: parceiro,
        status: status,
    }

    const raw = JSON.stringify(body)

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL + '/user/solicitacoes/saldoDevedor', requestOptions).
    then(response => response.json().then(function (data) {
        arrays.arrayUpdate = data;
        // console.log(arrays.arrayUpdate)
        for (let i = 0; i < data.length; i++) {

            let specific_tbody = document.getElementById('listItens');
            let row = specific_tbody.insertRow(-1);
            let cpff = row.insertCell(-1);
            let dtCad = row.insertCell(-1);
            let conv = row.insertCell(-1);
            let matri = row.insertCell(-1);
            let sta = row.insertCell(-1);
            let parceiropromo = row.insertCell(-1);
            let parcela = row.insertCell(-1);
            let renda = row.insertCell(-1);
            let dataNasc = row.insertCell(-1);
            let dataAtualizacao = row.insertCell(-1);
            let logAlteracao = row.insertCell(-1);
            let bancoOrigi = row.insertCell(-1);
            let saldoDev = row.insertCell(-1);
            let prazoRestante = row.insertCell(-1);
            let alteraThis = row.insertCell(-1);


            let cpffText = document.createTextNode(`${data[i].cpf}`);
            cpff.appendChild(cpffText);

            let dtCadText = document.createTextNode(`${data[i].data_envio}`);
            dtCad.appendChild(dtCadText);

            let convText = document.createTextNode(`${data[i].convenio}`);
            conv.appendChild(convText);

            let matriText = document.createTextNode(`${data[i].matricula}`);
            matri.appendChild(matriText);

            let statuaText = document.createTextNode(`${data[i].status}`);
            sta.appendChild(statuaText);

            let parceiropromoText = document.createTextNode(`${data[i].parceiro}`);
            parceiropromo.appendChild(parceiropromoText);

            let parcelaText = document.createTextNode(`${data[i].parcela}`);
            parcela.appendChild(parcelaText);

            let rendaText = document.createTextNode(`R$ ${data[i].renda}`);
            renda.appendChild(rendaText);

            let dataNascText = document.createTextNode(`${data[i].data_nascimento}`);
            dataNasc.appendChild(dataNascText);

            let dataAtualizacaoText = document.createTextNode(`${data[i].data_atualizacao}`)
            dataAtualizacao.appendChild(dataAtualizacaoText)

            let logAlteracaoText = document.createTextNode(``)
            logAlteracao.appendChild(logAlteracaoText)

            let bancoOrigiText = document.createTextNode(`${data[i].banco_origi}`)
            bancoOrigi.appendChild(bancoOrigiText)

            let saldoDevedorText = document.createTextNode(`R$ ${data[i].saldo_devedor1}`)
            saldoDev.appendChild(saldoDevedorText)

            let prazoRestanteText = document.createTextNode(`${data[i].prazo_restante}`)
            prazoRestante.appendChild(prazoRestanteText)

            arrays.arrayLinhas[i] = row

            alteraThis.innerHTML = `
            <div class="actions ml-3" style="text-align: center;">
                <a href="#" class="action-item mr-2" data-toggle="modal"
                    data-target=".modal-alterar-saldodevedor" onclick="updateSaldo(arrays.arrayUpdate[${i}].cpf, arrays.arrayLinhas[${i}])" title="Alterar">
                    <i class="fas fa-external-link-alt"></i>
                </a>

            </div>
            `
        }
    })).catch(error => console.log('error: ', error))

}

function updateSaldo(cpf, linha) {
    //Configs de troca de modais
    breakModal.empty();

    //Bloqueando os campos
    $('#Cpf').attr('disabled', true);
    $("#Parceiro").attr('disabled', true)
    $("#IdtMargem").attr('disabled', true)
    $("#Convenio").attr('disabled', true)
    $("#matricula").attr('disabled', true)
    $("#Parcela").attr('disabled', true)
    $("#bancoOrigi").attr('disabled', true)
    $("#DtCadastro").attr('disabled', true)
    $("#DtNascimento").attr('disabled', true)

    //Desbloqueando os campos
    $("#SaldoDev").attr('disabled', false)
    $("#PrazoRestante").attr('disabled', false)
    $("#TaxaJuros").attr('disabled', false)

    // console.log(cpf)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        cpf: cpf
    })

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL + "/user/alterar/modal", requestOptions).
    then(response => response.json().then(function (data) {
        breakModal.changeButtonUpdate(data.codigo, linha);

        $("#DtCadastro").val(data.data_envio);
        $("#Parceiro").val(data.parceiro);
        $("#Cpf").val(data.cpf);
        $("#matricula").val(data.matricula);
        $("#DtNascimento").val(data.data_nascimento);
        $("#Convenio").val(data.convenio);
        $("#Parcela").val(data.parcela);
        $("#bancoOrigi").val(data.banco_origi);
        $("#IdtMargem").val(data.idt_margem);
        $("#SaldoDev").val(data.saldo_devedor1);
        $("#PrazoRestante").val(data.prazo_restante);
        $("#TaxaJuros").val(data.taxa_juros);
    })).catch(error => console.log('erro: ', error))
}

function change() {
    // Configs de troca de modais
    breakModal.empty();
    breakModal.changeButtonInsert();

    //Desbloqueando os campos
    $('#Cpf').attr('disabled', false)
    //$("#Parceiro").attr('disabled', false)
    $("#IdtMargem").attr('disabled', false)
    $("#Convenio").attr('disabled', false)
    $("#matricula").attr('disabled', false)
    $("#Parcela").attr('disabled', false)
    $("#bancoOrigi").attr('disabled', false)
    $("#DtCadastro").attr('disabled', false)
    $("#DtNascimento").attr('disabled', false)

    //Bloqueando os campos
    document.getElementById('Parceiro').value = sessionStorage.getItem('nome', 'nome')
    $('#Parceiro').attr('disabled', true)
    $("#SaldoDev").attr('disabled', true)
    $("#PrazoRestante").attr('disabled', true)
    $("#TaxaJuros").attr('disabled', true)
}

function updateSaldoDevedor(codigo, row) {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    const saldo_devedor1 = $("#SaldoDev").val()
    const prazo_restante = $("#PrazoRestante").val()
    const taxa_juros = $("#TaxaJuros").val()
    const responsavel = ""
    const data_atualizacao = new Date();
    const status = ""

    const body = {
        saldo_devedor1: saldo_devedor1,
        prazo_restante: prazo_restante,
        taxa_juros: taxa_juros,
        responsavel: responsavel,
        data_atualizacao: data_atualizacao,
        status: status,
        codigo: codigo
    }

    const raw = JSON.stringify(body)

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL+'/user/alterarSaldo/saldoDevedor', requestOptions).
    then(response => response.text().then(function (data) {
        $('#alertSucessoSaldo').show();
        $('#alertSucessoSaldo').fadeIn(300).delay(3000).fadeOut(400);
        document.getElementById("alertSucessoSaldo").textContent = "Saldo alterado com sucesso!"

        // Update fields
        updateTbody(row,data_atualizacao)
        
    })).catch(erro => console.log('error: ', erro))
}

function updateTbody(l,date) {
    const r = l.cells
    
    r[0].textContent = $("#Cpf").val()
    r[1].textContent = $("#DtCadastro").val()
    r[2].textContent = $("#Convenio").val()
    r[3].textContent = $("#matricula").val()
    r[4].textContent = $("#Status").val()
    r[5].textContent = $("#Parceiro").val()
    r[6].textContent = $("#Parcela").val()
    r[7].textContent = '' //Renda
    r[8].textContent = $('#DtNascimento').val() 
    r[9].textContent = '' //Data atualização
    r[10].textContent = '' //Log alteração
    r[11].textContent = $("#bancoOrigi").val()
    r[12].textContent =  $("#SaldoDev").val()
    r[13].textContent = $("#PrazoRestante").val()
}