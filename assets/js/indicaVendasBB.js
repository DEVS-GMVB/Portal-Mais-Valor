const URL = 'http://localhost:3000/user';

let tipoPesquisa = document.getElementById('tp-pesquisar');
let statusPesquisar = document.getElementById('status-pesquisar');
//let statusIndicaV = document.getElementById('status-indicaV');
let statusIndicaVC = document.getElementById('status-indicaV');
let mesPesquisar = document.getElementById('mes-pesquisar');
let bemReferenciaVC = document.getElementById('bem-ref-indicaVC');

//Btn
let btnFiltro = document.getElementById("btn-buscar");
let incluirIndicaV = document.getElementById('btn-incluir-indicaV');

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
                //statusIndicaV.innerHTML += `<option value="${status}">${status}</option>`;
                statusIndicaVC.innerHTML += `<option value="${status}">${status}</option>`;
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
        let alterar = row.insertCell(-1);
        let visualizar = row.insertCell(-1);

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

        alterar.innerHTML =
            `
            <div class="actions ml-3" style="text-align: center;">
                <a href="#" class="action-item mr-2" data-toggle="modal"
                    data-target=".modal-alterar-autorizacaosoliinss" title="Alterar">
                    <i class="fas fa-eye"></i>
                </a>

            </div>
        
        `

        visualizar.innerHTML =
            `
        <div class="actions ml-3" style="text-align: center;">
            <a href="#" class="action-item mr-2" data-toggle="modal"
                data-target=".modal-alterar-autorizacaosoliinss" title="Alterar">
                <i class="fas fa-external-link-alt"></i>
            </a>

        </div>
        `

    }
});

function MonthNow() {
    let date = new Date();
    let dateNow = `${(date.getMonth() + 1)}/${date.getFullYear()}`;
    return dateNow;
}

//Inserir
$('#mes-ref-indicaV').val(MonthNow());
$('#status-indicaV').val('INDICA VENDAS CADASTRADO');

incluirIndicaV.addEventListener('click', () => {

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
        data_venda: dtVendas,
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
        observacao: obj
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

})