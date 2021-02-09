const prosseguir = document.getElementById('incluirSilgasE');
prosseguir.addEventListener('click', () => {
    // window.location.replace("#cadastro");

    //Habilitar o modal acesso somente após clicar no botão finalizar
    document.getElementById("acesso-tab").disabled = false;


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    //Cadastro
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
    let telefone = document.getElementById('validationTelefone').value;
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
    let cpfEmpresa = document.getElementById('cpfcnpj').value;
    let dtValCert = document.getElementById('id-p-dtcertificacao').value;
    let certificacao = document.getElementById('id-p-certificacao').value;
    let freqPag = document.getElementById('id-frePag').value;
    let dtBloqueio = document.getElementById('id-p-dtbloqueio').value;
    let dtEntrContr = document.getElementById('id-p-dtentregacontrato').value;

    //Comissão
    let bbComissao = document.getElementById('idPorcComissao').value;
    let cpfSecundario = document.getElementById('cpfSecundario').value;
    let secundario = document.getElementById("idSec").value;
    let bbPorcSecundario = document.getElementById('idPorcSecundario').value;
    let cpfTerciario = document.getElementById('cpfTerceario').value;
    let terceario = document.getElementById("idTerc").value
    let bbPorcTerceario = document.getElementById('idPorcTerceario').value;
    let cpfQuaternario = document.getElementById('quaternario').value;
    let quaternario = document.getElementById("idQuartenario").value
    let bbPorcQaternario = document.getElementById('idPorcQuaternario').value;
    let santParcPromo = document.getElementById('idParceiroPromotor').value;
    let santSupervisor = document.getElementById('id-porc-supervisor').value;
    let santGerente = document.getElementById('id-porc-gerente').value;
    let santPorcQuaternario = document.getElementById('id-porc-quaternario').value;
    let santMaxComissao = document.getElementById('id-max-comissao').value;
    let santQuaternario = document.getElementById('id-quaternario').value;
    let ceParcPromo = document.getElementById('id-ce-parceiro-promotor').value;
    let ceSupervisor = document.getElementById('id-ce-supervisor').value;
    let ceGerente = document.getElementById('id-ce-gerente').value;
    let ceQuaternario = document.getElementById('id-ce-quaternario').value;
    let MaxComissao = document.getElementById('id-max-comissao').value;
    let gmgParcPromo = document.getElementById('id-gmg-parcpromo').value;
    let gmgSupervisor = document.getElementById('id-gmg-supervisor').value;
    let gmgGerente = document.getElementById('id-gmg-gerente').value;
    let gmgQuaternario = document.getElementById('id-gmg-quaternario').value;
    let gmgMaxComissao = document.getElementById('id-gmg-max-comissao').value;
    let grjParcPromo = document.getElementById('id-grj-parcpromo').value;
    let grjSupervisor = document.getElementById('id-grj-supervisor').value;
    let grjGerente = document.getElementById('id-grj-gerente').value;
    let grjQuaternario = document.getElementById('id-grj-quaternario').value;
    let grjMaxComissao = document.getElementById('id-grj-max-comissao').value;
    let tnParcPromo = document.getElementById('id-tm-parcpromo').value;
    let tsParcPromo = document.getElementById('id-ts-parcpromo').value;

    //Chave J
    let statu = document.getElementById('StatusChavej').value;
    let funcao = document.getElementById('exampleFormControlFuncao').value;
    let empresa = document.getElementById('chavejEmpresa').value;
    let dtEnvio = document.getElementById('dtEnvioChavej').value;
    let senha = document.getElementById('senhaChavej').value;
    let motCance = document.getElementById('motCancelChaveJ').value;
    let tipoChave = document.getElementById('tipoChavej').value;
    let dtCancelamento = document.getElementById('dtCancelamentoChavej').value;

    //Siglae
    let sigla = document.getElementById('validationSigla').value;
    let codEscritorio = document.getElementById('validationCodigoEscritorio').value;
    let nmEscritorio = document.getElementById('validationNomeEscritorio').value;
    let stat = document.getElementById('exampleFormControlStatusSiglas').value;
    let dtInativacao = document.getElementById('validationDataInativacao').value;
    let motPendencia = document.getElementById('validationMotivoPendencia').value;
    let siglaPorsp = document.getElementById('validationSiglaPropesct').value;
    let cpfcnpjSigla = document.getElementById('validationCpfCnpf').value;
    let parcPromoSigla = document.getElementById('validationParceiroPromotor').value;
    let usaSiglaE = document.getElementById('exampleFormControlUsaSigla').value;
    let usaSilgaI = document.getElementById('exampleFormControlSiglaI').value;
    let observ = document.getElementById('exampleFormControlObs').value;

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

    fetch("http://localhost:3000/user/cadastro/inclusao", requestOptions)
        .then(response => response.json())
        //   console.log(response)
        .then(function (data) {
            alert("Cadastro incluido com sucesso!")
            console.log(data)
        })
        .catch(error => console.log('error', error));

})


// Função para parceiros 
let cpfCnpjSigla = document.getElementById("validationCpfCnpf");


cpfCnpjSigla.addEventListener('blur', () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "cnpj": cpfCnpjSigla.value
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://172.16.0.197:3000/user/parceiros", requestOptions)
        .then(response => response.json())
        .then(function (data) {
            if (data[0].parceiro === "NAO INFORMADO NA INSERA‡A?O") {
                $("#idQuartenario").val("");
            } else {
                $("#idQuartenario").val(data[0].parceiro);
            }
        })
        .catch(error => console.log('error', error));
})

cpfCnpjSigla.addEventListener('keyup', () => {
    let promotor = document.getElementById("idQuartenario");
    if (promotor.value.length > 0) {
        $("#idQuartenario").val("")
    }
    // if($("#validationParceiroPromotor").val())
})
