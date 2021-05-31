const URL = 'http://localhost:3000/user';
const URL_API_CEP = 'https://viacep.com.br/ws/';

//COMBOS => SELECTS
const bancoSelect = document.getElementById("banco-proposta");
const bancoFiltro = document.getElementById("banco-pesquisa");
const tipoFiltro = document.getElementById("tipo-pesquisa");
const tipoSelect = document.getElementById("tipo-preventivo");
const tipoSelect2 = document.getElementById("tipo-operacao-proposta");
const produtoFiltro = document.getElementById("produto-pesquisa");
const produtoSelect = document.getElementById("produto-proposta");
const statusFiltro = document.getElementById("status-pesquisa");
const statusSelect = document.getElementById("status-preventivo");
const statusSelect2 = document.getElementById("status-proposta");
const supervisores = document.getElementById("supervisor-proposta");
const empresaSelect = document.getElementById("empresa-proposta");
const subStatus = document.getElementById("sub-status-proposta");
const bancoPortador = document.getElementById("banco-portador-proposta");
//EVENTOS
const cep = document.getElementById("cep-proposta");
const btnIncluir = document.getElementById('btn-incluir-proposta');
const btnAnexo = document.getElementById("btn-incluir-anexos");
let btnPesquisar = document.getElementById('btn-buscar');
const btnIncluirProposta = document.getElementById('btn-novaProposta');
const btnIncluirPreventivo = document.getElementById("btn-incluir-preventivo");
const donwloadContrato = document.getElementById("teste");

// estrutura de dados
const mapHash = new Map();

//Arrays
const arrays = {
    arrayId: arrayId = []
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

window.onload = () => {

    fetch(`${URL}/proposta/aguardando/banco`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json().then(function (data) {
            for (const {
                    banco
                } of data) {
                bancoSelect.innerHTML += `<option value="${banco}">${banco}</option>`;
                bancoFiltro.innerHTML += `<option value="${banco}">${banco}</option>`;
            }
        }));

    fetch(`${URL}/proposta/aguardando/tipo`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json().then(function (data) {
            for (const {
                    tipo
                } of data) {
                tipoFiltro.innerHTML += `<option value="${tipo}">${tipo}</option>`;
                tipoSelect.innerHTML += `<option value="${tipo}">${tipo}</option>`;
                tipoSelect2.innerHTML += `<option value="${tipo}">${tipo}</option>`;
            }
        }));

    fetch(`${URL}/proposta/aguardando/produto`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json().then(function (data) {
            for (const {
                    produto
                } of data) {
                produtoFiltro.innerHTML += `<option value="${produto}">${produto}</option>`;
                produtoSelect.innerHTML += `<option value="${produto}">${produto}</option>`;
            }
        }));

    fetch(`${URL}/proposta/aguardando/status`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json().then(function (data) {
            for (const {
                    status
                } of data) {
                statusFiltro.innerHTML += `<option value="${status}">${status}</option>`;
                statusSelect.innerHTML += `<option value="${status}">${status}</option>`;
                statusSelect2.innerHTML += `<option value="${status}">${status}</option>`;

            }
        }));

    fetch(`${URL}/supervisor`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json().then(function (data) {
            for (const {
                    parceiro
                } of data) {
                supervisores.innerHTML += `<option value="${parceiro}">${parceiro}</option>`;
            }
        }));

    fetch(`${URL}/proposta/empresas`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json().then(function (data) {
            for (const {
                    empresa
                } of data) {
                empresaSelect.innerHTML += `<option value="${empresa}">${empresa}</option>`;
            }
        }));

    fetch(`${URL}/proposta/substatus`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json().then(function (data) {
            for (const sub_status of data) {
                subStatus.innerHTML += `<option value="${sub_status}">${sub_status}</option>`;
            }
        }));

    fetch(`${URL}/proposta/bancos`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json().then(function (data) {
            for (const {
                    banco
                } of data) {
                bancoPortador.innerHTML += `<option value="${banco}">${banco}</option>`;
            }
        }));
}

cep.addEventListener('blur', async () => {

    const data = await fetch(`${URL_API_CEP}/${cep.value.replace(/-/g, "")}/json`).then(response => (response.status === 200) ? response.json() : {
        message: "CEP Inválido"
    });

    $("#cidade-endereco-proposta").val(data.localidade);
    $("#endereco-proposta").val(data.logradouro);
    $("#bairro-proposta").val(data.bairro);
    $("#complemento-proposta").val(data.complemento);
    $("#uf-endereco-proposta").val(data.uf)

    document.getElementById("uf-endereco-proposta").focus();

});

btnIncluir.addEventListener('click', async () => {
    let numeroProposta = $("#numero-proposta").val();
    let dtCadastro = $("#data-cadastro-proposta").val();
    let mesRef = $("#mes-referencia-proposta").val();
    let banco = $("#banco-proposta").val();
    let produto = $("#produto-proposta").val();
    let vlEntregue = $("#valor-entregue-proposta").val();
    let vlTroco = $("#valor-troco-proposta").val();
    let vlParcela = $("#valor-parcela-proposta").val();
    let tpOperacao = $("#tipo-operacao-proposta").val();
    let salariVencimento = $("#salario-vencimento-proposta").val();
    let margemNegativa = $("#margem-negativa-proposta").val();
    let qtdParcela = $("#qtd-parcelas-proposta").val();
    let formaLiberacao = $("#forma-liberacao-proposta").val();
    let seguroProp = $("#seguro-proposta").val();
    let agencia = $("#agencia-proposta").val();
    let taxaEspecial = $("#taxa-especial-proposta").val();
    let codigoValidacao = $("#codigo-validacao-proposta").val();
    let propPortadas = $("#propostas-portadas-propostas").val();
    let saque = $("#saque-propostas").val();
    let vlSaque = $("#valor-saque-propostas").val();
    let priVencimento = $("#dt-pri-vencimento-proposta").val();
    let ultVencimento = $("#dt-ult-vencimento-proposta").val();
    let parcRef1 = $("#vl-parcela-refin-1").val();
    let parcRef2 = $("#vl-parcela-refin-2").val();
    let parcRef3 = $("#vl-parcela-refin-3").val();
    let parcRef4 = $("#vl-parcela-refin-4").val();
    let parcRef5 = $("#vl-parcela-refin-5").val();
    let parcRef6 = $("#vl-parcela-refin-6").val();
    let formaCalc = $("#forma-calculo-proposta").val();
    let cartaoMag = $("#cartao-magnetico-proposta").val();
    let bancoPort = $("#banco-portador-proposta").val();
    let status = $("#status-proposta").val();
    let subStatus = $("#sub-status-proposta").val();
    let convenio = $("#convenio-proposta").val();
    let regraConvenio = $("#regra-convenio-proposta").val();
    let especie = $("#especie-proposta").val();
    let resultadoAverb = $("#resultado-averbacao-proposta").val();
    let observacao = $("#observacao-proposta").val();
    let nmCliente = $("#nm-cliente-proposta").val();
    let cpfCliente = $("#cpf-cliente-proposta").val();
    let matricula = $("#matricula-proposta").val();
    let estadoCivil = $("#estado-civil-proposta").val();
    let ufNaturalidade = $("#uf-naturalidade-proposta").val();
    let naturalidade = $("#naturalidade-proposta").val();
    let rgProposta = $("#rg-proposta").val();
    let dtEmissaoRg = $("#dt-emissao-rg-proposta").val();
    let orgaoExpeditor = $("#orgao-expeditor-proposta").val();
    let nmMae = $("#nm-mae-proposta").val();
    let nmPai = $("#nm-pai-proposta").val();
    let dtAdmissao = $("#dt-admissao-proposta").val();
    let ufEndereco = $("#uf-endereco-proposta").val();
    let cidadeEndereco = $("#cidade-endereco-proposta").val();
    let cep = $("#cep-proposta").val();
    let endereco = $("#endereco-proposta").val();
    let bairro = $("#bairro-proposta").val();
    let numero = $("#numero2-proposta").val();
    let complemento = $("#complemento-proposta").val();
    let tpContaCliente = $("#tp-conta-cliente-proposta").val();
    let bancoCliente = $("#banco-cliente-proposta").val();
    let agenciaCliente = $("#agencia-cliente-proposta").val();
    let contaCliente = $("#conta-cliente-proposta").val();
    let conjuge = $("#conjuge-proposta").val();
    let dtNascimento = $("#dt-nascimento-proposta").val();
    let correntista = $("#correntista-proposta").val();
    let ufDocumento = $("#uf-documento-proposta").val();
    let profissao = $("#profissao-proposta").val();
    let tpTelefone = $("#tp-telefone-proposta").val();
    let ddd = $("#ddd-telefone-proposta").val();
    let telefoneCliente = $("#telefone-cliente-proposta").val();
    let tpFuncionario = $("#tp-funcionario-proposta").val();
    let email = $("#email-proposta").val();
    let tpProcedente = $("#tp-procedente-proposta").val();
    let sistemaTel = $("#sistema-telefone-proposta").val();
    let usuario = $("#usuario-proposta").val();
    let supervisor = $("#supervisor-proposta").val();
    let empresa = $("#empresa-proposta").val();
    let tpCliente = $("#tp-cliente-proposta").val();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

    const body = {
        proposta: numeroProposta,
        data_inclusao: dtCadastro,
        mes: mesRef,
        banco: banco,
        produto: produto,
        //valor enrtegue
        valor_troco: vlTroco,
        valor_parcela: vlParcela,
        tipo: tpOperacao,
        salario: salariVencimento,
        margem: margemNegativa,
        parcela: qtdParcela,
        forma_liberacao: formaLiberacao,
        seguro: seguroProp,
        agencia: agencia,
        taxaespecial: taxaEspecial,
        codigo_validacao: codigoValidacao,
        //Proposta portadas
        saque: saque,
        valor_saque: vlSaque,
        primeiro_vencimento: priVencimento,
        ultimo_vencimento: ultVencimento,
        parcela_refin1: parcRef1,
        parcela_refin2: parcRef2,
        parcela_refin3: parcRef3,
        parcela_refin4: parcRef4,
        parcela_refin5: parcRef5,
        parcela_refin6: parcRef6,
        //Formula de calculo
        cartao_m: cartaoMag,
        banco_port1: bancoPort, //Banco portador
        status: status,
        sub_status: subStatus,
        convenio: convenio,
        regra: regraConvenio,
        especie: especie,
        resultado_averbacao: resultadoAverb,
        observacao: observacao,
        nome: nmCliente, //nome cliente
        cpf: cpfCliente,
        matricula: matricula,
        estado_civil: estadoCivil,
        uf_naturalidade: ufNaturalidade,
        naturalidade: naturalidade,
        rg: rgProposta,
        data_emissao: dtEmissaoRg,
        orgao_emissor: orgaoExpeditor,
        nome_mae: nmMae,
        nome_pai: nmPai,
        // data_admissao,
        uf: ufEndereco,
        //Cidade
        cep: cep,
        endereco: endereco,
        bairro: bairro,
        numero_endereco: numero,
        complemento: complemento,
        tipo_conta: tpContaCliente,
        banco_cliente: bancoCliente,
        agencia_cliente: agenciaCliente,
        conta_cliente: contaCliente,
        conjuge: conjuge,
        data_nascimento: dtNascimento,
        correntista: correntista,
        documento_uf: ufDocumento,
        // codigo_profissao, Profissao
        telefone_tipo_1: tpTelefone,
        telefone_ddd_1: ddd,
        telefone_numero_1: telefoneCliente,
        tipo_funcionario: tpFuncionario,
        email_cliente: email,
        // Tipo procedente  
        sistema_tel: sistemaTel,
        // Usuario
        supervisor: supervisor,
        empresa: empresa,
        // Tipo usuario
        cpf_supervisor: dataSession.supervisor_cpf,
        cpf_gerente: dataSession.gerente_cpf,
        cpf_parceiro: dataSession.cpf_user,
    }

    const raw = JSON.stringify(body)

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    const codigo = await fetch(URL + "/proposta/aguardando/incluir", requestOptions).
    then(response => response.json()).
    then(function (res) {
        $('#sucessos').show();
        $('#sucessos').fadeIn(300).delay(3000).fadeOut(400);
        document.getElementById("sucessos").textContent = "Incluindo";
        return res.codigo;
    });

    objEventClickAnexos.transporterId = codigo;
    objEventClickAnexos.insert;

});

const objEventClickAnexos = {

    insert: btnAnexo.addEventListener('click', async () => {
        const codigo = objEventClickAnexos.transporterId;

        let filesInput = document.querySelectorAll("#files-outros input[type='file']");
        let filesInput2 = document.querySelectorAll("#files-outros2 input[type='file']");

        var formdata = new FormData();
        formdata.append("arquivo5", filesInput[0].files[0]);
        formdata.append("arquivo6", filesInput[1].files[0]);
        formdata.append("arquivo7", filesInput[2].files[0]);
        formdata.append("arquivo8", filesInput[3].files[0]);
        formdata.append("arquivo_proposta", filesInput2[0].files[0]);
        formdata.append("termo", filesInput2[1].files[0]);


        const requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        const data = await fetch(`${URL}/proposta/aguardando/anexos?codigo=${codigo}`, requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error));

        console.log(data);

        if (data) {
            $('#sucessoss').show();
            $('#sucessoss').fadeIn(300).delay(3000).fadeOut(400);
            document.getElementById("sucessoss").textContent = "Incluido anexo(s)";

            return;
        } else {
            console.log("Ocorreu um erro durante a inserção de arquivos");
        }
    }),
}

btnIncluirProposta.addEventListener('click', () => {
    const inputs = document.querySelectorAll("#myTabContent input[type=text]");
    const selects = document.querySelectorAll("#myTabContent select");
    const files = document.querySelectorAll("body input[type=file]");

    inputs.forEach((el) => el.value = "");

    selects.forEach((el) => el.value = "");

    files.forEach((el) => el.value = "");
});

//Pesquisar
btnPesquisar.addEventListener('click', () => {

    let node = document.getElementById("tbody-pesquisa")
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }

    const cpf = document.getElementById('cpf-pesquisa').value;
    const status = document.getElementById('status-pesquisa').value;
    const proposta = document.getElementById('proposta-pesquisa').value;
    const mes = document.getElementById('mes-pesquisa').value;
    const tipo = document.getElementById('tipo-pesquisa').value;
    const dtCadastro = document.getElementById('dt-cadastro-pesquisa').value;
    const dtAtualizacao = document.getElementById('dt-atualizacao-pesquisa').value;
    const previsao = document.getElementById('previsao-saldo-pesquisa').value;
    const banco = document.getElementById('banco-pesquisa').value;
    const produto = document.getElementById('produto-pesquisa').value;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "cpf": cpf,
        "status": status,
        "proposta": proposta,
        "mes": mes,
        "tipo": tipo,
        "data_inclusao": dtCadastro,
        "data_atualizacao": dtAtualizacao,
        "previsao_retorno": previsao,
        "banco": banco,
        "produto": produto
    })

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(`${URL}/proposta/aguardando/filtro`, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            arrays.arrayId = [];

            for (let i = 0; i < data.length; i++) {
                let specific_tbody = document.getElementById('tbody-pesquisa');
                let row = specific_tbody.insertRow(-1);
                let proposta = row.insertCell(-1);
                let nome = row.insertCell(-1);
                let cpf = row.insertCell(-1);
                let data_inclusao = row.insertCell(-1);
                let parceiro = row.insertCell(-1);
                let entregue = row.insertCell(-1);
                let convenio = row.insertCell(-1);
                let banco = row.insertCell(-1);
                let produto = row.insertCell(-1);
                let tipo = row.insertCell(-1);
                let status = row.insertCell(-1);
                let sub_status = row.insertCell(-1);
                let data_atualizacao = row.insertCell(-1);
                let logAlteracao = row.insertCell(-1);
                let visualizar = row.insertCell(-1);
                let download = row.insertCell(-1);
                let anexo = row.insertCell(-1);
                let pendencia = row.insertCell(-1);

                let propostaText = document.createTextNode(`${data[i].proposta}`);
                proposta.appendChild(propostaText);

                let nomeText = document.createTextNode(`${data[i].nome}`);
                nome.appendChild(nomeText);

                let cpfText = document.createTextNode(`${data[i].cpf}`);
                cpf.appendChild(cpfText);

                let data_inclusaoText = document.createTextNode(`${data[i].data_inclusao}`);
                data_inclusao.appendChild(data_inclusaoText);

                let parceiroText = document.createTextNode(`${data[i].parceiro}`);
                parceiro.appendChild(parceiroText);

                let entregueText = document.createTextNode(`${data[i].entregue}`);
                entregue.appendChild(entregueText);

                let convenioText = document.createTextNode(`${data[i].convenio}`);
                convenio.appendChild(convenioText);

                let bancoText = document.createTextNode(`${data[i].banco}`);
                banco.appendChild(bancoText);

                let produtoText = document.createTextNode(`${data[i].produto}`);
                produto.appendChild(produtoText);

                let tipoText = document.createTextNode(`${data[i].tipo}`);
                tipo.appendChild(tipoText);

                let statusText = document.createTextNode(`${data[i].status}`);
                status.appendChild(statusText);

                let sub_statusText = document.createTextNode(`${data[i].sub_status}`);
                sub_status.appendChild(sub_statusText);

                let data_atualizacaoText = document.createTextNode(`${data[i].data_atualizacao}`);
                data_atualizacao.appendChild(data_atualizacaoText);

                let logAlteracaoText = document.createTextNode(``);
                logAlteracao.appendChild(logAlteracaoText);

                arrays.arrayId.push(data[i].codigo);
                mapHash.set(data[i].codigo, data[i]);

                visualizar.innerHTML =
                    `<div class="actions ml-3" style="text-align: center;">
                <a href="#" class="action-item mr-2" data-toggle="modal"
                    data-target=".modal-nova-proposta"
                    title="Incluir Documentação" onclick="Modal(arrays.arrayId[${i}])">
                    <i class="fas fa-eye"></i>
                </a>

            </div>`

                download.innerHTML =
                    `<td style="text-align: center;">

            <div class="actions ml-3" style="text-align: center;">
                <a href="#" class="action-item mr-2" data-toggle="modal" onclick="downloadContrato(mapHash.get(${data[i].codigo}))"
                    data-target=".#"
                    title="Incluir Documentação">
                    <i class="fas fa-download"></i>     
                </a>

            </div>
        </td>`


                anexo.innerHTML =
                    `<td style="text-align: center;">

                <div class="actions ml-3" style="text-align: center;">
                    <a href="#" class="action-item mr-2" data-toggle="modal"
                        data-target=".#"
                        title="Incluir Documentação">
                        <i class="fas fa-paperclip"></i>
                    </a>

                </div>
            </td>`

                pendencia.innerHTML =
                    `<td style="text-align: center;">

            <div class="actions ml-3" style="text-align: center;">
                <a href="#" class="action-item mr-2" data-toggle="modal" onclick="downloadTermo(mapHash.get(${data[i].codigo}))"
                    data-target=".#"
                    title="Incluir Documentação">
                    <i class="fas fa-file-contract"></i>
                </a>

            </div>
            </td>`;
            }
        }).catch(error => console.log('error: ', error))
});

btnIncluirPreventivo.addEventListener('click', async () => {
    const cpf = document.getElementById("cpf-cliente-preventivo").value;
    const nome = document.getElementById("nome-cliente-preventivo").value;
    const dataCadastro = document.getElementById("data-cadastro-preventivo").value;
    const mes = document.getElementById("mes-referencia-preventivo").value;
    const tipo = document.getElementById("tipo-preventivo").value;
    const status = document.getElementById("status-preventivo").value;
    const observacao = document.getElementById("observacao-preventivo").value;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        cpf,
        nome,
        data_inclusao: dataCadastro,
        mes,
        tipo,
        status,
        observacao
    });

    const {
        codigo
    } = await fetch(`${URL}/proposta/aguardando/incluir`, {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        })
        .then(response => response.json());

    if (codigo) {
        $('#sucesso').show();
        $('#sucesso').fadeIn(300).delay(3000).fadeOut(400);
        document.getElementById("sucesso").textContent = "Incluído";

        const fileInput = document.getElementById("arquivo-preventivo");

        const data = new FormData();
        data.append("arquivo_prev", fileInput.files[0]);
        console.log(data);

        const requestOptions = {
            method: 'POST',
            body: data,
            redirect: 'follow'
        };

        fetch(`${URL}/proposta/aguardando/preventivo?codigo=${codigo}`, requestOptions)

        return;
    }

    return alert("Ocorreu um erro durante a inserção");

});

function Modal(codigo) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        codigo: codigo
    })

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(`${URL}/proposta/identificacao/modal`, requestOptions).
    then(response => response.json().then(function (data) {
        console.log(codigo);
        $('#numero-proposta').val(data.proposta);
        $('#data-cadastro-proposta').val(data.data_inclusao);
        $('#mes-referencia-proposta').val(data.mes);
        $('#banco-proposta').val(data.banco);
        $('#produto-proposta').val(data.produto);
        $('#valor-entregue-proposta').val(data.entregue);
        $('#valor-troco-proposta').val(data.valor_troco);
        $('#valor-parcela-proposta').val(data.valor_parcela);
        $('#tipo-operacao-proposta').val(data.tipo);
        $('#salario-vencimento-proposta').val(data.salario);
        $('#margem-negativa-proposta').val(data.margem);
        $('#qtd-parcelas-proposta').val(data.parcela);
        $('#forma-liberacao-proposta').val(data.forma_liberacao);
        $('#seguro-proposta').val(data.seguro);
        $('#agencia-proposta').val(data.agencia);
        $('#taxa-especial-proposta').val(data.taxaespecial);
        $('#codigo-validacao-proposta').val(data.codigo_validacao);
        $('#propostas-portadas-propostas').val();
        $('#saque-propostas').val(data.saque);
        $('#valor-saque-propostas').val(data.valor_saque);
        $('#dt-pri-vencimento-proposta').val(data.primeiro_vencimento);
        $('#dt-ult-vencimento-proposta').val(data.ultimo_vencimento);
        $('#vl-parcela-refin-1').val(data.parcela_refin1);
        $('#vl-parcela-refin-2').val(data.parcela_refin2);
        $('#vl-parcela-refin-3').val(data.parcela_refin3);
        $('#vl-parcela-refin-4').val(data.parcela_refin4);
        $('#vl-parcela-refin-5').val(data.parcela_refin5);
        $('#vl-parcela-refin-6').val(data.parcela_refin6);
        $('#forma-calculo-proposta').val();
        $('#cartao-magnetico-proposta').val(data.cartao_m);
        $('#banco-portador-proposta').val(data.banco_port1);
        $('#status-proposta').val(data.status);
        $('#sub-status-proposta').val(data.sub_status);
        $('#convenio-proposta').val(data.convenio);
        $('#regra-convenio-proposta').val(data.regra);
        $('#especie-proposta').val(data.especie);
        $('#resultado-averbacao-proposta').val(data.resultado_averbacao);
        $('#observacao-proposta').val(data.observacao);
        $('#nm-cliente-proposta').val(data.nome);
        $('#cpf-cliente-proposta').val(data.cpf);
        $('#matricula-proposta').val(data.matricula);
        $('#estado-civil-proposta').val(data.estado_civil);
        $('#uf-naturalidade-proposta').val(data.uf_naturalidade);
        $('#naturalidade-proposta').val(data.naturalidade);
        $('#rg-proposta').val(data.rg);
        $('#dt-emissao-rg-proposta').val(data.data_emissao);
        $('#orgao-expeditor-proposta').val(data.orgao_emissor);
        $('#nm-mae-proposta').val(data.nome_mae);
        $('#nm-pai-proposta').val(data.nome_pai);
        $('#dt-admissao-proposta').val();
        $('#uf-endereco-proposta').val(data.uf);
        $('#cidade-endereco-proposta').val(data.municipio);
        $('#endereco-proposta').val(data.endereco);
        $('#bairro-proposta').val(data.bairro);
        $('#numero2-proposta').val(data.numero_endereco);
        $('#complemento-proposta').val(data.complemento);
        $('#tp-conta-cliente-proposta').val(data.tipo_conta);
        $('#banco-cliente-proposta').val(data.banco_cliente);
        $('#agencia-cliente-proposta').val(data.agencia_cliente);
        $('#conta-cliente-proposta').val(data.conta_cliente);
        $('#conjuge-proposta').val(data.conjuge);
        $('#dt-nascimento-proposta').val(data.data_nascimento);
        $('#correntista-proposta').val(data.correntista);
        $('#uf-documento-proposta').val(data.documento_uf);
        $('#profissao-proposta').val();
        $('#tp-telefone-proposta').val(data.telefone_tipo_1);
        $('#ddd-telefone-proposta').val(data.telefone_ddd_1);
        $('#telefone-cliente-proposta').val(data.telefone_numero_1);
        $('#tp-funcionario-proposta').val(data.tipo_funcionario);
        $('#email-proposta').val(data.email_cliente);
        $('#tp-procedente-proposta').val();
        $('#sistema-telefone-proposta').val(data.sistema_tel);
        $('#usuario-proposta').val();
        $('#supervisor-proposta').val(data.supervisor);
        $('#empresa-proposta').val(data.empresa);
        $('#tp-cliente-proposta').val();
    })).catch(error => console.log('erro: ', error))
}

function downloadContrato(obj) {
    if(obj.arquivo_proposta) {
        window.location.href = `${URL}/proposta/aguardando/download?hash=${obj.arquivo_proposta}`;
    } else {
        alert("Arquivo de contrato não inserido na base de dados");
    }
}

function downloadTermo({termo}) {
    if(termo) {
        window.location.href = `${URL}/proposta/aguardando/download?hash=${termo}`;
    } else {
        alert("Arquivo de contrato não inserido na base de dados");
    }
}