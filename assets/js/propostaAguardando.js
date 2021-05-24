const URL = `http://localhost:3000/user`;
const URL_API_CEP = 'https://viacep.com.br/ws/';

//Usuarios da sessao
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

//Combos
let bancoPesquisa = document.getElementById('banco-pesquisa')
let bancoProposta = document.getElementById('banco-proposta');
let tipoPesquisa = document.getElementById('tipo-pesquisa');
let tipoPreventivo = document.getElementById('tipo-preventivo');
let statusPesquisa = document.getElementById('status-pesquisa');
let statusProposta = document.getElementById('status-proposta');
let statusPreventivo = document.getElementById('status-preventivo');
let produtoPesquisa = document.getElementById('produto-pesquisa');
let produtoProposta = document.getElementById('produto-proposta');
let tipoOperacao = document.getElementById('tipo-operacao-proposta');
let bancoPortador = document.getElementById('banco-portador-proposta');
let subStatus = document.getElementById('sub-status-proposta');
let empresaa = document.getElementById('empresa-proposta');
let supervisor = document.getElementById('supervisor-proposta');

//Arrays
const arrays = {
    arrayId: arrayId = []
}

//Botões
let btnIncluir = document.getElementById('btn-incluir-proposta'); //btn-incluir-anexos
let btnPesquisar = document.getElementById('btn-buscar');

//Cep
const cep = document.getElementById("cep-proposta");
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

//Preenche data Cadastro
let today = new Date();
document.getElementById('data-cadastro-proposta').value = `${today.getDate()}/${(today.getMonth() + 1)}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`

window.onload = (e) => {
    fetch(`${URL}/proposta/aguardando/banco`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json())
        .then((data) => {
            for (const {
                    banco
                } of data) {
                bancoPesquisa.innerHTML += `<option value="${banco}">${banco}</option>`;
                bancoProposta.innerHTML += `<option value="${banco}">${banco}</option>`;
            }

        })
        .catch(error => console.error(error));

    fetch(`${URL}/proposta/aguardando/tipo`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json())
        .then((data) => {
            for (const {
                    tipo
                } of data) {
                tipoPesquisa.innerHTML += `<option value="${tipo}">${tipo}</option>`;
                tipoPreventivo.innerHTML += `<option value="${tipo}">${tipo}</option>`;
                tipoOperacao.innerHTML += `<option value="${tipo}">${tipo}</option>`;
            }

        })
        .catch(error => console.error(error));

    fetch(`${URL}/proposta/aguardando/status`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json())
        .then((data) => {
            for (const {
                    status
                } of data) {
                statusPesquisa.innerHTML += `<option value="${status}">${status}</option>`;
                statusProposta.innerHTML += `<option value="${status}">${status}</option>`;
                statusPreventivo.innerHTML += `<option value="${status}">${status}</option>`;
            }

        })
        .catch(error => console.error(error));

    fetch(`${URL}/proposta/aguardando/produto`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json())
        .then((data) => {
            for (const {
                    produto
                } of data) {
                produtoPesquisa.innerHTML += `<option value="${produto}">${produto}</option>`;
                produtoProposta.innerHTML += `<option value="${produto}">${produto}</option>`;
            }

        })
        .catch(error => console.error(error));

    fetch(`${URL}/proposta/bancos`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json())
        .then((data) => {
            for (const {
                    banco
                } of data) {
                bancoPortador.innerHTML += `<option value="${banco}">${banco}</option>`;
            }

        })
        .catch(error => console.error(error));

    fetch(`${URL}/proposta/substatus`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json())
        .then((data) => {
            for (const {
                    sub_status
                } of data) {
                subStatus.innerHTML += `<option value="${sub_status}">${sub_status}</option>`;
            }

        })
        .catch(error => console.error(error));

    fetch(`${URL}/proposta/empresas`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json())
        .then((data) => {
            for (const {
                    empresa
                } of data) {
                empresaa.innerHTML += `<option value="${empresa}">${empresa}</option>`;
            }

        })
        .catch(error => console.error(error));

    fetch(`${URL}/supervisor`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json())
        .then((data) => {
            for (const {
                    parceiro
                } of data) {
                supervisor.innerHTML += `<option value="${parceiro}">${parceiro}</option>`;
            }

        })
        .catch(error => console.error(error));
}

//Incluir
btnIncluir.addEventListener('click', () => {

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

    fetch(URL + "/proposta/aguardando/incluir", requestOptions).
    then(response => response.json()).
    then(function (res) {
        console.log(body);
        console.log(res.codigo);
        $('#Sucesso').show();
        $('#Sucesso').fadeIn(300).delay(3000).fadeOut(400);
        document.getElementById("Sucesso").textContent = "Incluido";
    })
})

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
                let documentacao = row.insertCell(-1);
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
                console.log(data[i].codigo);

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
                <a href="#" class="action-item mr-2" data-toggle="modal"
                    data-target=".#"
                    title="Incluir Documentação">
                    <i class="fas fa-download"></i>     
                </a>

            </div>
        </td>`

                documentacao.innerHTML =
                    `<td style="text-align: center;">

        <div class="actions ml-3" style="text-align: center;">
            <a href="#" class="action-item mr-2" data-toggle="modal"
                data-target=".#"
                title="Incluir Documentação">
                <i class="fas fa-external-link-alt"></i>
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
    <a href="#" class="action-item mr-2" data-toggle="modal"
        data-target=".#"
        title="Incluir Documentação">
        <i class="fas fa-file-contract"></i>
    </a>

</div>
</td>`
            }
        }).catch(error => console.log('error: ', error))
})

function Modal(codigo){
    
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
    })).catch(error => console.log('erro: ', error))
}