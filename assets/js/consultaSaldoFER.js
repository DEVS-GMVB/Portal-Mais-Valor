const URL = `http://localhost:3000`;

// VARS OF BUTTONS
const changeButtonInsert = document.getElementById("btn-incluir");
const changeButtonUpdate = document.getElementById("icon-alterar");
const makeInsert = document.getElementById("btn-insert");
const buttonSearch = document.getElementById("btn-buscar");

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

//OBJS
const obj = {}
const arrays = {
    arrayChangeCods: [],
    arrayRows: [],
    arrayChangeRows: [],
    contadorChangeCods: 0,
    contadorChangeRows: 0
}

window.onload = function(){
    document.getElementById('parceiro').value = sessionStorage.getItem('nome', 'nome')
    $('#parceiro').attr('disabled', true)
}

const breakModal = {
    changeInsert: function () {
        document.getElementById("changeButtons").innerHTML = `
        <button type="button" class="btn btn-primary btn-icon-label" id="btn-insert" onclick="insert()">
            <span class="btn-inner--icon">
                <i class="fas fa-plus"></i>
            </span>
            <span class="btn-inner--text">Incluir / Salvar Alteração</span>
        </button> 
        `
    },

    changeUpdate: function (codigo, row) {
        arrays.arrayChangeRows.push(row)
        arrays.arrayChangeCods.push(codigo)

        document.getElementById("changeButtons").innerHTML = `
        <button type="button" class="btn btn-primary btn-icon-label" id="btn-atualizar" onclick="update(arrays.arrayChangeCods[${arrays.contadorChangeCods++}], arrays.arrayChangeRows[${arrays.contadorChangeRows++}])">
            <span class="btn-inner--icon">
                <i class="fas fa-plus"></i>
            </span>
            <span class="btn-inner--text">Salvar Alteração</span>
        </button> 
        `
    }
}


changeButtonInsert.addEventListener('click', () => {
    //Quebra de referência de modais
    breakModal.changeInsert()
})

changeButtonUpdate.addEventListener('click', () => {
    breakModal.changeUpdate("")
})

buttonSearch.addEventListener('click', () => {
    var node = document.getElementById("List");
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const usuario = $('#usuario-consulta').val()
    const status = $('#status-consulta').val()
    const dtAtualizacao = $('#dataAtualização-consulta').val()
    const dtCadastro = $('#dataCadastro-consulta').val()
    const cpf = $('#cpf-consulta').val()

    const body = {
        usuario: usuario, //não sei se esta certo
        status: status,
        data_atualizacao: dtAtualizacao,
        data_envio: dtCadastro,
        cpf: cpf
    }

    const raw = JSON.stringify(body)

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL + '/user/saldofer/filtro', requestOptions).
    then(response => response.json().then(function (data) {
        arrays.arrayCods = []

        for (let i = 0; i < data.length; i++) {
            let specific_tbody = document.getElementById('List');
            let row = specific_tbody.insertRow(-1);
            let cpf = row.insertCell(-1);
            let dtCadastro = row.insertCell(-1);
            let status = row.insertCell(-1);
            let parceiro = row.insertCell(-1);
            let dtAtualizacao = row.insertCell(-1);
            let log = row.insertCell(-1);
            let alteraThis = row.insertCell(-1);

            let cpfText = document.createTextNode(`${data[i].cpf}`);
            cpf.appendChild(cpfText);

            let dtCadastroText = document.createTextNode(`${data[i].data_envio}`);
            dtCadastro.appendChild(dtCadastroText);

            let statusText = document.createTextNode(`${data[i].status}`);
            status.appendChild(statusText);

            let parceiroText = document.createTextNode(`${data[i].parceiro}`);
            parceiro.appendChild(parceiroText);

            let dataAtualizacaoText = document.createTextNode(`${data[i].data_atualizacao}`);
            dtAtualizacao.appendChild(dataAtualizacaoText);

            let logText = document.createTextNode(``);
            log.appendChild(logText);

            arrays.arrayCods.push(data[i].codigo);
            arrays.arrayRows.push(row)

            alteraThis.innerHTML = `<div class="actions ml-3" style="text-align: center;">
            <a href="#" class="action-item mr-2" data-toggle="modal"
                data-target=".modal-alterar-consultasaldofer" title="Alterar" id="icon-alterar" onclick="updateFields(arrays.arrayCods[${i}], arrays.arrayRows[${i}])">
                <i class="fas fa-external-link-alt"></i>
            </a>

        </div>
            `


        }
    }))

})


function insert() {
    const data = this.dateNow();

    const data_cadastro = $("#dataCadastro").val()
    const parceiro = $("#parceiro").val()
    const cpf = $("#cpf").val()

    const myheaders = new Headers();
    myheaders.append('Content-Type', 'application/json')

    const body = {
        data_envio: data_cadastro,
        parceiro: parceiro,
        cpf: cpf,
        id_acesso: dataSession.id_acesso,
        cpf_parceiro: dataSession.cpf_user,
        supervisor: dataSession.supervisor,
        cpf_supervisor: dataSession.supervisor_cpf,
        gerente: dataSession.gerente,
        cpf_gerente: dataSession.gerente_cpf,
        data_inclusao: data
    }

    const raw = JSON.stringify(body);

    const requestOptions = {
        method: 'POST',
        headers: myheaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL + '/user/saldofer/incluir', requestOptions).
    then(response => response.json().then(function (data) {

        const resultInsert = insertAnexo(data)
        Promise.resolve(resultInsert).then(function (value) {
            // console.log(value); // "Success"
            $('#messageSuccess').show();
            $('#messageSuccess').fadeIn(300).delay(3000).fadeOut(400);
            document.getElementById("messageSuccess").textContent = "Saldo FER incluido com sucesso"
        })

    })).catch(error => console.log('erro: ', error))
}

async function insertAnexo(data) {

    const fileInputs = document.querySelectorAll('div#div-fundo input[type="file"]')[0]
    const codigo = data.codigo

    var data = new FormData()
    data.append(fileInputs.name, fileInputs.files[0])

    await fetch(URL + `/user/saldofer/incluir/arquivos?codigo=${codigo}`, {
        method: 'POST',
        body: data
    }).
    then(response => response.json().then(function (data) {
        obj.transporter = data
    })).catch(error => console.log('error: ', error))

    return obj.transporter;
}

function updateFields(cod, row) {
    breakModal.changeUpdate(cod, row)


    const myheaders = new Headers()
    myheaders.append('Content-Type', 'application/json')

    const body = {
        codigo: cod
    }

    const raw = JSON.stringify(body)

    const requestOptions = {
        method: 'POST',
        headers: myheaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL + '/user/saldofer/modal', requestOptions).
    then(response => response.json().then(function (data) {
        $("#dataCadastro").val(data.data_envio)
        $("#parceiro").val(data.parceiro)
        $("#cpf").val(data.cpf)

        //OBS TRAZER O ARQUIVO1 E SETAR NO BUTTON DOWNLOAD

    })).catch(error => console.log('error: ', error))


}

function update(codigo, row) {

    const data = this.dateNow();

    const myheaders = new Headers()
    myheaders.append('Content-Type', 'application/json')

    const data_cadastro = $("#dataCadastro").val()
    const parceiro = $("#parceiro").val()
    const cpf = $("#cpf").val()

    

    const body = {
        codigo: codigo,
        data_envio: data_cadastro,
        parceiro: parceiro,
        cpf: cpf,
        responsavel: dataSession.nome,
        data_atualizacao: data
    }

    const raw = JSON.stringify(body)

    const requestOptions = {
        method: 'POST',
        headers: myheaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL+'/user/saldofer/atualizar', requestOptions).
    then(response => response.json().then(function (data){
        if(data) {
            $('#messageSuccess').show();
            $('#messageSuccess').fadeIn(300).delay(3000).fadeOut(400);
            document.getElementById("messageSuccess").textContent = "Saldo FER atualizado com sucesso"

            updateTbody(row, data.status)
        }
        
    })).catch(error => console.log('error: ', error))
    
}

function updateTbody(row, status) {
    let cells = row.cells
    cells[0].textContent = $("#cpf").val()
    cells[1].textContent = $("#dataCadastro").val()
    cells[2].textContent = status
    cells[3].textContent = $("#parceiro").val()

}