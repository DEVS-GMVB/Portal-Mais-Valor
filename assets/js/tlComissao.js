

//VARIAVEL AMBIENTE
const url = `https://api-portalmaisvalor.herokuapp.com`;


//INPUTS GLOBAIS
let parceiroPromotor = document.getElementById("exampleParcPromo");
let proposta = document.getElementById("proposta");
let supervisor = document.getElementById("exampleSupervisor");
let gerente = document.getElementById("exampleGerente");
let status = document.getElementById("exampleStatus");
let dtGerente = document.getElementById("exampleDtGerente");
let dtSupervisor = document.getElementById("exampledtSupervisor")
let compPag = document.getElementById("exampleCompPag")
let cpfPromo = document.getElementById("cpfPromo")
let incluirComissao = document.getElementById("incluirComissao")

//VARIAVEIS AUXILIARES
let valorTotal = 0;
let quantidadeTotal =0;

//VARIAVEIS DE SESSAO
    const userCnpjMatriz = sessionStorage.getItem('cnpj_matriz', 'cnpj_matriz');
    const userDataNascimento = sessionStorage.getItem('data_nascimento', 'data_nascimento');
    const userIdAcesso = sessionStorage.getItem('id_acesso', 'id_acesso');
    const userNome = sessionStorage.getItem('nome', 'nome');
    const userPerfil = sessionStorage.getItem('perfil', 'perfil');
    const userStatus = sessionStorage.getItem('status', 'status');
    const userTipoUsuario = sessionStorage.getItem('tipo_usuario', 'tipo_usuario');
    const userCpf = sessionStorage.getItem('cpf_usuario', 'cpf_usuario');

//bloqueio de campos de acordo com p perfil
if(userPerfil === 'MATRIZ' && userTipoUsuario === 'PARCEIRO'){
  $("#exampleParcPromo").prop("disabled", true);
  $("#exampleSupervisor").prop("disabled", true);
  $("#exampleGerente").prop("disabled", true);
  $("#exampleDtGerente").prop("disabled", true);
  $("#exampledtSupervisor").prop("disabled", true);
}
if(userPerfil === 'SUB ACESSO' && userTipoUsuario === 'PARCEIRO'){
  $("#exampleParcPromo").prop("disabled", true);
  $("#exampleSupervisor").prop("disabled", true);
  $("#exampleGerente").prop("disabled", true);
  $("#exampleDtGerente").prop("disabled", true);
  $("#exampledtSupervisor").prop("disabled", true);
  $("#cpfPromo").prop("disabled", true);
}
if(userTipoUsuario === 'SUPERVISOR'){
  $("#exampleParcPromo").prop("disabled", true);
  $("#exampleSupervisor").prop("disabled", true);
  $("#exampleGerente").prop("disabled", true);
  $("#exampleDtGerente").prop("disabled", true);

}
if(userTipoUsuario === 'GERENTE'){
  $("#exampleParcPromo").prop("disabled", true);
  $("#exampleGerente").prop("disabled", true);
}

//EDITAR MODAL 
const editarModal = (proposta) => {

  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"proposta":proposta});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3000/user/comissao/modal", requestOptions)
  .then(response => response.json())
  .then(function (data) {
    
 
    //populando os campos do modal eyes
  document.getElementById('proposta-modal').innerHTML = data.proposta;
  document.getElementById('status-pagamento-modal').innerHTML = data.status_pagamento;
  document.getElementById('produto-modal').innerHTML =data.produto;
  document.getElementById('data-proposta-modal').innerHTML = data.data_cadastro;
  document.getElementById('parceiro-modal').innerHTML =data.parceiro;
  document.getElementById('parceiro-esteira-modal').innerHTML =data.parceiro_esteira;
  document.getElementById('valor-entregue-modal').innerHTML ="R$ " + data.valor_liberado.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
  document.getElementById('convenio-modal').innerHTML =data.convenio;
  document.getElementById('tipo-modal').innerHTML =data.tipo;
  document.getElementById('comissao-modal').innerHTML ="R$ " + data.calculo.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
  document.getElementById('mes-referencia-modal').innerHTML =data.mes;
  document.getElementById('data-pagamento-modal').innerHTML =data.data_pagamento;
  document.getElementById('movimentacao-modal').innerHTML =data.movimentacao;
  document.getElementById('comissao-super-modal').innerHTML =data.pct_sup;
  document.getElementById('data-pagamento-super-modal').innerHTML =data.data_sup;
  document.getElementById('comissao-ger-modal').innerHTML =data.pct_ger;
  document.getElementById('data-pagamento-ger-modal').innerHTML =data.data_ger ;
  document.getElementById('regra-modal').innerHTML =data.regra;
  document.getElementById('correntista-modal').innerHTML =data.correntista;
  document.getElementById('prazo-contrato-modal').innerHTML = data.prazo_contrato;
  document.getElementById('classificacao-modal').innerHTML = data.clasificacao;
  document.getElementById('receita-liquida-modal').innerHTML ="R$ " + data.receita_liquida.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
  document.getElementById('competencia-pagamento-modal').innerHTML =data.competencia;

}).catch(error => console.log('error', error));
}

//GETS PARA POULAR SELECTS
window.onload = function () {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  //Supervisor
  fetch(url + "/user/supervisor", requestOptions)
    .then(response => response.json())
    .then(function (data) {
      for (let i = 0; i < data.length; i++) {
        supervisor.innerHTML += '<option value="' + data[i].parceiro + '">' + data[i].parceiro + '</option>;'


      }
    }).catch(error => console.log('error', error));

  //Gerente
  fetch(url + "/user/gerente", requestOptions)
    .then(response => response.json().then(function (data) {
      for (let i = 0; i < data.length; i++) {
        gerente.innerHTML += '<option value="' + data[i].gerente + '">' + data[i].gerente + '</option>;'

      }
    })).catch(error => console.log('error', error));



  //Status
  fetch(url + "/user/comissao/status", requestOptions)
    .then(response => response.json().then(function (data) {
      for (let i = 0; i < data.length; i++) {
        status.innerHTML += '<option value="' + data[i].status + '">' + data[i].status + '</option>;'
      }
    })).catch(error => console.log('error', error));

  //Data Gerente
  fetch(url + "/user/comissao/datagerente", requestOptions)
    .then(response => response.json().then(function (data) {
      for (let i = 0; i < data.length; i++) {
        dtGerente.innerHTML += '<option value="' + data[i].data_ger + '">' + data[i].data_ger + '</option>;'
      }
    })).catch(error => console.log('error', error));

  //Data Supervisor
  fetch(url + "/user/comissao/datasupervisor", requestOptions)
    .then(response => response.json().then(function (data) {
      for (let i = 0; i < data.length; i++) {
        dtSupervisor.innerHTML += '<option value="' + data[i].data_sup + '">' + data[i].data_sup + '</option>;'
      }
    })).catch(error => console.log('error', error));

  //Competencia Pagamento
  fetch(url + "/user/comissao/competencia", requestOptions)
    .then(response => response.json().then(function (data) {
      for (let i = 0; i < data.length; i++) {
        compPag.innerHTML += '<option value="' + data[i].competencia + '">' + data[i].competencia + '</option>;'
      }
    })).catch(error => console.log('error', error));

}



// PESQUISA COMISSAO
document.getElementById('pesquisar').addEventListener('click', async () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    "userPerfil":userPerfil,
    "userCpf":userCpf,
    "userTipousuario":userTipoUsuario,
    "userNome":userNome,
    "userCnpjMatriz":userCnpjMatriz,
    "parceiro": parceiroPromotor.value,
    "proposta": proposta.value,
    "supervisor": supervisor.value,
    "status": status.value,
    "gerente": gerente.value,
    "data_sup": dtSupervisor.value,
    "data_ger": dtGerente.value,
    "competencia": compPag.value,
    "cpf": cpfPromo.value
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  const loading = document.querySelectorAll("td.loader")
  loading.forEach(element => {
    element.innerHTML = `<img src="loading.gif" height="20" alt="" srcset="">`;
  });


  await fetch(url+"/user/comissao/pesquisa?banco=SANTANDER", requestOptions)
    .then(response => response.json().then(function (data) {
      valorTotal += data.soma;
      quantidadeTotal += data.count;
      document.getElementById("quantidade-sant").innerHTML = data.count;
      document.getElementById("valor-sant").innerHTML = data.soma.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
      data.dados.forEach(element => {
        document.getElementById("mais-santander").innerHTML += `<tr>
      <th style="text-align: center;">${element.banco}</th>
      <td style="text-align: center;">${element.proposta}</td>
      <td style="text-align: center;">R$ ${element.valor_liberado.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")}</td>
      <td style="text-align: center;">R$ ${element.calculo.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")}</td>
      <td style="text-align: center;">${element.data_pagamento}</td>
      <td style="text-align: center;">${element.status}</td>
      <td style="text-align: center;">${element.movimentacao}</td>
      <td style="text-align: center;">XX%</td>
      <td class="text-right" style="text-align: center;">
          <!-- VISUALIZAR -->
          <div class="actions ml-3"
              style="text-align: center;">

              <a href="#" class="action-item mr-2"
                  data-toggle="modal"
                  data-target=".modalexibirdetalhescomissao"
                  title="Visualizar">
                  <i class="fas fa-eye" onclick="editarModal(
                    ${element.proposta}
                    )"></i>
              </a>
          </div>
      </td>
  </tr>`;

  });
    })).catch(error => console.log('error', error));

  await fetch(url+"/user/comissao/pesquisa?banco=ITAU", requestOptions)
    .then(response => response.json().then(function (data) {
      valorTotal += data.soma;
      quantidadeTotal += data.count;
      document.getElementById("quantidade-itau").innerHTML = data.count;
      document.getElementById("valor-itau").innerHTML = data.soma.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
      data.dados.forEach(element => {
      document.getElementById("mais-itau").innerHTML += `<tr>
      <th style="text-align: center;">${element.banco}</th>
      <td style="text-align: center;">${element.proposta}</td>
      <td style="text-align: center;">${element.valor_liberado.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")}</td>
      <td style="text-align: center;">${element.calculo.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")}</td>
      <td style="text-align: center;">${element.data_pagamento}</td>
      <td style="text-align: center;">${element.status}</td>
      <td style="text-align: center;">${element.movimentacao}</td>
      <td style="text-align: center;">XX%</td>
      <td class="text-right" style="text-align: center;">
          <!-- VISUALIZAR -->
          <div class="actions ml-3"
              style="text-align: center;">

              <a href="#" class="action-item mr-2"
                  data-toggle="modal"
                  data-target=".modalexibirdetalhescomissao"
                  title="Visualizar">
                  <i class="fas fa-eye" onclick="editarModal(${element.proposta})"></i>
              </a>
          </div>
      </td>
  </tr>`;

      });
    })).catch(error => console.log('error', error));

  await fetch(url+"/user/comissao/pesquisa?banco=BRADESCO", requestOptions)
    .then(response => response.json().then(function (data) {
      valorTotal += data.soma;
      quantidadeTotal += data.count;
      document.getElementById("quantidade-bradesco").innerHTML = data.count;
      document.getElementById("valor-bradesco").innerHTML = data.soma.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
      data.dados.forEach(element => {
        document.getElementById("mais-bradesco").innerHTML += `<tr>
      <th style="text-align: center;">${element.banco}</th>
      <td style="text-align: center;">${element.proposta}</td>
      <td style="text-align: center;">${element.valor_liberado.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")}</td>
      <td style="text-align: center;">${element.calculo.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")}</td>
      <td style="text-align: center;">${element.data_pagamento}</td>
      <td style="text-align: center;">${element.status}</td>
      <td style="text-align: center;">${element.movimentacao}</td>
      <td style="text-align: center;">XX%</td>
      <td class="text-right" style="text-align: center;">
          <!-- VISUALIZAR -->
          <div class="actions ml-3"
              style="text-align: center;">

              <a href="#" class="action-item mr-2"
                  data-toggle="modal"
                  data-target=".modalexibirdetalhescomissao"
                  title="Visualizar">
                  <i class="fas fa-eye" onclick="editarModal(${element.proposta})"></i>
              </a>
          </div>
      </td>
  </tr>`;

      });
    })).catch(error => console.log('error', error));

  await fetch(url+"/user/comissao/pesquisa?banco=BANCO PAN", requestOptions)
    .then(response => response.json().then(function (data) {
      valorTotal += data.soma;
      quantidadeTotal += data.count;
      document.getElementById("quantidade-pan").innerHTML = data.count;
      document.getElementById("valor-pan").innerHTML = data.soma.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
      data.dados.forEach(element => {
        document.getElementById("mais-pan").innerHTML += `<tr>
      <th style="text-align: center;">${element.banco}</th>
      <td style="text-align: center;">${element.proposta}</td>
      <td style="text-align: center;">${element.valor_liberado.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")}</td>
      <td style="text-align: center;">${element.calculo.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")}</td>
      <td style="text-align: center;">${element.data_pagamento}</td>
      <td style="text-align: center;">${element.status}</td>
      <td style="text-align: center;">${element.movimentacao}</td>
      <td style="text-align: center;">XX%</td>
      <td class="text-right" style="text-align: center;">
          <!-- VISUALIZAR -->
          <div class="actions ml-3"
              style="text-align: center;">

              <a href="#" class="action-item mr-2"
                  data-toggle="modal"
                  data-target=".modalexibirdetalhescomissao"
                  title="Visualizar">
                  <i class="fas fa-eye" onclick="editarModal(${element.proposta})"></i>
              </a>
          </div>
      </td>
  </tr>`;

      });
    })).catch(error => console.log('error', error));

  await fetch(url+"/user/comissao/pesquisa?banco=CARTAO OLE", requestOptions)
    .then(response => response.json().then(function (data) {
      valorTotal += data.soma;
      quantidadeTotal += data.count;
      document.getElementById("quantidade-ole").innerHTML = data.count;
      document.getElementById("valor-ole").innerHTML = data.soma.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
      data.dados.forEach(element => {
        document.getElementById("mais-ole").innerHTML += `<tr>
      <th style="text-align: center;">${element.banco}</th>
      <td style="text-align: center;">${element.proposta}</td>
      <td style="text-align: center;">${element.valor_liberado.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")}</td>
      <td style="text-align: center;">${element.calculo.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")}</td>
      <td style="text-align: center;">${element.data_pagamento}</td>
      <td style="text-align: center;">${element.status}</td>
      <td style="text-align: center;">${element.movimentacao}</td>
      <td style="text-align: center;">XX%</td>
      <td class="text-right" style="text-align: center;">
          <!-- VISUALIZAR -->
          <div class="actions ml-3"
              style="text-align: center;">

              <a href="#" class="action-item mr-2"
                  data-toggle="modal"
                  data-target=".modalexibirdetalhescomissao"
                  title="Visualizar">
                  <i class="fas fa-eye" onclick="editarModal(${element.proposta})"></i>
              </a>
          </div>
      </td>
  </tr>`;

      });
    })).catch(error => console.log('error', error));

  await fetch(url+"/user/comissao/pesquisa?banco= CETELEM", requestOptions)
    .then(response => response.json().then(function (data) {
      valorTotal += data.soma;
      quantidadeTotal += data.count;
      document.getElementById("quantidade-cetelem").innerHTML = data.count;
      document.getElementById("valor-cetelem").innerHTML = data.soma.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
      data.dados.forEach(element => {
        document.getElementById("mais-cetelem").innerHTML += `<tr>
      <th style="text-align: center;">${element.banco}</th>
      <td style="text-align: center;">${element.proposta}</td>
      <td style="text-align: center;">${element.valor_liberado.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")}</td>
      <td style="text-align: center;">${element.calculo.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")}</td>
      <td style="text-align: center;">${element.data_pagamento}</td>
      <td style="text-align: center;">${element.status}</td>
      <td style="text-align: center;">${element.movimentacao}</td>
      <td style="text-align: center;">XX%</td>
      <td class="text-right" style="text-align: center;">
          <!-- VISUALIZAR -->
          <div class="actions ml-3"
              style="text-align: center;">

              <a href="#" class="action-item mr-2"
                  data-toggle="modal"
                  data-target=".modalexibirdetalhescomissao"
                  title="Visualizar">
                  <i class="fas fa-eye" onclick="editarModal(${element.proposta})"></i>
              </a>
          </div>
      </td>
  </tr>`;

      });
    })).catch(error => console.log('error', error));

  await fetch(url+"/user/comissao/pesquisa?banco= OLE CONSIGNADO", requestOptions)
    .then(response => response.json().then(function (data) {
      valorTotal += data.soma;
      quantidadeTotal += data.count;
      document.getElementById("ole-cons-quantidade").innerHTML = data.count;
      document.getElementById("ole-cons-valor").innerHTML = data.soma.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
      data.dados.forEach(element => {
        document.getElementById("mais-ole-cons").innerHTML += `<tr>
      <th style="text-align: center;">${element.banco}</th>
      <td style="text-align: center;">${element.proposta}</td>
      <td style="text-align: center;">${element.valor_liberado.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")}</td>
      <td style="text-align: center;">${element.calculo.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")}</td>
      <td style="text-align: center;">${element.data_pagamento}</td>
      <td style="text-align: center;">${element.status}</td>
      <td style="text-align: center;">${element.movimentacao}</td>
      <td style="text-align: center;">XX%</td>
      <td class="text-right" style="text-align: center;">
          <!-- VISUALIZAR -->
          <div class="actions ml-3"
              style="text-align: center;">

              <a href="#" class="action-item mr-2"
                  data-toggle="modal"
                  data-target=".modalexibirdetalhescomissao"
                  title="Visualizar">
                  <i class="fas fa-eye" onclick="editarModal(${element.proposta})"></i>
              </a>
          </div>
      </td>
  </tr>`;

      });
    })).catch(error => console.log('error', error));


  await fetch(url+"/user/comissao/pesquisa?banco=DAYCOVAL", requestOptions)
    .then(response => response.json().then(function (data) {
      valorTotal += data.soma;
      quantidadeTotal += data.count;
      document.getElementById("quantidade-daycoval").innerHTML = data.count;
      document.getElementById("valor-daycoval").innerHTML = data.soma.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
      data.dados.forEach(element => {
        document.getElementById("mais-daycoval").innerHTML += `<tr>
      <th style="text-align: center;">${element.banco}</th>
      <td style="text-align: center;">${element.proposta}</td>
      <td style="text-align: center;">${element.valor_liberado.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")}</td>
      <td style="text-align: center;">${element.calculo.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")}</td>
      <td style="text-align: center;">${element.data_pagamento}</td>
      <td style="text-align: center;">${element.status}</td>
      <td style="text-align: center;">${element.movimentacao}</td>
      <td style="text-align: center;">XX%</td>
      <td class="text-right" style="text-align: center;">
          <!-- VISUALIZAR -->
          <div class="actions ml-3"
              style="text-align: center;">

              <a href="#" class="action-item mr-2"
                  data-toggle="modal"
                  data-target=".modalexibirdetalhescomissao"
                  title="Visualizar">
                  <i class="fas fa-eye" onclick="editarModal(${element.proposta})"></i>
              </a>
          </div>
      </td>
  </tr>`;

      });
    })).catch(error => console.log('error', error));


  await fetch(url+"/user/comissao/pesquisa?banco=SIM", requestOptions)
    .then(response => response.json().then(function (data) {
      valorTotal += data.soma;
      quantidadeTotal += data.count;
      document.getElementById("quantidade-sim").innerHTML = data.count;
      document.getElementById("valor-sim").innerHTML = data.soma.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
      data.dados.forEach(element => {
        document.getElementById("mais-sim").innerHTML += `<tr>
      <th style="text-align: center;">${element.banco}</th>
      <td style="text-align: center;">${element.proposta}</td>
      <td style="text-align: center;">${element.valor_liberado.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")}</td>
      <td style="text-align: center;">${element.calculo.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")}</td>
      <td style="text-align: center;">${element.data_pagamento}</td>
      <td style="text-align: center;">${element.status}</td>
      <td style="text-align: center;">${element.movimentacao}</td>
      <td style="text-align: center;">XX%</td>
      <td class="text-right" style="text-align: center;">
          <!-- VISUALIZAR -->
          <div class="actions ml-3"
              style="text-align: center;">

              <a href="#" class="action-item mr-2"
                  data-toggle="modal"
                  data-target=".modalexibirdetalhescomissao"
                  title="Visualizar">
                  <i class="fas fa-eye" onclick="editarModal(${element.proposta})"></i>
              </a>
          </div>
      </td>
  </tr>`;

      });
    })).catch(error => console.log('error', error));

  await fetch(url+"/user/comissao/pesquisa?banco=SAFRA", requestOptions)
    .then(response => response.json().then(function (data) {
      valorTotal += data.soma;
      quantidadeTotal += data.count;
      document.getElementById("quantidade-safra").innerHTML = data.count;
      document.getElementById("valor-safra").innerHTML = data.soma.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
      data.dados.forEach(element => {
        document.getElementById("mais-safra").innerHTML += `<tr>
      <th style="text-align: center;">${element.banco}</th>
      <td style="text-align: center;">${element.proposta}</td>
      <td style="text-align: center;">${element.valor_liberado.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")}</td>
      <td style="text-align: center;">${element.calculo.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")}</td>
      <td style="text-align: center;">${element.data_pagamento}</td>
      <td style="text-align: center;">${element.status}</td>
      <td style="text-align: center;">${element.movimentacao}</td>
      <td style="text-align: center;">XX%</td>
      <td class="text-right" style="text-align: center;">
          <!-- VISUALIZAR -->
          <div class="actions ml-3"
              style="text-align: center;">

              <a href="#" class="action-item mr-2"
                  data-toggle="modal"
                  data-target=".modalexibirdetalhescomissao"
                  title="Visualizar">
                  <i class="fas fa-eye" onclick="editarModal(${element.proposta})"></i>
              </a>
          </div>
      </td>
  </tr>`;

      });
    })).catch(error => console.log('error', error));

  await fetch(url+"/user/comissao/pesquisa?banco=SEGUROS", requestOptions)
    .then(response => response.json().then(function (data) {
      valorTotal += data.soma;
      quantidadeTotal += data.count;
      document.getElementById("quantidade-seguros").innerHTML = data.count;
      document.getElementById("valor-seguros").innerHTML = data.soma.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
      data.dados.forEach(element => {
        document.getElementById("mais-seguros").innerHTML += `<tr>
      <th style="text-align: center;">${element.banco}</th>
      <td style="text-align: center;">${element.proposta}</td>
      <td style="text-align: center;">${element.valor_liberado.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")}</td>
      <td style="text-align: center;">${element.calculo.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")}</td>
      <td style="text-align: center;">${element.data_pagamento}</td>
      <td style="text-align: center;">${element.status}</td>
      <td style="text-align: center;">${element.movimentacao}</td>
      <td style="text-align: center;">XX%</td>
      <td class="text-right" style="text-align: center;">
          <!-- VISUALIZAR -->
          <div class="actions ml-3"
              style="text-align: center;">

              <a href="#" class="action-item mr-2"
                  data-toggle="modal"
                  data-target=".modalexibirdetalhescomissao"
                  title="Visualizar">
                  <i class="fas fa-eye" onclick="editarModal(${element.proposta})"></i>
              </a>
          </div>
      </td>
  </tr>`;

      });
    })).catch(error => console.log('error', error));

  await fetch(url+"/user/comissao/pesquisa?banco=CREFISA", requestOptions)
    .then(response => response.json().then(function (data) {
      valorTotal += data.soma;
      quantidadeTotal += data.count;
      document.getElementById("quantidade-crefisa").innerHTML = data.count;
      document.getElementById("valor-crefisa").innerHTML = data.soma.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
      data.dados.forEach(element => {
        document.getElementById("mais-crefisa").innerHTML += `<tr>
      <th style="text-align: center;">${element.banco}</th>
      <td style="text-align: center;">${element.proposta}</td>
      <td style="text-align: center;">${element.valor_liberado.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")}</td>
      <td style="text-align: center;">${element.calculo.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")}</td>
      <td style="text-align: center;">${element.data_pagamento}</td>
      <td style="text-align: center;">${element.status}</td>
      <td style="text-align: center;">${element.movimentacao}</td>
      <td style="text-align: center;">XX%</td>
      <td class="text-right" style="text-align: center;">
          <!-- VISUALIZAR -->
          <div class="actions ml-3"
              style="text-align: center;">

              <a href="#" class="action-item mr-2"
                  data-toggle="modal"
                  data-target=".modalexibirdetalhescomissao"
                  title="Visualizar">
                  <i class="fas fa-eye" onclick="editarModal(${element.proposta})"></i>
              </a>
          </div>
      </td>
  </tr>`;

      });
    })).catch(error => console.log('error', error));

  await fetch(url+"/user/comissao/pesquisa?banco=PARANA BANCO", requestOptions)
    .then(response => response.json().then(function (data) {
      valorTotal += data.soma;
      quantidadeTotal += data.count;
      document.getElementById("quantidade-parana").innerHTML = data.count;
      document.getElementById("valor-parana").innerHTML = data.soma.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
      data.dados.forEach(element => {
        document.getElementById("mais-parana").innerHTML += `<tr>
      <th style="text-align: center;">${element.banco}</th>
      <td style="text-align: center;">${element.proposta}</td>
      <td style="text-align: center;">${element.valor_liberado.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")}</td>
      <td style="text-align: center;">${element.calculo.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")}</td>
      <td style="text-align: center;">${element.data_pagamento}</td>
      <td style="text-align: center;">${element.status}</td>
      <td style="text-align: center;">${element.movimentacao}</td>
      <td style="text-align: center;">XX%</td>
      <td class="text-right" style="text-align: center;">
          <!-- VISUALIZAR -->
          <div class="actions ml-3"
              style="text-align: center;">

              <a href="#" class="action-item mr-2"
                  data-toggle="modal"
                  data-target=".modalexibirdetalhescomissao"
                  title="Visualizar">
                  <i class="fas fa-eye" onclick="editarModal(${element.proposta})"></i>
              </a>
          </div>
      </td>
  </tr>`;

      });
    })).catch(error => console.log('error', error));

  await fetch(url+"/user/comissao/pesquisa?banco=BRB", requestOptions)
    .then(response => response.json().then(function (data) {
      valorTotal += data.soma;
      quantidadeTotal += data.count;
      document.getElementById("quantidade-brb").innerHTML = data.count;
      document.getElementById("valor-brb").innerHTML = data.soma.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
      data.dados.forEach(element => {
        document.getElementById("mais-brb").innerHTML += `<tr>
      <th style="text-align: center;">${element.banco}</th>
      <td style="text-align: center;">${element.proposta}</td>
      <td style="text-align: center;">${element.valor_liberado.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")}</td>
      <td style="text-align: center;">${element.calculo.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")}</td>
      <td style="text-align: center;">${element.data_pagamento}</td>
      <td style="text-align: center;">${element.status}</td>
      <td style="text-align: center;">${element.movimentacao}</td>
      <td style="text-align: center;">XX%</td>
      <td class="text-right" style="text-align: center;">
          <!-- VISUALIZAR -->
          <div class="actions ml-3"
              style="text-align: center;">

              <a href="#" class="action-item mr-2"
                  data-toggle="modal"
                  data-target=".modalexibirdetalhescomissao"
                  title="Visualizar">
                  <i class="fas fa-eye" onclick="editarModal(${element.proposta})"></i>
              </a>
          </div>
      </td>
  </tr>`;

      });
    })).catch(error => console.log('error', error));

  await fetch(url+"/user/comissao/pesquisa?banco=BMG", requestOptions)
    .then(response => response.json().then(function (data) {
      valorTotal += data.soma;
      quantidadeTotal += data.count;
      document.getElementById("quantidade-bmg").innerHTML = data.count;
      document.getElementById("valor-bmg").innerHTML = data.soma.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
      data.dados.forEach(element => {
        document.getElementById("mais-bmg").innerHTML += `<tr>
      <th style="text-align: center;">${element.banco}</th>
      <td style="text-align: center;">${element.proposta}</td>
      <td style="text-align: center;">${element.valor_liberado.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")}</td>
      <td style="text-align: center;">${element.calculo.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")}</td>
      <td style="text-align: center;">${element.data_pagamento}</td>
      <td style="text-align: center;">${element.status}</td>
      <td style="text-align: center;">${element.movimentacao}</td>
      <td style="text-align: center;">XX%</td>
      <td class="text-right" style="text-align: center;">
          <!-- VISUALIZAR -->
          <div class="actions ml-3"
              style="text-align: center;">

              <a href="#" class="action-item mr-2"
                  data-toggle="modal"
                  data-target=".modalexibirdetalhescomissao"
                  title="Visualizar">
                  <i class="fas fa-eye" onclick="editarModal(${element.proposta})"></i>
              </a>
          </div>
      </td>
  </tr>`;

      });
    })).catch(error => console.log('error', error));

    document.getElementById('quantidade-geral').innerHTML= quantidadeTotal;
    document.getElementById('valor-geral').innerHTML= valorTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
})


//INCLUIR COMISSAO 

const buttonIncluir =  document.getElementById('button-incluir-arquivo');

buttonIncluir.addEventListener('click',()=>{

    const formdata = new FormData();
    const fileInput = document.getElementById('input-arquivo-incluir');
    
    formdata.append("incluir_propostas", fileInput.files[0],);
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch(url+"/user/comissao/incluir", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log('Success:', result);
      
    })
    .catch((error) => {
      console.error('Error:', error);
    });
})


//ALTERAR COMISSAO

const buttonAlterar =  document.getElementById('button-alterar');

buttonAlterar.addEventListener('click',()=>{

    const formdata = new FormData();
    const fileInput = document.getElementById('input-arquivo-alterar');
    
    formdata.append("alterar_propostas", fileInput.files[0],);
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch(url+"/user/comissao/alterar", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log('Success:', result);
      
})
})
