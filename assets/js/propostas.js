let numeroProp = document.getElementById('validationNumeroProp');
let dtCadastro = document.getElementById('validationDtCadastro');
let mesReferencia = document.getElementById('validationMesReferencia');
let nRefinPort = document.getElementById('validationNRefinPort');
let tipoOperacao = document.getElementById('tipoOperacao');
let valorEntregue = document.getElementById('validationCustomVE');
let valorTroco = document.getElementById('validationCustomVT');
let quantidadeParcela = document.getElementById('validationCustomQT');
let previsaoSaldo = document.getElementById('validationCustomPS');
let portabilidade = document.getElementById('validationCustomP');
let retornoCIP = document.getElementById('exampleFormRC');
let bancoPortador = document.getElementById('exampleFormBP');
let dtCorte = document.getElementById('validationCustomDC');
let salarioVencimento = document.getElementById('validationCustomSV');
let margemNegativa = document.getElementById('validationCustomMN');
let numeroChamado = document.getElementById('validationCustomNC');
let chamadoResolvido = document.getElementById('exampleFormCR');
let banco = document.getElementById('exampleFormB');
let produto = document.getElementById('exampleFormP');
let vendaSMS = document.getElementById('exampleFormVS');
let auditoriaSMS = document.getElementById('exampleFormAS');
let acessoCetelem = document.getElementById('validationCustomAC');
let parcelaDescontoCetelem = document.getElementById('validationCustomPDC');
let status = document.getElementById('exampleFormStaus');
let subStatus = document.getElementById('exampleFormSS');
let convenio = document.getElementById('validationCustomC');
let regraConvenio = document.getElementById('validationCustomRC');
let empresaSMS = document.getElementById('exampleFormES');
let especie = document.getElementById('exampleFormE');
let validadeContrato = document.getElementById('validationCustomVC');
let siglaChamado = document.getElementById('validationCustomSC');
let novaProposta = document.getElementById('validationCustomNP');
let telefoneTFC = document.getElementById('exampleFormTT');
let nomePrmoCont = document.getElementById('validationCustomNPC');
let codigoAverbacao = document.getElementById('validationCustomCA');
let senhaExercito = document.getElementById('validationCustomSE');
let pilotoOla = document.getElementById('exampleFormPO');
let seguro = document.getElementById('exampleFormS');
let parcelaPaga = document.getElementById('exampleFormPP');
let agendarHorario = document.getElementById('exampleFormAH');
let exercitoTemporario = document.getElementById('exampleFormET');
let codUniExer = document.getElementById('validationCustomCUE');
let vendaS = document.getElementById('exampleFormVS');
let auditoriaS = document.getElementById('exampleFormASMS');
let MotNewSpace = document.getElementById('validationCustomMNS');
let dtAtNewSpace = document.getElementById('validationCustoDANS');

let nomeCliente = document.getElementById('validationNC');
let cpfCliente = document.getElementById('validationCustomCpf');
let ddd = document.getElementById('validationCustomDDD');
let telefoneCliente = document.getElementById('validationCustomTC');
let genero = document.getElementById('exampleFormG');
let sexo = document.getElementById('exampleFormS');
let telefoneConfirm = document.getElementById('validationCustomTelC');
let nvCttInformado = document.getElementById('validationCustomNCI');
let matricula = document.getElementById('validationCustomM');
let dtNascimento = document.getElementById('validationCustomDN');
let ufNaturalidade = document.getElementById('validationCustomUN');
let naturalidade = document.getElementById('validationCustomN');
let rg = document.getElementById('validationCustomRG');
let dtEmissaoRg = document.getElementById('validationCustomDER');
let orgaoExpedidor = document.getElementById('validationCustomOE');
let nomePai = document.getElementById('validationCustomNomeP');
let nomeMae = document.getElementById('validationCustomNM');
let dtAdmissao = document.getElementById('validationCustomDA');
let ufEndereco = document.getElementById('validationCustomUE');
let cidadeEndereco = document.getElementById('validationCustomCE');
let cep = document.getElementById('validationCustomC');
let endereco = document.getElementById('validationCustomE')
let bairro = document.getElementById('validationCustomB');
let numeroEndereco = document.getElementById('validationCustomNE');
let complemento = document.getElementById('validationCustomComp');
let tipoContaCli = document.getElementById('exampleFormTCC');
let bancoCliente = document.getElementById('validationCustomBC');
let agenciaCliente = document.getElementById('validationCustomAgeC');
let ContaCliente = document.getElementById('validationCustomCC');
let DigitoConta = document.getElementById('validationCustomDigC');
let correntista = document.getElementById('exampleFormC');
let telSMSCliente = document.getElementById('validationCustomTSC');
let estadoCivil = document.getElementById('validationCustomEC');
let conjuge = document.getElementById('validationCustomConj');
let telProcedente = document.getElementById('exampleFormTP');
let sistemaTel = document.getElementById('exampleFormST');
let telCompleto = document.getElementById('validationCustomTelCom');
let digitado = document.getElementById('exampleFormD');
let generoDC = document.getElementById('validationCustomGDC');
let email = document.getElementById('validationCustomE');
let solicitouAg = document.getElementById('validationCustomSA');
let MDConfirmCliente = document.getElementById('validationCustomMDCC');
let MHConfirmCliente = document.getElementById('exampleFormMHCC');
let bancoPortado = document.getElementById("bancoPortador");
let banc = document.getElementById("examploBanco");
let prod = document.getElementById("exampleProduto")

window.onload = function () {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

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

      }
    })

    fetch("http://172.16.0.197:3000/user/proposta/produto", requestOptions)
    .then(response => response.json())
    .then(function (data) {
      for (let i = 0; i < data.length; i++) {
        prod.innerHTML += '<option value="' + data[i].produto + '">' + data[i].produto + '</option>;'
      }
    })


  fetch("http://localhost:3000/user/proposta/parceiro", requestOptions) //pegar esse id acesso do login get session storage
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

    })
    .catch(error => console.log('error', error));

}