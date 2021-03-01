//variavel de ambiente
const URL = `http://localhost:3000`;

//variaveis de sessao
// const parceiro = sessionStorage.getItem('nome', 'nome');
// const tipo_parceiro = sessionStorage.getItem('tipo_parceiro', 'tipo_parceiro');
// const id_acesso = sessionStorage.getItem('id_acesso', 'id_acesso');
const userCnpjMatriz = sessionStorage.getItem('cnpj_matriz', 'cnpj_matriz');
const userDataNascimento = sessionStorage.getItem('data_nascimento', 'data_nascimento');
const userIdAcesso = sessionStorage.getItem('id_acesso', 'id_acesso');
const userNome = sessionStorage.getItem('nome', 'nome');
const userPerfil = sessionStorage.getItem('perfil', 'perfil');
const userStatus = sessionStorage.getItem('status', 'status');
const userTipoUsuario = sessionStorage.getItem('tipo_usuario', 'tipo_usuario');
const userCpf = sessionStorage.getItem('cpf_usuario', 'cpf_usuario');
//**falta incluir na session */
// const supervisor = sessionStorage.getItem() 
// const gerente = sessionStorage.getItem()

//inputs modal Nova proposta
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
const botaoIncluir = document.getElementById('incluir-button');


//inputs filtro proposta
const usuarioFiltro = document.getElementById("usuario-filtro");
const tipoUsuarioFiltro = document.getElementById("tipo-usuario-filtro");
const propostaFiltro = document.getElementById("proposta-filtro");
const statusFiltro = document.getElementById("status-filtro");
const tipoFiltro = document.getElementById("tipo-filtro");
const cpfFiltro = document.getElementById("cpf-filtro");
const empresaFiltro = document.getElementById("empresa-filtro");
const mes = document.getElementById("mes-filtro");
const previsaoSaldoFiltro = document.getElementById("previsao-saldo-filtro");
const novaPropostaFiltro = document.getElementById("nova-proposta-filtro");
const bancoPortabilidadeFiltro = document.getElementById("banco-portabilidade-filtro");
const ordenaFiltro = document.getElementById("ordena-filtro");
const dataCadastroFiltro = document.getElementById("data-cadastro-filtro");
const dataAtulizacaoFiltro = document.getElementById("data-atualizacao-filtro");
const correntistaFiltro = document.getElementById("correntista-filtro");
const substatusFiltros = document.getElementById("substatus-filtro");
const classificacaoFiltro = document.getElementById("classicacao-filtro");
const situacaoFiltro = document.getElementById("situacao-filtro");
const convenioMasterFiltro = document.getElementById("convenio-master-filtro");
const faseStatusFiltro = document.getElementById("fase-status-filtro");
const bancoFiltro = document.getElementById("banco-filtro");
const produtoFiltro = document.getElementById("produto-filtro");
const classicacaoFiltro = document.getElementById("classicacao-filtro");
const usuarioMasterFiltro = document.getElementById("usuario-master-filtro");
const supervisorFiltro = document.getElementById("supervisor-filtro");
const produtoMasterFiltro = document.getElementById("produto-master-filtro");
const gerente = document.getElementById("gerente-filtro");
const tipoUsuarioMasterFiltro = document.getElementById("tipo-usuario-master-filtro");
const dataCorteFiltro = document.getElementById("data-corte-filtro");
const empresaSmsFiltro = document.getElementById("empresa-sms-filtro");
const convenioFiltro = document.getElementById("convenio-filtro");
const vinculoFiltro = document.getElementById("vinculo-filtro");
const horarioAgendamentoFiltro = document.getElementById("horario-agendamento-filtro");
const validadeContratoFiltro = document.getElementById("validade-contrato-filtro");
const etapaSmsFiltro = document.getElementById("etapa-sms-filtro");
const bancoMaster = document.getElementById("banco-master-filtro");

//gets para popular options 

window.onload = function () {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let requestOptions = {
    method: 'GET',
    redirect: 'follow'
  }

  fetch(URL + "/user/proposta/produto", requestOptions)
    .then(response => response.json())
    .then(function (data) {
      data.forEach(element => {
        produto.innerHTML += `<option value =${element.produto}>${element.produto}</option>`;
      });
    })


  fetch(URL + "/user/proposta/tipo", requestOptions)
    .then(response => response.json())
    .then(function (data) {
      data.forEach(element => {
        tipoOperacao.innerHTML += `<option value =${element.tipo}>${element.tipo}</option>`;
      });
    })

  fetch(URL + "/user/proposta/bancos", requestOptions)
    .then(response => response.json())
    .then(function (data) {
      data.forEach(element => {
        bancoPortador.innerHTML += `<option value =${element.banco}>${element.banco}</option>`;
        bancoPortabilidadeFiltro.innerHTML += `<option value =${element.banco}>${element.banco}</option>`;
        bancoFiltro.innerHTML += `<option value =${element.banco}>${element.banco}</option>`;
      });
    })

  fetch(URL + "/user/proposta/empresas", requestOptions)
  .then(response => response.json())
  .then(function (data) {
    data.forEach(element => {
     empresaFiltro.innerHTML += `<option value =${element.empresa}>${element.empresa}</option>`;
    });
  })

  fetch(URL + "/user/proposta/substatus", requestOptions)
  .then(response => response.json())
  .then(function (data) {
    data.forEach(element => {
     substatusFiltros.innerHTML += `<option value =${element.sub_status}>${element.sub_status}</option>`;
    });
  })

  fetch(URL + "/user/proposta/produto", requestOptions)
  .then(response => response.json())
  .then(function (data) {
    data.forEach(element => {
     produtoFiltro.innerHTML += `<option value =${element.produto}>${element.produto}</option>`;
    });
  })


}

//envio de requisição de inclusao de proposta
botaoIncluir.addEventListener('click', () => {

  const body = {
    // parceiro, id_acesso, supervisor, gerente, tipo_parceiro, 
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
    observacao: observacao.value,

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

  fetch(URL + "/user/proposta/inclusao", requestOptions)
    .then(response => response.json())
    .then(function (data) {
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
          // console.log(result);
          if (result){
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `Sua proposta com foi incluida com sucesso!
                      Código da proposta: ${result.codigo} `,
              showConfirmButton: true,
             
            })
          }
        })
        .catch((error) => {
          console.error(error);
        });

    }).catch(error => console.log('error' , error))
})
function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
          $('#proposta-file').attr('src', e.target.result);
      }

      reader.readAsDataURL(input.files[0]);
  }
}



//filtrar propostas
const filtroButton = document.getElementById('button-filtro')

filtroButton.addEventListener('click',()=>{
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json")

  // let cnpj_matriz = 
  var raw = JSON.stringify({
    
    cnpj_matriz: userCnpjMatriz,
    tipo_usuario:userTipoUsuario,
    perfil:userPerfil,  
    nome: userNome,
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

  fetch(URL+"/user/proposta/filtro", requestOptions).
  then(response => response.json()).
  then(function (data) {
    console.log(data)
  
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
      let valor_entregueText = document.createTextNode(`R$ ${value.entregue}`);
      valor_entregue.appendChild(valor_entregueText);
      let valor_trocoText = document.createTextNode(`R$ ${value.valor_troco}`);
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