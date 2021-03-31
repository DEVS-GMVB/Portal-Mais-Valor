//const URL = `http://localhost:3000`;
const filtros = document.getElementById("button-filtro");
let empresaProposta = document.getElementById("empresaPropostas");
let bancoPortado = document.getElementById('exampleFormBP');
let banc = document.getElementById("bancoPortabilidade");
let prod = document.getElementById("exampleProduto")
let produtoComissao = document.getElementById("exampleFormProduto");
let supervisorProposta = document.getElementById("supervisor-filtro");
let gerenteProposta = document.getElementById("gerente-filtro")
let bancco = document.getElementById("banco");
let sub_status = document.getElementById("substatus-filtro");
const buttonTrocar = document.getElementById("id-trocar");

//PARTE DE CIMA DO CÓDIGO


//Dados na sessão
const dataSession = {
  id_acesso: sessionStorage.getItem('id_acesso', 'id_acesso'),
  status: sessionStorage.getItem('status', 'status'),
  perfil: sessionStorage.getItem('perfil', 'perfil'),
  nome: sessionStorage.getItem('nome', 'nome'),
  supervisor: sessionStorage.getItem('supervisor', 'supervisor'),
  gerente: sessionStorage.getItem('gerente', 'gerente'),
  cnpj_matr: sessionStorage.getItem('cnpj_matriz', 'cnpj_matriz'),
  cpf_user: sessionStorage.getItem('cpf_usuario', 'cpf_usuario'),
  tipo_usuario: sessionStorage.getItem('tipo_usuario', 'tipo_usuario'),
  supervisor_cpf: sessionStorage.getItem('supervisor_cpf', 'supervisor_cpf'),
  gerente_cpf: sessionStorage.getItem('gerente_cpf', 'gerente_cpf')
}

// Data de Agora 
const dateNow = {
  date: () => {
      let date = new Date();
      let dateNow = `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      return dateNow;
  }
}

//Hasmap
const modal = new Map();


//Nova proposta
let dtCadastro = document.getElementById('validationDtCad')
let bancoo = document.getElementById('examploBanco')


let requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://localhost:3000/user/supervisor", requestOptions)
  .then(response => response.json())
  .then(function (data) {
    for (let i = 0; i < data.length; i++) {
      supervisorProposta.innerHTML += '<option value="' + data[i].parceiro + '">' + data[i].parceiro + '</option>;'
    }
  }).catch(error => console.log('error', error));

fetch("http://localhost:3000/user/gerente", requestOptions)
  .then(response => response.json().then(function (data) {
    for (let i = 0; i < data.length; i++) {
      gerenteProposta.innerHTML += '<option value="' + data[i].gerente + '">' + data[i].gerente + '</option>;'
    }
  })).catch(error => console.log('error', error));

window.onload = function () {


  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
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

  // fetch(URL + "/user/proposta/substatus", requestOptions)
  //   .then(response => response.json().then(function (data) {
  //     for (let i = 0; i < data.length; i++) {
  //       sub_status.innerHTML += '<option value="' + data[i].sub_status + '">' + data[i].sub_status + '</option>;'
  //     }
  //   })).catch(error => console.log('error', error))

}

filtros.addEventListener('click', () => {
  // VARS
  const usuario = document.getElementById("usuario-filtro").value;
  const tipoUsuario = document.getElementById("tipo-usuario-filtro").value;
  const proposta = document.getElementById("proposta-filtro").value;
  const statusProposta = document.getElementById("status-filtro").value;
  const tipo = document.getElementById("tipo-filtro").value;
  const cpfFiltro = document.getElementById("cpf-filtro").value;
  const empresaPropostas = document.getElementById("empresa-filtro").value;
  const mes = document.getElementById('mes-filtro').value;
  const previsaoSaldo = document.getElementById("previsao-saldo-filtro").value;
  const novaProposta = document.getElementById("nova-proposta-filtro").value
  const bancoPortabilidade = document.getElementById("banco-portabilidade-filtro").value;
  const dataCadastro = document.getElementById('data-cadastro-filtro').value;
  const dataAtualizacao = document.getElementById('data-atualizacao-filtro').value;
  const correntista = document.getElementById("correntista-filtro").value;
  const sub_status = document.getElementById("substatus-filtro").value;
  const classificacao = document.getElementById("classicacao-filtro").value;
  const situacaoStatus = document.getElementById('situacao-filtro').value;
  const faseStatus = document.getElementById("fase-status-filtro").value;
  const banco = document.getElementById("banco-filtro").value;
  const produto = document.getElementById("produto-filtro").value;
  const user_master = document.getElementById("usuario-master-filtro").value;
  const supervisorProposta = document.getElementById("supervisor-filtro").value;
  const gerenteProposta = document.getElementById("gerente-filtro").value;
  const tipoUsuarioMaster = document.getElementById("tipo-usuario-master-filtro").value;
  const dataDeCorte = document.getElementById("data-corte-filtro").value;
  const empresaSMS = document.getElementById("empresa-sms-filtro").value;
  const convenio = document.getElementById("convenio-filtro").value;
  const vinculo = document.getElementById("vinculo-filtro").value
  const horarioAgendamento = document.getElementById("horario-agendamento-filtro").value;
  const validadeContrato = document.getElementById("validade-contrato-filtro").value;
  const etapaSMS = document.getElementById("etapa-sms-filtro").value;
  const bancoMaster = document.getElementById("banco-master-filtro").value;

  //Session
  const tipo_usuario = sessionStorage.getItem('tipo_usuario', 'tipo_usuario');
  const cnpj_matr = sessionStorage.getItem('cnpj_matriz', 'cnpj_matriz');
  const perfil = sessionStorage.getItem('perfil', 'perfil');
  const nome = sessionStorage.getItem('nome', 'nome');
  const tipo_parceiro2 = sessionStorage.getItem("tipo_parceiro2", "tipo_parceiro2");


  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json")


  const raw = JSON.stringify({
    cnpj_matriz: cnpj_matr,
    tipo_usuario: tipo_usuario,
    perfil: perfil,
    nome: nome,
    parceiro: usuario,
    tipo_parceiro: tipoUsuario,
    proposta: proposta,
    status: statusProposta,
    tipo: tipo,
    cpf: cpfFiltro,
    empresa: empresaPropostas,
    mês: mes,
    previsao_retorno: previsaoSaldo,
    novo_proposta: novaProposta,
    banco: banco,
    data_envio: dataCadastro,
    data_atualizacao: dataAtualizacao,
    correntista: correntista,
    sub_estatus: sub_status,
    situacao: situacaoStatus,
    master: user_master,
    tipo_fase: faseStatus,
    banco_origi: bancoPortabilidade,
    propduto: produto,
    classificacao: classificacao,
    usuario_master: tipoUsuarioMaster,
    supervisor: supervisorProposta,
    sms: etapaSMS,
    gerente: gerenteProposta,
    tipo_parceiro2: tipo_parceiro2,
    data_corte: dataDeCorte,
    empresa_sms: empresaSMS,
    convenio: convenio,
    data_vinculo: vinculo,
    horario: horarioAgendamento,
    validade_contrato: validadeContrato,
    etapa_sms: etapaSMS,
    tipo_banco: bancoMaster
  })


  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  }

  fetch(URL + "/user/proposta/filtro", requestOptions).
  then(response => response.json()).
  then(function (data) {

    //HashMap estrutura de dados
    for (let i = 0; i < data.length; i++) {

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


      let propostaText = document.createTextNode(`${data[i].proposta}`);
      proposta.appendChild(propostaText);
      let nomeText = document.createTextNode(`${data[i].nome}`);
      nome.appendChild(nomeText);
      let cpfText = document.createTextNode(`${data[i].cpf}`);
      cpf.appendChild(cpfText);
      let data_cadastroText = document.createTextNode(`${data[i].data_envio}`);
      data_cadastro.appendChild(data_cadastroText);
      let parceiroText = document.createTextNode(`${data[i].parceiro}`);
      parceiro.appendChild(parceiroText);
      let valor_entregueText = document.createTextNode(`${data[i].entregue}`);
      valor_entregue.appendChild(valor_entregueText);
      let valor_trocoText = document.createTextNode(`${data[i].valor_troco}`);
      valor_troco.appendChild(valor_trocoText);
      let convenioText = document.createTextNode(`${data[i].convenio}`);
      convenio.appendChild(convenioText);
      let bancoText = document.createTextNode(`${data[i].banco}`);
      banco.appendChild(bancoText);
      let produtoText = document.createTextNode(`${data[i].produto}`);
      produto.appendChild(produtoText);
      let tipoText = document.createTextNode(`${data[i].tipo}`);
      tipo.appendChild(tipoText);
      let statusText = document.createTextNode(`${data[i].status}`);
      status.appendChild(statusText);
      let substatusText = document.createTextNode(`${data[i].sub_status}`);
      substatus.appendChild(substatusText);
      let data_atualizacaoText = document.createTextNode(`${data[i].data_atualizacao}`);
      data_atualizacao.appendChild(data_atualizacaoText);
      let qtd_consulta_roboText = document.createTextNode(`${data[i].qtd_robo}`);
      qtd_consulta_robo.appendChild(qtd_consulta_roboText);
      let log_alteracaoText = document.createTextNode(`${data[i].data_log1}`);
      log_alteracao.appendChild(log_alteracaoText);
      let previsao_saldoText = document.createTextNode(`${data[i].previsao_retorno}`);
      previsao_saldo.appendChild(previsao_saldoText);
      let api_simText = document.createTextNode(`${data[i].id_sim}`);
      api_sim.appendChild(api_simText);
      let gravacaoText = document.createTextNode(`${data[i].gravacao}`);
      gravacao.appendChild(gravacaoText);
      let telefoneconstanotfcText = document.createTextNode(`${data[i].tfc}`);
      telefoneconstanotfc.appendChild(telefoneconstanotfcText);

      //Passando minha proposta neste escopo
      modal.set(data[i].codigo, data[i])

      anexos.innerHTML = `<td id="" class="text-right" style="text-align: center;">
                             <div class="actions ml-3" style="text-align: center;">
                              <a href="#" class="action-item mr-2 " data-toggle="modal" data-target=".modalteladecadastro" title="Alterar" >
                                <i class="fas fa-download"></i>
                              </a>
                             </div>
                           </td>`;

      alteraVisualiza.innerHTML = ` <div class="actions ml-3" style="text-align: center;">
                              <a href="#" class="action-item mr-2 " data-toggle="modal" data-target=".modal-incluirproposta-parc" title="Alterar" onclick="preencherModal(modal.get(${data[i].codigo}))">
                                  <i class="fas fa-external-link-alt"></i>
                              </a>
                              <a href="#" class="action-item mr-2" data-toggle="modal" data-target=".modal-filtroproposta" title="Visualizar">
                                  <i class="fas fa-eye"></i>
                              </a>
                          </div>`;

    }
  }).catch(error => console.log('error', error))
})

const quebraReferenciaModais = {
  limparCampos: () => {
    $(".needs-validation").each(function () {
      this.reset();
    })

    $("#observacao-incluir").val("");
  },

  trocaButtonUpdate: (value) => {

    buttonTrocar.innerHTML = `
    <button type="button" class="btn btn-primary btn-icon-label" id="update-button" onclick="updatePropostas(modal.get(${value.codigo}))">
      <span class="btn-inner--icon">
          <i class="fas fa-plus"></i>
      </span>
      <span class="btn-inner--text">Alterar</span>
    </button>
    `
  },

  trocaButtonInsert: () => {

    buttonTrocar.innerHTML = `
    <button type="button" class="btn btn-primary btn-icon-label" id="incluir-button">
      <span class="btn-inner--icon">
          <i class="fas fa-plus"></i>
      </span>
      <span class="btn-inner--text">Incluir</span>
    </button>
    `
  },

  popupaCamposModal: (value) => {
    console.log(value)

    $("#numero-proposta-incluir").val(value.proposta);
    $("#data-cadastro-incluir").val(value.data_envio)
    $("#banco-incluir").val(value.banco);
    $("#status-inclir").val(value.status);
    $("#produto-incluir").val(value.produto);
    $("#tipo-operacao-incluir").val(value.tipo);
    $("#valor-entregue-incluir").val(value.entregue);
    $("#valor-troco-incluir").val(value.valor_troco);
    $("#convenio-incluir").val(value.convenio);
    $("#banco-portador-incluir").val(value.banco_origi);
    $("#portabilidade-incluir").val(value.numero_portabilidade);
    $("#valor-parcela-incluir").val(value.valor_parcela);
    $("#seguro-incluir").val(value.seguro);
    $("#parcelas-pagas-incluir").val(value.parcela);
    $("#nome-cliente-incluir").val(value.nome);
    $("#cpf-cliente-incluir").val(value.cpf);
    $("#ddd-incluir").val("");
    $("#telefone-cliente-incluir").val(value.dados_telefonicos);
    $("#correntista-incluir").val(value.correntista);
    $("#telefone-sms-incluir").val("");
    $("#matricula-incluir").val("");
    $("#melhor-data-incluir").val(value.data_envio);
    $("#melhor-horario-incluir").val(value.horario);
    $("#codigo-exercito-incluir").val(value.exercito);
    $("#sexo-incluir").val("");
    $("#data-nascimento-incluir").val(value.data_nascimento);
    $("#email-incluir").val("");
    $("#observacao-incluir").val(value.observacao);
    $("#data-nascimento-incluir").val(value.data_nascimento);
  }

}

const handleQuebraReferenciaModais = {
  get: (target, name) => {
    if (target[name]) {
      return target[name]
    }
    throw new Error(`Propriedade: ${name} não existe`);

  },

  set: (target, name, value) => {
    if (target[name]) {
      target[name] = value;
    }

    throw new Error(`Propriedade: ${name} não existe para receber este valor: ${value}`)
  }
}

const quebraReferenciaModaisProxy = new Proxy(quebraReferenciaModais, handleQuebraReferenciaModais);

function preencherModal(id) {
  //Quebra de Referência quando troca de modal
  quebraReferenciaModaisProxy.limparCampos();
  quebraReferenciaModaisProxy.trocaButtonUpdate(id);
  quebraReferenciaModaisProxy.popupaCamposModal(id);

}

function updatePropostas(value) {
  console.log(value.codigo);

  const numeroProposta = document.getElementById('numero-proposta-incluir');
  const dataCadastroIncluir = document.getElementById('data-cadastro-incluir');
  const banco = document.getElementById('banco-incluir');
  const status = document.getElementById('status-inclir');
  const produto = document.getElementById('produto-incluir');
  const tipoOperacao = document.getElementById('tipo-operacao-incluir');
  const valorEntregue = document.getElementById('valor-entregue-incluir');
  const valorTroco = document.getElementById('valor-troco-incluir');
  const convenio = document.getElementById('convenio-incluir');
  const bancoPortador = document.getElementById('banco-portador-incluir');
  const portabilidade = document.getElementById('portabilidade-incluir');
  const valorParcela = document.getElementById('valor-parcela-incluir');
  const seguro = document.getElementById('seguro-incluir');
  const parcelasPagas = document.getElementById('parcelas-pagas-incluir');
  const nomeCliente = document.getElementById('nome-cliente-incluir');
  const cpfCliente = document.getElementById('cpf-cliente-incluir');
  const ddd = document.getElementById('ddd-incluir');
  const telefoneCliente = document.getElementById('telefone-cliente-incluir');
  const correntista = document.getElementById('correntista-incluir');
  const telefoneSmsCliente = document.getElementById('telefone-sms-incluir');
  const matricula = document.getElementById('matricula-incluir');
  const desejaAgendarHorario = document.getElementById('agendar-horario-confirmacao-incluir');
  const melhorDatata = document.getElementById('melhor-data-incluir');
  const melhorHorario = document.getElementById('melhor-horario-incluir');
  const exercitoTemporario = document.getElementById('exercito-temporario-incluir');
  const codigoExercito = document.getElementById('codigo-exercito-incluir');
  const sexo = document.getElementById('sexo-incluir');
  const dataNascimento = document.getElementById('data-nascimento-incluir');
  const email = document.getElementById('email-incluir');
  const uf = document.getElementById('uf-incluir');
  const observacao = document.getElementById('observacao-incluir');

  const body = {
    // parceiro, id_acesso, supervisor, gerente, tipo_parceiro,
    codigo: value.codigo,
    // parceiro: sessionStorage.getItem('nome', 'nome'),
    proposta: numeroProposta.value,
    data_envio: dataCadastroIncluir.value,
    banco: banco.value,
    // status:status.value,
    produto: produto.value,
    tipo: tipoOperacao.value,
    entregue: valorEntregue.value,
    valor_troco: valorTroco.value,
    convenio: convenio.value,
    banco_port1: bancoPortador.value,
    numero_portabilidade: portabilidade.value,
    parcela: valorParcela.value,
    seguro: seguro.value,
    qtdp_pagaport1: parcelasPagas.value,
    nome: nomeCliente.value,
    cpf: cpfCliente.value,
    telefone_ddd_1: ddd.value,
    telefone1: telefoneCliente.value,
    correntista: correntista.value,
    telefone4: telefoneSmsCliente.value,
    matricula: matricula.value,
    agendamento: desejaAgendarHorario.value,
    dia: melhorDatata.value,
    horario: melhorHorario.value,
    exercito: exercitoTemporario.value,
    senha_exercito: codigoExercito.value,
    sexo: sexo.value,
    data_nascimento: dataNascimento.value,
    email_cliente: email.value,
    uf: uf.value,
    responsavel: dataSession.nome,
    data_atualizacao: dateNow.date()
  }

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify(body);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(URL + "/user/proposta/atualizar", requestOptions)
    .then(response => response.json())
    .then(function (data) {

      // console.log(data);
      var codigo = data.codigo;

      var input = document.querySelectorAll('form#files input[type="file"]')

      var data = new FormData()
      input.forEach(file => {
        data.append(file.name, file.files[0])
      });


      fetch(URL + `/user/proposta/inclusao/arquivos?codigo=${codigo}`, {
          method: 'POST',
          body: data
        })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.error(error);
        });

      $('#success').show();
      $('#success').fadeIn(300).delay(3000).fadeOut(400);
      document.getElementById("success").textContent = "Proposta atualizada com sucesso"

    }).catch(error => console.log('error', error))

}

const botao_excel = document.getElementById("planilhaExcel");

botao_excel.addEventListener('click', () => {
  var table2excel = new Table2Excel();
  table2excel.export(document.querySelectorAll("#table"));

})

