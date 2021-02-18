if (document.getElementsByClassName('incluirSilgasE')) {
    const prosseguir = document.getElementById('incluirSilgasE');
    prosseguir.addEventListener('click', () => {
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


if (document.getElementById("updateCadastro")) {

    alert("Entrou no id updateCadastro");

    const prosser = document.getElementById('updateCadastro');
    prosser.addEventListener('click', () => {
        // window.location.replace("#cadastro");

        //Habilitar o modal acesso somente após clicar no botão finalizar
        // document.getElementById("acesso-tab").disabled = false;
        alert("Entrei aq update")

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

    fetch(URL+"/user/cadastro/inclusao", requestOptions)
        .then(response => response.json())
        //   console.log(response)
        .then(function (data) {
            if (data.sucesso === "usuario cadastrado com sucesso") {
                alert("Cadastro incluido com sucesso!")
                console.log(data)
            }

            if (data.resp === "não foi possivel cadastrar usuario, cpf existente na base de dados") {
                alert("não foi possivel cadastrar usuario, cpf existente na base de dados")

            }
            // let fluxoAlterar = document.getElementById("modalAlterar")
            // fluxoAlterar.addEventListener('click', () => {
            //     alert('cheguei aq')
            // })

        })
        .catch(error => console.log('erro',error));

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(URL + "/user/cadstro/alterar", requestOptions)
            .then(response => response.json())
            .then(function (data) {
                alert("ALTERADO")
            })
            .catch(error => console.log('erro', error));

    })
}


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

    fetch(URL + "/user/parceiros", requestOptions)
        .then(response => response.json())
        .then(function (data) {
            if (data[0].parceiro === "NAO INFORMADO NA INSERA‡A?O") {
                $("#validationParceiroPromotor").val("");
            } else {
                $("#validationParceiroPromotor").val(data[0].parceiro);
            }
        })
        .catch(error => console.log('error', error));
})

cpfCnpjSigla.addEventListener('keyup', () => {
    let promotor = document.getElementById("validationParceiroPromotor");
    if (promotor.value.length > 0) {
        $("#validationParceiroPromotor").val("")
    }
    // if($("#validationParceiroPromotor").val())
})