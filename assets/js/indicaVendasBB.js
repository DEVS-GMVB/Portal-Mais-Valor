const URL = 'http://localhost:3000/user';

let tipoPesquisa = document.getElementById('tp-pesquisar');
let statusPesquisar = document.getElementById('status-pesquisar');
//let statusIndicaV = document.getElementById('status-indicaV');
let mesPesquisar = document.getElementById('mes-pesquisar');
let bemReferenciaVC = document.getElementById('bem-ref-indicaVC');
let limiteCredito = document.getElementById("limite-credito-indicaV");
//Btn
let btnFiltro = document.getElementById("btn-buscar");
let incluirIndicaVConsorcio = document.getElementById("btn-incluir-consorcio");
let incluirindicaVC = document.getElementById('btn-incluir-indicaVC');
let modalIncluir = document.getElementById('btn-modal-incluir');

//Map
const mapData = new Map();
const mapLinhas = new Map();

//DataSesion
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

function dateNow() {
    let date = new Date();
    let dateNow = `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    return dateNow;
}


window.onload = () => {

    fetch(`${URL}/auditoria/tipo`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json().then(function (data) {
            for (const {
                    tipo
                } of data) {
                tipoPesquisa.innerHTML += `<option value="${tipo}">${tipo}</option>`;
                limiteCredito.innerHTML += `<option value="${tipo}">${tipo}</option>`;
            }
        }));

    fetch(`${URL}/auditoria/status/proposta`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json().then(function (data) {
            for (const {
                    status
                } of data) {
                statusPesquisar.innerHTML += `<option value="${status}">${status}</option>`;
            }
        }));

    fetch(`${URL}/auditoria/mes`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json().then(function (data) {
            for (const {
                    mes
                } of data) {
                mesPesquisar.innerHTML += `<option value="${mes}">${mes}</option>`;
            }
        }));

    fetch(`${URL}/indica/vendas/referencia`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json().then(function (data) {
            for (const {
                    bem_referencia
                } of data) {
                bemReferenciaVC.innerHTML += `<option value="${bem_referencia}">${bem_referencia}</option>`;
            }
        }));
};

modalIncluir.addEventListener('click', () => {
    const dataInputsIndicaV = document.querySelectorAll("form.data-indicaV input");
    const dataSelectsIndicaV = document.querySelectorAll("form.data-indicaV select");
    const dataTextareaIndicaV = document.querySelectorAll("form.data-indicaV textarea");

    const concatArrays = [...dataInputsIndicaV, ...dataSelectsIndicaV, ...dataTextareaIndicaV];

    for (const obj of concatArrays) {
        obj.value = "";
    }


    document.getElementById("div-btn-incluir-indicaV").innerHTML =
        `
    <button type="button" class="btn btn-primary btn-icon-label" id="btn-incluir-indicaV" onclick="incluir()">
        <span class="btn-inner--icon">
            <i class="fas fa-plus"></i>
        </span>
        <span class="btn-inner--text">Incluir</span>
    </button>
    `;
});

btnFiltro.addEventListener("click", async () => {
    //Empty
    document.getElementById("lista").innerHTML = ``;

    //Fields Filter;
    const statusFilter = document.getElementById("status-pesquisar");
    const tipoFilter = document.getElementById("tp-pesquisar");
    const cpfFilter = document.getElementById("cpf-pesquisar");
    const propospotaFilter = document.getElementById("proposta-pesquisar");
    const mesFilter = document.getElementById("mes-pesquisar");
    const dataVendaFilter = document.getElementById("dt-venda-pesquisar");

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        status: statusFilter.value,
        tipo: tipoFilter.value,
        cpf: cpfFilter.value,
        proposta: propospotaFilter.value,
        mes: mesFilter.value,
        data_venda: dataVendaFilter.value
    });

    const data = await fetch(`${URL}/auditoria/filtro`, {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        })
        .then(response => response.json());

    for (let i = 0; i < data.length; i++) {
        mapData.set(data[i].id_proposta, data[i]);

        console.log(data[i]);

        let specific_tbody = document.getElementById('lista');
        let row = specific_tbody.insertRow(-1);
        let proposta = row.insertCell(-1);
        let nome = row.insertCell(-1);
        let cpf = row.insertCell(-1);
        let telefone = row.insertCell(-1);
        let agencia = row.insertCell(-1);
        let conta = row.insertCell(-1);
        let data_cadastro = row.insertCell(-1);
        let valor = row.insertCell(-1);
        let tipo = row.insertCell(-1);
        let status = row.insertCell(-1);
        let sub_status = row.insertCell(-1);
        let data_retorno = row.insertCell(-1);
        let responsavel = row.insertCell(-1);
        let data_atualizacao = row.insertCell(-1);
        let visualizar = row.insertCell(-1);
        let alterar = row.insertCell(-1);

        let propostaText = document.createTextNode(`${data[i].proposta}`);
        proposta.appendChild(propostaText);

        let nomeText = document.createTextNode(`${data[i].nome}`);
        nome.appendChild(nomeText);

        let cpfText = document.createTextNode(`${data[i].cpf}`);
        cpf.appendChild(cpfText);

        let telefoneText = document.createTextNode(`${data[i].telefone_cliente}`);
        telefone.appendChild(telefoneText);

        let agenciaText = document.createTextNode(`${data[i].agencia_cliente}`);
        agencia.appendChild(agenciaText);

        let contaText = document.createTextNode(`${data[i].conta_cliente}`);
        conta.appendChild(contaText);

        let data_cadastroText = document.createTextNode(`${data[i].data_inclusao}`);
        data_cadastro.appendChild(data_cadastroText);

        let valorText = document.createTextNode(`${data[i].valor_liquido}`);
        valor.appendChild(valorText);

        let tipoText = document.createTextNode(`${data[i].tipo}`);
        tipo.appendChild(tipoText);

        let statusText = document.createTextNode(`${data[i].status}`);
        status.appendChild(statusText);

        let sub_statusText = document.createTextNode(`${data[i].sub_status}`);
        sub_status.appendChild(sub_statusText);

        let data_retornoText = document.createTextNode(`${data[i].data_retorno}`);
        data_retorno.appendChild(data_retornoText);

        let responsavelText = document.createTextNode(`${data[i].responsavel}`);
        responsavel.appendChild(responsavelText);

        let data_atualizacaoText = document.createTextNode(`${data[i].data_atualizacao}`);
        data_atualizacao.appendChild(data_atualizacaoText);

        mapLinhas.set(data[i].id_proposta, row);

        visualizar.innerHTML =
            `
            <div class="actions ml-3" style="text-align: center;">
                <a href="#" class="action-item mr-2" data-toggle="modal"
                    data-target=".modal-alterar-autorizacaosoliinss" title="Alterar" onclick="loadModal(this, mapData.get(${data[i].id_proposta}))">
                    <i class="fas fa-eye"></i>
                </a>

            </div>
        `

        alterar.innerHTML =
            `
        <div class="actions ml-3" style="text-align: center;">
            <a href="#" class="action-item mr-2" data-toggle="modal" onclick="update(this, mapData.get(${data[i].id_proposta}))"
                data-target=".modal-alterar-autorizacaosoliinss" title="Alterar">
                <i class="fas fa-external-link-alt"></i>
            </a>

        </div>
        `

    }
});

function update(objDOM, data) {
    // Troca de botões
    document.getElementById("div-btn-incluir-indicaV").innerHTML =
        `
        <button type="button" class="btn btn-primary btn-icon-label" id="btn-incluir-indicaV" onclick="updateMesmo(mapData.get(${data.id_proposta}), mapLinhas.get(${data.id_proposta}))">
            <span class="btn-inner--icon">
                <i class="fas fa-plus"></i>
            </span>
            <span class="btn-inner--text">Incluir / Salvar Alteração</span>
        </button>
    `

    if (data.tipo_operacao !== "CONSÓRCIO") {
        objDOM.setAttribute('data-target', '.modal-nvindicavendas');

        const dataInputsIndicaV = document.querySelectorAll("form.data-indicaV input");
        const dataSelectsIndicaV = document.querySelectorAll("form.data-indicaV select");
        const dataTextareaIndicaV = document.querySelectorAll("form.data-indicaV textarea");

        const concatArrays = [...dataInputsIndicaV, ...dataSelectsIndicaV, ...dataTextareaIndicaV];

        for (const obj of concatArrays) {
            obj.removeAttribute("disabled");
        }

        $("#data-indicaV").val(data.data_venda);
        $("#mes-ref-indicaV").val(data.mes);
        $("#status-indicaV").val(data.status);
        $("#convenio-indicaV").val(data.convenio);
        $("#limite-credito-indicaV").val(data.tipo);
        $("#vl-proposta-indicaV").val(data.valor_proposta);
        $("#vl-troco-indicaV").val(data.valor_troco);
        $("#vl-liquido-indicaV").val(data.valor_liquido);
        $("#quantidade-parcelas-indicaV").val(data.qtd_parcela);
        $("#taxa-juros-indicaV").val(data.taxa_juros);
        $("#vencimento1-parcela-indicaV").val(data.vencimento_parcela);
        $("#vl-parcela-indicaV").val(data.valor_parcela);
        $("#proposta-anteriorCS-indicaV").val("");
        $("#vl-seguro-renovado-indicaV").val(data.valor_seguro);
        $("#vl-seguro-novo-indicaV").val(data.valor_seguro2);
        $("#nm-cliente-indicaV").val(data.nome);
        $("#cpf-cliente-indicaV").val(data.cpf);
        $("#tel-cliente-indicaV").val(data.telefone);
        $("#agencia-cliente-indicaV").val(data.agencia_cliente);
        $("#conta-cliente-indicaV").val(data.conta_cliente);
        $("#chave-j-indicaV").val(data.chavej);
        $("#senha-chave-j-indicaV").val(data.senha_chave);
        $("#obs-indicaV").val(data.observacao);


    } else {
        objDOM.setAttribute("data-target", ".modal-nvindicavendascons");
    }

}

function updateMesmo(data) {
    //Update
    const status = $('#status-indicaV').val();
    const data_venda = $('#data-indicaV').val();
    const mes = $('#mes-ref-indicaV').val();
    // const  = $('#limite-credito-indicaV').val();
    const valor_proposta = $('#vl-proposta-indicaV').val();
    const valor_troco = $('#vl-troco-indicaV').val();
    const valor_liquido = $('#vl-liquido-indicaV').val();
    const qtd_parcela = $('#quantidade-parcelas-indicaV').val();
    const valor_seguro = $('#vl-seguro-renovado-indicaV').val();
    // const  = $('#campo-mailing-origem').val();
    const valor_parcela = $('#vl-parcela-indicaV').val();
    // const tipo_operacao = $('#campo-venda-alterar').val();
    const vencimento_parcela = $('#vencimento1-parcela-indicaV').val();
    const convenio = $('#convenio-indicaV').val();
    const nome = $('#nm-cliente-indicaV').val();
    const cpf = $('#cpf-cliente-indicaV').val();
    const telefone_cliente = $('#tel-cliente-indicaV').val();
    const agencia_cliente = $('#agencia-cliente-indicaV').val();
    const conta_cliente = $('#conta-cliente-indicaV').val();
    // const  = $('#campo-chave').val();
    const senha_chave = $('#senha-chave-j-indicaV').val();
    const chavej = $('#chave-j-indicaV').val();

    const observacao = $("#obs-indicaV").val();

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
        id_proposta: data.id_proposta,
        status,
        observacao,
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
        vencimento_parcela,
        convenio,
        nome,
        cpf,
        telefone_cliente,
        agencia_cliente,
        conta_cliente,
        //Chave
        senha_chave,
        chavej,
        responsavel: dataSession.nome,
        data_atualizacao: dateNow()
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(`${URL}/auditoria/alterar`, requestOptions)
        .then(response => response.json().then((data) => {

            mapData.set(data.id_proposta, data);

            console.log(data);

            $('.sucesso').show();
            $('.sucesso').fadeIn(300).delay(3000).fadeOut(400);
            document.getElementById("sucesso").textContent = "Alterado com sucesso";

            const row = mapLinhas.get(data.id_proposta);
            updateRow(row, data);
        }));
}

function updateRow(row, data) {
    let cellsTr = row.cells;

    cellsTr[0].textContent = data.proposta;
    cellsTr[1].textContent = data.nome;
    cellsTr[2].textContent = data.cpf;
    cellsTr[3].textContent = data.telefone_cliente;
    cellsTr[4].textContent = data.agencia_cliente;
    cellsTr[5].textContent = data.conta_cliente;
    cellsTr[6].textContent = data.data_inclusao;
    cellsTr[7].textContent = data.valor_liquido;
    cellsTr[8].textContent = data.tipo;
    cellsTr[9].textContent = data.status;
    cellsTr[10].textContent = data.sub_status;
    cellsTr[11].textContent = data.data_retorno;
    cellsTr[12].textContent = data.responsavel;
    cellsTr[13].textContent = data.data_atualizacao;
}

function loadModal(objDOM, data) {
    if (data.tipo_operacao !== "CONSÓRCIO") {
        objDOM.setAttribute('data-target', '.modal-nvindicavendas');

        const dataInputsIndicaV = document.querySelectorAll("form.data-indicaV input");
        const dataSelectsIndicaV = document.querySelectorAll("form.data-indicaV select");
        const dataTextareaIndicaV = document.querySelectorAll("form.data-indicaV textarea");

        const concatArrays = [...dataInputsIndicaV, ...dataSelectsIndicaV, ...dataTextareaIndicaV];

        for (const obj of concatArrays) {
            obj.setAttribute("disabled", true);
        }

        $("#data-indicaV").val(data.data_venda);
        $("#mes-ref-indicaV").val(data.mes);
        $("#status-indicaV").val(data.status);
        $("#convenio-indicaV").val(data.convenio);
        $("#limite-credito-indicaV").val(data.tipo);
        $("#vl-proposta-indicaV").val(data.valor_proposta);
        $("#vl-troco-indicaV").val(data.valor_troco);
        $("#vl-liquido-indicaV").val(data.valor_liquido);
        $("#quantidade-parcelas-indicaV").val(data.qtd_parcela);
        $("#taxa-juros-indicaV").val(data.taxa_juros);
        $("#vencimento1-parcela-indicaV").val(data.vencimento_parcela);
        $("#vl-parcela-indicaV").val(data.valor_parcela);
        $("#proposta-anteriorCS-indicaV").val("");
        $("#vl-seguro-renovado-indicaV").val(data.valor_seguro);
        $("#vl-seguro-novo-indicaV").val(data.valor_seguro2);
        $("#nm-cliente-indicaV").val(data.nome);
        $("#cpf-cliente-indicaV").val(data.cpf);
        $("#tel-cliente-indicaV").val(data.telefone);
        $("#agencia-cliente-indicaV").val(data.agencia_cliente);
        $("#conta-cliente-indicaV").val(data.conta_cliente);
        $("#chave-j-indicaV").val(data.chavej);
        $("#senha-chave-j-indicaV").val(data.senha_chave);
        $("#obs-indicaV").val(data.observacao);

    } else {
        objDOM.setAttribute("data-target", ".modal-nvindicavendascons");
    }

}

incluirIndicaVConsorcio.addEventListener("click", () => {
    const {
        emptyFields,
        populaFields
    } = configsInsertConsorcio();
    emptyFields();
    populaFields();
});
incluirindicaVC.addEventListener("click", async () => {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

    let proposta = $('#proposta-indicaVC').val();
    let dtvenda = $('#dt-venda-indicaVC').val();
    let mesRef = $('#mes-ref-indicaVC').val();
    let status = $('#status-indicaVC').val();
    let bemRef = $('#bem-ref-indicaVC').val();
    let valorBem = $('#valor-bem-indicaVC').val();
    let prazo = $('#prazo-conta-indicaVC').val();
    let vlParcela = $('#vl-parcela-indicaVC').val();
    let tpOperacao = $('#tp-operacao-indicaVC').val();
    let grupo = $('#grupo-indicaVC').val();
    let renda = $('#renda-indicaVC').val();
    let nome = $('#nm-cliente-indicaVC').val();
    let cpf = $('#cpf-cliente-indicaVC').val();
    let telefone = $('#tel-cliente-indicaVC').val();
    let agencia = $('#agencia-cliente-indicaVC').val();
    let conta = $('#conta-cliente-indicaVC').val();
    let rg = $('#rg-indicaVC').val();
    let orgao = $('#orgao-emissor-indicaVC').val();
    let cep = $('#cep-indicaVC').val();
    let endereco = $('#endereco-indicaVC').val();
    let numero = $('#numero-endereco-indicaVC').val();
    let cidade = $('#cidade-indicaVC').val();
    let estado = $('#estado-indicaVC').val();
    let profissao = $('#profissao-indicaVC').val();
    let email = $('#email-indicaVC').val();
    let empresa = $('#empresa-indicaVC').val();
    let dtAdmissao = $('#dt-admissao-empresa-indicaVC').val();
    let observacao = $('#obs-indicaVC').val();

    const raw = JSON.stringify({
        proposta: proposta,
        data_venda: dtvenda,
        mes: mesRef,
        status: status,
        bem_referencia: bemRef,
        valor_bem: valorBem,
        prazo: prazo,
        valor_parcela: vlParcela,
        tipo_operacao: tpOperacao,
        grupo: grupo,
        renda: renda,
        nome: nome,
        cpf: cpf,
        telefone_cliente: telefone,
        agencia_cliente: agencia,
        conta_cliente: conta,
        rg: rg,
        orgao_emissor: orgao,
        cep: cep,
        endereco: endereco,
        numero_endereco: numero,
        cidade: cidade,
        estado: estado,
        profissao: profissao,
        email: email,
        empresa: empresa,
        data_admissao: dtAdmissao,
        observacao: observacao
    });

    const {
        id_proposta
    } =
    await fetch(`${URL}/indica/vendas`, {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }).
    then(response => response.json());

    if (id_proposta) {
        $('#sucessos').show();
        $('#sucessos').fadeIn(300).delay(3000).fadeOut(400);
        document.getElementById("sucessos").textContent = "Incluido"

        const fileInput = document.getElementById("gravacao-indicaVC");

        const data = new FormData();
        data.append("gravacao-indicaVC", fileInput[0]);

        const requestOptions = {
            method: 'POST',
            body: data,
            redirect: 'follow'
        };

        fetch(`${URL}/indica/anexo?id_proposta=${id_przoposta}`, requestOptions)

        return;
    }
    return alert("Ocorreu um erro durante a inserção");

});

function MonthNow() {
    let date = new Date();
    let dateNow = `${(date.getMonth() + 1)}/${date.getFullYear()}`;
    return dateNow;
}

//Inserir
$('#mes-ref-indicaV').val(MonthNow());
$('#status-indicaV').val('INDICA VENDAS CADASTRADO');
$("#tp-operacao-indicaVC").val("CONSÓRCIO");

function incluir() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")


    let dtVenda = $('#data-indicaV').val();
    let mes = $('#mes-ref-indicaV').val();
    let status = $('#status-indicaV').val();
    let convenio = $('#convenio-indicaV').val();
    let limitecredito = $('#limite-credito-indicaV').val();
    let vlProposta = $('#vl-proposta-indicaV').val();
    let vlTroco = $('#vl-troco-indicaV').val();
    let vlLiquido = $('#vl-liquido-indicaV').val();
    let qtdParcelas = $('#quantidade-parcelas-indicaV').val();
    let dtVendas = $('#taxa-juros-indicaV').val();
    let vencimento = $('#vencimento1-parcela-indicaV').val();
    let vlParcela = $('#vl-parcela-indicaV').val();
    let propAnterior = $('#proposta-anteriorCS-indicaV').val();
    let vlSeguro = $('#vl-seguro-renovado-indicaV').val();
    let vlSeguroNovo = $('#vl-seguro-novo-indicaV').val();
    let nmCliente = $('#nm-cliente-indicaV').val();
    let cpf = $('#cpf-cliente-indicaV').val();
    let telefone = $('#tel-cliente-indicaV').val();
    let agencia = $('#agencia-cliente-indicaV').val();
    let conta = $('#conta-cliente-indicaV').val();
    let chavej = $('#chave-j-indicaV').val();
    let senhaChave = $('#senha-chave-j-indicaV').val();
    let obj = $('#obs-indicaV').val();

    const body = {
        data_venda: dtVenda,
        mes: mes,
        status: status,
        convenio: convenio,
        //Limite Credito
        valor_proposta: vlProposta,
        valor_troco: vlTroco,
        valor_liquido: vlLiquido,
        qtd_parcela: qtdParcelas,
        taxa_juros: dtVendas,
        vencimento_parcela: vencimento,
        valor_parcela: vlParcela,
        //Proposta Anteriror
        valor_seguro: vlSeguro,
        valor_seguro2: vlSeguroNovo,
        nome: nmCliente,
        cpf: cpf,
        telefone_cliente: telefone,
        agencia_cliente: agencia,
        conta_cliente: conta,
        chavej: chavej,
        senha_chave: senhaChave,
        observacao: obj,
    }

    const raw = JSON.stringify(body)

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(`${URL}/indica/vendas`, requestOptions).
    then(response => response.json()).
    then(function (res) {
        console.log(body)
        $('#sucesso').show();
        $('#sucesso').fadeIn(300).delay(3000).fadeOut(400);
        document.getElementById("sucesso").textContent = "Incluido"

    }).catch(error => console.log('erro: ', error))

}

const configsInsertConsorcio = () => {
    return {
        emptyFields: () => {
            // Data Consorcio
            const inputsDataConsorcio = document.querySelectorAll(".dados-consorcio input");
            const selectsDataConsorcio = document.querySelectorAll(".dados-consorcio select");

            const concatArrays = [...inputsDataConsorcio, ...selectsDataConsorcio];

            for (const obj of concatArrays) {
                obj.value = ""
            };
        },

        populaFields: () => {
            $("#dt-venda-indicaVC").val(new Date().toLocaleDateString());
            $("#mes-ref-indicaVC").val(MonthNow());
            $("#status-indicaVC").val("INDICA VENDAS CADASTRO - CONSORCIO");
            $("#tp-operacao-indicaVC").val("CONSÓRCIO")
        }
    }
}