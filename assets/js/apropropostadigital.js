const URL = 'http://localhost:3000'

const arrays = {
    arrayUpdate: arrayUpdate = [],
    arrayRows: arrayRows = [],
    arrayId: arrayId = [],
    arrayChangeButtonsRows: arrayChangeButtonsRows = []
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

    changeUpdate: function () {
        document.getElementById('changeButtons').innerHTML = `
        <button type="button" class="btn btn-primary btn-icon-label" id="btn-update">
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

    //Preenche data Cadastro
    let today = new Date();
    let month = today.getMonth();
    hours = today.getHours()
    minute = today.getMinutes()
    second = today.getSeconds()
    document.getElementById('dtCadastro-incluir').value = `${today.getDate()}/${(month + 1)}/${today.getFullYear()}   ${hours}:${minute}:${second}`

    //Insert
    breakModal.changeInsert()
}

function insert() {

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

             arrays.arrayId.push(data[i].id_fluxo)
            // arrays.arrayRows.push(row)

            alterar.innerHTML = `
            <div class="actions ml-3" style="text-align: center;">
                                                <a href="#" class="action-item mr-2" data-toggle="modal"
                                                    data-target=".modal-alterar-apropropostadigital" title="Alterar" id="icon-update"
                                                    onclick="iconUpdate(arrays.arrayId[${i}], arrays.arrayRows[${i}])">
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

    breakModal.changeUpdate()//Passar id e linha aqui quando para quando for alterar

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
        console.log(id)
        $('#dtCadastro-incluir').val(data.data_inclusao);
        $('#proposta-incluir').val(data.proposta);
        $('#status-incluirr').val(data.status);
        $('#banco-incluir').val(data.banco);
        $('#tipo-incluir').val(data.tipo);
        $('#cpf-incluir').val(data.cpf);
        //$('#parceiro-incluir').val(data.parceiro);
        document.getElementById('parceiro-incluir') = sessionStorage.getItem('userTipousuario')
        //let tipo_usuario = sessionStorage.getItem('tipo_usuario', 'tipo_usuario');
        $('#supervidor-incluir').val(data.parceiro);
        $('#gerente-incluir').val(data.gerente);
    })).catch(error => console.log('erro: ', error))
}