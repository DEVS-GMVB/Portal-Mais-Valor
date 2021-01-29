// VARS
let filial = document.getElementById('exampleFormControlFilial');
let gerente = document.getElementById('exampleFormControlSelectGerente');
let filialCadastro = document.getElementById('exampleFormControlFilialCadastro');
let supervisor = document.getElementById('exampleFormControlSupervisor');
let mes = document.getElementById('exampleFormControlMes');
let mesDemissao = document.getElementById('exampleFormControlMesDemissao');
let Tbody = document.getElementById('list');
let fi = document.getElementById('exampleFormFilial');
let supervisorBB = document.getElementById('exampleFormControlSupervisorBB');
let gerenteBB = document.getElementById('exampleFormControlGerenteBB');
var cont = -1;
var array;
var teste;

window.onload = function () {

// ------------------------------
const prosseguir = document.getElementById('prosseguirBtn');
prosseguir.addEventListener('click', () => {
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json").value;
    let filialcad = document.getElementById('exampleFormFilial').value;
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

})

// ------------------------------
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

    fetch("http://172.16.0.197:3000/user/gerente", requestOptions)
        .then(response => response.json().then(function (data) {
            for (let i = 0; i < data.length; i++) {
                gerente.innerHTML += '<option value="' + data[i].gerente + '">' + data[i].gerente + '</option>;'
            }
        })).catch(error => console.log('error', error));

    fetch("http://172.16.0.197:3000/user/gerente", requestOptions)
    .then(response => response.json().then(function (data) {
        for (let i = 0; i < data.length; i++) {
            gerenteBB.innerHTML += '<option value="' + data[i].gerente + '">' + data[i].gerente + '</option>;'
        }
    })).catch(error => console.log('error', error));
    
    fetch("http://172.16.0.197:3000/user/filial", requestOptions)
        .then(response => response.json()
            .then(function (data) {
                for (let i = 0; i < data.length; i++) {
                    filialCadastro.innerHTML += '<option value="' + data[i].filial + '">' + data[i].filial + '</option>;'
                }
            }))
        .catch(error => console.log('error', error));

    fetch("http://172.16.0.197:3000/user/supervisor", requestOptions)
        .then(response => response.json())
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                supervisor.innerHTML += '<option value="' + data[i].parceiro + '">' + data[i].parceiro + '</option>;'
            }
        }).catch(error => console.log('error', error));

    fetch("http://172.16.0.197:3000/user/filial", requestOptions)
        .then(response => response.json()
            .then(function (data) {
                for (let i = 0; i < data.length; i++) {
                    fi.innerHTML += '<option value="' + data[i].filial + '">' + data[i].filial + '</option>;'
                }
            }))
        .catch(error => console.log('error', error));

    fetch("http://172.16.0.197:3000/user/supervisor", requestOptions)
    .then(response => response.json())
    .then(function (data) {
        for (let i = 0; i < data.length; i++) {
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
                data-target=".modalteladecadastro" title="Alterar">
                <i id = "${cont}" class="fas fa-external-link-alt" onclick="editar(array[${cont}].cnpj)"></i>
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



function editar(v) {
    console.log(v);
    // $("#exampleFormFilial").val(globalResult.filial);
    // $("#cep").val(globalResult.cep);
    // $("#funcionario").val(globalResult.parceiro);
    // $("#validationCpfCadastro").val(globalResult.cnpj);
    // $("#validationNomeCompleto").val(globalResult.nome_completo);
    // $("#exampleFormControlStatus").val(globalResult.status);
    // $("#validationMae").val(globalResult.nome_mae);
    // $("#validationNCT").val(globalResult.carteira);
    // $("#validationSerieCarteira").val(globalResult.serie_carteira);
    // $("#validationUF").val(globalResult.uf_carteira);
    // $("#validationPiss").val(globalResult.pis);
    // $("#validationNumeroContrato").val(globalResult.numero_contrato);
    // $("#validationTelefone").val(globalResult.telefone);
    // $("#email").val(globalResult.email);
    // $("#validationLogradouro").val(globalResult.logradouro);
    // $("#validationNL").val(globalResult.numero_l);
    // $("#validationComplemento").val(globalResult.complemento);
    // $("#validationBairro").val(globalResult.bairro);
    // $("#validationCidade").val(globalResult.cidade);
    // $("#validationEstado").val(globalResult.estado);
    // $("#validationOD").val(globalResult.orgao_emissao);
    // $("#validationTipoFuncionario").val(globalResult.tipo_func);
    // $("#validationPrimeiraE").val(globalResult.experiencia1);
    // $("#validationSegundaE").val(globalResult.experiencia2);
    // $("#validationDA").val(globalResult.data_admissao);
    // $("#validationDE").val(globalResult.data);
    // $("#validationNasc").val(globalResult.data_nascimento)
    // $("#validationEstado").val(globalResult.naturalidade)
    // $("#exampleFormControlMotivoCancelamento").val(globalResult.motivo_cancelamento);
    // $("#exampleFormControlTipoDocumento").val(globalResult.tipo_documento);
    // $("#validationCustomDataDocumento").val(globalResult.data_rg);
    // $("#id-fp-favorecido").val(globalResult.favorecido)
    // $("#id-fp-tipopagamento").val(globalResult.tipo_pagamento);
    

    // //Formas de Pagamento

    // $("#id-fp-banco").val(globalResult.cpf);
    // $("#id-fp-bancoN").val(globalResult.banco);
    // $("#id-fp-agencia").val(globalResult.agencia);
    // $("#id-fp-conta").val(globalResult.conta);
    // $("#id-fp-numcartao").val(globalResult.numero_cartao);

    // //Gestores
    // $("#exampleFormControlSuperintendente").val(globalResult.superintendente);
    // $("#validationMatricula").val(globalResult.matricula);
    // $("#validationCodigo").val(globalResult.codigo);
    // $("#validationER").val(globalResult.filial);
    // $("#exampleFormControlSupervisorBB").val(globalResult.supervisor);
    // $("#exampleFormControlGerenteBB").val(globalResult.gerente);

    // //Parceiro;
    // $("#id-p-respempresa").val(globalResult.repre);
    // $("#id-p-cppfempresa").val(globalResult.cpf_repre);
    // $("#id-p-certificacao").val(globalResult.certificacao);


    // // Comissão
    // $("#idPorcComissao").val(globalResult.comissao);
    // $("#idSecundario").val(globalResult.secundario);
    // $("#idPorcSecundario").val(globalResult.pct_secundario);
    // $("#idTerceario").val(globalResult.terceario);
    // $("#idPorcTerceario").val(globalResult.pct_terceario);
    // $("#idQuartenario").val(globalResult.quaternario);
    // $("#idPorcQuaternario").val(globalResult.pct_quaternario);

    // //Dados Comissão - Santander % Comissão Novo Refin / Portabilidade
    // $("#idParceiroPromotor").val(globalResult.comissao_novo);
    // $("#id-porc-supervisor").val(globalResult.comissao_novo_sup);
    // $("#id-porc-gerente").val(globalResult.comissao_novo_ger);
    // $("#id-porc-quaternario").val(globalResult.comissao_novo_quat);
    // $("#id-quaternario").val(globalResult.qua_sant2)

    // //% Convênios Especiais
    // $("#id-ce-parceiro-promotor").val(globalResult.comissao_inss);
    // $("#id-ce-supervisor").val(globalResult.comissao_inss_sup);
    // $("#id-ce-gerente").val(globalResult.comissao_inss_ger);
    // $("#id-ce-quaternario").val(globalResult.comissao_inss_quat);

    // ////Grupo Minas Gerais
    // $("#id-gmg-parcpromo").val(globalResult.governo_minas);
    // $("#id-gmg-supervisor").val(globalResult.governo_minas_sup)
    // $("#id-gmg-gerente").val(globalResult.governo_minas_ger);
    // $("#id-gmg-quaternario").val(globalResult.governo_minas_quat)
    
    // //% Grupo Rio de Janeiro
    // $("#id-grj-parcpromo").val(globalResult.prefeitura_rio);
    // $("#id-grj-supervisor").val(globalResult.prefeitura_rio_sup);
    // $("#id-grj-gerente").val(globalResult.prefeitura_rio_ger);
    // $("#id-grj-quaternario").val(globalResult.prefeitura_rio_quat);
}
