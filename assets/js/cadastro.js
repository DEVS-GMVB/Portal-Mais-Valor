// VARS


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
let cpfcnpjParceiro = [];

var cont = -1;
var array;
var teste;

window.onload = function () {

    // ------------------------------
    const prosseguir = document.getElementById('prosseguirBtn');
    prosseguir.addEventListener('click', () => {
        // $(window).load(function() {
        //     $("#comissao").modal('show');
        // });
        // document.getElementById("comissao").classList.add("active");

        // document.getElementById("comissao").classList.add("show");
        // if($("#comissao").hasClass("active")){
        //     document.getElementById("comissao").classList.remove('show')
        // }
    })

    // ------------------------------
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };



    fetch("http://172.16.0.197:3000/user/gerente", requestOptions)
        .then(response => response.json().then(function (data) {
            for (let i = 0; i < data.length; i++) {
                gerenteBB.innerHTML += '<option value="' + data[i].gerente + '">' + data[i].gerente + '</option>;'
                gerente.innerHTML += '<option value="' + data[i].gerente + '">' + data[i].gerente + '</option>;'
                gerenteMulti.innerHTML += '<option value="' + data[i].gerente + '">' + data[i].gerente + '</option>;'
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
                supervisorMulti.innerHTML += '<option value="' + data[i].parceiro + '">' + data[i].parceiro + '</option>;'
<<<<<<< HEAD
=======

>>>>>>> kainan
            }
        }).catch(error => console.log('error', error));


    fetch("http://172.16.0.197:3000/user/supervisor", requestOptions)
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

function editar(cpfCnpj) {
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

    fetch("http://172.16.0.197:3000/user/cadastro/buscar", request).
    then(response => response.json().then(function (data) {
        // console.log(data[0]);
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

            cpfIncluirAcesso++;

            altera.innerHTML = `
          <div class="actions ml-3 text-center">
              <a href="#" class="action-item mr-0" data-toggle="tooltip" title="Alterar">
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

    fetch("http://172.16.0.197:3000/user/cadastro/modal", requestOptions)
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





//RESET APÓS TROCAR DE MODAL ENTRE O ALTERAR E O INCLUIR 
buttonIncluir.addEventListener('click', () => {
    // $('#cadastro-tab').modal('show');
    (function ($) {
        $(function () {

            //codigo
            $('#cadastro').modal('show');
        })(jQuery);
    })



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
<<<<<<< HEAD

})
}
=======
})
>>>>>>> kainan
