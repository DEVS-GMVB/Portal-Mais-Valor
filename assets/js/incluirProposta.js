//variavel de ambiente
const URL = `http://localhost:3000`;

//variaveis de sessao
const parceiro = sessionStorage.getItem('nome', 'nome');
const tipo_parceiro = sessionStorage.getItem('tipo_parceiro', 'tipo_parceiro');
const id_acesso = sessionStorage.getItem('id_acesso', 'id_acesso');
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
          console.log(result);
        })
        .catch((error) => {
          console.error(error);
        });

    }).catch(error => console.log('error' , error))

})