//URL
const URL = 'http://localhost:3000';

//BTNS
const changeButton = document.getElementById("change");
const buttonFilter = document.getElementById("btn-buscar");

//Arrays
const arrays = {
    arrayCodigos: [],
    arrayTransporterCode: [],
    arrayRows: [],
    arrayTransporterRows: []
}

//Data session browser


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


// Quebra referência de modais
const breakModal = {
    emptyFields: (valueDisable) => {

        $("#fieldsUpdate input").prop('readonly', valueDisable);

        $(".needs-validation").each(function () {
            this.reset()
        })
    },

    changeButtonInsert: () => {
        const statusSelect = document.getElementById("status");
        statusSelect.value = 'SOLICITACAO DE TERMO AUTORIZACAO INSS'

        changeButton.innerHTML = `
        <button type="button" class="btn btn-primary btn-icon-label" onclick=(functionsRequestsProxy.insert())>
            <span class="btn-inner--icon">
                <i class="fas fa-plus"></i>
            </span>
            <span class="btn-inner--text">Incluir / Salvar Alteração</span>
        </button>
        `
    },

    changeButtonUpdate: (cod, row) => {
        // Limpar arrays para cada chamada desta função, ou seja quando trocar de button 
        arrays.arrayTransporterRows = [];
        arrays.arrayTransporterCodec = [];

        arrays.arrayTransporterCode.push(cod);
        arrays.arrayTransporterRows.push(row);

        changeButton.innerHTML = `
        <button type="button" class="btn btn-primary btn-icon-label" onclick="functionsRequestsProxy.updateFieldFile(arrays.arrayTransporterCode[${arrays.arrayTransporterCode.length - 1}], arrays.arrayTransporterRows[${arrays.arrayTransporterRows.length - 1}])">
            <span class="btn-inner--icon">
                <i class="fas fa-plus"></i>
            </span>
            <span class="btn-inner--text">Salvar Alteração</span>
        </button>
        `
    }
}

//Trap
const handler = {
    get: function (target, name) {
        if (target[name]) {
            return target[name];
        } else {
            throw new Error("Prop does not exists")
        }
    },

    set: (target, name, value) => {
        if (target[name]) {
            target[name] = value;
        }
    }
}

const obj = {}

//Proxy Break Modal
const breakModalProx = new Proxy(breakModal, handler)


function buttonInsert() {
    // breakModal.emptyFields();
    // breakModal.changeButtonInsert();
    breakModalProx.emptyFields(false);
    breakModalProx.changeButtonInsert();

}




const functionsRequests = {
    filter: () => {

        let node = document.getElementById("List")
        while (node.hasChildNodes()) {
            node.removeChild(node.lastChild)
        }


        const parceiroFiltro = $("#usuario-filtro").val();
        const statusFiltro = $("#status-filtro").val();
        const cpfFiltro = $("#cpf-filtro").val();
        const dataAlteracaoFiltro = $("#data-atualizacao-filtro").val();
        const dataCadastroFiltro = $("#data-cadastro-filtro").val();


        const myheaders = new Headers();
        myheaders.append('Content-Type', 'application/json');

        const body = {
            userTipousuario: "",
            userPerfil: "",
            userCpf: "",
            parceiro: parceiroFiltro,
            status_inss: statusFiltro,
            cpf: cpfFiltro,
            data_alteracao: dataAlteracaoFiltro,
            data_cadastro: dataCadastroFiltro
        }

        const raw = JSON.stringify(body)

        fetch(URL + '/user/autorizacao/inss/filtro', {
            method: 'POST',
            headers: myheaders,
            body: raw,
            redirect: 'follow'
        }).
        then(response => response.json().then(function (data) {
            arrays.arrayCodigos = [];
            arrays.arrayRows = [];

            for (let i = 0; i < data.length; i++) {

                let specific_tbody = document.getElementById("List")
                let row = specific_tbody.insertRow(-1);
                let nome_cliente = row.insertCell(-1);
                let cpf_cliente = row.insertCell(-1);
                let status = row.insertCell(-1);
                let data_cadastro = row.insertCell(-1);
                let telefone = row.insertCell(-1);
                let parceiro = row.insertCell(-1);
                let supervisor = row.insertCell(-1);
                let gerente = row.insertCell(-1);
                let log_alteracao = row.insertCell(-1);
                let altera_icon = row.insertCell(-1);

                let nome_cliente_text = document.createTextNode(`${data[i].nome}`)
                nome_cliente.appendChild(nome_cliente_text)

                let cpf_cliente_text = document.createTextNode(`${data[i].cpf}`)
                cpf_cliente.appendChild(cpf_cliente_text)

                let status_text = document.createTextNode(`${data[i].status_inss}`)
                status.appendChild(status_text)

                let data_cadastro_text = document.createTextNode(`${data[i].data_cadastro}`)
                data_cadastro.appendChild(data_cadastro_text)

                let telefone_text = document.createTextNode(`${data[i].telefone}`)
                telefone.appendChild(telefone_text)

                let parceiro_text = document.createTextNode(`${data[i].parceiro}`)
                parceiro.appendChild(parceiro_text)

                let supervisor_text = document.createTextNode(`${data[i].supervisor}`)
                supervisor.appendChild(supervisor_text)

                let gerente_text = document.createTextNode(`${data[i].gerente}`)
                gerente.appendChild(gerente_text)

                let log_alteracao_text = document.createTextNode(``)
                log_alteracao.appendChild(log_alteracao_text)

                arrays.arrayCodigos.push(data[i].codigo);
                arrays.arrayRows.push(row)

                altera_icon.innerHTML = `

            <div class="actions ml-3" style="text-align: center;">
                <a href="#" class="action-item mr-2" data-toggle="modal" onclick="functionsRequestsProxy.iconUpdate(arrays.arrayCodigos[${i}], arrays.arrayRows[${i}])"
                    data-target=".modal-alterar-autorizacaosoliinss" title="Alterar">
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
            `
            }

        })).catch(error => console.log('error: ', error))
    },

    iconUpdate: (cod, row) => {

        breakModalProx.emptyFields(true);
        breakModalProx.changeButtonUpdate(cod, row);

        if (isNaN(cod)) {
            throw new Error("This not number");
        }

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            codigo: cod
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(URL + "/user/autorizacao/inss/modal", requestOptions)
            .then(response => response.json())
            .then(result => {

                populaCampos(result);
            })
            .catch(error => console.log('error', error))
    },

    insert: () => {
        const data_cadastro = $("#data-cadastro").val();
        const parceiro = $("#parceiro").val();
        const cpf = $("#cpf").val();
        const nome = $("#nome").val();
        const telefone = $("#telefone").val();
        const status = $("#status").val();


        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            data_cadastro: data_cadastro,
            parceiro: dataSession.nome,
            cpf: cpf,
            nome: nome,
            telefone: telefone,
            status_inss: status,
            data_inclusao: dateNow.date(),
            id_acesso: dataSession.id_acesso,
            cpf_supervisor: dataSession.supervisor_cpf,
            cpf_gerente: dataSession.gerente_cpf,
            cpf_parceiro: dataSession.cpf_user,
            gerente: dataSession.gerente,
            supervisor: dataSession.supervisor,
            id_parceiro: dataSession.id_acesso
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(URL + "/user/autorizacao/inss/inserir", requestOptions)
            .then(response => response.json())
            .then(result => {
                //Insert n é obrigatório anexar um arquivo
                const resultInsertAnexo = functionsRequestsProxy.insertAnexo(result)
                // console.log(resultInsertAnexo)
                Promise.resolve(resultInsertAnexo).then(function (value) {
                    // console.log(value)
                })

                // console.log(result)

                $('#success').show();
                $('#success').fadeIn(300).delay(3000).fadeOut(400);
                document.getElementById("success").textContent = "Autorização INSS incluido com sucesso"

            })
            .catch(error => console.log('error', error))
    },

    insertAnexo: async (data) => {
        const myheaders = new Headers();
        myheaders.append('Content-Type', 'application/json');

        const file = document.querySelector('div#file input[type="file"]')
        const codigo = data.codigo

        var data = new FormData();
        // fileInputs.forEach(file => {
        //     data.append(file.name, file.files[0])
        // })
        data.append(file.name, file.files[0])

        await fetch(URL + `/user/autorizacao/inss/anexo?codigo=${codigo}`, {
            method: 'POST',
            body: data
        }).
        then(response => response.json().then(function (data) {
            // console.log(data)
            obj.transporter = data
        })).catch(error => console.log('error: ', error))

        return obj.transporter;
    },

    updateFieldFile: (codigo, linha) => {
        const status_inss = $("#status").val();

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            codigo,
            status_inss,
            responsavel: dataSession.nome,
            data_alteracao: dateNow.date()
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(URL + "/user/autorizacao/inss/atualizar", requestOptions)
            .then(response => response.json())
            .then(result => {
                const resultUpdateAnexo = functionsRequestsProxy.insertAnexo(result)
                // console.log(resultUpdateAnexo)
                Promise.resolve(resultUpdateAnexo).then(function (value) {})

                updateTbody(linha, result.status_inss)

                $('#success').show();
                $('#success').fadeIn(300).delay(3000).fadeOut(400);
                document.getElementById("success").textContent = "Autorização INSS atualizado com sucesso"
            })
            .catch(error => console.log('error', error))
    }

}

const handlerTrap = {
    get: (target, name) => {
        if (target[name]) {
            return target[name];
        } else {
            throw new Error("Prop does not exist")
        }
    },

    set: (target, name, value) => {
        if (target[name]) {
            if (value) {
                target[name] = value
            }
        }
    }
}

const functionsRequestsProxy = new Proxy(functionsRequests, handlerTrap)

buttonFilter.addEventListener('click', () => {
    functionsRequestsProxy.filter();
})

function populaCampos(result) {
    $("#data-cadastro").val(result.data_cadastro);
    $("#parceiro").val(result.parceiro);
    $("#cpf").val(result.cpf);
    $("#nome").val(result.nome);
    $("#telefone").val(result.telefone);
    $("#status").val(result.status_inss);
}

function updateTbody(row, status) {
    let cells = row.cells;
    cells[2].textContent = status
}
