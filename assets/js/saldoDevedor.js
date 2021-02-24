const URL = "http://localhost:3000";
var statuss = document.getElementById('Status')
var superv = document.getElementById('Supervisor')
var gerent = document.getElementById('Gerente')
var dtSuper = document.getElementById('DtPagSupervisor')
var parceiropromotor = document.getElementById('ParcPromo')

window.onload = function () {

    var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

//Supervisor
fetch(URL + "/user/supervisor", requestOptions)
.then(response => response.json())
.then(function (data) {
    for (let i = 0; i < data.length; i++) {
        superv.innerHTML += '<option value="' + data[i].parceiro + '">' + data[i].parceiro + '</option>;'


    }
}).catch(error => console.log('error', error));

//Status
fetch(URL + "/user/statusSaldo/saldoDevedor", requestOptions)
.then(response => response.json())
.then(function (data) {
    for (let i = 0; i < data.length; i++) {
        statuss.innerHTML += '<option value="' + data[i].status + '">' + data[i].status + '</option>;'


    }
}).catch(error => console.log('error', error));

//Gerente
fetch(URL + "/user/gerente", requestOptions)
.then(response => response.json())
.then(function (data) {
    for (let i = 0; i < data.length; i++) {
        gerent.innerHTML += '<option value="' + data[i].gerente + '">' + data[i].gerente + '</option>;'


    }
}).catch(error => console.log('error', error));

//Data Pagamento Supervisor
fetch(URL + "/user/comissao/datasupervisor", requestOptions)
.then(response => response.json().then(function (data) {
  for (let i = 0; i < data.length; i++) {
    dtSuper.innerHTML += '<option value="' + data[i].data_sup + '">' + data[i].data_sup + '</option>;'
  }
})).catch(error => console.log('error', error));

  /*Parceiro Promotor
    fetch(URL + "/user/comissao/promotor", requestOptions)
       .then(response => response.json().then(function (data) {
          for (let i = 0; i < data.length; i++) {
           parceiropromotor.innerHTML += '<option value="' + data[i].parceiro + '">' + data[i].parceiro + '</option>;'
       }
     })).catch(error => console.log('error', error));*/

}

function insertSaldo(){
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
    console.log(body)
    if (res === " Incluído com sucesso!") {
        $('#alertSucessoSaldo').show();
        $('#alertSucessoSaldo').fadeIn(300).delay(3000).fadeOut(400);
        document.getElementById("alertSucessoSaldo").textContent = "Saldo incluido com sucesso!"
    } else {
        $('#alertFalhaSaldo').show();
        $('#alertFalhaSaldo').fadeIn(300).delay(3000).fadeOut(400);
        document.getElementById("alertFalhaSaldo").textContent = "Não foi possível incluir saldo, já existente"
    }

}).catch(error => console.log('erro: ', error))
$('#btnAlterar').remove();
}

/*function Buscar(){

    var node = document.getElementById("list");
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let bparcpromo = document.getElementById('ParcPromo').value
    let bproposta = document.getElementById('Proposta').value
    let bsuper = document.getElementById('Supervisor').value
    let bstatus = document.getElementById('Status').value
    let bgerente = document.getElementById('Gerente').value
    let bdtsuper = document.getElementById('DtPagSupervisor').value

    var raw = JSON.stringify({
        //parceiro:bparcpromo,//parceiro promotor
        parceiro: bsuper,
       //proposta
       status:bstatus,
       gerente:bgerente,
       data_sup:bdtsuper
    })
}*/

let apagar = document.getElementById("btnapagar")
apagar.addEventListener('click', () => {
    $("#idForm").each(function () {
        this.reset();
    })
})

function updateSaldo() {
    //Limpa os campos na troca de incluir para alterar
    breakModal.empty()
    breakModal.changeButtonUpdate()
}

function change() {
    breakModal.changeButtonInsert()
    breakModal.changeButtonInsert()
}


const breakModal = {
    empty: function () {
        $('.needs-validation').each(function () {
            this.reset();
        });
    },

    changeButtonUpdate: function () {
        document.getElementById("divButton").innerHTML = `
        <button type="button" class="btn btn-primary btn-icon-label" id="btnIncluirSalvar"
        onclick="updateSaldoDevedor()">
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


