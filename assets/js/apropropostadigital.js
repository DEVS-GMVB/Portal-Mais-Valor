const URL = 'http://localhost:3000'
let tipo = document.getElementById('tipo-incluir')
let bancoOrigiIncluir = document.getElementById('banco-incluir')
let bancoOrigiPesquisa = document.getElementById('banco-pesquisa')

const arrays = {
    arrayUpdate: arrayUpdate = [],
    arrayRows: arrayRows = [],
    arrayId: arrayId = [],
    arrayChangeButtonsRows: arrayChangeButtonsRows = []
}

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

window.onload = function(){
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }

    fetch(URL + '/user/proposta/tipo', requestOptions)
    .then(response => response.json().then(function (data){
        for(let i = 0; i < data.length; i++){
            tipo.innerHTML += '<option value="' + data[i].tipo + '">' + data[i].tipo + '</option>;'
        }
    })).catch(error => console.log('error', error));

    fetch(URL + '/user/bancoOrigi', requestOptions)
    .then(response => response.json().then(function(data){
        for(let i = 0; i < data.length; i++){
            bancoOrigiIncluir.innerHTML += '<option value="' + data[i].banco + '">' + data[i].banco + '</options>'
            bancoOrigiPesquisa.innerHTML += '<option value="' + data[i].banco + '">' + data[i].banco + '</options>'
        }
    }))
    
    //Bloqueando campos
    $('#parceiro-incluir').attr('disabled', true);
    $('#supervidor-incluir').attr('disabled', true);
    $('#gerente-incluir').attr('disabled', true);

}

const breakModal = {

    //Limpar campos
    empty: function () {
        $('.needs-validation').each(function () {
            this.reset();
        });
    },

    changeInsert: function () {
        document.getElementById('changeButtons').innerHTML = `
        <button type="button" class="btn btn-primary btn-icon-label" id="btn-insert" onclick="insert()">
                        <span class="btn-inner--icon">
                            <i class="fas fa-plus"></i>
                        </span>
                        <span class="btn-inner--text">Incluir</span>
                    </button>
        `
    },

    changeUpdate: function (id, rows) {

        arrays.arrayChangeButtonsRows.push(rows)

        document.getElementById('changeButtons').innerHTML = `
        <button type="button" class="btn btn-primary btn-icon-label" id="btn-update" onclick="alter(${id}, arrays.arrayChangeButtonsRows.pop())">
                        <span class="btn-inner--icon">
                            <i class="fas fa-plus"></i>
                        </span>
                        <span class="btn-inner--text">Alterar</span>
                    </button>
        `
    }
}

function change() {
    //Limpar campos
    breakModal.empty()

    //Bloqueando campo
    $('#status-incluir').attr('disabled', true)

    //Escondendo campos Parceiro, Supervisor e Gerente
    document.getElementById('id-parceiros').style.display = 'none'

    //Preenche data Cadastro
    let today = new Date();
    let month = today.getMonth();
    let hours = today.getHours()
    let minute = today.getMinutes()
    let second = today.getSeconds()
    document.getElementById('dtCadastro-incluir').value = `${today.getDate()}/${(month + 1)}/${today.getFullYear()} ${hours}:${minute}:${second}`

    //Parceiro Supervisor e Gerente da sessão
    document.getElementById('parceiro-incluir').value = sessionStorage.getItem('nome', 'nome')    
    document.getElementById('supervidor-incluir').value = sessionStorage.getItem('supervisor', 'supervisor')
    document.getElementById('gerente-incluir').value = sessionStorage.getItem('gerente', 'gerente')

    //Insert
    breakModal.changeInsert()
}

function insert() {

    const data = this.dateNow()

    const dtCadastro = $('#dtCadastro-incluir').val()
    const proposta = $('#proposta-incluir').val()
    //const status = $('#status-incluir').val()
    const banco = $('#banco-incluir').val()
    const tipo = $('#tipo-incluir').val()
    const cpf = $('#cpf-incluir').val()

    //Sujeito a tirar
    const parceiro = $('#parceiro-incluir').val()
    const supervisor = $('#supervidor-incluir').val()
    const gerente = $('#gerente-incluir').val()

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

    const body = {
        data_inclusao:dtCadastro,
        proposta:proposta,
        status,
        banco:banco,
        tipo:tipo,
        cpf:cpf,

        //Sujeito a tirar
        parceiro:parceiro,
        supervisor:supervisor,
        gerente:gerente,
        id_acesso:dataSession.id_acesso,
        cpf_parceiro:dataSession.cpf_user,
        cpf_supervisor:dataSession.supervisor_cpf,
        cpf_gerente:dataSession.gerente_cpf,
        data_atualizacao:data
    }

    const raw = JSON.stringify(body)

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL + "/user/aprovacaoproposta/incluir", requestOptions).
    then(response => response.json()).
    then(function (res) {
        console.log(body)
        $('#alertSucessoAproProp').show();
        $('#alertSucessoAproProp').fadeIn(300).delay(3000).fadeOut(400);
        document.getElementById("alertSucessoAproProp").textContent = "Aprovação proposta digital incluida"
    }).catch(error => console.log('erro: ', error))
}

function search() {

    var node = document.getElementById("List");
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

    const banco = $('#banco-pesquisa').val()
    const proposta = $('#proposta-pesquisa').val()
    const status = $('#status-pesquisa').val()

    const body = {
        banco: banco,
        proposta: proposta,
        status: status
    }

    const raw = JSON.stringify(body)

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL + '/user/aprovacaoproposta/filtro', requestOptions).
    then(response => response.json().then(function (data) {

        arrays.arrayUpdate = data;
        //arrays.arrayId = []

        for (let i = 0; i < data.length; i++) {
            let specific_tbody = document.getElementById('List');
            let row = specific_tbody.insertRow(-1);
            let proposta = row.insertCell(-1);
            let cpf = row.insertCell(-1);
            let parceiro = row.insertCell(-1);
            let supervisor = row.insertCell(-1);
            let banco = row.insertCell(-1);
            let tipo = row.insertCell(-1);
            let status = row.insertCell(-1);
            let dtInclusao = row.insertCell(-1);
            let dtAlteracao = row.insertCell(-1);
            let responsavel = row.insertCell(-1);
            let alterar = row.insertCell(-1);

            let propostaText = document.createTextNode(`${data[i].proposta}`);
            proposta.appendChild(propostaText);

            let cpfText = document.createTextNode(`${data[i].cpf}`)
            cpf.appendChild(cpfText)

            let parceiroText = document.createTextNode(`${data[i].parceiro}`)
            parceiro.appendChild(parceiroText)

            let supervisorText = document.createTextNode(`${data[i].supervisor}`)
            supervisor.appendChild(supervisorText)

            let bancoText = document.createTextNode(`${data[i].banco}`)
            banco.appendChild(bancoText)

            let tipoText = document.createTextNode(`${data[i].tipo}`)
            tipo.appendChild(tipoText)

            let statusText = document.createTextNode(`${data[i].status}`)
            status.appendChild(statusText)

            let dtInclusaoText = document.createTextNode(`${data[i].data_inclusao}`)
            dtInclusao.appendChild(dtInclusaoText)

            let dtAlteracaotext = document.createTextNode(`${data[i].data_alteracao}`)
            dtAlteracao.appendChild(dtAlteracaotext)

            let responsavelText = document.createTextNode(`${data[i].responsavel}`)
            responsavel.appendChild(responsavelText)

            //  arrays.arrayId.push(data[i].id_fluxo)
            //  arrays.arrayRows.push(row)

            arrays.arrayRows[i] = row

            alterar.innerHTML = `
            <div class="actions ml-3" style="text-align: center;">
                                                <a href="#" class="action-item mr-2" data-toggle="modal"
                                                    data-target=".modal-alterar-apropropostadigital" title="Alterar" id="icon-update"
                                                    onclick="iconUpdate(arrays.arrayUpdate[${i}].id_fluxo, arrays.arrayRows[${i}])">
                                                    <i class="fas fa-external-link-alt"></i>
                                                </a>

                                            </div>
            `
        }
    })).catch(error => console.log('error: ', error))
}

function iconUpdate(id, row) {

    //Desbloqueando campo
    $('#status-incluir').attr('disabled', false)

    //Aparecendo campos Parceiros, Supervisor e Gerente
    $('#id-parceiros').show();

    //breakModal.changeUpdate(id, row)//Passar id e linha aqui quando para quando for alterar

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        id_fluxo: id
    })

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL + "/user/aprovacaoproposta/modal", requestOptions).
    then(response => response.json().then(function (data) {
        breakModal.changeUpdate(data.id_fluxo, row)
        console.log(id)
        $('#dtCadastro-incluir').val(data.data_inclusao);
        $('#proposta-incluir').val(data.proposta);
        $('#status-incluir').val(data.status);
        $('#banco-incluir').val(data.banco);
        $('#tipo-incluir').val(data.tipo);
        $('#cpf-incluir').val(data.cpf);
        $('#parceiro-incluir').val(data.parceiro);
        //document.getElementById('parceiro-incluir') = sessionStorage.getItem('userTipousuario')
        //let tipo_usuario = sessionStorage.getItem('tipo_usuario', 'tipo_usuario');
        $('#supervidor-incluir').val(data.supervisor);
        $('#gerente-incluir').val(data.gerente);
    })).catch(error => console.log('erro: ', error))
}

function alter(id, row){

    const data = this.dateNow()

    const myheaders = new Headers()
    myheaders.append('Content-Type', 'application/json')

    const dtCadastro = $('#dtCadastro-incluir').val()
    const proposta = $('#proposta-incluir').val()
    const status = $('#status-incluir').val()
    const banco = $('#banco-incluir').val()
    const tipo = $('#tipo-incluir').val()
    const cpf = $('#cpf-incluir').val()

    const body = {
        id_fluxo:id,
        data_inclusao:dtCadastro,
        proposta:proposta,
        status:status,
        banco:banco,
        tipo:tipo,
        cpf:cpf,
        data_alteracao: data,
        responsavel:dataSession.nome,
        data_atualizacao: data
    }
    
    const raw = JSON.stringify(body)

    const requestOptions = {
        method: 'POST',
        headers: myheaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL+'/user/aprovacaoproposta/alterar', requestOptions).
    then(response => response.json().then(function (data){
        console.log(data)
        $('#alertSucessoAproProp').show();
        $('#alertSucessoAproProp').fadeIn(300).delay(3000).fadeOut(400);
        document.getElementById("alertSucessoAproProp").textContent = "Aprovação proposta digital alterada"
        updateTbody(row)
    })).catch(error => console.log('error: ', error))
}

function updateTbody(l){
    const r = l.cells

    r[0].textContent = $("#proposta-incluir").val()
    r[1].textContent = $("#cpf-incluir").val()
    r[2].textContent = $("#parceiro-incluir").val()
    r[3].textContent = $("#supervidor-incluir").val()
    r[4].textContent = $("#banco-incluir").val()
    r[5].textContent = $("#tipo-incluir").val()
    r[6].textContent = $("#status-incluir").val()
    r[7].textContent = $("#dtCadastro-incluir").val()
    r[8].textContent = ''
    r[9].textContent = ''
}