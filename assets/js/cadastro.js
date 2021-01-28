// VARS
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
<<<<<<< HEAD
                <i id = "${cont}" class="fas fa-external-link-alt" onclick="editar(array[${cont}].cnpj)"></i>
=======
                <i id = "${cont}" class="fas fa-external-link-alt" onclick="editar(this,array[${cont}])"></i>
>>>>>>> f23c2de8631e5deab109bab5bc37221cab268bfc
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
<<<<<<< HEAD
    // $("#exampleFormFilial").val(globalResult.filial)
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
    // $("#id-grj-quaternario").val(globalResult.prefeitura_rio_quat)
=======
    $("#exampleFormFilial").val(globalResult.filial)
    $("#cep").val(globalResult.cep);
    $("#funcionario").val(globalResult.parceiro);
    $("#validationCpf").val(globalResult.cpf);
    $("#validationNomeCompleto").val(globalResult.nome_completo);
    $("#exampleFormControlStatus").val(globalResult.status);
    $("#validationMae").val(globalResult.nome_mae);
    $("#validationNCT").val(globalResult.carteira);
    $("#validationSerieCarteira").val(globalResult.serie_carteira);
    $("#validationUF").val(globalResult.uf_carteira);
    $("#validationPis").val(globalResult.pis);
    $("#validationNumeroContrato").val(globalResult.numero_contrato);
    $("#validationTelefone").val(globalResult.telefone);
    $("#email").val(globalResult.email);
    $("#validationLogradouro").val(globalResult.logradouro);
    $("#validationNL").val(globalResult.numero_l);
    $("#validationComplemento").val(globalResult.complemento);
    $("#validationBairro").val(globalResult.bairro);
    $("#validationCidade").val(globalResult.cidade);
    $("#validationEstado").val(globalResult.estado);
    $("#validationOD").val(globalResult.orgao_emissao);
    $("#validationTipoFuncionario").val(globalResult.tipo_func);
    $("#validationPrimeiraE").val(globalResult.experiencia1);
    $("#validationSegundaE").val(globalResult.experiencia2);
    // console.log(globalResult.data_admissao)
    $("#validationDA").val(globalResult.data_admissao);
    $("#validationDE").val(globalResult.data);
    $("#validationNasc").val(globalResult.data_nascimento)

    //Formas de Pagamento

    $("#id-fp-banco").val(globalResult.cpf);
    $("#id-fp-bancoN").val(globalResult.banco);
    $("#id-fp-agencia").val(globalResult.agencia);
    $("#id-fp-conta").val(globalResult.conta);
    $("#id-fp-numcartao").val(globalResult.numero_cartao);

    //Gestores
    $("#exampleFormControlSuperintendente").val(globalResult.superintendente);
    $("#validationMatricula").val(globalResult.matricula);
    $("#validationCodigo").val(globalResult.codigo)

    //Parceiro;
    $("#id-p-respempresa").val(globalResult.repre);
    $("#id-p-cppfempresa").val(globalResult.cpf_repre);
    $("#id-p-certificacao").val(globalResult.certificacao);

>>>>>>> f23c2de8631e5deab109bab5bc37221cab268bfc
}
