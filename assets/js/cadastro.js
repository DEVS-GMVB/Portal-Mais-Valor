// VARS
const URL = "http://localhost:3000";

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

let testeCont = 0;
let arrayAcessoAlterar;
let contAcessoAlterar = -1;
let cpfcnpjParceiro = [];


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
              <a href="#" class="action-item mr-0" data-toggle="tooltip" onclick="funcCadastroAcessoAlterar(arrayAcessoAlterar[${contAcessoAlterar}])"   title="Alterar">
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
                $("#id-gmg-supervisor").val(data.dados_cadastro.governo_minas_sup)
                $("#id-gmg-gerente").val(data.dados_cadastro.governo_minas_ger);
                $("#id-gmg-quaternario").val(data.dados_cadastro.governo_minas_quat)

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
}

function funcCadastroAcessoAlterar(data) {
    // console.log(v);
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
    const prosser = document.getElementById('incluirSilgasE');
    prosser.addEventListener('click', () => {
        // window.location.replace("#cadastro");

        //Habilitar o modal acesso somente após clicar no botão finalizar
        document.getElementById("acesso-tab").disabled = false;


        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        //Cadastro
        const filialcad = document.getElementById('exampleFormControlFilialCadastro').value;
        const funcionarioo = document.getElementById('funcionario').value;
        const nomeComp = document.getElementById('validationNomeCompleto').value;
        const tipoFunc = document.getElementById('validationTipoFuncionario').value;
        const status = document.getElementById('exampleFormControlStatus').value;
        const dtAdmissao = document.getElementById('validationDA').value;
        const dtDemissao = document.getElementById('validationDE').value;
        const motCancel = document.getElementById('exampleFormControlMotivoCancelamento').value;
        const primExperi = document.getElementById('validationPrimeiraE').value;
        const segExperi = document.getElementById('validationSegundaE').value;
        const dtNasci = document.getElementById('validationNasc').value;
        const cpfcnpj = document.getElementById('validationCpfCadastro').value;
        const tipoDoc = document.getElementById('exampleFormControlTipoDocumento').value;
        const dtDoc = document.getElementById('validationCustomDataDocumento').value;
        const orgDoc = document.getElementById('validationOD').value;
        const NmMae = document.getElementById('validationMae').value;
        const nCartTrab = document.getElementById('validationNCT').value;
        const seCartTrab = document.getElementById('validationSerieCarteira').value;
        const uf = document.getElementById('validationUF').value;
        const pis = document.getElementById('validationPis').value;
        const nContrato = document.getElementById('validationNumeroContrato').value;
        const telefone = document.getElementById('validationTelefone').value;
        const email = document.getElementById('email').value;
        const cep = document.getElementById('cep').value;
        const rua = document.getElementById('validationLogradouro').value;
        const numero = document.getElementById('validationNL').value;
        const complemento = document.getElementById('validationComplemento').value;
        const bairro = document.getElementById('validationBairro').value;
        const cidade = document.getElementById('validationCidade').value;
        const estado = document.getElementById('validationEstado').value;
        const cpfFav = document.getElementById('id-fp-cpfFav').value;
        const nomeFav = document.getElementById('id-fp-favorecido').value;
        const tipoPag = document.getElementById('id-fp-tipopagamento').value;
        const banco = document.getElementById('id-fp-bancoN').value;
        const agencia = document.getElementById('id-fp-agencia').value;
        const conta = document.getElementById('id-fp-conta').value;
        const numCartao = document.getElementById('id-fp-numcartao').value;
        const supervisorBB = document.getElementById('exampleFormControlSupervisorBB').value;
        const gerenteBB = document.getElementById('exampleFormControlGerenteBB').value;
        const servMultBanc = document.getElementById('exampleFormControlSelectSerMultBanc').value;
        const gerMultBanc = document.getElementById('exampleFormControlSelectGerMultBanc').value;
        const superintendentecad = document.getElementById('exampleFormControlSuperintendente').value;
        const projeto = document.getElementById('exampleFormControlSelectProjeto').value;
        const codFunc = document.getElementById('exampleFormControlSelectCodFunc').value;
        const cargo = document.getElementById('exampleFormControlSelectCargo').value;
        const setor = document.getElementById('exampleFormControlSelectSetor').value;
        const codigo = document.getElementById('validationCodigo').value;
        const matricula = document.getElementById('validationMatricula').value;
        const empReg = document.getElementById('validationER').value;
        const repEmpresa = document.getElementById('id-p-repempresa').value;
        const cpfEmpresa = document.getElementById('cpfcnpj').value;
        const dtValCert = document.getElementById('id-p-dtcertificacao').value;
        const certificacao = document.getElementById('id-p-certificacao').value;
        const freqPag = document.getElementById('id-frePag').value;
        const dtBloqueio = document.getElementById('id-p-dtbloqueio').value;
        const dtEntrContr = document.getElementById('id-p-dtentregacontrato').value;

        //Comissão
        const bbComissao = document.getElementById('idPorcComissao').value;
        const cpfSecundario = document.getElementById('cpfSecundario').value;
        const secundario = document.getElementById("idSec").value;
        const bbPorcSecundario = document.getElementById('idPorcSecundario').value;
        const cpfTerciario = document.getElementById('cpfTerceario').value;
        const terceario = document.getElementById("idTerc").value
        const bbPorcTerceario = document.getElementById('idPorcTerceario').value;
        const cpfQuaternario = document.getElementById('quaternario').value;
        const quaternario = document.getElementById("idQuartenario").value
        const bbPorcQaternario = document.getElementById('idPorcQuaternario').value;
        const santParcPromo = document.getElementById('idParceiroPromotor').value;
        const santSupervisor = document.getElementById('id-porc-supervisor').value;
        const santGerente = document.getElementById('id-porc-gerente').value;
        const santPorcQuaternario = document.getElementById('id-porc-quaternario').value;
        const santMaxComissao = document.getElementById('id-max-comissao').value;
        const santQuaternario = document.getElementById('id-quaternario').value;
        const ceParcPromo = document.getElementById('id-ce-parceiro-promotor').value;
        const ceSupervisor = document.getElementById('id-ce-supervisor').value;
        const ceGerente = document.getElementById('id-ce-gerente').value;
        const ceQuaternario = document.getElementById('id-ce-quaternario').value;
        const MaxComissao = document.getElementById('id-max-comissao').value;
        const gmgParcPromo = document.getElementById('id-gmg-parcpromo').value;
        const gmgSupervisor = document.getElementById('id-gmg-supervisor').value;
        const gmgGerente = document.getElementById('id-gmg-gerente').value;
        const gmgQuaternario = document.getElementById('id-gmg-quaternario').value;
        const gmgMaxComissao = document.getElementById('id-gmg-max-comissao').value;
        const grjParcPromo = document.getElementById('id-grj-parcpromo').value;
        const grjSupervisor = document.getElementById('id-grj-supervisor').value;
        const grjGerente = document.getElementById('id-grj-gerente').value;
        const grjQuaternario = document.getElementById('id-grj-quaternario').value;
        const grjMaxComissao = document.getElementById('id-grj-max-comissao').value;
        const tnParcPromo = document.getElementById('id-tm-parcpromo').value;
        const tsParcPromo = document.getElementById('id-ts-parcpromo').value;

        //Chave J
        const statu = document.getElementById('StatusChavej').value;
        const funcao = document.getElementById('exampleFormControlFuncao').value;
        const empresa = document.getElementById('chavejEmpresa').value;
        const dtEnvio = document.getElementById('dtEnvioChavej').value;
        const senha = document.getElementById('senhaChavej').value;
        const motCance = document.getElementById('motCancelChaveJ').value;
        const tipoChave = document.getElementById('tipoChavej').value;
        const dtCancelamento = document.getElementById('dtCancelamentoChavej').value;

        //Siglae
        const sigla = document.getElementById('validationSigla').value;
        const codEscritorio = document.getElementById('validationCodigoEscritorio').value;
        const nmEscritorio = document.getElementById('validationNomeEscritorio').value;
        const stat = document.getElementById('exampleFormControlStatusSiglas').value;
        const dtInativacao = document.getElementById('validationDataInativacao').value;
        const motPendencia = document.getElementById('validationMotivoPendencia').value;
        const siglaPorsp = document.getElementById('validationSiglaPropesct').value;
        const cpfcnpjSigla = document.getElementById('validationCpfCnpf').value;
        const parcPromoSigla = document.getElementById('validationParceiroPromotor').value;
        const usaSiglaE = document.getElementById('exampleFormControlUsaSigla').value;
        const usaSilgaI = document.getElementById('exampleFormControlSiglaI').value;
        const observ = document.getElementById('exampleFormControlObs').value;

        var raw = JSON.stringify({

            // Cadastro
            filial: filialcad,
            parceiro: funcionarioo,
            nome_completo: nomeComp,
            tipo: tipoFunc,
            status: status,
            data_admissao: dtAdmissao,
            data_inativacao: dtDemissao,
            motivo_cancelamento: motCancel,
            experiencia1: primExperi,
            experiencia2: segExperi,
            data_nascimento: dtNasci,
            cnpj: cpfcnpj,
            tipo_documento: tipoDoc,
            data_rg: dtDoc,
            orgao_emissao: orgDoc,
            nome_mae: NmMae,
            carteira: nCartTrab,
            serie_carteira: seCartTrab,
            uf_carteira: uf,
            pis: pis,
            contrato: nContrato,
            telefone: telefone,
            email: email,
            cep: cep,
            logradouro: rua,
            numero_l: numero,
            complemento: complemento,
            bairro: bairro,
            cidade: cidade,
            naturalidade: estado,
            cpf: cpfFav,
            favorecido: nomeFav,
            tipo_pagamento: tipoPag,
            banco: banco,
            agencia: agencia,
            conta: conta,
            numero_cartao: numCartao,
            supervisor: supervisorBB,
            gerente: gerenteBB,
            supervisor_sant: servMultBanc,
            gerente_sant: gerMultBanc,
            superintendente: superintendentecad,
            projeto: projeto,
            cod_funcao: codFunc,
            cargo: cargo,
            setor: setor,
            codigo: codigo,
            matricula: matricula,
            registro_clt: empReg,
            repre: repEmpresa,
            cpf_repre: cpfEmpresa,
            data_certificacao: dtValCert,
            certificacao: certificacao,
            regra_pagamento: freqPag,
            data_bloqueio: dtBloqueio,
            data_contrato: dtEntrContr,

            //Comissão
            comissao: bbComissao,
            secundario: secundario,
            pct_secundario: bbPorcSecundario,
            terceario: terceario,
            pct_terceario: bbPorcTerceario,
            quaternario: quaternario,
            pct_quaternario: bbPorcQaternario,
            comissao_novo: santParcPromo,
            comissao_novo_sup: santSupervisor,
            comissao_novo_ger: santGerente,
            comissao_novo_quat: santPorcQuaternario,
            //% Máximo Comissão(SUP/GER/QUAT)

            qua_sant2: santQuaternario,
            comissao_inss: ceParcPromo,
            comissao_inss_sup: ceSupervisor,
            comissao_inss_ger: ceGerente,
            comissao_inss_quat: ceQuaternario,
            //% Máximo Comissão(SUP/GER/QUAT)

            governo_minas: gmgParcPromo,
            governo_minas_sup: gmgSupervisor,
            governo_minas_ger: gmgGerente,
            governo_minas_quat: gmgQuaternario,
            //% Máximo Comissão(SUP/GER/QUAT)

            prefeitura_rio: grjParcPromo,
            prefeitura_rio_sup: grjSupervisor,
            prefeitura_rio_ger: grjGerente,
            prefeitura_rio_quat: grjQuaternario,
            //% Máximo Comissão(SUP/GER/QUAT)

            //% Parceiro/Promotor MEI - tabela multi bancos 

            //% Parceiro/Promotor MEI - tabela sim

            //Chave J
            status: statu,
            funcao: funcao,
            empresa: empresa,
            data_envio: dtEnvio,
            senha: senha,
            motivo_cancelamento: motCance,
            tipo_chave: tipoChave,
            data_inativacao: dtCancelamento,

            //Siglae
            siglae: sigla,
            codigo_corban: codEscritorio,
            nome_corban: nmEscritorio,
            status_e: stat,
            data_inativacao: dtInativacao,
            motivo_pendencia: motPendencia,
            sigla_prospect: siglaPorsp,
            cpf_usuario_1: cpfcnpjSigla,
            //PerceiroPromotor
            usa_esteira1: usaSiglaE,
            usa_siglai1: usaSilgaI,
            observacao: observ
        })

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(URL+"/user/cadstro/alterar", requestOptions)
            .then(response => response.json())
            .then(function (data) {
                alert("ALTERADO")
            })
            .catch(error => console.log('erro', error));

    })
}




//RESET APÓS TROCAR DE MODAL ENTRE O ALTERAR E O INCLUIR 
buttonIncluir.addEventListener('click', () => {
    //RESET NA TABLE QUANDO CLICAR NO BUTTON
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



