// VARS
let filial = document.getElementById('exampleFormControlFilial');
let gerente = document.getElementById('exampleFormControlSelectGerente');
let supervisor = document.getElementById('exampleFormControlSupervisor');
let mes = document.getElementById('exampleFormControlMes');
let mesDemissao = document.getElementById('exampleFormControlMesDemissao');
let Tbody = document.getElementById('list');
window.onload = function () {

var gerente = document.getElementById('exampleFormControlSelectGerente');
var filial = document.getElementById('exampleFormControlFilial');
var f = document.getElementById('exampleFormControlSelect1')
var supervisor = document.getElementById('exampleFormControlSupervisor');
var mes = document.getElementById('exampleFormControlMes');
var mesDemissao = document.getElementById('exampleFormControlMesDemissao');

// ------------------------------
const prosseguir = document.getElementById('prosseguirBtn');
prosseguir.addEventListener('click', () => {
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json").value;
    let filialcad = document.getElementById('exampleFormControlSelect1Filial').value;
    let funcionarioo = document.getElementById('funcionario').value;
    let nomeComp = document.getElementById('validationCustom01NomeComp').value;
    let tipoFunc = document.getElementById('validationCustom01TipoFunc').value;
    let status = document.getElementById('exampleFormControlSelectStatus').value;
    let dtAdmissao = document.getElementById('validationCustom01DtAdmissao').value;
    let dtDemissao = document.getElementById('validationCustom01DtDemissao').value;
    let motCancel = document.getElementById('exampleFormControlSelect1MotCancel').value;
    let primExperi = document.getElementById('validationCustom0PrimExperi').value;
    let segExperi = document.getElementById('validationCustom01SegExperi').value;
    let dtNasci = document.getElementById('validationCustom0DtNasci').value;
    let cpfcnpj = document.getElementById('validationCustomCPFCNPJ').value;
    let tipoDoc = document.getElementById('exampleFormControlSelectTipoDoc').value;
    let dtDoc = document.getElementById('validationCustomDtDoc').value;
    let orgDoc = document.getElementById('validationCustomOrgDoc').value;
    let NmMae = document.getElementById('validationCustomNmMae').value;
    let nCartTrab = document.getElementById('validationCustomNCarTrab').value;
    let seCartTrab = document.getElementById('validationCustomSeCartTrab').value;
    let uf = document.getElementById('validationCustom01Uf').value;
    let pis = document.getElementById('validationCustom01Pis').value;
    let nContrato = document.getElementById('validationCustomNContrato').value;
    let telefone = document.getElementById('telefone').value;
    let email = document.getElementById('email').value;
    let cep = document.getElementById('cep').value;
    let rua = document.getElementById('validationCustomRua').value;
    let numero = document.getElementById('validationCustomNumero').value;
    let complemento = document.getElementById('validationCustomComplemento').value;
    let bairro = document.getElementById('validationCustomBairro').value;
    let cidade = document.getElementById('validationCustomCidade').value;
    let estado = document.getElementById('validationCustomEstado').value;
    let cpfFav = document.getElementById('id-fp-cpfFav').value;
    let nomeFav = document.getElementById('id-fp-nomeFav').value;
    let tipoPag = document.getElementById('id-fp-tipopagamento').value;
    let banco = document.getElementById('id-fp-banco').value;
    let agencia = document.getElementById('id-fp-agencia').value;
    let conta = document.getElementById('id-fp-conta').value;
    let numCartao = document.getElementById('id-fp-numcartao').value;
    let supervisorBB = document.getElementById('exampleFormControlSelectsupBB').value;
    let gerenteBB = document.getElementById('exampleFormControlSelectGerBB').value;
    let servMultBanc = document.getElementById('exampleFormControlSelectSerMultBanc').value;
    let gerMultBanc = document.getElementById('exampleFormControlSelectGerMultBanc').value;
    let superintendentecad = document.getElementById('exampleFormControlSelectSuperi').value;
    let projeto = document.getElementById('exampleFormControlSelectProjeto').value;
    let codFunc = document.getElementById('exampleFormControlSelectCodFunc').value;
    let cargo = document.getElementById('exampleFormControlSelectCargo').value;
    let setor = document.getElementById('exampleFormControlSelectSetor').value;
    let codigo = document.getElementById('validationCustomCod').value;
    let matricula = document.getElementById('validationCustomMatricula').value;
    let empReg = document.getElementById('validationCustomEmpReg').value;
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
    .then(response => response.json().then(function(data){
        for(let i = 0; i < data.length; i++){
            gerente.innerHTML += '<option value="'+data[i].gerente+'">'+data[i].gerente+'</option>;'
        }
    })).catch(error => console.log('error', error));

    
    fetch("http://172.16.0.197:3000/user/filial", requestOptions)
    .then(response => response.json()
    .then(function(data){
        for(let i = 0; i < data.length; i++){
            filial.innerHTML += '<option value="'+data[i].filial+'">'+data[i].filial+'</option>;'
        }
    }))
    .catch(error => console.log('error', error));

    fetch("http://172.16.0.197:3000/user/supervisor", requestOptions)
    .then(response => response.json())
    .then(function(data){
        for(let i = 0; i < data.length; i++){
            supervisor.innerHTML += '<option value="'+data[i].parceiro+'">'+data[i].parceiro+'</option>;'
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
    let filial = document.getElementById('exampleFormControlFilial').value;
    let mes_admissao = document.getElementById('exampleFormControlMes').value;
    let mes_demissao = document.getElementById('exampleFormControlMesDemissao').value;
    let tipo = document.getElementById('exampleFormControlTipo').value;
    let superintendente = document.getElementById('exampleFormControlSelect1Superintendente').value;
    // console.log(cnpj,status,supervisor,gerente,filial, mes_admissao, mes_demissao, tipo,superintendente);
    var raw = JSON.stringify({
        parceiro:parceiro,
        cnpj:cnpj,
        supervisor:supervisor,
        status:status,
        gerente:gerente,
        filial:filial,
        mes_admissao:mes_admissao,
        mes_demissao:mes_demissao,
        tipo:tipo,
        superintendente:superintendente
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

            alteraVisualiza.innerHTML=` <div class="actions ml-3" style="text-align: center;">
            <a "id=buttonalterar" href="#" class="action-item mr-2" data-bs-whatever="marcos" data-toggle="modal"
                data-target=".modalteladecadastro" title="Alterar">
                <i id = "buttonalterar" class="fas fa-external-link-alt" onclick="editar(${value})"></i>
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

function editar(e){

    var linha = $(e).closest("tr");
    var filial = linha.find("td:eq(0)").text().trim(); // texto da primeira coluna
    var func  = linha.find("td:eq(1)").text().trim(); // texto da segunda coluna
    var cnpj = linha.find("td:eq(2)").text().trim(); // texto da terceira coluna
    var status   = linha.find("td:eq(3)").text().trim(); // texto da quarta coluna
    var data_admissaoo = linha.find("td:eq(6)").text().trim();
    $("#exampleFormFilial").val(filial);
    $("#funcionario").val(func);
    $("#validationCpf").val(cnpj);
    $("#exampleFormControlStatus").val(status);
    // date = new SimpleDateFormat("YYYY-MM-DD").parse("08/12/2017");
    //$("#validationDA").value(data_admissaoo);
 
}
