const URL = 'http://localhost:3000'

let empresa = document.getElementById('empresa-consulta')
let supervisor = document.getElementById('supervisor-incluir')
let gerente = document.getElementById('gerente-incluir')

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

    $('#parceiro-incluir').attr('disabled', true)
    $('#supervisor-incluir').attr('disabled', true)
    $('#gerente-incluir').attr('disabled', true)

    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }

    fetch(URL + '/user/proposta/empresas', requestOptions)
    .then(response => response.json().then(function (data){
        for(let i = 0; i < data.length; i++){
            empresa.innerHTML += '<option value="' + data[i].empresa + '">' + data[i].empresa + '</option>;'
        }
    })).catch(error => console.log('error', error));

    fetch(URL + '/user/supervisor', requestOptions)
    .then(response => response.json().then(function (data){
        for(let i = 0; i < data.length; i++){
            supervisor.innerHTML += '<option value="' + data[i].parceiro + '">' + data[i].parceiro + '</option>;'
        }
    })).catch(error => console.log('error', error));

    fetch(URL + '/user/gerente', requestOptions)
    .then(response => response.json().then(function (data){
        for(let i = 0; i < data.length; i++){
            gerente.innerHTML += '<option value="' + data[i].gerente + '">' + data[i].gerente + '</option>;'
        }
    })).catch(error => console.log('error', error));
}

const breakModal = {
    empty: function () {
        $('.needs-validation').each(function () {
            this.reset();
        });
    },
    changeInsert: function () {
        document.getElementById("changeButtons").innerHTML =`
        <button type="button" class="btn btn-primary btn-icon-label" id="btn-insert"
        onclick="insertCancel()">
                            <span class="btn-inner--icon">
                                <i class="fas fa-plus"></i>
                            </span>
                            <span class="btn-inner--text">Incluir</span>
                        </button>
        `
    },

    changeUpdte: function(id, rows){

        arrays.arrayChangeButtonsRows.push(rows)

        document.getElementById("changeButtons").innerHTML =`
        <button type="button" class="btn btn-primary btn-icon-label" id="alterar" onclick="updateCancel(${id}, arrays.arrayChangeButtonsRows.pop())">
                            <span class="btn-inner--icon">
                                <i class="fas fa-plus"></i>
                            </span>
                            <span class="btn-inner--text">Salvar Alteração</span>
                        </button>
        `
    }
}

function change(){
    breakModal.empty();

    //Bloqueando campo
    $('#status-incluir').attr('disabled', true)

    //Escondendo campos Parceiro, Supervisor e gerente
    document.getElementById("id-parceiros").style.display = "none";

    //Preenche data Cadastro
    let today = new Date();
    let month = today.getMonth();
    let hours = today.getHours()
    let minute = today.getMinutes()
    let second = today.getSeconds()
    document.getElementById('dtCadastro-incluir').value = `${today.getDate()}/${(month + 1)}/${today.getFullYear()} ${hours}:${minute}:${second}`


    //Preenchendo Parceiro, Supervisor e Gerente
    document.getElementById('parceiro-incluir').value = sessionStorage.getItem('nome', 'nome')
    document.getElementById('supervisor-incluir').value = sessionStorage.getItem('supervisor', 'supervisor')
    document.getElementById('gerente-incluir').value = sessionStorage.getItem('gerente', 'gerente')

    breakModal.changeInsert();
}

//Inserir
function insertCancel(){

    const dtCadastro = $('#dtCadastro-incluir').val()
    const proposta = $('#proposta-incluir').val()
    //const status = $('#status-incluir').val()
    const motivoCancel = $('#moticoCancel-incluir').val()
    const parceiro = $('#parceiro-incluir').val()
    const supervisor = $('#supervisor-incluir').val()
    const gerente = $('#gerente-incluir').val()
    const obs = $('#observacao-incluir').val()

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

    const body ={
        data_inclusao:dtCadastro,
        proposta:proposta,
        //status:status,
        motivo_cancelamento1:motivoCancel,
        parceiro:parceiro,
        supervisor: supervisor,
        gerente:gerente,
        obs:obs,
        id_acesso: dataSession.id_acesso,
        cpf_parceiro: dataSession.cpf_parceiro,
        cpf_gerente: dataSession.gerente_cpf,
        cpf_supervisor: dataSession.supervisor_cpf
    }

    const raw = JSON.stringify(body)

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL + "/user/cancelamento/incluir", requestOptions).
    then(response => response.json()).
    then(function (res) {
        console.log(body)
        $('#alertSucessoCancel').show();
        $('#alertSucessoCancel').fadeIn(300).delay(3000).fadeOut(400);
        document.getElementById("alertSucessoCancel").textContent = "Solicitação de cancelameto incluida"
    }).catch(error => console.log('erro: ', error))
}

//Pesquisa
function search(){

    var node = document.getElementById("List");
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

    const motivo = $('#motivo-consulta').val();
    const proposta = $('#proposta-consulta').val();
    const status = $('#status-consulta').val();
    const parceiro = $('#empresa-consulta').val();
    const dtInclusao = $('#dtInclusao-consulta').val();
    const dtAlteracao = $('#dtAlteracao-consulta').val();

    const body = {
       motivo_cancelamento1:motivo,
       proposta:proposta,
       status:status,
       parceiro:parceiro,
       data_inclusao:dtInclusao,
       data_cancelamento:dtAlteracao
    }

    const raw = JSON.stringify(body)

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL + '/user/cancelamento/filtro', requestOptions).
    then(response => response.json().then(function (data) {
        //arrays.arrayUpdate = data;
        arrays.arrayId = []

        for (let i = 0; i < data.length; i++) {

            let specific_tbody = document.getElementById('List');
            let row = specific_tbody.insertRow(-1);
            let proposta = row.insertCell(-1);
            let parceiro = row.insertCell(-1);
            let supervisor = row.insertCell(-1);
            let motivo = row.insertCell(-1);
            let status = row.insertCell(-1);
            let data_inclusao = row.insertCell(-1);
            let data_alteracao = row.insertCell(-1);
            let responsavel = row.insertCell(-1);
            let empresa = row.insertCell(-1);
            let cpf = row.insertCell(-1);
            let alteraThis = row.insertCell(-1);

            let propostaText = document.createTextNode(`${data[i].proposta}`);
            proposta.appendChild(propostaText);

            let parceiroText = document.createTextNode(`${data[i].parceiro}`);
            parceiro.appendChild(parceiroText);

            let supervisorText = document.createTextNode(`${data[i].supervisor}`);
            supervisor.appendChild(supervisorText);

            let motivoText = document.createTextNode(`${data[i].motivo_cancelamento1}`);
            motivo.appendChild(motivoText);

            let statusText = document.createTextNode(`${data[i].status}`);
            status.appendChild(statusText);

            let data_inclusaoText = document.createTextNode(`${data[i].data_inclusao}`);
            data_inclusao.appendChild(data_inclusaoText);

            let data_alteracaoText = document.createTextNode(`${data[i].data_cancelamento}`);
            data_alteracao.appendChild(data_alteracaoText);

            let responsavelText = document.createTextNode(`${data[i].responsavel}`);
            responsavel.appendChild(responsavelText);

            let empresaText = document.createTextNode(`${data[i].empresa}`);
            empresa.appendChild(empresaText);

            let cpfText = document.createTextNode(`${data[i].cpf}`);
            cpf.appendChild(cpfText);

            arrays.arrayId.push(data[i].id_cancelamento)
            arrays.arrayRows.push(row)

            alteraThis.innerHTML =`
            <div class="actions ml-3" style="text-align: center;">
                                                <a href="#" class="action-item mr-2" data-toggle="modal"
                                                    data-target=".modal-alterar-solicancelamento" title="Alterar" id="icon-alterar"
                                                    onclick="updateCancelamento(arrays.arrayId[${i}], arrays.arrayRows[${i}])">
                                                    <i class="fas fa-external-link-alt"></i>
                                                </a>

                                            </div>
            `
        }
    })).catch(error => console.log('error: ', error))
}

//Modal
function updateCancelamento(id, row){

    //Desbloqueando campo
    $('#status-incluir').attr('disabled', false);

    //Aparecendo campos Parceiro, Supervisor e Gerente
    $('#id-parceiros').show();
    
    //breakModal.empty()
    breakModal.changeUpdte(id, row)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        id_cancelamento: id
    })

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }
    
    fetch(URL + "/user/cancelamento/modal", requestOptions).
    then(response => response.json().then(function (data) {
        //breakModal.changeUpdte(data.id_cancelamento, row)
        console.log(id)
        $('#dtCadastro-incluir').val(data.data_inclusao);
         $('#proposta-incluir').val(data.proposta);
         $('#status-incluir').val(data.status);
         $('#moticoCancel-incluir').val(data.motivo);
         $('#parceiro-incluir').val(data.parceiro);
         $('#supervisor-incluir').val(data.supervisor);
         $('#gerente-incluir').val(data.gerente);
         
    })).catch(error => console.log('erro: ', error))

    //breakModal.changeUpdte()
}

//Alterar
function updateCancel(id, row){

    const data = this.dateNow();

    const myheaders = new Headers()
    myheaders.append('Content-Type', 'application/json')

    const dtCad = $('#dtCadastro-incluir').val()
    const proposta = $('#proposta-incluir').val()
    const status = $('#status-incluir').val()
    const motivo = $('#moticoCancel-incluir').val()
    const parceiro = $('#parceiro-incluir').val()
    const supervisor = $('#supervisor-incluir').val()
    const gerente = $('#gerente-incluir').val()

    const body = {
        id_cancelamento:id,
        data_inclusao:dtCad,
        proposta:proposta,
        status:status,
        motivo_cancelamento1:motivo,
        parceiro:parceiro,
        supervisor:supervisor,
        gerente:gerente,
        data_atualizacao: data,
        responsavel: dataSession.nome
    }

    const raw = JSON.stringify(body)

    const requestOptions = {
        method: 'POST',
        headers: myheaders,
        body: raw,
        redirect: 'follow'
    }

    //console.log('esperando alterar')

    fetch(URL+'/user/cancelamento/alterar', requestOptions).
    then(response => response.json().then(function (data){

        console.log(data)
        $('#alertSucessoCancel').show();
        $('#alertSucessoCancel').fadeIn(300).delay(3000).fadeOut(400);
        document.getElementById("alertSucessoCancel").textContent = "Solicitação de cancelameto alterada"

        updateTbody(row)

    })).catch(error => console.log('error: ', error))
}

function updateTbody(l){
    const r = l.cells

    r[0].textContent = $("#proposta-incluir").val()
    r[1].textContent = $("#parceiro-incluir").val()
    r[2].textContent = $("#supervisor-incluir").val()
    r[3].textContent = $("#moticoCancel-incluir").val()
    r[4].textContent = $("#status-incluir").val()
    r[5].textContent = $("#dtCadastro-incluir").val()
    r[6].textContent = $("#dtAlteracao-consulta").val()
    r[7].textContent = ''
    r[8].textContent = ''
    r[9].textContent = ''
}