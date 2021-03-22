const URL = 'http://localhost:3000'

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

const breakModal = {
    empty: function () {
        $('.needs-validation').each(function () {
            this.reset();
        });
    },

    changeInsert: function(){
        document.getElementById('changeButtons').innerHTML = `
        <button type="button" class="btn btn-primary btn-icon-label" title="Analisar" id="btn-insert" onclick="insert()">
            
                <span class="btn-inner--icon">
                    <i class="fas fa-plus"></i>
                </span>
                <span class="btn-inner--text">Incluir</span>
            </button>
        `
    },

    changeUpdate: function(id, rows){

        arrays.arrayChangeButtonsRows.push(rows)

        document.getElementById('changeButtons').innerHTML = `
        <button type="button" class="btn btn-primary btn-icon-label" title="Analisar" id="btn-insert" onclick="update(${id}, arrays.arrayChangeButtonsRows.pop())">
            
                <span class="btn-inner--icon">
                    <i class="fas fa-plus"></i>
                </span>
                <span class="btn-inner--text">Alterar</span>
            </button>
        `
    }

}

function changee(){
    breakModal.changeInsert()
    //document.getElementById('cpf-incluir').value = sessionStorage.getItem('nome', 'nome')
}

function insert(){

   const data = dateNow() 

    const cpf = $('#cpf-incluir').val()
    const nome = $('#nome-incluir').val()
    const cnpj = $('#cnpj-incluir').val()
    const razaoSocial = $('#razaoSocial-incluir').val()
    const motivoCancel = $('#MotivoCancel-incluir').val()
    const solicitante = $('#solicitante-incluir').val()
    const cpfSocio1 = $('#cpf-socio1-incluir').val()
    const nomeSocio1 = $('#nome-socio1-incluir').val()
    const cpfSocio2 = $('#cpf-socio2-incluir').val()
    const nomeSocio2 = $('#nome-socio2-incluir').val()
    const cpfSocio3 = $('#cpf-socio3-incluir').val()
    const nomeSocio3 = $('#nome-socio3-incluir').val()
    const cpfSocio4 = $('#cpf-socio4-incluir').val()
    const nomeSocio4 = $('#nome-socio4-incluir').val()

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

    const body = {
            cpf:cpf, 
            data_criacao:data,
            // responsavel,
            nome:nome,
            cnpj:cnpj,
            razao_social:razaoSocial, 
            motivo:motivoCancel,
            solicitante:solicitante,
            nome_1:nomeSocio1,
            nome_2:nomeSocio2,
            nome_3:nomeSocio3,
            nome_4:nomeSocio4,
            cnpj_1:cpfSocio1,
            cnpj_2:cpfSocio2,
            cnpj_4:cpfSocio4,
            cnpj_3:cpfSocio3,
            //parceiro:sessionStorage.getItem('nome', 'nome')
            parceiro:dataSession.nome,
            supervisor:dataSession.supervisor,
            gerente:dataSession.gerente,
            id_acesso:dataSession.id_acesso,
            cpf_parceiro:dataSession.cpf_parceiro,
            cpf_supervisor:dataSession.supervisor_cpf,
            cpf_gerente:dataSession.gerente_cpf,
            data_inclusao:data       
    }

    const raw = JSON.stringify(body)

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL + "/user/parceirosrestritos/incluir", requestOptions).
    then(response => response.json()).
    then(function (res) {
        console.log(body)
        $('#alertSucessoParcReg').show();
        $('#alertSucessoParcReg').fadeIn(300).delay(3000).fadeOut(400);
        document.getElementById("alertSucessoParcReg").textContent = "Parceiro Registro incluido"
    }).catch(error => console.log('erro: ', error))
}

function search(){

    var node = document.getElementById("List");
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

    const parceiro = $('#parceiro-consulta').val()
    const cnpj = $('#cnpj-consulta').val()

    const body = {
        parceiro:parceiro,
        cnpj:cnpj
    }

    const raw = JSON.stringify(body)

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL + '/user/parceirosrestritos/filtro', requestOptions).
    then(response => response.json().then(function (data) {
        arrays.arrayUpdate = data;
        //arrays.arrayId = []

        for (let i = 0; i < data.length; i++) {
            let specific_tbody = document.getElementById('List');
            let row = specific_tbody.insertRow(-1);
            let cpf = row.insertCell(-1);
            let nomeParc = row.insertCell(-1)
            let dtInclusao = row.insertCell(-1)
            let loginCriacao = row.insertCell(-1)
            let cnpj = row.insertCell(-1)
            let razaoSocial = row.insertCell(-1)
            let motivoCancel = row.insertCell(-1)
            let solicitante = row.insertCell(-1)
            let alterar = row.insertCell(-1)

            let cpfText = document.createTextNode(`${data[i].cpf}`)
            cpf.appendChild(cpfText)

            let nomeParcText = document.createTextNode(`${data[i].responsavel}`)
            nomeParc.appendChild(nomeParcText)

            let dtInclusaoText = document.createTextNode(`${data[i].data_criacao}`)
            dtInclusao.appendChild(dtInclusaoText)

            let loginCriacaoText = document.createTextNode(``)
            loginCriacao.appendChild(loginCriacaoText)

            let cnpjText = document.createTextNode(`${data[i].cnpj}`)
            cnpj.appendChild(cnpjText)

            let razaoSocialText = document.createTextNode(`${data[i].razao_social}`)
            razaoSocial.appendChild(razaoSocialText)

            let motivoCancelText = document.createTextNode(`${data[i].motivo}`)
            motivoCancel.appendChild(motivoCancelText)

            let solicitanteText = document.createTextNode(`${data[i].solicitante}`)
            solicitante.appendChild(solicitanteText)

            // arrays.arrayId.push(data[i].id_cpf)
            // arrays.arrayRows.push(row)
            arrays.arrayRows[i] = row

            alterar.innerHTML = `
            <div class="actions ml-3">
                                                    <a href="#" class="action-item mr-2" data-toggle="modal" data-target=".modal-incl-alt-pr"
                                                     title="Alterar/Visualizar" onclick="iconUpdate(arrays.arrayUpdate[${i}].id_cpf, arrays.arrayRows[${i}])">
                                                        <i class="fas fa-eye"></i>
                                                    </a>
                                                 
                                                </div>
            `
        }
    })).catch(error => console.log('error: ', error))
}

function iconUpdate(id, row){
   // breakModal.changeUpdate(id, row)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        id_cpf: id
    })

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL + "/user/parceirosrestritos/modal", requestOptions).
    then(response => response.json().then(function (data) {
        breakModal.changeUpdate(data.id_cpf, row)
        $('#cpf-incluir').val(data.cpf)
        $('#nome-incluir').val(data.nome)
        $('#cnpj-incluir').val(data.cnpj)
        $('#razaoSocial-incluir').val(data.razao_social)
        $('#MotivoCancel-incluir').val(data.motivo)
        $('#solicitante-incluir').val(data.solicitante)
        $('#cpf-socio1-incluir').val(data.cnpj_1)
        $('#nome-socio1-incluir').val(data.nome_1)
        $('#cpf-socio2-incluir').val(data.cnpj_2)
        $('#nome-socio2-incluir').val(data.nome_2)
        $('#cpf-socio3-incluir').val(data.cnpj_3)
        $('#nome-socio3-incluir').val(data.nome_3)
        $('#cpf-socio4-incluir').val(data.cnpj_4)
        $('#nome-socio4-incluir').val(data.nome_4)

    })).catch(error => console.log('erro: ', error))
}

function update(id, row){

    const data = dateNow()

    const myheaders = new Headers()
    myheaders.append('Content-Type', 'application/json')

    const cpf = $('#cpf-incluir').val()
    const nome = $('#nome-incluir').val()
    const cnpj = $('#cnpj-incluir').val()
    const razaoSocial = $('#razaoSocial-incluir').val()
    const motivoCancel = $('#MotivoCancel-incluir').val()
    const solicitante = $('#solicitante-incluir').val()
    const cpfSocio1 = $('#cpf-socio1-incluir').val()
    const nomeSocio1 = $('#nome-socio1-incluir').val()
    const cpfSocio2 = $('#cpf-socio2-incluir').val()
    const nomeSocio2 = $('#nome-socio2-incluir').val()
    const cpfSocio3 = $('#cpf-socio3-incluir').val()
    const nomeSocio3 = $('#nome-socio3-incluir').val()
    const cpfSocio4 = $('#cpf-socio4-incluir').val()
    const nomeSocio4 = $('#nome-socio4-incluir').val()

    const body = {
        id_cpf:id,
        cpf:cpf, 
        // data_criacao, 
        responsavel:dataSession.nome,
        nome:nome,
        cnpj:cnpj,
        razao_social:razaoSocial, 
        motivo:motivoCancel,
        solicitante:solicitante,
        nome_1:nomeSocio1,
        nome_2:nomeSocio2,
        nome_3:nomeSocio3,
        nome_4:nomeSocio4,
        cnpj_1:cpfSocio1,
        cnpj_2:cpfSocio2,
        cnpj_4:cpfSocio4,
        cnpj_3:cpfSocio3,
        data_atualizacao:data
}

const raw = JSON.stringify(body)

    const requestOptions = {
        method: 'POST',
        headers: myheaders,
        body: raw,
        redirect: 'follow'
    }
    //console.log('gcfg')

    fetch(URL+'/user/parceirosrestritos/alterar', requestOptions).
    then(response => response.json().then(function (data){
        console.log(data)
        $('#alertSucessoParcReg').show();
        $('#alertSucessoParcReg').fadeIn(300).delay(3000).fadeOut(400);
        document.getElementById("alertSucessoParcReg").textContent = "Parceiro Registro alterado"
        updateTbody(row)
    })).catch(error => console.log('error: ', error))
}

function updateTbody(l){
    const r = l.cells

    r[0].textContent = $("#cpf-incluir").val()
    r[1].textContent = '' //nome parceiro
    r[2].textContent = '' //data inclusao
    r[3].textContent = '' //login criacao
    r[4].textContent = $("#cnpj-incluir").val()
    r[5].textContent = $("#razaoSocial-incluir").val()
    r[6].textContent = $("#MotivoCancel-incluir").val()
    r[7].textContent = $("#solicitante-incluir").val()
}

function apagar(){
    $("#idForm").each(function () {
        this.reset();
    })
}