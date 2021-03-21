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
                              <a href="#" class="action-item mr-2 " data-toggle="modal" data-target=".modalteladecadastro" title="Alterar" >
                                <i class="fas fa-download"></i>
                              </a>
                             </div>
                           </td>`;

      alteraVisualiza.innerHTML = ` <div class="actions ml-3" style="text-align: center;">
                              <a href="#" class="action-item mr-2 " data-toggle="modal" data-target=".modal-incluirproposta-parc" title="Alterar" onclick="preencherModal()">
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
  },

  trocaButtonUpdate: () => {

    buttonTrocar.innerHTML = `
    <button type="button" class="btn btn-primary btn-icon-label" id="update-button">
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

function preencherModal() {
  //Quebra de Referência quando troca de modal
  quebraReferenciaModaisProxy.limparCampos();
  quebraReferenciaModaisProxy.trocaButtonUpdate();

}

