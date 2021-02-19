// VARS


const URL = "http://localhost:3000";

let incluirAcessoo = document.getElementById("alterarIncluirAcesso")
let fi = document.getElementById('exampleFormControlFilial');
let filialCadastro = document.getElementById('exampleFormControlFilialCadastro');
let supervisor = document.getElementById('exampleFormControlSupervisor');
let mes = document.getElementById('exampleFormControlMes');
let mesDemissao = document.getElementById('exampleFormControlMesDemissao');
let Tbody = document.getElementById('list');
let supervisorBB = document.getElementById('exampleFormControlSupervisorBB');
let gerenteBB = document.getElementById('exampleFormControlGerenteBB');
let gerente = document.getElementById('exampleFormControlSelectGerente');
let buttonIncluir = document.getElementById("buttonIncluir");
let supervisorMulti = document.getElementById("exampleFormControlSelectSerMultBanc");
let gerenteMulti = document.getElementById('exampleFormControlSelectGerMultBanc');
let supervisorComissao = document.getElementById("exampleSupervisor");
let cadastro_tab = document.getElementById("cadastro-tab");
let comissao_tab = document.getElementById("comissao-tab");
let chaveJ_tab = document.getElementById("chavej-tab");
let siglae_tab = document.getElementById("siglae-tab");
let testando = document.getElementById("comissao-tabb");
let testando2 = document.getElementById("chavej-tabb");
let testando3 = document.getElementById("siglae-tabb");
let divButton = document.getElementById("botaoAltIncluir");

let testeCont = 0;
let arrayAcessoAlterar;
let contAcessoAlterar = -1;
let cpfcnpjParceiro;


let cont = -1;
let array;


window.onload = function () {
    // ------------------------------
    const prosseguir = document.getElementById('prosseguirBtn');
    prosseguir.addEventListener('click', () => {
        testeCont++;
        if (testeCont === 1) {
            if (cadastro_tab.getAttribute("aria-selected") == "true") {
                cadastro_tab.setAttribute('aria-selected', false);
            }

            comissao_tab.setAttribute('aria-selected', true);
            comissao_tab.classList.add('active');
            cadastro_tab.classList.remove('active');
        } else if (testeCont > 1) {
            // alert("etetdsasadadsf")
            comissao_tab.setAttribute('aria-selected', true);
            comissao_tab.classList.add('active');
            cadastro_tab.classList.remove('active');

            testando.classList.remove('active');

        }

    })
    comissao_tab.addEventListener('blur', () => {
        // comissao_tab.setAttribute('aria-selected', false);
        // alert("fdsfsdsdfs")
        comissao_tab.classList.remove('active');


    })

    // //--------------------------------
    // //Prosseguir chaveJ
    const prosseguirChaveJ = document.getElementById("prosseguirChaveJ");
    let contChavej = 0;
    prosseguirChaveJ.addEventListener("click", () => {

        contChavej++;
        if (contChavej === 1) {
            if (comissao_tab.getAttribute("aria-selected") == "true") {
                comissao_tab.setAttribute('aria-selected', false);
            }

            chaveJ_tab.setAttribute('aria-selected', true);
            chaveJ_tab.classList.add('active');
            comissao_tab.classList.remove('active');
        } else if (contChavej > 1) {
            // alert("etetdsasadadsf")
            chaveJ_tab.setAttribute('aria-selected', true);
            chaveJ_tab.classList.add('active');
            comissao_tab.classList.remove('active');

            testando2.classList.remove('active');

        }

    })

    chaveJ_tab.addEventListener('blur', () => {
        // comissao_tab.setAttribute('aria-selected', false);
        // alert("fdsfsdsdfs")
        chaveJ_tab.classList.remove('active');


    })
    //------------
    //Prosseguir siglae

    const prosseguirSiglae = document.getElementById("prosseguirSiglaE");
    let contSiglae = 0;
    prosseguirSiglae.addEventListener("click", () => {

        contSiglae++;
        if (contSiglae === 1) {
            if (chaveJ_tab.getAttribute("aria-selected") == "true") {
                chaveJ_tab.setAttribute('aria-selected', false);
            }

            siglae_tab.setAttribute('aria-selected', true);
            siglae_tab.classList.add('active');
            chaveJ_tab.classList.remove('active');
        } else if (contSiglae > 1) {
            // alert("etetdsasadadsf")
            siglae_tab.setAttribute('aria-selected', true);
            siglae_tab.classList.add('active');
            chaveJ_tab.classList.remove('active');

            testando3.classList.remove('active');

        }

    })

    siglae_tab.addEventListener('blur', () => {
        // comissao_tab.setAttribute('aria-selected', false);
        // alert("fdsfsdsdfs")
        siglae_tab.classList.remove('active');


    })



    // ------------------------------
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };



    fetch(URL + "/user/gerente", requestOptions)
        .then(response => response.json().then(function (data) {
            for (let i = 0; i < data.length; i++) {
                gerenteBB.innerHTML += '<option value="' + data[i].gerente + '">' + data[i].gerente + '</option>;'
                gerente.innerHTML += '<option value="' + data[i].gerente + '">' + data[i].gerente + '</option>;'
                gerenteMulti.innerHTML += '<option value="' + data[i].gerente + '">' + data[i].gerente + '</option>;'
            }
        })).catch(error => console.log('error', error));



    fetch(URL + "/user/filial", requestOptions)
        .then(response => response.json()
            .then(function (data) {
                for (let i = 0; i < data.length; i++) {
                    filialCadastro.innerHTML += '<option value="' + data[i].filial + '">' + data[i].filial + '</option>;'
                    fi.innerHTML += '<option value="' + data[i].filial + '">' + data[i].filial + '</option>;'
                }
            }))
        .catch(error => console.log('error', error));



    fetch(URL + "/user/supervisor", requestOptions)
        .then(response => response.json())
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                supervisor.innerHTML += '<option value="' + data[i].parceiro + '">' + data[i].parceiro + '</option>;'
                supervisorBB.innerHTML += '<option value="' + data[i].parceiro + '">' + data[i].parceiro + '</option>;'
                supervisorMulti.innerHTML += '<option value="' + data[i].parceiro + '">' + data[i].parceiro + '</option>;'

            }
        }).catch(error => console.log('error', error));



}
const colocar = document.getElementById('incluir');


colocar.addEventListener('click', () => {


    var node = document.getElementById("list");
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let parceiro = document.getElementById('validationCustomFuncionario').value;
    let cnpj = document.getElementById('cpfcnpjj').value;
    let supervisor = document.getElementById('exampleFormControlSupervisor').value;
    let status = document.getElementById('status').value;
    let gerente = document.getElementById('exampleFormControlSelectGerente').value;
    let filial = document.getElementById('exampleFormControlFilialCadastro').value;
    let mes_admissao = document.getElementById('exampleFormControlMes').value;
    let mes_demissao = document.getElementById('exampleFormControlMesDemissao').value;
    let tipo = document.getElementById('exampleFormControlTipo').value;
    let superintendente = document.getElementById('exampleFormControlSelect1Superintendente').value;
    // console.log(cnpj,status,supervisor,gerente,filial, mes_admissao, mes_demissao, tipo,superintendente);
    var raw = JSON.stringify({
        parceiro: parceiro,
        cnpj: cnpj,
        supervisor: supervisor,
        status: status,
        gerente: gerente,
        filial: filial,
        mes_admissao: mes_admissao,
        mes_demissao: mes_demissao,
        tipo: tipo,
        superintendente: superintendente
    })

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    // console.log(raw);
    fetch(URL + "/user/search", requestOptions)
        .then(response => response.json())
        .then(result => {
            cont = -1;
            array = result;

            for (const value of result) {
                let specific_tbody = document.getElementById('list');
                let row = specific_tbody.insertRow(-1);
                let filial = row.insertCell(-1);
                let funcionario = row.insertCell(-1);
                let cnpj = row.insertCell(-1);
                let status = row.insertCell(-1);
                let supervisor = row.insertCell(-1);
                let gerente = row.insertCell(-1);
                let data_admissao = row.insertCell(-1);
                let data_inativacao = row.insertCell(-1);
                let responsavel = row.insertCell(-1);
                let data_alteracao = row.insertCell(-1);
                let alteraVisualiza = row.insertCell(-1);


                let filialText = document.createTextNode(`${value.filial}`);
                filial.appendChild(filialText);

                let funcionarioText = document.createTextNode(`${value.parceiro}`);
                funcionario.appendChild(funcionarioText)

                let cnpjText = document.createTextNode(`${value.cnpj}`);
                cnpj.appendChild(cnpjText);

                let statusText = document.createTextNode(`${value.status}`);
                status.appendChild(statusText)

                let supervisorText = document.createTextNode(`${value.supervisor}`);
                supervisor.appendChild(supervisorText)

                let gerenteText = document.createTextNode(`${value.gerente}`);
                gerente.appendChild(gerenteText)

                let data_admissaoText = document.createTextNode(`${value.data_admissao}`);
                data_admissao.appendChild(data_admissaoText);

                let data_inativacaoText = document.createTextNode(`${value.data_inativacao}`);
                data_inativacao.appendChild(data_inativacaoText);

                let responsavelText = document.createTextNode(`${value.responsavel}`);
                responsavel.appendChild(responsavelText);

                let data_alteracaoText = document.createTextNode(`${value.data_alteracao}`);
                data_alteracao.appendChild(data_alteracaoText)

                cont++;

                alteraVisualiza.innerHTML = ` <div class="actions ml-3" style="text-align: center;">
            <a "id=buttonalterar" href="#" class="action-item mr-2" data-nome="marcos" data-toggle="modal"
                data-target=".modalteladecadastro" title="Alterar" id="modalAlterar">
                <i id = "${cont}" class="fas fa-external-link-alt" onclick="editar(array[${cont}].cpf)"></i>
            </a>
            <a href="#" class="action-item mr-2" data-toggle="modal"
                data-target=".modalteladecadastro" data-id="oi" title="Visualizar">
                <i class="fas fa-eye"></i>
            </a>
        </div>`;

            }

        })
        .catch(error => console.log('error', error));



})



function editar(cpfCnpj) {
    //javascript para interromper o fluxo dos modais iguais;
    document.getElementById("acesso-tab").disabled = false;

    //Cabeçalho
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    //LISTANDO OS ACESSOS
    var corpo = JSON.stringify({
        cnpj_matriz: cpfCnpj
    })

    var request = {
        method: 'POST',
        headers: myHeaders,
        body: corpo,
        redirect: 'follow'
    }

    fetch(URL + "/user/cadastro/buscar", request).
    then(response => response.json().then(function (data) {
        // console.log(data[0]);
        arrayAcessoAlterar = data
        for (const value of data) {

            let tbody = document.getElementById("lista");
            let row = tbody.insertRow(-1);
            let nome = row.insertCell(-1);
            let cpf = row.insertCell(-1);
            let cnpjMa = row.insertCell(-1);
            let respo = row.insertCell(-1);
            let data_altera = row.insertCell(-1);
            let altera = row.insertCell(-1);

            let nomeTexto = document.createTextNode(`${value.nome}`);
            nome.appendChild(nomeTexto);

            let cpfTexto = document.createTextNode(`${value.cpf_usuario}`);
            cpf.appendChild(cpfTexto);

            let cnpjMaTexto = document.createTextNode(`${value.cnpj_matriz}`);
            cnpjMa.appendChild(cnpjMaTexto);

            let respoTexto = document.createTextNode(`${value.responsavel}`);
            respo.appendChild(respoTexto);

            let dtTexto = document.createTextNode(`${value.data_atualizacao}`);
            data_altera.appendChild(dtTexto);

            contAcessoAlterar++

            altera.innerHTML = `
          <div class="actions ml-3 text-center">
              <a href="#" class="action-item mr-0" data-toggle="tooltip" onclick="funcCadastroAcessoAlterar(arrayAcessoAlterar[${contAcessoAlterar}])" title="Alterar">
                  <i class="fas fa-external-link-alt"></i>
              </a>
          </div>`
        }
    }))

    // POPULANDO OS CAMPOS DO MODAL DE ACORDO COM ESSA REQUEST
    var raw = JSON.stringify({
        cpf: cpfCnpj
    })

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL + "/user/cadastro/modal", requestOptions)
        .then(response => response.json())
        .then(function (data) {
            cpfcnpjParceiro = data.dados_cadastro.id_parceiro

            $('.needs-validation').each(function () {
                this.reset();
            });

            $("#validationParceiroPromotor").val("");
            $("#validationCpfCnpf").val("");
            if (document.getElementById('modalAlterar')) {

                $("#exampleFormControlFilialCadastro").val(data.dados_cadastro.filial);
                $("#cep").val(data.dados_cadastro.cep);
                $("#funcionario").val(data.dados_cadastro.parceiro);
                $("#validationCpfCadastro").val(data.dados_cadastro.cnpj);
                $("#validationNomeCompleto").val(data.dados_cadastro.nome_completo);
                $("#exampleFormControlStatus").val(data.dados_cadastro.status);
                $("#validationMae").val(data.dados_cadastro.nome_mae);
                $("#validationNCT").val(data.dados_cadastro.carteira);
                $("#validationSerieCarteira").val(data.dados_cadastro.serie_carteira);
                $("#validationUF").val(data.dados_cadastro.uf_carteira);
                $("#validationPis").val(data.dados_cadastro.pis);
                $("#validationNumeroContrato").val(data.dados_cadastro.numero_contrato);
                $("#validationTelefone").val(data.dados_cadastro.telefone);
                $("#email").val(data.dados_cadastro.email);
                $("#validationLogradouro").val(data.dados_cadastro.logradouro);
                $("#validationNL").val(data.dados_cadastro.numero_l);
                $("#validationComplemento").val(data.dados_cadastro.complemento);
                $("#validationBairro").val(data.dados_cadastro.bairro);
                $("#validationCidade").val(data.dados_cadastro.cidade);
                $("#validationEstado").val(data.dados_cadastro.estado);
                $("#validationOD").val(data.dados_cadastro.orgao_emissao);
                $("#validationTipoFuncionario").val(data.dados_cadastro.tipo_func);
                $("#validationPrimeiraE").val(data.dados_cadastro.experiencia1);
                $("#validationSegundaE").val(data.dados_cadastro.experiencia2);
                $("#validationDA").val(data.dados_cadastro.data_admissao);
                $("#validationDE").val(data.dados_cadastro.data);
                $("#validationNasc").val(data.dados_cadastro.data_nascimento)
                $("#validationEstado").val(data.dados_cadastro.naturalidade)
                $("#exampleFormControlMotivoCancelamento").val(data.dados_cadastro.motivo_cancelamento);
                $("#exampleFormControlTipoDocumento").val(data.dados_cadastro.tipo_documento);
                $("#validationCustomDataDocumento").val(data.dados_cadastro.data_rg);
                $("#id-fp-favorecido").val(data.dados_cadastro.favorecido)
                $("#id-fp-tipopagamento").val(data.dados_cadastro.tipo_pagamento);
                $("#exampleFormControlSelectCodFunc").val(data.dados_cadastro.cod_funcao)
                $("#exampleFormControlSelectCargo").val(data.dados_cadastro.cargo);
                $("#exampleFormControlSelectSetor").val(data.dados_cadastro.setor);
                //Formas de Pagamento

                $("#id-fp-banco").val(data.dados_cadastro.cpf);
                $("#id-fp-bancoN").val(data.dados_cadastro.banco);
                $("#id-fp-agencia").val(data.dados_cadastro.agencia);
                $("#id-fp-conta").val(data.dados_cadastro.conta);
                $("#id-fp-numcartao").val(data.dados_cadastro.numero_cartao);
                $("#id-fp-cpfFav").val(data.dados_cadastro.cpf)

                //Gestores
                $("#exampleFormControlSuperintendente").val(data.dados_cadastro.superintendente);
                $("#validationMatricula").val(data.dados_cadastro.matricula);
                $("#validationCodigo").val(data.dados_cadastro.codigo);
                $("#validationER").val(data.dados_cadastro.empresa_bb);
                $("#exampleFormControlSupervisorBB").val(data.dados_cadastro.supervisor);
                $("#exampleFormControlGerenteBB").val(data.dados_cadastro.gerente);
                $("#exampleFormControlSelectProjeto").val(data.dados_cadastro.projeto);
                $("#exampleFormControlSelectSerMultBanc").val(data.dados_cadastro.supervisor_sant);
                $("#exampleFormControlSelectGerMultBanc").val(data.dados_cadastro.gerente_sant);
                $("#exampleFormControlSelectProjeto").val(data.dados_cadastro.projeto);
                $("#exampleFormControlSelectCodFunc").val(data.dados_cadastro.cod_funcao);
                $("#exampleFormControlSelectCargo").val(data.dados_cadastro.cargo);
                $("#exampleFormControlSelectSetor").val(data.dados_cadastro.setor);

                //Parceiro;
                $("#id-p-repempresa").val(data.dados_cadastro.repre);
                $("#cpfcnpj").val(data.dados_cadastro.cpf_repre);
                $("#id-p-certificacao").val(data.dados_cadastro.certificacao);
                $("#id-p-dtcertificacao").val(data.dados_cadastro.data_certificacao);
                $("#id-p-dtbloqueio").val(data.dados_cadastro.data_bloqueio)


                // Comissão
                $("#idPorcComissao").val(data.dados_cadastro.comissao);
                $("#idSecundario").val(data.dados_cadastro.secundario);
                $("#idPorcSecundario").val(data.dados_cadastro.pct_secundario);
                $("#idTerceario").val(data.dados_cadastro.terceario);
                $("#idPorcTerceario").val(data.dados_cadastro.pct_terceario);
                $("#idQuartenario").val(data.dados_cadastro.quaternario);
                $("#idPorcQuaternario").val(data.dados_cadastro.pct_quaternario);

                //Dados Comissão - Santander % Comissão Novo Refin / Portabilidade
                $("#idParceiroPromotor").val(data.dados_cadastro.comissao_novo);
                $("#id-porc-supervisor").val(data.dados_cadastro.comissao_novo_sup);
                $("#id-porc-gerente").val(data.dados_cadastro.comissao_novo_ger);
                $("#id-porc-quaternario").val(data.dados_cadastro.comissao_novo_quat);
                $("#id-quaternario").val(data.dados_cadastro.qua_sant2)

                //% Convênios Especiais
                $("#id-ce-parceiro-promotor").val(data.dados_cadastro.comissao_inss);
                $("#id-ce-supervisor").val(data.dados_cadastro.comissao_inss_sup);
                $("#id-ce-gerente").val(data.dados_cadastro.comissao_inss_ger);
                $("#id-ce-quaternario").val(data.dados_cadastro.comissao_inss_quat);

                ////Grupo Minas Gerais
                $("#id-gmg-parcpromo").val(data.dados_cadastro.governo_minas);
                $("#id-gmg-supervisor").val(data.dados_cadastro.governo_minas_sup);
                $("#id-gmg-gerente").val(data.dados_cadastro.governo_minas_ger);
                $("#id-gmg-quaternario").val(data.dados_cadastro.governo_minas_quat);

                //% Grupo Rio de Janeiro
                $("#id-grj-parcpromo").val(data.dados_cadastro.prefeitura_rio);
                $("#id-grj-supervisor").val(data.dados_cadastro.prefeitura_rio_sup);
                $("#id-grj-gerente").val(data.dados_cadastro.prefeitura_rio_ger);
                $("#id-grj-quaternario").val(data.dados_cadastro.prefeitura_rio_quat);


                //CHAVE J
                $("#validationChaveJ").val(data.dados_chave.chave);
                $("#StatusChavej").val(data.dados_chave.status);
                $("#chavejEmpresa").val(data.dados_chave.empresa);
                $('#exampleFormControlFuncao').val(data.dados_chave.funcao);
                $("#dtCancelamentoChavej").val(data.dados_chave.data_inativacao);
                $("#dtEnvioChavej").val(data.dados_chave.data_envio);
                $("#motCancelChaveJ").val(data.dados_chave.motivo_cancelamento);
                $("#exampleFormControlTipoChave").val(data.dados_chave.tipo_chave);

                //SILGLA E
                $("#validationSigla").val(data.dados_sigla.siglae);
                $("#validationCodigoEscritorio").val(data.dados_sigla.codigo_corban);
                $("#validationNomeEscritorio").val(data.dados_sigla.nome_corban);
                $("#validationDataInativacao").val(data.dados_sigla.data_inativacao)
                $("#validationMotivoPendencia").val(data.dados_sigla.motivo_pendencia);
                $("#validationSiglaPropesct").val(data.dados_sigla.sigla_prospect);
                $("#validationCpfCnpf").val(data.dados_sigla.cpf_sigla);
                $("#exampleFormControlUsaSigla").val(data.dados_sigla.usa_esteira1);
                $("#exampleFormControlSiglaI").val(data.dados_sigla.usa_siglai1);
                $("#exampleFormControlObs").val(data.dados_sigla.observacao);
                $("#exampleFormControlStatusSiglas").val(data.dados_sigla.status_e);
            }




        })
        .catch(error => console.log('error', error))


    divButton.innerHTML = `
    <button type="button" class="btn btn-primary btn-icon-label" id="idAlterar" onclick="alteracaoCadastro(${cpfcnpjParceiro})">
        <span class="btn-inner--icon">
            <i class="fas fa-plus"></i>
        </span>
        <span class="btn-inner--text">Alterar</span>
    </button> `
    incluirAcessoo.innerHTML = `
    <button type="button" class="btn btn-primary btn-icon-label" id="incluirAcesso">
        <span class="btn-inner--icon">
            <i class="fas fa-plus"></i>
        </span>
    <span class="btn-inner--text">Incluir / Alterar</span>
    </button>`
}

function funcCadastroAcessoAlterar(data) {
    // console.log(data);
    $("#id-cadusu-usuario").val(data.usuario);
    $("#id-cadusu-login").val(data.nome);
    $("#id-cadusu-senha").val(data.senha);
    $("id-cadusu-novamentesenha").val(data.senha);
    $("#id-cadusu-tipousu").val(data.tipo);
    $("#id-cadusu-usumaster").val(data.usuario_master);
    $("#id-cadusu-classi").val(data.classificacao);
    $("#id-cadusu-empresa").val(data.empresa);
    $("#id-cadusu-status").val(data.status);
    $("#id-cadusu-telcelular").val(data.telefone);
    $("#id-cadusu-cpfcnpj").val(data.cpf_usuario)
    $("#id-cadusu-cnpjMatriz").val(data.cnpj_matriz);
    $("#id-cadusu-email").val(data.email);
    $("#id-cadusu-motcancela").val(data.motivo_cancelamento);
    $("#id-cadusu-perfilacesso").val(data.perfil);
    $("#id-cadusu-acessoole").val(data.ole);
    $("#id-cadusu-acessopan").val(data.pan);
    $("#id-cadusu-acessocetelem").val(data.cetelem);
    $("#id-cadusu-acessoitau").val(data.itau);
    $("#id-cadusu-acef5bmg").val(data.f5_bmg);
    $("#id-cadusu-acef5itau").val(data.f5_itau);
    $("#id-cadusu-acedaycoval").val(data.daycoval);
    $("#id-cadusu-acesim").val(data.sim);
    $("#id-cadusu-acesafra").val(data.safra);
    $("#id-cadusu-acebradesco").val(data.bradesco);
    $("#id-cadusu-aceparana").val(data.parana);
    $("#id-cadusu-crefisa").val(data.crefisa);
    $("#id-cadusu-aceconsorciobb").val(data.consorcio_bb);
    $("#ace-cadusu-conscaixa").val(data.consorcio_caixa);
    $("#id-cadusu-aceconsitau").val(data.consorcio_itau);



    //-----------------
}





//RESET APÓS TROCAR DE MODAL ENTRE O ALTERAR E O INCLUIR 
buttonIncluir.addEventListener('click', () => {
    //RESET NA TABLE QUANDO CLICAR NO BUTTON
    // incluirCadastro();
    divButton.innerHTML = `
    <button type="button" class="btn btn-primary btn-icon-label" id="idIncluir" onclick="incluirCadastro()">
        <span class="btn-inner--icon">
            <i class="fas fa-plus"></i>
        </span>
        <span class="btn-inner--text">Finalizar</span>
    </button>`

    $("td").remove();

    document.getElementById("acesso-tab").disabled = true;

    $('.needs-validation').each(function () {
        this.reset();
    });
})

let apagar = document.getElementById("apagarFiltrosCadastro")
apagar.addEventListener('click', () => {
    $("#apagarFiltros").each(function () {
        this.reset();
    })
})



