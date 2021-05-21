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
            for (const {
                    sub_status
                } of data) {
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
        console.log(res);
        $('#sucesso').show();
        $('#sucesso').fadeIn(300).delay(3000).fadeOut(400);
        document.getElementById("sucesso").textContent = "Incluindo";
        return res.codigo;
    });

    objEventClickAnexos.transporterId = codigo;
    objEventClickAnexos.insert;

});

const objEventClickAnexos = {

    insert: btnAnexo.addEventListener('click', () => {
        const codigo = objEventClickAnexos.transporterId;

        let filesInput = document.querySelectorAll("#files-outros input[type='file']");

        let data = new FormData();
        filesInput.forEach(file => {
            console.log(file)
            console.log(data.append(file.name, file.file[0]))
        });

        console.log(data);
    })
}