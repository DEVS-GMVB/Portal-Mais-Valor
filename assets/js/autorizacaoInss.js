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
const sessionBrowser = {
    userTipousuario: sessionStorage.getItem('tipo_usuario', 'tipo_usuario'),
    userPerfil: sessionStorage.getItem('perfil', 'perfil'),
    userCpf: sessionStorage.getItem('cpf_usuario', 'cpf_usuario')
}

// Quebra referência de modais
const breakModal = {
    emptyFields: () => {
        $(".needs-validation").each(function () {
            this.reset()
        })
    },

    changeButtonInsert: () => {
        const statusSelect = document.getElementById("status");
        statusSelect.value = 'SOLICITACAO DE TERMO AUTORIZACAO INSS'

        changeButton.innerHTML = `
        <button type="button" class="btn btn-primary btn-icon-label">
            <span class="btn-inner--icon">
                <i class="fas fa-plus"></i>
            </span>
            <span class="btn-inner--text">Incluir / Salvar Alteração</span>
        </button>
        `
    },

    changeButtonUpdate: () => {
        changeButton.innerHTML = `
        <button type="button" class="btn btn-primary btn-icon-label">
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

//Proxy Break Modal
const breakModalProx = new Proxy(breakModal, handler)


function buttonInsert() {
    // breakModal.emptyFields();
    // breakModal.changeButtonInsert();
    breakModalProx.emptyFields();
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
            userTipousuario: sessionBrowser.userTipousuario,
            userPerfil: sessionBrowser.userPerfil,
            userCpf: sessionBrowser.userCpf,
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
                <a href="#" class="action-item mr-2" data-toggle="modal" onclick="functionsRequestsProxy.iconUpdate(arrays.arrayCodigos[${i}])"
                    data-target=".modal-alterar-autorizacaosoliinss" title="Alterar">
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
            `
            }

        })).catch(error => console.log('error: ', error))
    },

    iconUpdate: (cod) => {
        breakModalProx.emptyFields();
        breakModalProx.changeButtonUpdate();

        if (cod === NaN || cod !== Number)
            throw new Error("This not number");

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