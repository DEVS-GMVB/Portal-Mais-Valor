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


//inputs filtro proposta
const usuarioFiltro = document.getElementById("usuario-filtro");
const tipoUsuarioFiltro = document.getElementById("usuario-filtro");
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





const changeInserir = document.getElementById("changeInsert");


changeInserir.addEventListener('click', () => {
  quebraReferenciaModaisProxy.trocaButtonInsert();
  quebraReferenciaModaisProxy.limparCampos();
  desbloqueiaCampos();

  const idTrocar = document.getElementById("id-trocar")

  if (idTrocar.children[0].id === "incluir-button") {
    const botaoIncluir = document.getElementById('incluir-button');

    botaoIncluir.addEventListener('click', () => {

      const body = {
        // parceiro, id_acesso, supervisor, gerente, tipo_parceiro, 
        parceiro: dataSession.nome,
        id_acesso: dataSession.id_acesso,
        supervisor: dataSession.gerente,
        gerente: dataSession.supervisor,
        proposta: numeroProposta.value,
        data_envio: dataCadastroIncluir.value,
        banco: banco.value,
        banco_origi: banco.value,
        status: status.value,
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
        cpf_supervisor: dataSession.supervisor_cpf,
        cpf_gerente: dataSession.gerente_cpf,
        cpf_parceiro: dataSession.cpf_user,
        data_inclusao: dateNow.date()
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

          // console.log(data);
          var codigo = data.codigo;
          console.log(codigo)

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

        }).catch(error => console.log('error', error))

      $('#success').show();
      $('#success').fadeIn(300).delay(3000).fadeOut(400);
      document.getElementById("success").textContent = "Proposta incluida com sucesso"
    })

    return;
  }

  throw new Error("Erro no Fluxo do usuário")


})

//envio de requisição de inclusao de proposta


//////modal filtro