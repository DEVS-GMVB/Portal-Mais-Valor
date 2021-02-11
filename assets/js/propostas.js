let filtros = document.getElementById("filtrosPes");
let empresaProposta = document.getElementById("empresaPropostas");
let tipoOperacao = document.getElementById('tipoOperacao');
let bancoPortado = document.getElementById('exampleFormBP');
let banc = document.getElementById("bancoPortabilidade");
let prod = document.getElementById("exampleProduto")
let produtoComissao = document.getElementById("exampleFormProduto");
let supervisorProposta = document.getElementById("supervisorProposta");
let gerenteProposta = document.getElementById("gerenteProposta")
let subStatus = document.getElementById("sub-status")


//Nova proposta
let numeroPrp = document.getElementById('validationNprop')
let dtCadastro = document.getElementById('validationDtCad')
let bancoo = document.getElementById('examploBanco')
let status = document.getElementById('validationStatus')
//let produtoo = document.getElementById('exampleProduto')
//let tpOperacao = document.getElementById('tipoOperacao')
let vlEntregue = document.getElementById('validationVlEntregue')
let vlTroco = document.getElementById('validationVlTroco')
let convenio = document.getElementById('exampleFormControlSelectMes')
//let bancoPort = document.getElementById('bancoPortador')
let portabilidade = document.getElementById('validationPortabilidade')
let vlParcela = document.getElementById('validationvlParcela')
let seguro = document.getElementById('exampleSeguro')
let parcPagas = document.getElementById('exampleFormPP')
let nmCliente = document.getElementById('validationNmCliente')
let cpfCliente = document.getElementById('validationCpfCliente')
let ddd = document.getElementById('validationDDD')
let tlCliente = document.getElementById('validationTelCliente')
let correntista = document.getElementById('exampleCorrentista')
let telSmsCliente = document.getElementById('validationTelSmsCliente')
let matrNBRA = document.getElementById('validationMatrNBRA')
let alteraHr = document.getElementById('exampleAlteraHr')
let MdtConfirma = document.getElementById('validationMdt')
let MHCC = document.getElementById('validationMHCC')
let exeritotemp = document.getElementById('exampleExercito')
let codUnic = document.getElementById('validationCodInic')
let sexo = document.getElementById('exampleSexo')
let dtNascimento = document.getElementById('validationDtNasc')
let email = document.getElementById('validationEmail')
let UF = document.getElementById('exampleUF')


window.onload = function () {


  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("http://172.16.0.197:3000/user/proposta/empresas", requestOptions)
    .then(response => response.json().then(function (data) {
      for (let i = 0; i < data.length; i++) {
        empresaProposta.innerHTML += '<option value="' + data[i].empresa + '">' + data[i].empresa + '</option>;'
      }
    })).catch(error => console.log('error', error));

  fetch("http://172.16.0.197:3000/user/proposta/tipo", requestOptions)
    .then(response => response.json())
    .then(function (data) {
      for (let i = 0; i < data.length; i++) {
        tipoOperacao.innerHTML += '<option value="' + data[i].tipo + '">' + data[i].tipo + '</option>;'
      }
    })

  fetch("http://172.16.0.197:3000/user/proposta/bancos", requestOptions)
    .then(response => response.json())
    .then(function (data) {
      for (let i = 0; i < data.length; i++) {
        bancoPortado.innerHTML += '<option value="' + data[i].banco + '">' + data[i].banco + '</option>;'
        banc.innerHTML += '<option value="' + data[i].banco + '">' + data[i].banco + '</option>;'
        bancoo.innerHTML += '<option value="' + data[i].banco + '">' + data[i].banco + '</option>;'
      }
    })

  fetch("http://172.16.0.197:3000/user/proposta/produto", requestOptions)
    .then(response => response.json())
    .then(function (data) {
      for (let i = 0; i < data.length; i++) {
        prod.innerHTML += '<option value="' + data[i].produto + '">' + data[i].produto + '</option>;'
        produtoComissao.innerHTML += '<option value="' + data[i].produto + '">' + data[i].produto + '</option>;'
      }
    })

  fetch("http://172.16.0.197:3000/user/supervisor", requestOptions)
    .then(response => response.json())
    .then(function (data) {
      for (let i = 0; i < data.length; i++) {
        supervisorProposta.innerHTML += '<option value="' + data[i].parceiro + '">' + data[i].parceiro + '</option>;'
      }
    }).catch(error => console.log('error', error));

  fetch("http://172.16.0.197:3000/user/gerente", requestOptions)
    .then(response => response.json().then(function (data) {
      for (let i = 0; i < data.length; i++) {
        gerenteProposta.innerHTML += '<option value="' + data[i].gerente + '">' + data[i].gerente + '</option>;'
      }
    })).catch(error => console.log('error', error));

    fetch("http://localhost:3000/user/proposta/substatus", requestOptions)
    .then(response => response.json().then(function (data) {
      for (let i = 0; i < data.length; i++) {
        subStatus.innerHTML += '<option value="' + data[i].sub_status + '">' + data[i].sub_status + '</option>;'
      }
    })).catch(error => console.log('error', error));

}

filtros.addEventListener('click', () => {
  // VARS
  let usuario = document.getElementById("validationUsuario").value;
  let tipoUsuario = document.getElementById("selectTipoUsuario").value;
  let proposta = document.getElementById("proposta").value;
  let statusProposta = document.getElementById("statusProposta").value;
  let tipo = document.getElementById("tipo").value;
  let cpfFiltro = document.getElementById("cpfFiltro").value;
  let empresaPropostas = document.getElementById("empresaPropostas").value;
  let mes = document.getElementById('exampleFormControlSelectMes').value;
  let previsaoSaldo = document.getElementById("previsaoSaldo").value;
  let novaProposta = document.getElementById("novaProposta").value
  let bancoPortabilidade = document.getElementById("bancoPortabilidade").value;
  let ordenar = document.getElementById("ordenar").value;
  let dataCadastro = document.getElementById('dataCadastro').value;
  let dataAtualizacao = document.getElementById('dataAtualizacao').value;
  let correntista = document.getElementById("correntista").value;
  let sub_status = document.getElementById("sub-status").value;
  let classificacao = document.getElementById("classificacao").value;
  let situacaoStatus = document.getElementById('situacaoStatus').value;
  let convenioMaster = document.getElementById("convenioMaster").value;
  let faseStatus = document.getElementById("faseStatus").value;
  let banco = document.getElementById("banco").value;
  let produto = document.getElementById("exampleFormProduto").value;
  let class2 = document.getElementById("class2").value;
  let user_master = document.getElementById("user_master").value;
  let supervisorProposta = document.getElementById("supervisorProposta").value;
  let produtoMaster = document.getElementById('produtoMaster').value;
  let gerenteProposta = document.getElementById("gerenteProposta").value;
  let tipoUsuarioMaster = document.getElementById("tipoUsuarioMaster").value;
  let dataDeCorte = document.getElementById("dataDeCorte").value;
  let empresaSMS = document.getElementById("empresaSMS").value;
  let convenio = document.getElementById("convenio").value;
  let vinculo = document.getElementById("vinculo").value
  let horarioAgendamento = document.getElementById("horarioAgendamento").value;
  let validadeContrato = document.getElementById("validadeContrato").value;
  let etapaSMS = document.getElementById("etapaSMS").value;
  let bancoMaster = document.getElementById("bancoMaster").value;


  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json")

  let tipo_usuario = sessionStorage.getItem('tipo_parceiro2', 'tipo_parceiro2');
  let cnpj_matr = sessionStorage.getItem('cnpj_matriz', 'cnpj_matriz');
  let perfil = sessionStorage.getItem('perfil', 'perfil');
  let nome = sessionStorage.getItem('nome', 'nome');

  var raw = JSON.stringify({
    cnpj_matriz: cnpj_matr,
    tipo_usuario: tipo_usuario,
    perfil: perfil,
    nome: nome,
    parceiro: "",
    tipo_parceiro: "",
    proposta: "",
    status: "CANCELADO",
    tipo: "",
    cpf: "",
    empresa: "",
    mês: "",
    previsao_retorno: "",
    novo_proposta: "",
    banco: "",
    data_envio: "",
    data_atualizacao: "",
    correntista: "",
    sub_estatus: "",
    situacao: "",
    master: "",
    tipo_fase: "",
    banco_origi: "",
    propduto: "",
    classificacao: "",
    usuario_master: "",
    supervisor: "",
    sms: "",
    gerente: "",
    tipo_parceiro2: "",
    data_corte: "",
    empresa_sms: "",
    convenio: "20991 - INSS",
    data_vinculo: "",
    horario: "",
    validade_contrato: "",
    etapa_sms: "",
    tipo_banco: ""
  })


  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  }

  fetch("http://172.16.0.197:3000/user/proposta/filtro", requestOptions).
  then(response => response.json()).
  then(function (data) {

    for (const value of data) {

      let specific_tbody = document.getElementById('list');
      let row = specific_tbody.insertRow(-1);
      let proposta = row.insertCell(-1);
      let nome = row.insertCell(-1);
      let cpf = row.insertCell(-1);
      let data_cadastro = row.insertCell(-1);
      let parceiro = row.insertCell(-1);
      let valor_entregue = row.insertCell(-1);
      let valor_troco = row.insertCell(-1);
      let convenio = row.insertCell(-1);
      let banco = row.insertCell(-1);
      let produto = row.insertCell(-1);
      let tipo = row.insertCell(-1);
      let status = row.insertCell(-1);
      let substatus = row.insertCell(-1);
      let data_atualizacao = row.insertCell(-1);
      let qtd_consulta_robo = row.insertCell(-1);
      let log_alteracao = row.insertCell(-1);
      let previsao_saldo = row.insertCell(-1);
      let api_sim = row.insertCell(-1);
      let gravacao = row.insertCell(-1);
      let telefoneconstanotfc = row.insertCell(-1);
      let anexos = row.insertCell(-1);
      let alteraVisualiza = row.insertCell(-1);


      let propostaText = document.createTextNode(`${value.proposta}`);
      proposta.appendChild(propostaText);
      let nomeText = document.createTextNode(`${value.nome}`);
      nome.appendChild(nomeText);
      let cpfText = document.createTextNode(`${value.cpf}`);
      cpf.appendChild(cpfText);
      let data_cadastroText = document.createTextNode(`${value.data_envio}`);
      data_cadastro.appendChild(data_cadastroText);
      let parceiroText = document.createTextNode(`${value.parceiro}`);
      parceiro.appendChild(parceiroText);
      let valor_entregueText = document.createTextNode(`${value.entregue}`);
      valor_entregue.appendChild(valor_entregueText);
      let valor_trocoText = document.createTextNode(`${value.valor_troco}`);
      valor_troco.appendChild(valor_trocoText);
      let convenioText = document.createTextNode(`${value.convenio}`);
      convenio.appendChild(convenioText);
      let bancoText = document.createTextNode(`${value.banco}`);
      banco.appendChild(bancoText);
      let produtoText = document.createTextNode(`${value.produto}`);
      produto.appendChild(produtoText);
      let tipoText = document.createTextNode(`${value.tipo}`);
      tipo.appendChild(tipoText);
      let statusText = document.createTextNode(`${value.status}`);
      status.appendChild(statusText);
      let substatusText = document.createTextNode(`${value.sub_status}`);
      substatus.appendChild(substatusText);
      let data_atualizacaoText = document.createTextNode(`${value.data_atualizacao}`);
      data_atualizacao.appendChild(data_atualizacaoText);
      let qtd_consulta_roboText = document.createTextNode(`${value.qtd_robo}`);
      qtd_consulta_robo.appendChild(qtd_consulta_roboText);
      let log_alteracaoText = document.createTextNode(`${value.data_log1}`);
      log_alteracao.appendChild(log_alteracaoText);
      let previsao_saldoText = document.createTextNode(`${value.previsao_retorno}`);
      previsao_saldo.appendChild(previsao_saldoText);
      let api_simText = document.createTextNode(`${value.id_sim}`);
      api_sim.appendChild(api_simText);
      let gravacaoText = document.createTextNode(`${value.gravacao}`);
      gravacao.appendChild(gravacaoText);
      let telefoneconstanotfcText = document.createTextNode(`${value.tfc}`);
      telefoneconstanotfc.appendChild(telefoneconstanotfcText);



      anexos.innerHTML = `<td id="" class="text-right" style="text-align: center;">
                             <div class="actions ml-3" style="text-align: center;">
                              <a href="#" class="action-item mr-2 " data-toggle="modal" data-target=".modalteladecadastro" title="Alterar">
                                <i class="fas fa-download"></i>
                              </a>
                             </div>
                           </td>`;

      alteraVisualiza.innerHTML = ` <div class="actions ml-3" style="text-align: center;">
                              <a href="#" class="action-item mr-2 " data-toggle="modal" data-target=".modal-filtroproposta" title="Alterar">
                                  <i class="fas fa-external-link-alt"></i>
                              </a>
                              <a href="#" class="action-item mr-2" data-toggle="modal" data-target=".modal-filtroproposta" title="Visualizar">
                                  <i class="fas fa-eye"></i>
                              </a>
                          </div>`;

    }
  }).catch(error => console.log('error', error))

})