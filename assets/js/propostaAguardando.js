const URL = `http://localhost:3000/user`;
const URL_API_CEP = 'https://viacep.com.br/ws/';

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

let btnIncluir = document.getElementById('btn-incluir-proposta');

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

btnIncluir.addEventListener('click', ()=> {

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
    /////////////////////////////////
    
            $('#Sucesso').show();
            $('#Sucesso').fadeIn(300).delay(3000).fadeOut(400);
            document.getElementById("Sucesso").textContent = "Sac incluido" 
})

