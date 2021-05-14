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
const statusAuditoriaVisualizar = document.getElementById("campo-status-auditoria");
const faltaSelect = document.getElementById("campo-falta");
const subStatusSelect = document.getElementById("campo-sub-status");
const vendaSelectAlterar = document.getElementById("campo-venda-alterar");
const nomeOperadorAlterar = document.getElementById("campo-nome-operador");
const tipoFalta = document.getElementById("campo-tipo-falta");
const statusAlterar = document.getElementById("campo-status");

const mapLinhas = new Map();
const mapObjetos = new Map();

//Arrays
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
    gerente_cpf: sessionStorage.getItem('gerente_cpf', 'gerente_cpf'),
    classificacao: sessionStorage.getItem('classificacao')
}

//Quebra referência de modais iguais
const quebraReferenciaModais = {
    liberaCamposUpdate: () => {
        const inputs = document.querySelectorAll('.needs-validation input');

        const selects = document.querySelectorAll('.needs-validation select');

        const textAreas = document.querySelectorAll('.needs-validation textarea');

        inputs.forEach(element => {
            element.removeAttribute('disabled');
        })

        selects.forEach(element => {
            element.removeAttribute('disabled');
        })

        textAreas.forEach(element => {
            element.removeAttribute('disabled');
        })
    }
}

//Btns
const btnFiltro = document.getElementById("btn-buscar");
const btnAlterar = document.getElementById("btn-alterar");

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
                vendaSelectAlterar.innerHTML += `<option value="${tipo_operacao}">${tipo_operacao}</option>`;
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
                nomeOperadorAlterar.innerHTML += `<option value="${usuario}">${usuario}</option>`;
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
                statusAuditoriaVisualizar.innerHTML += `<option value="${status_auditoria}">${status_auditoria}</option>`;
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
                statusAlterar.innerHTML += `<option value="${status}">${status}</option>`;
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

    fetch(`${URL}/auditoria/falta`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json())
        .then((data) => {
            for (const {
                    falta
                } of data) {
                faltaSelect.innerHTML += `<option value="${falta}">${falta}</option>`;
            }

        })
        .catch(error => console.error(error));

    fetch(`${URL}/auditoria/substatus`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json())
        .then((data) => {
            for (const {
                    sub_status
                } of data) {
                subStatusSelect.innerHTML += `<option value="${sub_status}">${sub_status}</option>`;
            }

        })
        .catch(error => console.error(error));

    fetch(`${URL}/auditoria/tipo/falta`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json())
        .then((data) => {
            for (const {
                    tipo_falta
                } of data) {
                tipoFalta.innerHTML += `<option value="${tipo_falta}">${tipo_falta}</option>`;
            }

        })
        .catch(error => console.error(error));
}

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

                mapObjetos.set(data[i].id_proposta, data[i]);
                // arrays.arrayId.push(data[i])
                // arrays.arrayRows.push(row)
                mapLinhas.set(data[i].id_proposta, row);

                visualizar.innerHTML = `
                <td class="text-right" style="text-align: center;">
                    <!-- Actions -->
                    <div class="actions ml-3" style="text-align: center;" id="div-visualisar">
                        <a href="#" class="action-item mr-2 " data-toggle="modal"
                            data-target=".modalvisualizaraudit" title="Visualizar"
                            id="visualizar" onclick="visualizar(mapObjetos.get(${data[i].id_proposta}))">
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
                            id="auditar-proposta" onclick="update(mapObjetos.get(${data[i].id_proposta}))">
                            <i class="fas fa-share-square"></i>
                        </a>

                    </div>
                </td>
                
                `
            }
        })
        .catch(error => console.error(error));
})

//Modal
function visualizar(data) {

    //Preencher tabela de logs
    buscarLogs(data.id_proposta);

    preencherModalInfo(data);

    //Escondendo  os botões
    document.getElementById('div-btn-alterar').innerHTML = ``;
    document.getElementById('div-btn-observacao').style.display = 'none';

    //Bloqueando os campos
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

//Update
function update(data) {

    document.getElementById("div-btn-alterar").innerHTML = `
    <button type="button" class="btn btn-primary btn-icon-label" id="btn-alterar" onclick="updateAuditoria(${data.id_proposta})">
        <span class="btn-inner--icon">
            <i class="fas fa-plus"></i>
        </span>
        <span class="btn-inner--text">Alterar</span>
    </button>
    
    `;

    quebraReferenciaModais.liberaCamposUpdate();

    buscarLogs(data.id_proposta);

    preencherModalInfo(data);

}

//Tabela Dados do Usuario
(() => {
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
                        ${dataSession.classificacao}
                    </td>
                </tr>
            </tbody>
    </table>`
})()

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

    fetch(`${URL}/auditoria/buscarlogs`, requestOptions)
        .then(response => response.json())
        .then(data => {

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

const preencherModalInfo = (data) => {
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
}

const updateAuditoria = (id_proposta) => {

    const status_auditoria = $('#campo-status-auditoria').val();
    const falta = $('#campo-falta').val();
    const tipo_falta = $('#campo-tipo-falta').val();
    const sub_status = $('#campo-sub-status').val();
    const observacao = $('#campo-obs-auditoria').val();
    const proposta = $('#campo-numero-proposta').val();
    const data_venda = $('#campo-data-venda').val();
    const mes = $('#campo-mes-referencia').val();
    const status = $('#campo-status').val();
    // const  = $('#campo-linha-credito').val();
    const valor_proposta = $('#campo-valor-proposta').val();
    const valor_troco = $('#campo-valor-troco').val();
    const valor_liquido = $('#campo-valor-liquido').val();
    const qtd_parcela = $('#campo-quantidade-parcelas').val();
    const valor_seguro = $('#campo-valor-seguro').val();
    // const  = $('#campo-mailing-origem').val();
    const valor_parcela = $('#campo-valor-parcela').val();
    const tipo_operacao = $('#campo-venda-alterar').val();
    const vencimento_parcela = $('#campo-vencimento-1-parcela').val();
    const convenio = $('#campo-convenio').val();
    const nome = $('#campo-nome-cliente').val();
    const cpf = $('#campo-cpf-cliente').val();
    const telefone_cliente = $('#campo-telefone-cliente').val();
    const agencia_cliente = $('#campo-agencia-cliente').val();
    const conta_cliente = $('#campo-conta-cliente').val();
    const parceiro = $('#campo-parceiro-promotor').val();
    const supervisor = $('#campo-supervisor-alterar').val();
    const gerente = $('#campo-gerente-alterar').val();
    const cpf_parceiro = $('#campo-cpf-parc-promo').val();
    // const  = $('#campo-chave').val();
    const senha_chave = $('#campo-senha-chave').val();
    const usuario = $('#campo-nome-operador').val();
    const supervisor_parceiro = $('#campo-supervisor-alterar2').val();
    const gerente_parceiro = $('#campo-gerente-alterar2').val();
    const chavej = $('#campo-chave-j').val();

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
        id_proposta,
        status_auditoria,
        falta,
        tipo_falta,
        sub_status,
        observacao,
        proposta,
        data_venda,
        mes,
        status,
        //Linha de credito
        valor_proposta,
        valor_troco,
        valor_liquido,
        qtd_parcela,
        valor_seguro,
        //Mailing origem
        valor_parcela,
        tipo_operacao,
        vencimento_parcela,
        convenio,
        nome,
        cpf,
        telefone_cliente,
        agencia_cliente,
        conta_cliente,
        parceiro,
        supervisor,
        gerente,
        cpf_parceiro,
        //Chave
        senha_chave,
        usuario,
        supervisor_parceiro,
        gerente_parceiro,
        chavej,

    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(`${URL}/auditoria/alterar`, requestOptions)
        .then(response => response.json().then((data) => {

            mapObjetos.set(data.id_proposta, data);

            $('#success').show();
            $('#success').fadeIn(300).delay(3000).fadeOut(400);
            document.getElementById("success").textContent = "Alterado com sucesso";

            const row = mapLinhas.get(id_proposta);
            updateRow(row, data);
        }));
}

const updateRow = (row, data) => {
    let cellsTr = row.cells;

    cellsTr[0].textContent = "";
    cellsTr[1].textContent = data.data_venda;
    cellsTr[2].textContent = data.data_inclusao;
    cellsTr[3].textContent = data.valor_proposta;
    cellsTr[4].textContent = data.tipo;
    cellsTr[5].textContent = data.tipo_operacao;
    cellsTr[6].textContent = data.usuario;
    cellsTr[7].textContent = data.supervisor;
    cellsTr[8].textContent = data.status;
    cellsTr[9].textContent = data.status_auditoria;
    cellsTr[10].textContent = data.sub_status;
    cellsTr[11].textContent = data.pontuacao;
    cellsTr[12].textContent = data.responsavel;
    cellsTr[13].textContent = data.data_alteracao;
}