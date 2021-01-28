// VARS
let gerente = document.getElementById('exampleFormControlSelectGerente');
let filial = document.getElementById('exampleFormControlFilial');
let supervisor = document.getElementById('exampleFormControlSupervisor');
let mes = document.getElementById('exampleFormControlMes');
let mesDemissao = document.getElementById('exampleFormControlMesDemissao');
let Tbody = document.getElementById('list');
let fi = document.getElementById('exampleFormFilial')
var cont = -1;
var array;

window.onload = function () {

    var gerente = document.getElementById('exampleFormControlSelectGerente');
    var filial = document.getElementById('exampleFormControlFilial');
    var f = document.getElementById('exampleFormControlSelect1')
    var supervisor = document.getElementById('exampleFormControlSupervisor');
    var mes = document.getElementById('exampleFormControlMes');
    var mesDemissao = document.getElementById('exampleFormControlMesDemissao');


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


    fetch("http://172.16.0.197:3000/user/filial", requestOptions)
        .then(response => response.json()
            .then(function (data) {
                for (let i = 0; i < data.length; i++) {
                    filial.innerHTML += '<option value="' + data[i].filial + '">' + data[i].filial + '</option>;'
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
    let filial = document.getElementById('exampleFormControlFilial').value;
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
                <i id = "${cont}" class="fas fa-external-link-alt" onclick="editar(this,array[${cont}])"></i>
            </a>
            <a href="#" class="action-item mr-2" data-toggle="modal"
                data-target=".modalteladecadastro" data-name="oi" title="Visualizar">
                <i class="fas fa-eye"></i>
            </a>
        </div>`;

            }

        })
        .catch(error => console.log('error', error));



})



function editar(v,globalResult) {
    console.log(v);
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

}
