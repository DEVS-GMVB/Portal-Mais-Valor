const URL = 'http://localhost:3000'

const banco_filtro = document.getElementById("banco-filtro");
const banco_campo = document.getElementById("banco-campo");

//btns
const botao_filtro = document.getElementById("buscar-filtro");

const modal = new Map();
const modalRow = new Map();

const obj = {}

const configsChangeModal = {
    selectedInsertStatus: () => {
        document.getElementById("em_andamento").setAttribute('selected', true)
    },
    selectedUpdateStatus: () => {
        document.getElementById("respondido").setAttribute('selected', true)
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

function dateNow() {
    let date = new Date();
    let dateNow = `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    return dateNow;
}

window.onload = () => {

    fetch(URL + '/user/bancoOrigi', {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json().then(function (data) {
            for (let i = 0; i < data.length; i++) {
                banco_filtro.innerHTML += '<option value="' + data[i].banco + '">' + data[i].banco + '</options>'
                banco_campo.innerHTML += '<option value="' + data[i].banco + '">' + data[i].banco + '</options>'
            }
        }))
}

botao_filtro.addEventListener('click', () => {
    let node = document.getElementById("list")
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }

    // Campos do filtro
    const classificacao_filtro = $("#classificacao-filtro").val();
    const status_filtro = $("#status-filtro").val();
    const banco_filtro = $("#banco-filtro").val();
    const data_recebimento_filtro = $("#data-recebimento-filtro").val();
    const data_inclusao_filtro = $("#data-inclusao-filtro").val();
    const data_resposta_filtro = $("#data-resposta-filtro").val();
    const cpf_filtro = $("#cpf-filtro").val();
    const protocolo_filtro = $("#protocolo-filtro").val();
    const parceiro_filtro = $("#parceiro-filtro").val();


    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "classificacao": classificacao_filtro,
        "status": status_filtro,
        "banco": banco_filtro,
        "data_recebimento": data_recebimento_filtro,
        "data_inclusao": data_inclusao_filtro,
        "data_resposta": data_resposta_filtro,
        "cpf": cpf_filtro,
        "parceiro": parceiro_filtro,
        "protocolo": protocolo_filtro,
        // "userPerfil": dataSession.perfil,
        // "userCpf": dataSession.cpf_user,
        // "userTipousuario": dataSession.tipo_usuario,
        // "userNome": dataSession.nome,
        // "userCnpjMatriz": dataSession.cnpj_matr
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(URL + "/user/sac/filtro", requestOptions)
        .then(response => response.json())
        .then(data => {
            //HashMap estrutura de dados
            for (let i = 0; i < data.length; i++) {

                let specific_tbody = document.getElementById('list');
                let row = specific_tbody.insertRow(-1);
                let protocolo = row.insertCell(-1);
                let classicacao = row.insertCell(-1);
                let status = row.insertCell(-1);
                let banco = row.insertCell(-1);
                let valor_operacao = row.insertCell(-1);
                let contrato = row.insertCell(-1);
                let data_recebimento = row.insertCell(-1);
                let data_inclusao = row.insertCell(-1);
                let data_resposta = row.insertCell(-1);
                let data_alteracao = row.insertCell(-1);
                let responsavel = row.insertCell(-1);
                let tempo_atuacao = row.insertCell(-1);
                let nome_cliente = row.insertCell(-1);
                let telefone_cliente = row.insertCell(-1);
                let email_cliente = row.insertCell(-1);
                let parceiro = row.insertCell(-1);
                let supervisor = row.insertCell(-1);
                let gerente = row.insertCell(-1);
                let alteraVisualiza = row.insertCell(-1);

                
                let protocoloText = document.createTextNode(`${data[i].protocolo}`);
                protocolo.appendChild(protocoloText);

                let classificacaoText = document.createTextNode(`${data[i].classificacao}`);
                classicacao.appendChild(classificacaoText);

                let statusText = document.createTextNode(`${data[i].status}`);
                status.appendChild(statusText);

                let bancoText = document.createTextNode(`${data[i].banco}`);
                banco.appendChild(bancoText);

                let valor_operacaoText = document.createTextNode(`${data[i].valor_operacao}`);
                valor_operacao.appendChild(valor_operacaoText);

                let contratoText = document.createTextNode(`${data[i].contrato}`);
                contrato.appendChild(contratoText);

                let data_recebimentoText = document.createTextNode(`${data[i].data_recebimento}`);
                data_recebimento.appendChild(data_recebimentoText);

                let data_inclusaoText = document.createTextNode(`${data[i].data_inclusao}`);
                data_inclusao.appendChild(data_inclusaoText);

                let data_respostaText = document.createTextNode(`${data[i].data_resposta}`);
                data_resposta.appendChild(data_respostaText);

                let data_alteracaoText = document.createTextNode(`${data[i].data_alteracao}`);
                data_alteracao.appendChild(data_alteracaoText);

                let responsavelText = document.createTextNode(`${data[i].responsavel}`);
                responsavel.appendChild(responsavelText);

                let tempo_atuacaoText = document.createTextNode(`${data[i].tempo_atuacao}`);
                tempo_atuacao.appendChild(tempo_atuacaoText);

                let nome_clienteText = document.createTextNode(`${data[i].nome}`);
                nome_cliente.appendChild(nome_clienteText);

                let telefone_clienteText = document.createTextNode(`${data[i].telefone}`);
                telefone_cliente.appendChild(telefone_clienteText);

                let email_clienteText = document.createTextNode(`${data[i].email}`);
                email_cliente.appendChild(email_clienteText);

                let parceiroText = document.createTextNode(`${data[i].parceiro}`);
                parceiro.appendChild(parceiroText);

                let supervisorText = document.createTextNode(`${data[i].supervisor}`);
                supervisor.appendChild(supervisorText);

                let gerenteText = document.createTextNode(`${data[i].gerente}`);
                gerente.appendChild(gerenteText);
            
                //Passando minha proposta neste escopo
                modal.set(data[i].id_sac, data[i]);
                modalRow.set(data[i].id_sac, row);

                alteraVisualiza.innerHTML =
                    `
                            <td class="text-right" style="text-align: center;">
                                <!-- Actions -->
                                <div class="actions ml-3" style="text-align: center;">
                                    <a href="#" class="action-item mr-2 " data-toggle="modal" onclick="populaCampos(modal.get(${data[i].id_sac}), modalRow.get(${data[i].id_sac}))"
                                        data-target=".modalincsac" title="Alterar"
                                        id="modalAlterar">
                                        <i class="fas fa-sync-alt"></i>
                                    </a>
                                    <a href="#" class="action-item mr-2" data-toggle="modal"
                                        data-target=".modalteladecadastro" title="Visualizar">
                                        <i class="fas fa-paperclip"></i>
                                    </a>
                                </div>
                            </td>;

                            `
            }
        })
        .catch(error => console.log('error', error));
})


const breakModal = {

    //Limpar campos
    empty: function () {
        $('.needs-validation').each(function () {
            this.reset();
        });
    },

    changeInsert: function () {
        configsChangeModal.selectedInsertStatus();

        document.getElementById('changeButton').innerHTML = `
    <button type="button" class="btn btn-primary btn-icon-label" id="btn-insert" onclick="insert()">
        <span class="btn-inner--icon">
            <i class="fas fa-plus"></i>
        </span>
        <span class="btn-inner--text">Incluir</span>
    </button>`
    },

    changeUpdate: function (id, linha) {
        configsChangeModal.selectedUpdateStatus();

        document.getElementById("changeButton").innerHTML = ` 
        <button type="button" class="btn btn-primary btn-icon-label" id="btn-insert" onclick="update(${id.id_sac})">
            <span class="btn-inner--icon">
                <i class="fas fa-plus"></i>
            </span>
            <span class="btn-inner--text">Alterar</span>
        </button>
         `
    }
}

function change() {
    breakModal.empty()
    breakModal.changeInsert()

    //Preenche data Cadastro
    let today = new Date();
    let month = today.getMonth();
    let hours = today.getHours()
    let minute = today.getMinutes()
    let second = today.getSeconds()
    document.getElementById('data-inclusao-campo').value = `${today.getDate()}/${(month + 1)}/${today.getFullYear()} ${hours}:${minute}:${second}`

    //Parceiro Supervisor e Gerente da sessão
    document.getElementById('parceiro-campo').value = sessionStorage.getItem('nome', 'nome')
    document.getElementById('supervisor-campo').value = sessionStorage.getItem('supervisor', 'supervisor')
    document.getElementById('gerente-campo').value = sessionStorage.getItem('gerente', 'gerente')

}

function insert(){

    let protocolo = $('#protocolo-campo').val()
    let classificacao = $('#classificacao-campo').val()
    let status = $('#status-campo').val()
    let banco = $('#banco-campo').val()
    let vlOperacao = $('#valor-operacao-campo').val()
    let contrato = $('#contrato-campo').val()
    let dtRecebimento = $('#data-recebimento-campo').val()
    let dtInclusao = $('#data-inclusao-campo').val()
    let dtResposta = $('#data-resposta-campo').val()
    let tmpAtuacao = $('#tempo-atuacao-campo').val()
    let nmCliente = $('#nome-cliente-campo').val()
    let cpf = $('#cpf-campo').val()
    let telefone = $('#telefone-campo').val()
    let email = $('#email-campo').val()
    let parceiro = $('#parceiro-campo').val()
    let supervisor = $('#supervisor-campo').val()
    let gerente = $('#gerente-campo').val()
    let protocoloBanco = $('#protocolo-banco-campo').val()
    let empresa = $('#empresa-campo').val()
    let procedente = $('#procedente-campo').val()
    let questionamento = $('#questionamento-campo').val()
    let resposta = $('#resposta-campo').val()

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

    const body = {
        protocolo:protocolo,
        classificacao:classificacao,
        status:status,
        banco:banco,
        valor_operacao:vlOperacao,
        contrato:contrato,
        data_recebimento:dtRecebimento,
        data_inclusao:dtInclusao,
        data_resposta:dtResposta,
        tempo_atuacao:tmpAtuacao,
        nome:nmCliente,
        cpf:cpf,
        telefone:telefone,
        email:email,
        parceiro:parceiro,
        supervisor:supervisor,
        gerente:gerente,
        protocolo_banco:protocoloBanco,
        empresa:empresa,
        procedente:procedente,
        questionamento:questionamento,
        resposta:resposta,
        cpf_parceiro:dataSession.cpf_user,
        cpf_supervisor:dataSession.supervisor_cpf,
        cpf_gerente:dataSession.gerente_cpf
    }

    const raw = JSON.stringify(body)

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL + "/user/sac/incluir", requestOptions).
    then(response => response.json()).
    then(function (res) {
    console.log(body)

    const resultInsert = insertAnexo(res)
    Promise.resolve(resultInsert).then(function (value){
        $('#SucessoSac').show();
        $('#SucessoSac').fadeIn(300).delay(3000).fadeOut(400);
        document.getElementById("SucessoSac").textContent = "Sac incluido"

    })    
    }).catch(error => console.log('erro: ', error))
}

async function insertAnexo(res){
    const fileInputs = document.querySelectorAll('div#div-fundo input[type="file"]')
    const id = res.id_sac

    var res = new FormData()
    fileInputs.forEach(file => {
        res.append(file.name, file.files[0])
      });

    await fetch(URL + `/user/sac/anexo?id_sac=${id}`, {
        method: 'POST',
        body: res
    }).
    then(response => response.json().then(function (res) {
        obj.transporter = res
        console.log('cadastrado')
    })).catch(error => console.log('error: ', error))
    return obj.transporter;
}


function populaCampos(id_sac, row) {
    breakModal.empty();
    popula(id_sac);
    breakModal.changeUpdate(id_sac, row);

}

function update(id) {
    const nodeRow = modalRow.get(id);

    let protocolo = $('#protocolo-campo').val()
    let classificacao = $('#classificacao-campo').val()
    let banco = $('#banco-campo').val()
    let vlOperacao = $('#valor-operacao-campo').val()
    let contrato = $('#contrato-campo').val()
    let dtRecebimento = $('#data-recebimento-campo').val()
    let dtResposta = $('#data-resposta-campo').val()
    let tmpAtuacao = $('#tempo-atuacao-campo').val()
    let nmCliente = $('#nome-cliente-campo').val()
    let cpf = $('#cpf-campo').val()
    let telefone = $('#telefone-campo').val()
    let email = $('#email-campo').val()
    let protocoloBanco = $('#protocolo-banco-campo').val()
    let empresa = $('#empresa-campo').val()
    let procedente = $('#procedente-campo').val()
    let questionamento = $('#questionamento-campo').val()
    let resposta = $('#resposta-campo').val()




    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "id_sac": id,
        "nome": nmCliente,
        "cpf": cpf,
        "telefone": telefone,
        "email": email,
        "data_recebimento": dtRecebimento,
        "data_resposta": dtResposta,
        "resposta": resposta,
        "questionamento": questionamento,
        "banco": banco,
        "data_alteracao": dateNow(),
        "responsavel": dataSession.nome,
        "protocolo": protocolo,
        "classificacao": classificacao,
        "valor_operacao": vlOperacao,
        "contrato": contrato,
        "tempo_atuacao": tmpAtuacao,
        "protocolo_banco": protocoloBanco,
        "procedente": procedente,
        "empresa": empresa
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(URL + "/user/sac/atualizar", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            updateTbody(result, nodeRow)
            $('#SucessoSac').show();
            $('#SucessoSac').fadeIn(300).delay(3000).fadeOut(400);
            document.getElementById("SucessoSac").textContent = "Sac Atualizado"
        })
        .catch(error => console.log('error', error));

}

function popula(id_sac) {
    $('#protocolo-campo').val(id_sac.protocolo)
    $('#classificacao-campo').val(id_sac.classificacao)
    $('#status-campo').val(id_sac.status)
    $('#banco-campo').val(id_sac.banco)
    $('#valor-operacao-campo').val(id_sac.valor_operacao)
    $('#contrato-campo').val(id_sac.contrato)
    $('#data-recebimento-campo').val(id_sac.data_recebimento)
    $('#data-inclusao-campo').val(id_sac.data_inclusao)
    $('#data-resposta-campo').val(id_sac.data_resposta)
    $('#tempo-atuacao-campo').val(id_sac.tempo_atuacao)
    $('#nome-cliente-campo').val(id_sac.nome)
    $('#cpf-campo').val(id_sac.cpf)
    $('#telefone-campo').val(id_sac.telefone)
    $('#email-campo').val(id_sac.email)
    $('#parceiro-campo').val(id_sac.parceiro)
    $('#supervisor-campo').val(id_sac.supervisor)
    $('#gerente-campo').val(id_sac.gerente)
    $('#protocolo-banco-campo').val(id_sac.protocolo_banco)
    $('#empresa-campo').val(id_sac.empresa)
    $('#procedente-campo').val(id_sac.procedente)
    $('#questionamento-campo').val(id_sac.questionamento)
    $('#resposta-campo').val(id_sac.resposta)
}

function updateTbody(data,linha) {
    let cells = linha.cells;
    cells[0].textContent = data.protocolo
    cells[1].textContent = data.classificacao
    cells[2].textContent = data.status
    cells[3].textContent = data.banco
    cells[4].textContent = data.valor_operacao;
    cells[5].textContent = data.contrato
    cells[6].textContent = data.data_recebimento;
    cells[7].textContent = data.data_inclusao
    cells[8].textContent = data.data_resposta;
    cells[9].textContent = data.data_alteracao;
    cells[10].textContent = data.responsavel;
    cells[11].textContent = data.tempo_atuacao;
    cells[12].textContent = data.nome;
    cells[13].textContent = data.telefone;
    cells[14].textContent = data.email;
    cells[15].textContent = data.parceiro;
    cells[16].textContent = data.supervisor;
    cells[17].textContent = data.gerente
}

const botao_excel = document.getElementById("planilhaExcel");

botao_excel.addEventListener('click', () => {
  var table2excel = new Table2Excel();
  table2excel.export(document.querySelectorAll("table"));

})