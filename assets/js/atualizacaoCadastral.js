const URL = `http://localhost:3000`

const obj = {}

const supervisorSelect = document.getElementById("supervisor");
const gerenteSelect = document.getElementById("gerente");
const statusSelect = document.getElementById("status");

const change = document.querySelector("div#change");

const changeInsert = document.getElementById("btn-incluir");
const changeUpdate = document.getElementById("btn-atualizar");

const search = document.getElementById("btn-buscar");

//OBJS
const selects = {
    supervisor: function () {
        fetch(URL + '/user/supervisor', {
            method: 'GET',
            redirect: 'follow'
        }).then(response => response.json().then(function (data) {
            for (let i = 0; i < data.length; i++) {
                supervisorSelect.innerHTML += '<option value="' + data[i].parceiro + '">' + data[i].parceiro + '</option>;'
            }
        })).catch(error => console.log('error: ', error))
    },

    gerente: () => {
        fetch(URL + '/user/gerente', {
            method: 'GET',
            redirect: 'follow'
        }).then(response => response.json().then(function (data) {
            for (let i = 0; i < data.length; i++) {
                gerenteSelect.innerHTML += '<option value="' + data[i].gerente + '">' + data[i].gerente + '</option>;'
            }
        })).catch(error => console.log('error: ', error))
    },

}

const dateNow = {
    date: () => {
        let date = new Date();
        let dateNow = `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        return dateNow;
    }
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


const breakModal = {
    empty: () => {
        $(".needs-validation").each(function () {
            this.reset()
        })
        $("#obs_campo").val("")
    },

    changeButtonInsert: () => {

        change.innerHTML = `
        <button type="button" class="btn btn-primary btn-icon-label" id="btn-insert" onclick="insert()">
            <span class="btn-inner--icon">
                <i class="fas fa-plus"></i>
            </span>
            <span class="btn-inner--text">Incluir / Salvar Alteração</span>
        </button>
        `
    },

    changeButtonUpdate: (cod, linha) => {
        //Limpa array para preservar custo de processamento
        arrays.arrayTransporterRows = [];
        arrays.arrayTransporterCode = [];

        arrays.arrayTransporterCode.push(cod)
        arrays.arrayTransporterRows.push(linha)

        change.innerHTML = `
        <button type="button" class="btn btn-primary btn-icon-label" id="btn-update" onclick="updateAtualizacaoCadastral(arrays.arrayTransporterCode[${arrays.arrayTransporterCode.length - 1}], arrays.arrayTransporterRows[${arrays.arrayTransporterRows.length - 1}])">
            <span class="btn-inner--icon">
                <i class="fas fa-plus"></i>
            </span>
            <span class="btn-inner--text">Salvar Alteração</span>
        </button>
        `
    }
}



const arrays = {
    arrayCodigos: [],
    arrayTransporterCode: [],
    arrayRows: [],
    arrayTransporterRows: []
}

window.onload = function () {
    //Selects
    selects.supervisor();
    selects.gerente()

    $('#parceiro').attr('disabled', true);
    $('#supervisor').attr('disabled', true);
    $('#gerente').attr('disabled', true);
}


changeInsert.addEventListener('click', () => {
    breakModal.empty();
    breakModal.changeButtonInsert();
    document.getElementById('parceiro').value = sessionStorage.getItem('nome', 'nome')
    document.getElementById('supervisor').value = sessionStorage.getItem('supervisor', 'supervisor')
    document.getElementById('gerente').value = sessionStorage.getItem('gerente', 'gerente')
})

changeUpdate.addEventListener("click", () => {
    // Quebra de referência de modais
    breakModal.empty()
    breakModal.changeButtonUpdate();
})

search.addEventListener('click', () => {
    //Evitar duplicatas
    let node = document.getElementById("List")
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild)
    }

    const tipo = $("#tipo-filtro").val()
    const cpf = $("#cpf-filtro").val()
    const status = $("#status-filtro").val()

    const myheaders = new Headers()
    myheaders.append('Content-Type', 'application/json')

    const body = {
        userTipousuario: "", //dataSession.tipo_usuario,
        userPerfil: "",  //dataSession.perfil,
        userCpf: "",
        tipo: tipo,
        cpf: cpf,
        status: status
    }

    const raw = JSON.stringify(body)

    const requestOptions = {
        method: 'POST',
        headers: myheaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL + '/user/atualizacao/cliente/filtro', requestOptions).
    then(response => response.json().then(function (data) {

        arrays.arrayCodigos = [];
        arrays.arrayRows = [];

        for (let i = 0; i < data.length; i++) {
            let specific_tbody = document.getElementById("List")
            let row = specific_tbody.insertRow(-1);
            let cpf_cliente = row.insertCell(-1);
            let nome_cliente = row.insertCell(-1);
            let parceiro = row.insertCell(-1);
            let supervisor = row.insertCell(-1);
            let tipo = row.insertCell(-1);
            let correntista = row.insertCell(-1);
            let status = row.insertCell(-1);
            let sub_status = row.insertCell(-1);
            let data_cadastro = row.insertCell(-1);
            let data_atualizacao = row.insertCell(-1);
            let log_atualizacao = row.insertCell(-1);
            let observacao = row.insertCell(-1)
            let altera_icon = row.insertCell(-1);

            let cpf_cliente_text = document.createTextNode(`${data[i].cpf}`)
            cpf_cliente.appendChild(cpf_cliente_text)

            let nome_cliente_text = document.createTextNode(`${data[i].nome}`)
            nome_cliente.appendChild(nome_cliente_text)

            let parceiro_text = document.createTextNode(`${data[i].parceiro}`)
            parceiro.appendChild(parceiro_text)

            let supervisor_text = document.createTextNode(`${data[i].supervisor}`)
            supervisor.appendChild(supervisor_text)

            let tipo_text = document.createTextNode(`${data[i].tipo}`)
            tipo.appendChild(tipo_text)

            let correntista_text = document.createTextNode(`${data[i].correntista}`)
            correntista.appendChild(correntista_text)

            let status_text = document.createTextNode(`${data[i].status}`)
            status.appendChild(status_text)

            let substatus_text = document.createTextNode(`${data[i].sub_status}`)
            sub_status.appendChild(substatus_text)

            let data_cadastro_text = document.createTextNode(`${data[i].data_cadastro}`)
            data_cadastro.appendChild(data_cadastro_text)

            let data_atualizacao_text = document.createTextNode(`${data[i].data_cadastro}`)
            data_atualizacao.appendChild(data_atualizacao_text)

            let log_atualizacao_text = document.createTextNode(``)
            log_atualizacao.appendChild(log_atualizacao_text)

            let observacao_text = document.createTextNode(`${data[i].obs}`)
            observacao.appendChild(observacao_text)

            arrays.arrayCodigos.push(data[i].codigo);
            arrays.arrayRows.push(row)

            altera_icon.innerHTML = `
            <div class="actions ml-3" style="text-align: center;">
                <a href="#" class="action-item mr-2" data-toggle="modal" onclick="handleCods(arrays.arrayCodigos[${i}],arrays.arrayRows[${i}])"
                    data-target=".modal-alterar-atualizacaocadastral" title="Alterar" id="btn-atualizar">
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
            `
        }

    })).catch(error => console.log('error: ', error))
})

function insert() {
    const data_cadastro = $("#data-cadastro").val();
    const status = $("#status").val();
    const sub_status = $("#substatus").val();
    const tipo_atualizacao = $("#tipo_atualizacao").val();
    const correntista = $("#correntista").val();
    const cpf_cliente = $("#cpf_cliente").val();
    const nome_cliente = $("#nome_cliente").val();
    const parceiro = $("#parceiro").val();
    const supervisor = $("#supervisor").val();
    const gerente = $("#gerente").val();
    const obs = $("#obs_campo").val();

    const myheaders = new Headers();
    myheaders.append('Content-Type', 'application/json');

    const body = {
        data_cadastro: data_cadastro,
        status: status,
        sub_status: sub_status,
        tipo_atualizacao: tipo_atualizacao,
        correntista: correntista,
        cpf: cpf_cliente,
        nome: nome_cliente,
        parceiro: dataSession.nome,
        supervisor: dataSession.supervisor,
        gerente: dataSession.gerente,
        obs: obs,
        data_inclusao: dateNow.date(),
        id_acesso: dataSession.id_acesso,
        cpf_supervisor: dataSession.supervisor_cpf,
        cpf_gerente: dataSession.gerente_cpf,
        cpf_parceiro: dataSession.cpf_user,
        gerente: dataSession.gerente,
        supervisor: dataSession.supervisor,
    }

    const raw = JSON.stringify(body)

    const requestOptions = {
        method: 'POST',
        headers: myheaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL + '/user/atualizacao/cliente/inserir', requestOptions).
    then(response => response.json().then(function (data) {

        console.log(data)

        const responseInsert = insertAnexo(data)
        Promise.resolve(responseInsert).then(function (value) {
            // console.log(value); // "Success"
        })

        $('#messageSuccess').show();
        $('#messageSuccess').fadeIn(300).delay(3000).fadeOut(400);
        document.getElementById("messageSuccess").textContent = "Atualização cadastral incluido com sucesso"

    })).catch(error => console.log('Error: ', error))
}

async function insertAnexo(data) {

    const fileInputs = document.querySelectorAll('div#arrayFile input[type="file"]')
    const codigo = data.codigo

    var data = new FormData();
    fileInputs.forEach(file => {
        data.append(file.name, file.files[0])
    })

    await fetch(URL + `/user/atualizacao/cliente/anexo?codigo=${codigo}`, {
        method: 'POST',
        body: data
    }).
    then(response => response.json().then(function (data) {
        // console.log(data)
        obj.transporter = data
    })).catch(error => console.log('error: ', error))

    return obj.transporter;
}

function handleCods(cod, linha) {
    //Configs de quebra de referência de modais
    breakModal.changeButtonUpdate(cod, linha);
    breakModal.empty();

    const myheaders = new Headers();
    myheaders.append('Content-Type', 'application/json');

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

    fetch(URL + '/user/atualizacao/cliente/modal', requestOptions).
    then(response => response.json().then(function (data) {

        populaCampos(data);

    })).catch(error => console.log('error:', error))
}

function populaCampos(data) {
    $("#data-cadastro").val(data.data_cadastro);
    $("#status").val(data.status);
    $("#substatus").val(data.sub_status);
    $("#tipo_atualizacao").val(data.tipo);
    $("#correntista").val(data.correntista);
    $("#cpf_cliente").val(data.cpf);
    $("#nome_cliente").val(data.nome);
    $("#parceiro").val(data.parceiro);
    $("#supervisor").val(data.supervisor);
    $("#gerente").val(data.gerente);
    $("#obs_campo").val(data.obs);
}

function updateAtualizacaoCadastral(id, linha) {
    const data_cadastro = $("#data-cadastro").val();
    const status = $("#status").val();
    const sub_status = $("#substatus").val();
    const tipo_atualizacao = $("#tipo_atualizacao").val();
    const correntista = $("#correntista").val();
    const cpf_cliente = $("#cpf_cliente").val();
    const nome_cliente = $("#nome_cliente").val();
    // const parceiro = $("#parceiro").val();
    // const supervisor = $("#supervisor").val();
    // const gerente = $("#gerente").val();
    const obs = $("#obs_campo").val();


    const myheaders = new Headers();
    myheaders.append('Content-Type', 'application/json');

    const body = {
        codigo: id,
        data_cadastro: data_cadastro,
        status: status,
        sub_status: sub_status,
        tipo_atualizacao: tipo_atualizacao,
        correntista: correntista,
        cpf: cpf_cliente,
        nome: nome_cliente,
        obs: obs,
        responsavel: dataSession.nome,
        data_atualizacao: dateNow.date()
    }

    const raw = JSON.stringify(body)

    const requestOptions = {
        method: 'POST',
        headers: myheaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL + '/user/atualizacao/cliente/atualizar/campos', requestOptions).
    then(response => response.json().then(function (data) {

        const resultUpdateAnexo = insertAnexo(data);
        Promise.resolve(resultUpdateAnexo).then(function (value) {
            // console.log(value); // "Success"
            updateTbody(linha, value.tipo, value.data_atualizacao)

            $('#messageSuccess').show();
            $('#messageSuccess').fadeIn(300).delay(3000).fadeOut(400);
            document.getElementById("messageSuccess").textContent = "Cadastro do cliente atualizado com sucesso"
        })

    })).catch(error => console.log('error: ', error))
}

function updateTbody(row, tipo,data_atualizacao) {
    let cells = row.cells
    cells[0].textContent = $("#cpf_cliente").val();
    cells[1].textContent = $("#nome_cliente").val();
    cells[2].textContent = $("#parceiro").val();
    cells[3].textContent = $("#supervisor").val();
    cells[4].textContent = tipo
    cells[5].textContent = $("#correntista").val();
    cells[6].textContent = $("#status").val();
    cells[7].textContent = $("#substatus").val();
    cells[8].textContent = $("#data-cadastro").val();
    cells[9].textContent = data_atualizacao;
    cells[11].textContent = $("#obs_campo").val();
}