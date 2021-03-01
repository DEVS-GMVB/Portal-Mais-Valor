
const URL = `https://api-portalmaisvalor.herokuapp.com`;


let filtros = document.getElementById("filtrosPes");
let empresaProposta = document.getElementById("empresaPropostas");
let bancoPortado = document.getElementById('exampleFormBP');
let banc = document.getElementById("bancoPortabilidade");
let prod = document.getElementById("exampleProduto")
let produtoComissao = document.getElementById("exampleFormProduto");
let supervisorProposta = document.getElementById("supervisorProposta");
let gerenteProposta = document.getElementById("gerenteProposta")
let bancco = document.getElementById("banco");
let sub_status = document.getElementById("sub-status")

//Nova proposta
// let numeroPrp = document.getElementById('validationNprop')
let dtCadastro = document.getElementById('validationDtCad')
let bancoo = document.getElementById('examploBanco')
//let produtoo = document.getElementById('exampleProduto')
//let tpOperacao = document.getElementById('tipoOperacao')



window.onload = function () {


  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch(URL + "/user/proposta/empresas", requestOptions)
    .then(response => response.json().then(function (data) {
      for (let i = 0; i < data.length; i++) {
        empresaProposta.innerHTML += '<option value="' + data[i].empresa + '">' + data[i].empresa + '</option>;'
      }
    })).catch(error => console.log('error', error));

  fetch(URL + "/user/proposta/tipo", requestOptions)
    .then(response => response.json())
    .then(function (data) {
      for (let i = 0; i < data.length; i++) {
        tipoOperacao.innerHTML += '<option value="' + data[i].tipo + '">' + data[i].tipo + '</option>;'
      }
    })

  fetch(URL + "/user/proposta/bancos", requestOptions)
    .then(response => response.json())
    .then(function (data) {
      for (let i = 0; i < data.length; i++) {
        bancoPortado.innerHTML += '<option value="' + data[i].banco + '">' + data[i].banco + '</option>;'
        banc.innerHTML += '<option value="' + data[i].banco + '">' + data[i].banco + '</option>;'
        bancoo.innerHTML += '<option value="' + data[i].banco + '">' + data[i].banco + '</option>;'
        bancco.innerHTML += '<option value="' + data[i].banco + '">' + data[i].banco + '</option>;'

      }
    })

  fetch(URL + "/user/proposta/produto", requestOptions)
    .then(response => response.json())
    .then(function (data) {
      for (let i = 0; i < data.length; i++) {
        prod.innerHTML += '<option value="' + data[i].produto + '">' + data[i].produto + '</option>;'
        produtoComissao.innerHTML += '<option value="' + data[i].produto + '">' + data[i].produto + '</option>;'
      }
    })

  fetch(URL + "/user/supervisor", requestOptions)
    .then(response => response.json())
    .then(function (data) {
      for (let i = 0; i < data.length; i++) {
        supervisorProposta.innerHTML += '<option value="' + data[i].parceiro + '">' + data[i].parceiro + '</option>;'
      }
    }).catch(error => console.log('error', error));

  fetch(URL + "/user/gerente", requestOptions)
    .then(response => response.json().then(function (data) {
      for (let i = 0; i < data.length; i++) {
        gerenteProposta.innerHTML += '<option value="' + data[i].gerente + '">' + data[i].gerente + '</option>;'
      }
    })).catch(error => console.log('error', error));

    

  fetch(URL+"/user/proposta/filtro", requestOptions) //pegar esse id acesso do login get session storage
    .then(response => response.json())
    .then(result => {

      for (const value of result) {

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

}

filtros.addEventListener('click', () => {
  // VARS
  let usuario = document.getElementById("usuario-filtro").value;
  let tipoUsuario = document.getElementById("tipo-usuario-filtro").value;
  let proposta = document.getElementById("proposta-filtro").value;
  let statusProposta = document.getElementById("status-filtro").value;
  let tipo = document.getElementById("tipo-filtro").value;
  let cpfFiltro = document.getElementById("cpf-filtro").value;
  let empresaPropostas = document.getElementById("empresa-filtro").value;
  let mes = document.getElementById('mes-filtro').value;
  let previsaoSaldo = document.getElementById("previsao-saldo-filtro").value;
  let novaProposta = document.getElementById("nova-proposta-filtro").value
  let bancoPortabilidade = document.getElementById("banco-portabilidade-filtro").value;
  // let ordenar = document.getElementById("ordenar").value;
  let dataCadastro = document.getElementById('data-cadastro-filtro').value;
  let dataAtualizacao = document.getElementById('data-atualizacao-filtro').value;
  let correntista = document.getElementById("correntista-filtro").value;
  let sub_status = document.getElementById("substatus-filtro").value;
  let classificacao = document.getElementById("classicacao-filtro").value;
  let situacaoStatus = document.getElementById('situacao-filtro').value;
  let convenioMaster = document.getElementById("convenio-master-filtro").value;
  let faseStatus = document.getElementById("fase-status-filtro").value;
  let banco = document.getElementById("banco-filtro").value;
  let produto = document.getElementById("produto-filtro").value;
  let class2 = document.getElementById("classicacao-filtro").value;
  let user_master = document.getElementById("usuario-master-filtro").value;
  let supervisorProposta = document.getElementById("supervisor-filtro").value;
  let produtoMaster = document.getElementById('produto-master-filtro').value;
  let gerenteProposta = document.getElementById("gerente-filtro").value;
  let tipoUsuarioMaster = document.getElementById("tipo-usuario-master-filtro").value;
  let dataDeCorte = document.getElementById("data-corte-filtro").value;
  let empresaSMS = document.getElementById("empresa-sms-filtro").value;
  let convenio = document.getElementById("convenio-filtro").value;
  let vinculo = document.getElementById("vinculo-filtro").value
  let horarioAgendamento = document.getElementById("horario-agendamento-filtro").value;
  let validadeContrato = document.getElementById("validade-contrato-filtro").value;
  let etapaSMS = document.getElementById("etapa-sms-filtro").value;
  let bancoMaster = document.getElementById("banco-master-filtro").value;


  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json")

  // let cnpj_matriz = 
  var raw = JSON.stringify({
    cnpj_matriz:" ",
    tipo_usuario:"PARCEIRO",
    perfil:"MATRIZ",  
    nome:"GERENTEMEI FERNANDO BRUNO",
    parceiro:"",
    tipo_parceiro:"",
    proposta:"",
    status:"CANCELADO",
    tipo:"",
    cpf:"",
    empresa:"",
    mês:"",
    previsao_retorno:"",
    novo_proposta:"",
    banco:"",
    data_envio:"",
    data_atualizacao:"",
    correntista:"",
    sub_estatus:"",
    situacao:"",
    master:"",
    tipo_fase:"",
    banco_origi:"",
    propduto:"",
    classificacao:"",
    usuario_master:"",
    supervisor:"",
    sms:"",
    gerente:"",
    tipo_parceiro2:"",
    data_corte:"",
    empresa_sms:"",
    convenio:"20991 - INSS",
    data_vinculo:"",
    horario:"",
    validade_contrato:"",
    etapa_sms:"",
    tipo_banco:""
  }) 

  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  }

  fetch(url+"/user/proposta/filtro", requestOptions).
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


// const buttonIncluir = document.getElementById("button-incluir");

// buttonIncluir.addEventListener('click', () => {
//   console.log('pogou');
// })









const numeroPrp = document.getElementById('numero-proposta-incluir');
// const dtCadastro = document.getElementById('validationDtCadastro');
// const mesReferencia = document.getElementById('validationMesReferencia');
// const numeroRefinPortabilidade = document.getElementById('validationNRefinPort');
// const tipoOperacao = document.getElementById('exampleFormTipoOperacao');
// const valorEntregue = document.getElementById('validationCustomVE');
// const valorTroco = document.getElementById('validationCustomVT');
// const valorParcela = document.getElementById('validationCustomVP');
// const quantidadeParcela = document.getElementById('validationCustomQT');
// const previsaoSaldo = document.getElementById('validationCustomPS');
// const portabilidade = document.getElementById('validationCustomP');
// const retornoCip = document.getElementById('exampleFormRC');
// const bancoPortador = document.getElementById('exampleFormBP');
// const dataCorte = document.getElementById('validationCustomDC');
// const salario = document.getElementById('validationCustomSV');
// const margemNegativa = document.getElementById('validationCustomMN');
// const numeroChamado = document.getElementById('validationCustomNC');
// const chamadoResolvido = document.getElementById('exampleFormCR');
// const banco = document.getElementById('exampleFormB');
// const produto = document.getElementById('exampleFormP');
// const vendaSms = document.getElementById('exampleFormVS');
// const auditoriaSms = document.getElementById('exampleFormAS');
// const motivoNewSpace = document.getElementById('validationCustomMNS');
// const dataAtualizacaoNewSpace = document.getElementById('validationCustoDANS');
// const nomeCliente = document.getElementById('validationNC');
// const cpfCliente = document.getElementById('validationCustomCpf');
// const ddd = document.getElementById('validationCustomDDD');
// const telefoneCliente = document.getElementById('validationCustomTC');
// const genero = document.getElementById('exampleFormG');
// const sexo = document.getElementById('exampleFormS');
// const telefoneConfirmacao = document.getElementById('validationCustomTelC');
// const novoConotatoInformado = document.getElementById('validationCustomNCI');
// const matricula = document.getElementById('validationCustomM');
// const dataNascimento = document.getElementById('validationCustomDN');
// const ufNaturalidade = document.getElementById('validationCustomUN');
// const naturalidade = document.getElementById('validationCustomN');
// const rg = document.getElementById('validationCustomRG');
// const dataEmissaoRg = document.getElementById('validationCustomDER');
// const orgaoExpeditor = document.getElementById('validationCustomOE');
// const nomePai = document.getElementById('validationCustomNomeP');
// const nomeMae = document.getElementById('validationCustomNM');
// const dataAdmissao = document.getElementById('validationCustomDA');
// const ufEndereco = document.getElementById('validationCustomUE');
// const cidadeEndereco = document.getElementById('validationCustomCE');
// const cep = document.getElementById('validationCustomC');
// const endereco = document.getElementById('validationCustomE');
// const bairro = document.getElementById('validationCustomB');
// const numeroEndereco = document.getElementById('validationCustomNE');
// const complemento  = document.getElementById('validationCustomComp');
// const tipoDecontaCliente  = document.getElementById('exampleFormTCC');
// const bancoCliente = document.getElementById('validationCustomBC');
// const agenciaCliente = document.getElementById('validationCustomAgeC');
// const contaCliente  = document.getElementById('validationCustomCC');
// const digitoConta  = document.getElementById('validationCustomDigC');
// const correntista = document.getElementById('exampleFormC');
// const telefoneSmsCliente = document.getElementById('validationCustomTSC');
// const estadoCivil = document.getElementById('validationCustomEC');
// const conjuge= document.getElementById('validationCustomConj');
// const telefoneProcedente = document.getElementById('exampleFormTP');
// const sistemaTelefone = document.getElementById('exampleFormST');
// const telefoneCompconsto = document.getElementById('validationCustomTelCom');
// const digitado = document.getElementById('exampleFormD');
// const generoCliente = document.getElementById('validationCustomGDC');
// const email = document.getElementById('validationCustomE');
// const solicitouAgendamento = document.getElementById('validationCustomSA');
// const melhorDataConfirmacao= document.getElementById('validationCustomMDCC');
// const melhorHorarioConfirmacao = document.getElementById('exampleFormMHCC');