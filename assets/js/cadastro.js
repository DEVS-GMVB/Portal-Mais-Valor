// VARS
let fi = document.getElementById('exampleFormControlFilial');
<<<<<<< HEAD
let gerente = document.getElementById('exampleFormControlSelectGerente');
let filialCadastro = document.getElementById("exampleFormControlFilialCadastro")
=======
let filialCadastro = document.getElementById('exampleFormControlFilialCadastro');
>>>>>>> 81261b2b513322d6139cddcc6020798b89a88343
let supervisor = document.getElementById('exampleFormControlSupervisor');
let mes = document.getElementById('exampleFormControlMes');
let mesDemissao = document.getElementById('exampleFormControlMesDemissao');
let Tbody = document.getElementById('list');
let supervisorBB = document.getElementById('exampleFormControlSupervisorBB');
let gerenteBB = document.getElementById('exampleFormControlGerenteBB');
let gerente = document.getElementById('exampleFormControlSelectGerente');
let buttonIncluir = document.getElementById("buttonIncluir")
var cont = -1;
var array;
var teste;

window.onload = function () {

<<<<<<< HEAD
//--------------
const prosseguir = document.getElementById('prosseguirBtn');
prosseguir.addEventListener('click', () => {
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json").value;
    let filialcad = document.getElementById('exampleFormControlFilialCadastro').value;
    let funcionarioo = document.getElementById('funcionario').value;
    let nomeComp = document.getElementById('validationNomeCompleto').value;
    let tipoFunc = document.getElementById('validationTipoFuncionario').value;
    let status = document.getElementById('exampleFormControlStatus').value;
    let dtAdmissao = document.getElementById('validationDA').value;
    let dtDemissao = document.getElementById('validationDE').value;
    let motCancel = document.getElementById('exampleFormControlMotivoCancelamento').value;
    let primExperi = document.getElementById('validationPrimeiraE').value;
    let segExperi = document.getElementById('validationSegundaE').value;
    let dtNasci = document.getElementById('validationNasc').value;
    let cpfcnpj = document.getElementById('validationCpfCadastro').value;
    let tipoDoc = document.getElementById('exampleFormControlTipoDocumento').value;
    let dtDoc = document.getElementById('validationCustomDataDocumento').value;
    let orgDoc = document.getElementById('validationOD').value;
    let NmMae = document.getElementById('validationMae').value;
    let nCartTrab = document.getElementById('validationNCT').value;
    let seCartTrab = document.getElementById('validationSerieCarteira').value;
    let uf = document.getElementById('validationUF').value;
    let pis = document.getElementById('validationPis').value;
    let nContrato = document.getElementById('validationNumeroContrato').value;
    let telefone = document.getElementById('telefone').value;
    let email = document.getElementById('email').value;
    let cep = document.getElementById('cep').value;
    let rua = document.getElementById('validationLogradouro').value;
    let numero = document.getElementById('validationNL').value;
    let complemento = document.getElementById('validationComplemento').value;
    let bairro = document.getElementById('validationBairro').value;
    let cidade = document.getElementById('validationCidade').value;
    let estado = document.getElementById('validationEstado').value;
    let cpfFav = document.getElementById('id-fp-cpfFav').value;
    let nomeFav = document.getElementById('id-fp-favorecido').value;
    let tipoPag = document.getElementById('id-fp-tipopagamento').value;
    let banco = document.getElementById('id-fp-bancoN').value;
    let agencia = document.getElementById('id-fp-agencia').value;
    let conta = document.getElementById('id-fp-conta').value;
    let numCartao = document.getElementById('id-fp-numcartao').value;
    let supervisorBB = document.getElementById('exampleFormControlSupervisorBB').value;
    let gerenteBB = document.getElementById('exampleFormControlGerenteBB').value;
    let servMultBanc = document.getElementById('exampleFormControlSelectSerMultBanc').value;
    let gerMultBanc = document.getElementById('exampleFormControlSelectGerMultBanc').value;
    let superintendentecad = document.getElementById('exampleFormControlSuperintendente').value;
    let projeto = document.getElementById('exampleFormControlSelectProjeto').value;
    let codFunc = document.getElementById('exampleFormControlSelectCodFunc').value;
    let cargo = document.getElementById('exampleFormControlSelectCargo').value;
    let setor = document.getElementById('exampleFormControlSelectSetor').value;
    let codigo = document.getElementById('validationCodigo').value;
    let matricula = document.getElementById('validationMatricula').value;
    let empReg = document.getElementById('validationER').value;
    let repEmpresa = document.getElementById('id-p-repempresa').value;
    let cpfEmpresa = document.getElementById('id-p-cpfempresa').value;
    let dtValCert = document.getElementById('id-p-dtcertificacao').value;
    let certificacao = document.getElementById('id-p-certificacao').value;
    let freqPag = document.getElementById('id-frePag').value;
    let dtBloqueio = document.getElementById('id-p-dtbloqueio').value;
    let dtEntrContr = document.getElementById('id-p-dtentregacontrato').value;

    var raw = JSON.stringify({ 

        filial:filialcad,
        parceiro:funcionarioo,
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
        supervisor_sant:servMultBanc,
        gerente_sant:gerMultBanc,
        superintendente: superintendentecad,
        projeto: projeto,
        cod_funcao: codFunc,
        cargo:cargo,
        setor:setor,
        codigo: codigo,
        matricula: matricula,
        registro_clt:empReg,
        repre: repEmpresa,
        cpf_repre: cpfEmpresa,
        data_certificacao:dtValCert,
        certificacao:certificacao, 
        regra_pagamento:freqPag,
        data_bloqueio: dtBloqueio,
        data_contrato: dtEntrContr
=======
    // ------------------------------
    const prosseguir = document.getElementById('prosseguirBtn');
    prosseguir.addEventListener('click', () => {
        var myHeaders = new Headers();

        myHeaders.append("Content-Type", "application/json").value;
        let filialcad = document.getElementById('exampleFormControlFilialCadastro').value;
        let funcionarioo = document.getElementById('funcionario').value;
        let nomeComp = document.getElementById('validationNomeCompleto').value;
        let tipoFunc = document.getElementById('validationTipoFuncionario').value;
        let status = document.getElementById('exampleFormControlStatus').value;
        let dtAdmissao = document.getElementById('validationDA').value;
        let dtDemissao = document.getElementById('validationDE').value;
        let motCancel = document.getElementById('exampleFormControlMotivoCancelamento').value;
        let primExperi = document.getElementById('validationPrimeiraE').value;
        let segExperi = document.getElementById('validationSegundaE').value;
        let dtNasci = document.getElementById('validationNasc').value;
        let cpfcnpj = document.getElementById('validationCpfCadastro').value;
        let tipoDoc = document.getElementById('exampleFormControlTipoDocumento').value;
        let dtDoc = document.getElementById('validationCustomDataDocumento').value;
        let orgDoc = document.getElementById('validationOD').value;
        let NmMae = document.getElementById('validationMae').value;
        let nCartTrab = document.getElementById('validationNCT').value;
        let seCartTrab = document.getElementById('validationSerieCarteira').value;
        let uf = document.getElementById('validationUF').value;
        let pis = document.getElementById('validationPis').value;
        let nContrato = document.getElementById('validationNumeroContrato').value;
        let telefone = document.getElementById('telefone').value;
        let email = document.getElementById('email').value;
        let cep = document.getElementById('cep').value;
        let rua = document.getElementById('validationLogradouro').value;
        let numero = document.getElementById('validationNL').value;
        let complemento = document.getElementById('validationComplemento').value;
        let bairro = document.getElementById('validationBairro').value;
        let cidade = document.getElementById('validationCidade').value;
        let estado = document.getElementById('validationEstado').value;
        let cpfFav = document.getElementById('id-fp-cpfFav').value;
        let nomeFav = document.getElementById('id-fp-favorecido').value;
        let tipoPag = document.getElementById('id-fp-tipopagamento').value;
        let banco = document.getElementById('id-fp-bancoN').value;
        let agencia = document.getElementById('id-fp-agencia').value;
        let conta = document.getElementById('id-fp-conta').value;
        let numCartao = document.getElementById('id-fp-numcartao').value;
        let supervisorBB = document.getElementById('exampleFormControlSupervisorBB').value;
        let gerenteBB = document.getElementById('exampleFormControlGerenteBB').value;
        let servMultBanc = document.getElementById('exampleFormControlSelectSerMultBanc').value;
        let gerMultBanc = document.getElementById('exampleFormControlSelectGerMultBanc').value;
        let superintendentecad = document.getElementById('exampleFormControlSuperintendente').value;
        let projeto = document.getElementById('exampleFormControlSelectProjeto').value;
        let codFunc = document.getElementById('exampleFormControlSelectCodFunc').value;
        let cargo = document.getElementById('exampleFormControlSelectCargo').value;
        let setor = document.getElementById('exampleFormControlSelectSetor').value;
        let codigo = document.getElementById('validationCodigo').value;
        let matricula = document.getElementById('validationMatricula').value;
        let empReg = document.getElementById('validationER').value;
        let repEmpresa = document.getElementById('id-p-repempresa').value;
        let cpfEmpresa = document.getElementById('id-p-cpfempresa').value;
        let dtValCert = document.getElementById('id-p-dtcertificacao').value;
        let certificacao = document.getElementById('id-p-certificacao').value;
        let freqPag = document.getElementById('id-frePag').value;
        let dtBloqueio = document.getElementById('id-p-dtbloqueio').value;
        let dtEntrContr = document.getElementById('id-p-dtentregacontrato').value;

        var raw = JSON.stringify({

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
            data_contrato: dtEntrContr

        })

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://172.16.0.197:3000/user/cadastro/inclusao", requestOptions)
            .then(response => response.json())
            //   console.log(response)
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
>>>>>>> 81261b2b513322d6139cddcc6020798b89a88343

    })

    // ------------------------------
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };


<<<<<<< HEAD
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
=======
>>>>>>> 81261b2b513322d6139cddcc6020798b89a88343

    fetch("http://172.16.0.197:3000/user/gerente", requestOptions)
        .then(response => response.json().then(function (data) {
            for (let i = 0; i < data.length; i++) {
                gerenteBB.innerHTML += '<option value="' + data[i].gerente + '">' + data[i].gerente + '</option>;'
                gerente.innerHTML += '<option value="' + data[i].gerente + '">' + data[i].gerente + '</option>;'
            }
        })).catch(error => console.log('error', error));
    
  

    fetch("http://172.16.0.197:3000/user/filial", requestOptions)
        .then(response => response.json()
            .then(function (data) {
                for (let i = 0; i < data.length; i++) {
                    filialCadastro.innerHTML += '<option value="' + data[i].filial + '">' + data[i].filial + '</option>;'
                    fi.innerHTML += '<option value="' + data[i].filial + '">' + data[i].filial + '</option>;'
                }
            }))
        .catch(error => console.log('error', error));

    fetch("http://172.16.0.197:3000/user/supervisor", requestOptions)
        .then(response => response.json())
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                supervisor.innerHTML += '<option value="' + data[i].parceiro + '">' + data[i].parceiro + '</option>;'
                supervisorBB.innerHTML += '<option value="' + data[i].parceiro + '">' + data[i].parceiro + '</option>;'
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
    let cnpj = document.getElementById('cpfcnpj').value;
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
    fetch("http://172.16.0.197:3000/user/search", requestOptions)
        .then(response => response.json())
        .then(result => {
            cont = -1;
            array = result;

            for (const value of result) {
                teste = value.cnpj;
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



function editar(cpf) {
    // console.log(cpf);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        cpf: cpf
    })

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch("http://172.16.0.197:3000/user/cadastro/modal", requestOptions)
        .then(response => response.json())
        .then(function (data) {
            // data = ""
            // console.log(data);
            // console.log(document.getElementById('modalAlterar'))
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
                $("#exampleFormControlSelectSetor").val(data.dados_cadastro.setor)
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

                //Parceiro;
                $("#id-p-repempresa").val(data.dados_cadastro.repre);
                $("#cpfcnpj").val(data.dados_cadastro.cpf_repre);
                $("#id-p-certificacao").val(data.dados_cadastro.certificacao);


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
                $("#dtEnvioChavej").val(data.dados_chave.data_anvio);
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
                $("#exampleFormControlStatusSiglas").val(data.dados_sigla.status_e)

            }

        })
        .catch(error => console.log('error', error))
}

//RESET APÓS TROCAR DE MODAL ENTRE O ALTERAR E O INCLUIR 
buttonIncluir.addEventListener('click', () => {
    $('.needs-validation').each(function () {
        this.reset();
    });
})


// let elements = document.getElementsByTagName("input");
    // let selects = document.getElementsByTagName("select");
    // let textarea = document.getElementsByTagName("textarea");

    // for (const element of elements) {
    //     if (element.type == "text") {
    //         element.value = "";
    //     }
    //     else if (element.type == "radio") {
    //         element.checked = false;
    //     }
    //     else if (element.type == "checkbox") {
    //         element.checked = false;
    //     }
    //     else if (element.type == "select") {
    //         element.selectedIndex = -1;
    //     }
    // }

    // for(const select of selects) {
    //     select.value = ""
    // }

    // for(const texts of textarea) {
    //     texts.value = "";
    // }