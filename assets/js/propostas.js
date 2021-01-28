window.onload = function () {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };


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



    anexos.innerHTML=`<td id="" class="text-right" style="text-align: center;">
                               <div class="actions ml-3" style="text-align: center;">
                                <a href="#" class="action-item mr-2 " data-toggle="modal" data-target=".modalteladecadastro" title="Alterar">
                                  <i class="fas fa-download"></i>
                                </a>
                               </div>
                             </td>`;

    alteraVisualiza.innerHTML=` <div class="actions ml-3" style="text-align: center;">
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