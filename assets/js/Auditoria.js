const URL = `http://localhost:3000/user`;

//Selects
const vendas = document.getElementById("campo-venda");
const mesSelect = document.getElementById("campo-mes");
const operador = document.getElementById("campo-operador");
const tipoSelect = document.getElementById("campo-tipo");
const dataInclusao = document.getElementById("campo-data-inclusao");
const supervisorSelect = document.getElementById("campo-supervisor");
const statusAuditoria = document.getElementById("campo-auditoria");
const statusProposta = document.getElementById("campo-status-proposta");
const dadosUsuario = document.getElementById('div-dados-usuario');

//Arrays
const arrays = {
    arrayRows: arrayRows = [],
    arrayId: arrayId = [],
}

//Usuarios da sessão
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

//Btns
const btnFiltro = document.getElementById("btn-buscar");
const btnAlterar = document.getElementById("btn-alterar");
const icnoeAlterar = document.getElementById('auditar-proposta')

window.onload = (e) => {
    fetch(`${URL}/auditoria/venda`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json())
        .then((data) => {
            for (const {
                    tipo_operacao
                } of data) {
                vendas.innerHTML += `<option value="${tipo_operacao}">${tipo_operacao}</option>`;
            }

        })
        .catch(error => console.error(error));

    fetch(`${URL}/auditoria/operador`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json())
        .then((data) => {
            for (const {
                    usuario
                } of data) {
                operador.innerHTML += `<option value="${usuario}">${usuario}</option>`;
            }

        })
        .catch(error => console.error(error));

    fetch(`${URL}/auditoria/tipo`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json())
        .then((data) => {
            for (const {
                    tipo
                } of data) {
                tipoSelect.innerHTML += `<option value="${tipo}">${tipo}</option>`;
            }

        })
        .catch(error => console.error(error));

    fetch(`${URL}/auditoria/supervisor`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json())
        .then((data) => {
            for (const {
                    supervisor
                } of data) {
                supervisorSelect.innerHTML += `<option value="${supervisor}">${supervisor}</option>`;
            }

        })
        .catch(error => console.error(error));

    fetch(`${URL}/auditoria/status`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json())
        .then((data) => {
            for (const {
                    status_auditoria
                } of data) {
                statusAuditoria.innerHTML += `<option value="${status_auditoria}">${status_auditoria}</option>`;
            }
        })
        .catch(error => console.error(error));

    fetch(`${URL}/auditoria/status/proposta`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json())
        .then((data) => {
            for (const {
                    status
                } of data) {
                statusProposta.innerHTML += `<option value="${status}">${status}</option>`;
            }
        })
        .catch(error => console.error(error));

    fetch(`${URL}/auditoria/mes`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json())
        .then((data) => {
            for (const {
                    mes
                } of data) {
                mesSelect.innerHTML += `<option value="${mes}">${mes}</option>`;
            }
        })
        .catch(error => console.error(error));
}

//Tabela Dados do Usuario
function tabUsuario() {
    dadosUsuario.innerHTML = `
    <table class="table align-items-center" id="table-usuario">
                                <thead>
                                    <tr>
                                        <th scope="col" class="sort" data-sort="arquivos" style="text-align: center;">
                                            Usuário</th>
                                        <th scope="col" class="sort" data-sort="download" style="text-align: center;">
                                            Supervisor</th>
                                        <th scope="col" class="sort" data-sort="newspace" style="text-align: center;">
                                            Gerente</th>
                                        <th scope="col" class="sort" data-sort="newspace" style="text-align: center;">
                                            Empresa</th>
                                        <th scope="col" class="sort" data-sort="newspace" style="text-align: center;">
                                            Tipo Usuário</th>
                                        <th scope="col" class="sort" data-sort="newspace" style="text-align: center;">
                                            Classificação</th>


                                    </tr>
                                </thead>
                                <tbody class="list" id="table-usuario">

                                    <tr>

                                        <td style="text-align: center;">
                                            ${dataSession.nome} </td>

                                        <td style="text-align: center;">

                                            ${dataSession.supervisor}

                                        </td>

                                        <td style="text-align: center;">

                                            ${dataSession.gerente}
                                        </td>
                                        <td style="text-align: center;">
                                            ${dataSession.status}
                                        </td>

                                        <td style="text-align: center;">
                                            ${dataSession.tipo_usuario}
                                        </td>
                                        <td style="text-align: center;">
                                            ${dataSession.perfil}
                                        </td>


                                    </tr>


                                </tbody>
                            </table>`
}

//Filtro
btnFiltro.addEventListener('click', () => {

    document.getElementById("tbody-table-principal").innerHTML = ``;

    //Campos
    const tipo_operacao = document.getElementById("campo-venda").value;
    const mes = document.getElementById("campo-mes").value;
    const usuario = document.getElementById("campo-operador").value;
    const tipo = document.getElementById("campo-tipo").value;
    const data_inclusao = document.getElementById("campo-data-inclusao").value;
    const supervisor = document.getElementById("campo-supervisor").value;
    const status_auditoria = document.getElementById("campo-auditoria").value;
    const status = document.getElementById("campo-status-proposta").value;
    const data_venda = document.getElementById("campo-data-proposta").value;
    const cpf = document.getElementById("campo-cpf").value;
    const proposta = document.getElementById("campo-proposta").value;

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', "application/json");

    const raw = JSON.stringify({
        tipo_operacao,
        mes,
        tipo,
        data_venda,
        usuario,
        data_inclusao,
        cpf,
        supervisor,
        proposta,
        status_auditoria,
        status
    })

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(`${URL}/auditoria/filtro`, requestOptions)
        .then(response => response.json())
        .then(function (data) {

            if (data.message === 'nenhum registro encontrado com este filtro') return;

            arrays.arrayId = []

            for (const i in data) {
                let specific_tbody = document.getElementById('tbody-table-principal');
                let row = specific_tbody.insertRow(-1);
                let protocolo = row.insertCell(-1);
                let data_venda = row.insertCell(-1);
                let data_inclusao = row.insertCell(-1);
                let valor = row.insertCell(-1);
                let tipo = row.insertCell(-1);
                let venda = row.insertCell(-1);
                let operador = row.insertCell(-1);
                let supervisor = row.insertCell(-1);
                let status = row.insertCell(-1);
                let statusAuditoria = row.insertCell(-1);
                let subStatusAuditoria = row.insertCell(-1);
                let pontuacao = row.insertCell(-1);
                let operadorAlteracao = row.insertCell(-1);
                let dataAlteracao = row.insertCell(-1);
                let vinculo = row.insertCell(-1);
                let visualizar = row.insertCell(-1);
                let auditarProposta = row.insertCell(-1);


                let protocoloText = document.createTextNode(`${data[i].protocolo}`);
                protocolo.appendChild(protocoloText);

                let dataVendaText = document.createTextNode(`${data[i].data_venda}`);
                data_venda.appendChild(dataVendaText)

                let data_inclusaoText = document.createTextNode(`${data[i].data_inclusao}`);
                data_inclusao.appendChild(data_inclusaoText);

                let valorText = document.createTextNode(`${data[i].valor_proposta}`);
                valor.appendChild(valorText)

                let tipoText = document.createTextNode(`${data[i].tipo}`);
                tipo.appendChild(tipoText)

                let vendaText = document.createTextNode(`${data[i].tipo_operacao}`);
                venda.appendChild(vendaText)

                let operadorText = document.createTextNode(`${data[i].usuario}`);
                operador.appendChild(operadorText);

                let supervisorText = document.createTextNode(`${data[i].supervisor}`);
                supervisor.appendChild(supervisorText);

                let statusText = document.createTextNode(`${data[i].status}`);
                status.appendChild(statusText);

                let statusAuditoriaText = document.createTextNode(`${data[i].status_auditoria}`);
                statusAuditoria.appendChild(statusAuditoriaText)

                let subStatusAuditoriaText = document.createTextNode(`${data[i].sub_status}`);
                subStatusAuditoria.appendChild(subStatusAuditoriaText)

                let pontuacaoText = document.createTextNode(`${data[i].pontuacao}`);
                pontuacao.appendChild(pontuacaoText)

                let operadorAlteracaoText = document.createTextNode(`${data[i].responsavel}`);
                operadorAlteracao.appendChild(operadorAlteracaoText)

                let dataAlteracaoText = document.createTextNode(`${data[i].data_atualizacao}`);
                dataAlteracao.appendChild(dataAlteracaoText)

                let vinculoText = document.createTextNode(``);
                vinculo.appendChild(vinculoText)

                arrays.arrayId.push(data[i].id_proposta)
                arrays.arrayRows.push(row)

                visualizar.innerHTML = `
                <td class="text-right" style="text-align: center;">
                    <!-- Actions -->
                    <div class="actions ml-3" style="text-align: center;" id="div-visualisar">
                        <a href="#" class="action-item mr-2 " data-toggle="modal"
                            data-target=".modalvisualizaraudit" title="Visualizar"
                            id="visualizar" onclick="modalAuditoria(arrays.arrayId[${i}], arrays.arrayRows[${i}])">
                            <i class="fas fa-eye"></i>
                        </a>

                    </div>
                </td>
                
                `

                auditarProposta.innerHTML = `
                <td class="text-right" style="text-align: center;">
                    <!-- Actions -->
                    <div class="actions ml-3" style="text-align: center;" id="div-auditar-proposta">
                        <a href="#" class="action-item mr-2 " data-toggle="modal"
                            data-target=".modalvisualizaraudit" title="Auditar Proposta"
                            id="auditar-proposta" onclick="Alterar()">
                            <i class="fas fa-share-square"></i>
                        </a>

                    </div>
                </td>
                
                `
            }
        })
        .catch(error => console.error(error));
})

//Bloqueando os campos
function bloqueiaCampos() {
    $('#campo-status-auditoria').attr('disabled', true);
    $('#campo-falta').attr('disabled', true);
    $('#campo-tipo-falta').attr('disabled', true);
    $('#campo-sub-status').attr('disabled', true);
    $('#campo-obs-auditoria').attr('disabled', true);
    $('#campo-numero-proposta').attr('disabled', true);
    $('#campo-data-venda').attr('disabled', true);
    $('#campo-mes-referencia').attr('disabled', true);
    $('#campo-status').attr('disabled', true);
    $('#campo-linha-credito').attr('disabled', true);
    $('#campo-valor-proposta').attr('disabled', true);
    $('#campo-valor-troco').attr('disabled', true);
    $('#campo-valor-liquido').attr('disabled', true);
    $('#campo-quantidade-parcelas').attr('disabled', true);
    $('#campo-valor-seguro').attr('disabled', true);
    $('#campo-mailing-origem').attr('disabled', true);
    $('#campo-valor-parcela').attr('disabled', true);
    $('#campo-venda-alterar').attr('disabled', true);
    $('#campo-vencimento-1-parcela').attr('disabled', true);
    $('#campo-convenio').attr('disabled', true);
    $('#campo-nome-cliente').attr('disabled', true);
    $('#campo-cpf-cliente').attr('disabled', true);
    $('#campo-telefone-cliente').attr('disabled', true);
    $('#campo-agencia-cliente').attr('disabled', true);
    $('#campo-conta-cliente').attr('disabled', true);
    $('#campo-parceiro-promotor').attr('disabled', true);
    $('#campo-supervisor-alterar').attr('disabled', true);
    $('#campo-gerente-alterar').attr('disabled', true);
    $('#campo-cpf-parc-promo').attr('disabled', true);
    $('#campo-chave').attr('disabled', true);
    $('#campo-senha-chave').attr('disabled', true);
    $('#campo-nome-operador').attr('disabled', true);
    $('#campo-supervisor-alterar2').attr('disabled', true);
    $('#campo-gerente-alterar2').attr('disabled', true);
    $('#campo-chave-j').attr('disabled', true);
}

//Desbloqueando os campos
function desbloqueiaCampos() {
    $('#campo-status-auditoria').attr('disabled', false);
    $('#campo-falta').attr('disabled', false);
    $('#campo-tipo-falta').attr('disabled', false);
    $('#campo-sub-status').attr('disabled', false);
    $('#campo-obs-auditoria').attr('disabled', false);
    $('#campo-numero-proposta').attr('disabled', false);
    $('#campo-data-venda').attr('disabled', false);
    $('#campo-mes-referencia').attr('disabled', false);
    $('#campo-status').attr('disabled', false);
    $('#campo-linha-credito').attr('disabled', false);
    $('#campo-valor-proposta').attr('disabled', false);
    $('#campo-valor-troco').attr('disabled', false);
    $('#campo-valor-liquido').attr('disabled', false);
    $('#campo-quantidade-parcelas').attr('disabled', false);
    $('#campo-valor-seguro').attr('disabled', false);
    $('#campo-mailing-origem').attr('disabled', false);
    $('#campo-valor-parcela').attr('disabled', false);
    $('#campo-venda-alterar').attr('disabled', false);
    $('#campo-vencimento-1-parcela').attr('disabled', false);
    $('#campo-convenio').attr('disabled', false);
    $('#campo-nome-cliente').attr('disabled', false);
    $('#campo-cpf-cliente').attr('disabled', false);
    $('#campo-telefone-cliente').attr('disabled', false);
    $('#campo-agencia-cliente').attr('disabled', false);
    $('#campo-conta-cliente').attr('disabled', false);
    $('#campo-parceiro-promotor').attr('disabled', false);
    $('#campo-supervisor-alterar').attr('disabled', false);
    $('#campo-gerente-alterar').attr('disabled', false);
    $('#campo-cpf-parc-promo').attr('disabled', false);
    $('#campo-chave').attr('disabled', false);
    $('#campo-senha-chave').attr('disabled', false);
    $('#campo-nome-operador').attr('disabled', false);
    $('#campo-supervisor-alterar2').attr('disabled', false);
    $('#campo-gerente-alterar2').attr('disabled', false);
    $('#campo-chave-j').attr('disabled', false);
}


//Modal
function modalAuditoria(id, row) {

    tabUsuario();

    bloqueiaCampos();

    //Escondendo  os botões
    document.getElementById('div-btn-alterar').style.display = 'none';
    document.getElementById('div-btn-observacao').style.display = 'none';

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        id_proposta: id
    })

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL + "/auditoria/modal", requestOptions).
    then(response => response.json().then(function (data) {

        console.log(id)
        buscarLogs(data.id_proposta);

        $('#campo-status-auditoria').val(data.status_auditoria);
        $('#campo-falta').val(data.falta);
        $('#campo-tipo-falta').val(data.tipo_falta);
        $('#campo-sub-status').val(data.sub_status);
        $('#campo-obs-auditoria').val(data.observacao);
        $('#campo-numero-proposta').val(data.proposta);
        $('#campo-data-venda').val(data.data_venda);
        $('#campo-mes-referencia').val(data.mes);
        $('#campo-status').val(data.status);
        $('#campo-linha-credito').val(); //Linha de credito
        $('#campo-valor-proposta').val(data.valor_proposta);
        $('#campo-valor-troco').val(data.valor_troco);
        $('#campo-valor-liquido').val(data.valor_liquido);
        $('#campo-quantidade-parcelas').val(data.qtd_parcela);
        $('#campo-valor-seguro').val(data.valor_seguro);
        $('#campo-mailing-origem').val(); //Mailing origem
        $('#campo-valor-parcela').val(data.valor_parcela);
        $('#campo-venda-alterar').val(data.tipo_operacao); //Venda
        $('#campo-vencimento-1-parcela').val(data.vencimento_parcela);
        $('#campo-convenio').val(data.convenio);
        $('#campo-nome-cliente').val(data.nome);
        $('#campo-cpf-cliente').val(data.cpf);
        $('#campo-telefone-cliente').val(data.telefone_cliente);
        $('#campo-agencia-cliente').val(data.agencia_cliente);
        $('#campo-conta-cliente').val(data.conta_cliente);
        $('#campo-parceiro-promotor').val(data.parceiro);
        $('#campo-supervisor-alterar').val(data.supervisor);
        $('#campo-gerente-alterar').val(data.gerente);
        $('#campo-cpf-parc-promo').val(data.cpf_parceiro);
        $('#campo-chave').val(); //Chave 
        $('#campo-senha-chave').val(data.senha_chave);
        $('#campo-nome-operador').val(data.usuario); //Nome operador
        $('#campo-supervisor-alterar2').val(data.supervisor_parceiro);
        $('#campo-gerente-alterar2').val(data.gerente_parceiro);
        $('#campo-chave-j').val(data.chavej);
    }))

}

function Alterar() {
    console.log('oi')
    desbloqueiaCampos();
    $('#div-btn-alterar').show();
}

//Alterar
btnAlterar.addEventListener('click', (id, row) => {

    const myheaders = new Headers()
    myheaders.append('Content-Type', 'application/json')

    const stausAuditoria = $('#campo-status-auditoria').val()
    const falta = $('#campo-falta').val()
    const tipoFalta = $('#campo-tipo-falta').val()
    const subStatus = $('#campo-sub-status').val()
    const obsAuditoria = $('#campo-obs-auditoria').val()
    const numeroProposta = $('#campo-numero-proposta').val()
    const dtVenda = $('#campo-data-venda').val()
    const mesRef = $('#campo-mes-referencia').val()
    const status = $('#campo-status').val()
    const linhaCredito = $('#campo-linha-credito').val()
    const valorProposta = $('#campo-valor-proposta').val().val()
    const valorTRoco = $('#campo-valor-troco').val()
    const valorLiquido = $('#campo-valor-liquido').val()
    const qtdParcelas = $('#campo-quantidade-parcelas').val()
    const valorSeguro = $('#campo-valor-seguro').val()
    const mailing = $('#campo-mailing-origem').val()
    const valorParcela = $('#campo-valor-parcela').val()
    const vendaAlterar = $('#campo-venda-alterar').val()
    const vencParcela = $('#campo-vencimento-1-parcela').val()
    const convenio = $('#campo-convenio').val()
    const nmCliente = $('#campo-nome-cliente').val()
    const cpfCliente = $('#campo-cpf-cliente').val()
    const telCliente = $('#campo-telefone-cliente').val()
    const agenciaCliente = $('#campo-agencia-cliente').val()
    const contaCliente = $('#campo-conta-cliente').val()
    const parcPromo = $('#campo-parceiro-promotor').val()
    const supervisor = $('#campo-supervisor-alterar').val()
    const gerente = $('#campo-gerente-alterar').val()
    const cpfParcPromo = $('#campo-cpf-parc-promo').val()
    const chave = $('#campo-chave').val()
    const senhaChave = $('#campo-senha-chave').val()
    const nmOperador = $('#campo-nome-operador').val()
    const supervisor2 = $('#campo-supervisor-alterar2').val()
    const gerente2 = $('#campo-gerente-alterar2').val()
    const chavej = $('#campo-chave-j').val()

    const body = {
        id_proposta: id,
        status_auditoria: statusAuditoria,
        falta: statusAuditoria,
        tipo_falta: tipoFalta,
        sub_status: subStatus,
        observacao: obsAuditoria,
        proposta: numeroProposta,
        data_venda: dtVenda,
        mes: mesRef,
        status: status,
        //Linha de credito
        valor_proposta: valorProposta,
        valor_troco: valorTRoco,
        valor_liquido: valorLiquido,
        qtd_parcela: qtdParcelas,
        valor_seguro: valorSeguro,
        //Mailing origem
        valor_parcela: valorParcela,
        tipo_operacao,
        vencimento_parcela: vencParcela,
        convenio: convenio,
        nome: nmCliente,
        cpf: cpfCliente,
        telefone_cliente: telCliente,
        agencia_cliente: agenciaCliente,
        conta_cliente: contaCliente,
        parceiro,
        supervisor: supervisor,
        gerente: gerente,
        cpf_parceiro: cpfParcPromo,
        //Chave
        senha_chave: senhaChave,
        usuario: nmOperador,
        supervisor_parceiro: supervisor2,
        gerente_parceiro: gerente2,
        chavej: chavej
    }

    const raw = JSON.stringify(body)

    const requestOptions = {
        method: 'POST',
        headers: myheaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL + '/auditoria/alterar', requestOptions).
    then(response => response.json().then(function (data) {
        console.log('alterado')
        console.log(data)
    })).catch(error => console.log('error: ', error))
})

//BuscaLogs
const buscarLogs = (idProposta) => {
    const tbodyLogs = document.getElementById("tbody-logs");

    tbodyLogs.innerHTML = ``;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "id_proposta": idProposta
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:3000/user/auditoria/buscarlogs", requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            data.forEach(item => {
                const rowLogs = document.createElement('tr');

                rowLogs.innerHTML = `
                    <td>
                        ${item.data_log}
                    </td>

                    <td style="text-align: center;">
                        ${item.campo}
                    </td>

                    <td style="text-align: center;">
                        ${item.valor_velho}
                    </td>
                        
                    <td>
                        ${item.valor_novo}
                    </td>

                    <td>
                        ${item.usuario}
                    </td>
                    `

                tbodyLogs.appendChild(rowLogs)
            })


        })
        .catch(error => console.log('error', error));
}