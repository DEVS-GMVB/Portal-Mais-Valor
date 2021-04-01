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

    changeInsert: function() {
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

    changeUpdate: function() {
        document.getElementById('changeButton').innerHTML =  
        `
        <button type="button" class="btn btn-primary btn-icon-label" id="btn-incluir" onclick="update()">
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

                let digitado_porText = document.createTextNode(`${data[i].nome}`);
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
    breakModal.changeInsert();
})

function populaCampos(obj, linha) {
    console.log(obj, '\n', linha)

    breakModal.changeUpdate();
}

