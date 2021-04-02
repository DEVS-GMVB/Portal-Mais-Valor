const URL = `http://localhost:3000`;

const filial_filtro = document.getElementById("filial-pesquisa");
const supervisor_filtro = document.getElementById("supervisor-pesquisa");
const gerente_filtro = document.getElementById("gerente-pesquisa");
const filial_incluir = document.getElementById("filial-incluir");
const supervisor_incluir = document.getElementById("supervisor-incluir");
const gerente_incluir = document.getElementById("gerente-incluir");

//Maps
const modal = new Map();
const modalRow = new Map();


//Eventos de Botões
const botao_filtro = document.getElementById("btn-buscar");
const botao_troca_incluir = document.getElementById("buttonIncluir");
const cnpj_parceiro = document.getElementById("cpfcnpj-parc-incluir");
const botao_excel = document.getElementById("planilhaExcel");


//Sessão Dados
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
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }

    fetch(URL + "/user/filial", requestOptions)
        .then(response => response.json()
            .then(function (data) {
                for (let i = 0; i < data.length; i++) {
                    filial_filtro.innerHTML += '<option value="' + data[i].filial + '">' + data[i].filial + '</option>;'
                    filial_incluir.innerHTML += '<option value="' + data[i].filial + '">' + data[i].filial + '</option>;'
                }
            }))
        .catch(error => console.log('error', error));

    fetch(URL + "/user/supervisor", requestOptions)
        .then(response => response.json())
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                supervisor_filtro.innerHTML += '<option value="' + data[i].parceiro + '">' + data[i].parceiro + '</option>;'
                supervisor_incluir.innerHTML += '<option value="' + data[i].parceiro + '">' + data[i].parceiro + '</option>;'

            }
        }).catch(error => console.log('error', error));

    fetch(URL + "/user/gerente", requestOptions)
        .then(response => response.json().then(function (data) {
            for (let i = 0; i < data.length; i++) {
                gerente_filtro.innerHTML += '<option value="' + data[i].gerente + '">' + data[i].gerente + '</option>;'
                gerente_incluir.innerHTML += '<option value="' + data[i].gerente + '">' + data[i].gerente + '</option>;'
            }
        })).catch(error => console.log('error', error));
}

const breakModal = {
    //Limpar campos
    empty: function () {
        $('.needs-validation').each(function () {
            this.reset();
        });
    },

    changeInsert: function () {
        document.getElementById('changeButton').innerHTML =
            `
        <button type="button" class="btn btn-primary btn-icon-label" id="btn-incluir" onclick="insert()">
            <span class="btn-inner--icon">
                <i class="fas fa-plus"></i>
            </span>
            <span class="btn-inner--text">Incluir</span>
        </button>
        
        `
    },

    changeUpdate: function (obj) {
        document.getElementById('changeButton').innerHTML =
            `
        <button type="button" class="btn btn-primary btn-icon-label" id="btn-incluir" onclick="update(modal.get(${obj.id_lancamento}))">
            <span class="btn-inner--icon">
                <i class="fas fa-plus"></i>
            </span>
            <span class="btn-inner--text">Atualizar</span>
        </button>
        
        `
    }
}

const functionsFiltro = {
    limpaTabela: () => {
        let node = document.getElementById("list")
        while (node.hasChildNodes()) {
            node.removeChild(node.lastChild);
        }
    }
}

botao_filtro.addEventListener('click', () => {
    //Limpa tabela para n acumular registros
    functionsFiltro.limpaTabela();

    //Campos do Filtro
    const data_lancamento = $("#dt-lanç-pesquisa").val();
    const competencia = $("#competencia-pesquisa").val();
    const banco = $("#banco-pesquisa").val();
    const filial = $("#filial-pesquisa").val();
    const uf = $("#uf-pesquisa").val();
    const grupo = $("#grupo-pesquisa").val();
    const sub_grupo = $("#sub-grp-pesquisa").val();
    const cpf_cnpj_parceiro = $("#cpfcnpj-parc-pesquisa").val();
    const parceiro = $("#parceiro-pesquisa").val();
    const supervisor = $("#supervisor-pesquisa").val();
    const gerente = $("#gerente-pesquisa").val();
    const cpf_cnpj_favorecido = $("#cpfcnpj-fav-pesquisa").val();
    const favorecido = $("#favorecido-pesquisa").val();
    const solicitante = $("#solicitante-pesquisa").val();
    const projeto = $("#projeto-pesquisa").val();
    const empresa = $("#empresa-pesquisa").val();
    const tipo_despesa = $("#tipo-empresa-pesquisa").val();
    const codigo_lancamento = $("#codigo-lanç-pesquisa").val();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "data_cadastro": data_lancamento,
        "ref": competencia,
        "banco": banco,
        "filial": filial,
        "uf": uf,
        "grupo": grupo,
        "sub_grupo": sub_grupo,
        "cnpj": cpf_cnpj_parceiro,
        "parceiro": parceiro,
        "supervisor": supervisor,
        "gerente": gerente,
        "cpf": cpf_cnpj_favorecido,
        "favorecido": favorecido,
        "solicitante": solicitante,
        "projeto": projeto,
        "empresa": empresa,
        "tipo_despesa": tipo_despesa,
        "cod_lancamento": codigo_lancamento
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(URL + "/user/financeiro/filtro", requestOptions)
        .then(response => response.json())
        .then(data => {
            //HashMap estrutura de dados
            for (let i = 0; i < data.length; i++) {

                let specific_tbody = document.getElementById('list');
                let row = specific_tbody.insertRow(-1);
                let competencia = row.insertCell(-1);
                let filial = row.insertCell(-1);
                let descricao = row.insertCell(-1);
                let grupo = row.insertCell(-1);
                let sub_grupo = row.insertCell(-1);
                let cpf_parceiro = row.insertCell(-1);
                let parceiro = row.insertCell(-1);
                let supervisor = row.insertCell(-1);
                let gerente = row.insertCell(-1);
                let cpf_favorecido = row.insertCell(-1);
                let favorecido = row.insertCell(-1);
                let solicitante = row.insertCell(-1);
                let digitado_por = row.insertCell(-1);
                let projeto = row.insertCell(-1);
                let valor = row.insertCell(-1);
                let empresa = row.insertCell(-1);
                let tipo_despesa = row.insertCell(-1);
                let data_vencimento = row.insertCell(-1);
                let alterar = row.insertCell(-1);


                let competenciaText = document.createTextNode(`${data[i].ref}`);
                competencia.appendChild(competenciaText);

                let filialText = document.createTextNode(`${data[i].filial}`);
                filial.appendChild(filialText);

                let descricaoText = document.createTextNode(`${data[i].descricao}`);
                descricao.appendChild(descricaoText);

                let grupoText = document.createTextNode(`${data[i].grupo}`);
                grupo.appendChild(grupoText);

                let sub_grupoText = document.createTextNode(`${data[i].sub_grupo}`);
                sub_grupo.appendChild(sub_grupoText);

                let cpf_parceiroText = document.createTextNode(`${data[i].cnpj}`);
                cpf_parceiro.appendChild(cpf_parceiroText);

                let parceiroText = document.createTextNode(`${data[i].parceiro}`);
                parceiro.appendChild(parceiroText);

                let supervisorText = document.createTextNode(`${data[i].supervisor}`);
                supervisor.appendChild(supervisorText);

                let gerenteText = document.createTextNode(`${data[i].gerente}`);
                gerente.appendChild(gerenteText);

                let cpf_favorecidoText = document.createTextNode(`${data[i].cpf}`);
                cpf_favorecido.appendChild(cpf_favorecidoText);

                let favorecidoText = document.createTextNode(`${data[i].favorecido}`);
                favorecido.appendChild(favorecidoText);

                let solicitanteText = document.createTextNode(`${data[i].solicitante}`);
                solicitante.appendChild(solicitanteText);

                let digitado_porText = document.createTextNode(`${data[i].responsavel}`);
                digitado_por.appendChild(digitado_porText);

                let projetoText = document.createTextNode(`${data[i].projeto}`);
                projeto.appendChild(projetoText);

                let valorText = document.createTextNode(`${data[i].valor}`);
                valor.appendChild(valorText);

                let empresaText = document.createTextNode(`${data[i].empresa}`);
                empresa.appendChild(empresaText);

                let tipo_despesaText = document.createTextNode(`${data[i].tipo_despesa}`);
                tipo_despesa.appendChild(tipo_despesaText);

                let data_vencimentoText = document.createTextNode(`${data[i].data_vencimento}`);
                data_vencimento.appendChild(data_vencimentoText);

                //Passando minha proposta neste escopo
                modal.set(data[i].id_lancamento, data[i]);
                modalRow.set(data[i].id_lancamento, row);

                alterar.innerHTML =
                    `
                    <td class="text-right" style="text-align: center;">
                        <!-- Actions -->
                        <div class="actions ml-3" style="text-align: center;" >
                            <a href="#" class="action-item mr-2 " 
                            data-toggle="modal" 
                                data-target=".modalincnclacamento" title="Alterar"
                                id="modalAlterar" onclick="populaCampos(modal.get(${data[i].id_lancamento}), modalRow.get(${data[i].id_lancamento}))">
                                <i class="fas fa-sync-alt"></i>
                            </a>

                        </div>
                    </td>

                `
            }
        })
        .catch(error => console.log('error', error));
})

botao_troca_incluir.addEventListener('click', () => {
    breakModal.empty();
    breakModal.changeInsert();
})


cnpj_parceiro.addEventListener('blur', () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "cnpj": cnpj_parceiro.value
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(URL + "/user/financeiro/busca", requestOptions)
        .then(response => response.json())
        .then(result => {
            $("#parceiro-incluir").val(result.parceiro);
            $("#supervisor-incluir").val(result.supervisor);
            $("#gerente-incluir").val(result.gerente);
            $("#cpfcnpj-fav-incluir").val(result.cpf);
            $("#favorecido-incluir").val(result.favorecido);
            $("#tipo-pag-incluir").val(result.tipo_pagamento);
            $("#banco-pag-incluir").val(result.banco_parceiro);
            $("#agencia-pag-incluir").val(result.agencia_parceiro);
            $("#conta-pag-incluir").val(result.conta_parceiro);
            $("#numero-cartao-incluir").val(result.numero_cartao);
        })
        .catch(error => console.log('error', error));
})


function insert() {
    const dtMovimentacao = $('#data-movimento-incluir').val()
    const competencia = $('#competencia-incluir').val()
    const empresa = $('#empresa-incluir').val()
    const filial = $('#filial-incluir').val()
    const uf = $('#uf-incluir').val()
    const grupo = $('#grupo-incluir').val()
    const subGrupo = $('#sub-grupo-incluir').val()
    const projeto = $('#projeto-incluir').val()
    const cpfCnpjParc = $('#cpfcnpj-parc-incluir').val()
    const parcPromo = $('#parc-promo-incluir').val()
    const supervisor = $('#supervisor-incluir').val()
    const gerente = $('#gerente-incluir').val()
    const cpfCnpjFav = $('#cpfcnpj-fav-incluir').val()
    const favorecido = $('#favorecido-incluir').val()
    const tpPagamento = $('#tipo-pag-incluir').val()
    const bancoPag = $('#banco-pag-incluir').val()
    const agenciaPag = $('#agencia-pag-incluir').val()
    const contaPag = $('#conta-pag-incluir').val()
    const numeroCartao = $('#numero-cartao-incluir').val()
    const tipoLancamento = $('#tipo-lanç-incluir').val()
    const codLancamento = $('#codigo-lanç-incluir').val()
    const solicitante = $('#solicitante-incluir').val()
    const valor = $('#valor-incluir').val()
    const vencimento = $('#vencimento-incluir').val()
    const descricao = $('#descricao-incluir').val()
    const observacao = $('observacao-incluir').val()

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

    const body = {
        data_movimento: dtMovimentacao,
        ref: competencia,
        empresa: empresa,
        filial: filial,
        uf: uf,
        grupo: grupo,
        sub_grupo: subGrupo,
        projeto: projeto,
        cnpj: cpfCnpjParc,
        parceiro: parcPromo,
        supervisor: supervisor,
        gerente: gerente,
        cpf: cpfCnpjFav,
        favorecido: favorecido,
        tipo_pagamento: tpPagamento,
        banco_parceiro: bancoPag,
        agencia_parceiro: agenciaPag,
        conta_parceiro: contaPag,
        numero_cartao: numeroCartao,
        tp_lancamento: tipoLancamento,
        cod_lancamento: codLancamento,
        solicitante: solicitante,
        valor: valor,
        data_vencimento: vencimento,
        descricao: descricao,
        obs: observacao,
        cpf_parceiro: dataSession.cpf_user,
        cpf_supervisor: dataSession.supervisor_cpf,
        cpf_gerente: dataSession.gerente_cpf,
        id_acesso: dataSession.id_acesso
    }

    const raw = JSON.stringify(body)

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL + "/user/financeiro/incluir", requestOptions).
    then(response => response.json()).
    then(function (res) {
        $('#alertSucesso').show();
        $('#alertSucesso').fadeIn(300).delay(3000).fadeOut(400);
        document.getElementById("alertSucesso").textContent = "Lançamento de Pagamento inserido"
    }).catch(error => console.log('erro: ', error))
}

function update(id) {
    const data = dateNow();
    const linha = modalRow.get(id.id_lancamento);

    const myheaders = new Headers()
    myheaders.append('Content-Type', 'application/json')

    const dtMovimentacao = $('#data-movimento-incluir').val()
    const competencia = $('#competencia-incluir').val()
    const empresa = $('#empresa-incluir').val()
    const filial = $('#filial-incluir').val()
    const uf = $('#uf-incluir').val()
    const grupo = $('#grupo-incluir').val()
    const subGrupo = $('#sub-grupo-incluir').val()
    const projeto = $('#projeto-incluir').val()
    const cpfCnpjParc = $('#cpfcnpj-parc-incluir').val()
    const parcPromo = $('#parc-promo-incluir').val()
    const supervisor = $('#supervisor-incluir').val()
    const gerente = $('#gerente-incluir').val()
    const cpfCnpjFav = $('#cpfcnpj-fav-incluir').val()
    const favorecido = $('#favorecido-incluir').val()
    const tpPagamento = $('#tipo-pag-incluir').val()
    const bancoPag = $('#banco-pag-incluir').val()
    const agenciaPag = $('#agencia-pag-incluir').val()
    const contaPag = $('#conta-pag-incluir').val()
    const numeroCartao = $('#numero-cartao-incluir').val()
    const tipoLancamento = $('#tipo-lanç-incluir').val()
    const codLancamento = $('#codigo-lanç-incluir').val()
    const solicitante = $('#solicitante-incluir').val()
    const valor = $('#valor-incluir').val()
    const vencimento = $('#vencimento-incluir').val()
    const descricao = $('#descricao-incluir').val()
    const observacao = $('#observacao-incluir').val()

    const body = {
        id_lancamento: id.id_lancamento,
        data_movimento: dtMovimentacao,
        ref: competencia,
        empresa: empresa,
        filial: filial,
        uf: uf,
        grupo: grupo,
        sub_grupo: subGrupo,
        projeto: projeto,
        cnpj: cpfCnpjParc,
        parceiro: parcPromo,
        supervisor: supervisor,
        gerente: gerente,
        cpf: cpfCnpjFav,
        favorecido: favorecido,
        tipo_pagamento: tpPagamento,
        banco_parceiro: bancoPag,
        agencia_parceiro: agenciaPag,
        conta_parceiro: contaPag,
        numero_cartao: numeroCartao,
        tp_lancamento: tipoLancamento,
        cod_lancamento: codLancamento,
        solicitante: solicitante,
        valor: valor,
        data_vencimento: vencimento,
        descricao: descricao,
        obs: observacao,
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

    fetch(URL + '/user/financeiro/alterar', requestOptions).
    then(response => response.json().then(function (data) {
        modal.set(modal.get(data.id_lancamento).id_lancamento, data);
        fields.atualizaTable(data, linha);

        $('#alertSucesso').show();
        $('#alertSucesso').fadeIn(300).delay(3000).fadeOut(400);
        document.getElementById("alertSucesso").textContent = "Lançamento de Pagamento atualizado"
        
    })).catch(error => console.log('error: ', error))
}

function populaCampos(obj, linha) {
    const objAtualizado = modal.get(obj.id_lancamento)

    breakModal.empty();
    breakModal.changeUpdate(obj, linha);
    fields.preenche(objAtualizado);
}

const fields = {
    preenche: (data) => {
        $("#data-movimento-incluir").val(data.data_movimento);
        $("#competencia-incluir").val(data.ref);
        $("#empresa-incluir").val(data.empresa);
        $("#filial-incluir").val(data.filial);
        $("#uf-incluir").val(data.uf);
        $("#grupo-incluir").val(data.grupo);
        $("#sub-grupo-incluir").val(data.sub_grupo);
        $("#projeto-incluir").val(data.projeto);
        $("#cpfcnpj-parc-incluir").val(data.cnpj)
        $("#parc-promo-incluir").val(data.parceiro);
        $("#supervisor-incluir").val(data.supervisor);
        $("#gerente-incluir").val(data.gerente);
        $("#cpfcnpj-fav-incluir").val(data.cpf);
        $("#favorecido-incluir").val(data.favorecido);
        $("#tipo-pag-incluir").val(data.tipo_pagamento);
        $("#banco-pag-incluir").val(data.banco);
        $("#agencia-pag-incluir").val(data.agencia_parceiro);
        $("#conta-pag-incluir").val(data.conta_parceiro);
        $("#numero-cartao-incluir").val(data.numero_cartao);
        $("#tipo-lanç-incluir").val(data.tipo_lancamento);
        $("#codigo-lanç-incluir").val(data.id_lancamento);
        $("#solicitante-incluir").val(data.solicitante);
        $("#valor-incluir").val(data.valor);
        $("#vencimento-incluir").val(data.data_vencimento);
        $("#descricao-incluir").val(data.descricao);
        $("#observacao-incluir").val(data.obs);
    },

    atualizaTable: (data, linha) => {
        let cells = linha.cells;
        cells[0].textContent = data.ref
        cells[1].textContent = data.filial
        cells[2].textContent = data.descricao
        cells[3].textContent = data.grupo
        cells[4].textContent = data.sub_grupo;
        cells[5].textContent = data.cnpj
        cells[6].textContent = data.parceiro;
        cells[7].textContent = data.supervisor
        cells[8].textContent = data.gerente;
        cells[9].textContent = data.cpf;
        cells[10].textContent = data.favorecido;
        cells[11].textContent = data.solicitante;
        cells[12].textContent = data.digitacao;
        cells[13].textContent = data.projeto;
        cells[14].textContent = data.valor;
        cells[15].textContent = data.empresa;
        cells[16].textContent = data.tipo_despesa;
        cells[17].textContent = data.data_vencimento
    }
}


botao_excel.addEventListener('click', () => {
  var table2excel = new Table2Excel();
  table2excel.export(document.querySelectorAll("#table"));

})