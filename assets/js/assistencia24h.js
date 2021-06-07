//usar variavel de sessao para o id parceiro session storage 

var valor_seguro = 0;
var emailBoasVindas = boasVindas()

window.onload = function todosPorParceiro() {

  const arrays = {
    arrayUpdate: arrayUpdate = [],
    arrayLinhas: arrayLinhas = []
  }

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    "id_parceiro": "1"
  });
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://localhost:3000/user/assistencia/filtrartodasporid", requestOptions)
    .then(response => response.json())
    .then(function (data) {
      for (let i = 0; i < data.length; i++) {

        let specific_tbody = document.getElementById('list');
        let row = specific_tbody.insertRow(-1);
        let cpf = row.insertCell(-1);
        let nome = row.insertCell(-1);
        let tipoContratacao = row.insertCell(-1);
        let tipoAssistencia = row.insertCell(-1);
        let alteraThis = row.insertCell(-1);

        row.id = "row" + i
        cpf.id = "cpf" + i
        nome.id = "nome" + i
        tipoContratacao.id = "tipoContratacao" + i
        tipoAssistencia.id = "tipoAssistencia" + i


        let tAssistencia = document.createTextNode(`${data[i].tipo_assistencia}`);
        tipoAssistencia.appendChild(tAssistencia);

        let cpf2 = document.createTextNode(`${data[i].cliente_cpf}`);
        cpf.appendChild(cpf2);

        let nome_cliente = document.createTextNode(`${data[i].cliente_nome}`);
        nome.appendChild(nome_cliente);

        let contratacao_tipo = document.createTextNode(`${data[i].tipo_contratacao}`);
        tipoContratacao.appendChild(contratacao_tipo);


        arrays.arrayUpdate[i] = data[i].cpf
        arrays.arrayLinhas[i] = row


        alteraThis.innerHTML = `
                <td class="text-right" style="text-align: center;" > 
                <!-- Actions -->
                <div class="actions ml-3" style="text-align: center;" >
                    <a href="#" class="action-item mr-2 " data-toggle="modal" name="botaoAlterar" 
                    id= "${i}"  data-target=".modal-incluirproposta-parc" title="Alterar" 
                    onclick="pegarIdBotaoAlterar(this.id)">
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </td>
                `

      }
    }).catch(error => console.log('error: ', error))

};


//Identificacao de botao para ecolha de formulario ao inserir ou alterar
var nomeBotaoClicado = "";

function nomeBotao(nome) {
  nomeBotaoClicado = nome;
};

function inclusao() {
  if (nomeBotaoClicado == "btnFP") {
    var forma_de_pagamento = document.getElementById("tipoContratacao").value;
    if (forma_de_pagamento == "Cartao de Credito") {
      cartaoCredito(); //consumo APi cartão de crédito
    } else if (forma_de_pagamento == "Conta bancaria") {
      incluirBd();
    }
  } else {
    updateBd();
  }

};
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//TOKEN
var token = "";

function cartaoCredito() {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "username": "mv_operacao",
    "company_name": "suthub",
    "password": "Gmvb@2020"
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://api.suthubservice.com/v2/login", requestOptions)
    .then(response => response.json())
    .then(function (response) {
      token = response.sessionToken,
        assistencia(token);
    })
    .catch(error => console.log('error', error));

};




function assistencia(token) {

  var nome = document.getElementById("nome").value;
  var ddd = document.getElementById("ddd").value;
  var telefone = document.getElementById("telefone").value;
  var cpf = document.getElementById("cpf").value;
  var email = document.getElementById("email").value;
  var data_nascimento = document.getElementById("nascimento").value;
  var cidade = document.getElementById("cidade2").value;
  var bairro = document.getElementById("bairro").value;
  var numero = document.getElementById("numero").value;
  var estado = document.getElementById("estado2").value;
  var rua = document.getElementById("rua").value;
  var cep = document.getElementById("cep").value;
  var product_id = document.getElementById("tipoAssistencia").value;
  var quote = 0;
  var uuid = 0;

  if (product_id == 670) {
    quote = 413;
    product_id = parseInt(product_id);

  } else if (product_id == 669) {
    quote = 414;
    product_id = parseInt(product_id);
  }

  var myHeaders = new Headers();
  myHeaders.append("token", token);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "product_ids": [product_id],
    "insurance_holder": {
      "name": nome,
      "phones": [{
        "area_code": ddd,
        "extension": "",
        "number": telefone,
        "type": "mobile"
      }],
      "cpf": cpf,
      "email": email,
      "birth_date": data_nascimento,
      "addresses": [{
        "additional_details": "",
        "city": cidade,
        "country": "BR",
        "district": bairro,
        "number": numero,
        "state": estado,
        "street": rua,
        "zipcode": cep
      }]
    },
    "risk_address": {
      "additional_details": "",
      "city": cidade,
      "country": "BR",
      "district": bairro,
      "number": numero,
      "state": estado,
      "street": rua,
      "zipcode": cep
    }
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://api.suthubservice.com/v2/quote/" + quote + "", requestOptions)
    .then(response => response.json())
    .then(function (response) {
      console.log(response)
      uuid = response.data.contract_id,
        valor_seguro = response.data.payment_options[0].valor_total
      document.getElementById("valor_assistencia").value = valor_seguro
      enviarEmail(token, uuid, nome, email);
    })
    .catch(error => console.log('error', error));


};


function enviarEmail(token, uuid, nome, email) {

  var myHeaders = new Headers();
  myHeaders.append("token", token);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "email": {
      "recipients": [email],
      "contact_name": nome,
      "uuid": uuid
    }
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://api.suthubservice.com/v2/email/2", requestOptions)
    .then(response => response.json())
    .then(function (response) {
      contrato(token, uuid);
    })
    .catch(error => console.log('error', error));

};


function contrato(token, uuid) {

  var product_id = document.getElementById("tipoAssistencia").value;
  if (product_id == 670) {
    var product = "resid";
  } else if (product_id == 669) {
    var product = "saude";
  }
  var myHeaders = new Headers();
  myHeaders.append("token", token);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("https://api.suthubservice.com/v2/MaisValor/contract/" + uuid + "/sendSMS?product=" + product + "", requestOptions)
    .then(response => response.json())
    .then(function (response) {
      if (response.status == "SMS sent.") {
        incluirBd();
      }
    })
    .catch(error => console.log('error', error));
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function incluirBd() {

  var vigenciaInicio = vigenciaInicial();
  var vigenciaFim= vigenciaFinal();
  var valorAssistencia = document.getElementById("valor_assistencia").value;
  if (valorAssistencia == "") valorAssistencia = 238.8;
  var ddd = document.getElementById("ddd").value;
  var telefone = document.getElementById("telefone").value;
  var cpf = document.getElementById("cpf").value;
  var email = document.getElementById("email").value;
  var data_nascimento = document.getElementById("nascimento").value;
  var bairro = document.getElementById("bairro").value;
  var cidade = document.getElementById("cidade2").value;
  var estado = document.getElementById("estado2").value;
  var rua = document.getElementById("rua").value;
  var numero = document.getElementById("numero").value;
  var cep = document.getElementById("cep").value;
  var product_id = document.getElementById("tipoAssistencia").value;
  var nome = document.getElementById("nome").value;
  var complemento = document.getElementById("complemento").value;
  //Dados bancarios
  var tipoContratacao = document.getElementById("tipoContratacao").value;
  var banco = document.getElementById("banco").value;
  var agencia = document.getElementById("agencia").value;
  var conta = document.getElementById("conta").value;
  var digito = document.getElementById("digito").value;
  var tipoConta = document.getElementById("tipoConta").value;
  var status = document.getElementById("status").value;
  //Dados do Produto
  var formaContratacao = document.getElementById("formaContratacao").value;

  if (formaContratacao == "anual") {
    var parcelas_restantes = 1;
  } else if (formaContratacao == "mensal") {
    var parcelas_restantes = 12;
  }

  if (tipoContratacao == "Cartao de Credito") {
    var parcelas_restantes = 0;
  }


  var vencimento1 = document.getElementById("vencimento").value;
  var vencimento = vencimento1.split('-').reverse().join('-');
  vencimento = vencimento.replace("-", "/");
  vencimento = vencimento.replace("-", "/");

  //Dados do Parceiro //colocar num input hidden
  var parceiro = "x";
  var id_parceiro = "1";
  var cpf_parceiro = "000.000.000-00";
  var gerente = "y";
  var supervisor = "y";
  var now = new Date;
  var data_inclusao = "" + now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()
  var responsavel_alteracao = "z";
  var data_alteracao = "" + now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()

  var mes_debito = now.getMonth();
  var mes_ultimo_debito = parseInt(mes_debito);

  var cpf_formatado1 = cpf.replace('.', '')
  var cpf_formatado2 = cpf_formatado1.replace('.', '')
  var cpf_formatado3 = cpf_formatado2.replace('-', '')

  if (product_id == 670) {
    var produtoEscolhido = "residencial";
    var sigla_produto_escolhido = "r";

  } else if (product_id == 669) {
    var produtoEscolhido = "saude";
    var sigla_produto_escolhido = "s";
  }


  var dn_formatada1 = data_nascimento.replace('/', '')
  var dn_formatada2 = dn_formatada1.replace('/', '')
  //tiras as barras da data de nascimento e colocar no id do cliente na empresa 

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "cliente_nome": nome,
    "cliente_cpf": cpf,
    "data_nascimento": data_nascimento,
    "cep": cep,
    "rua": rua,
    "bairro": bairro,
    "cidade": cidade,
    "estado": estado,
    "numero": numero,
    "complemento": complemento,
    "email": email,
    "telefone": ddd + telefone,
    "tipo_contratacao": tipoContratacao,
    "banco": banco,
    "agencia": agencia,
    "conta": conta,
    "digito": digito,
    "tipo_conta": tipoConta,
    "status": status,
    "tipo_assistencia": produtoEscolhido,
    "forma_contratacao": formaContratacao,
    "parceiro": parceiro,
    "id_parceiro": id_parceiro,
    "cpf_parceiro": cpf_parceiro,
    "supervisor": supervisor,
    "gerente": gerente,
    "data_inclusao": data_inclusao,
    "data_vencimento": vencimento,
    "responsavel_alteracao": responsavel_alteracao,
    "data_alteracao": data_alteracao,
    "valor_assistencia": valorAssistencia,
    "id_cliente": cpf_formatado3 + dn_formatada2,
    "id_contrato": cpf_formatado3 + "cc" + sigla_produto_escolhido,
    "parcelas_restantes": parcelas_restantes,
    "mes_ultimo_debito": mes_ultimo_debito,
    "vigencia_inicio": vigenciaInicio,
    "vigencia_fim": vigenciaFim,

  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://localhost:3000/user/assistencia/incluir", requestOptions)
    .then(response => response.json())
    .then(function (response) {
      console.log("incluido no banco de dados com sucesso")
      window.location.href = "D:/teste17-05/Portal-Mais-Valor/paginas/assistencia24h.html"

    })
    .catch(error => console.log('error', error));

};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function filtro() {

  apagarFiltrosSemRedirecionamento();
  var fCpf = document.getElementById("fCpf").value;
  var fTipoContratacao = document.getElementById("fTipoContratacao").value;
  var fBanco = document.getElementById("fBanco").value;
  var fTipoAssistencia = document.getElementById("fTipoAssistencia").value;
  var fFormaContratacao = document.getElementById("fFormaContratacao").value;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "id_parceiro": "1",
    "cliente_cpf": fCpf,
    "tipo_contratacao": fTipoContratacao,
    "banco": fBanco,
    "tipo_assistencia": fTipoAssistencia,
    "forma_contratacao": fFormaContratacao
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://localhost:3000/user/assistencia/filtrarselecionadasporid", requestOptions)
    .then(response => response.json())
    .then(function (data) {

      for (let i = 0; i < data.length; i++) {

        let specific_tbody = document.getElementById('list');
        let row = specific_tbody.insertRow(-1);
        let cpf = row.insertCell(-1);
        let nome = row.insertCell(-1);
        let tipoContratacao = row.insertCell(-1);
        let tipoAssistencia = row.insertCell(-1);
        let alteraThis = row.insertCell(-1);

        row.id = "row" + i
        cpf.id = "cpf" + i
        nome.id = "nome" + i
        tipoContratacao.id = "tipoContratacao" + i
        tipoAssistencia.id = "tipoAssistencia" + i


        let tAssistencia = document.createTextNode(`${data[i].tipo_assistencia}`);
        tipoAssistencia.appendChild(tAssistencia);

        let cpf2 = document.createTextNode(`${data[i].cliente_cpf}`);
        cpf.appendChild(cpf2);

        let nome_cliente = document.createTextNode(`${data[i].cliente_nome}`);
        nome.appendChild(nome_cliente);

        let contratacao_tipo = document.createTextNode(`${data[i].tipo_contratacao}`);
        tipoContratacao.appendChild(contratacao_tipo);


        arrays.arrayUpdate[i] = data[i].cpf
        arrays.arrayLinhas[i] = row
        alteraThis.innerHTML = `
              <td class="text-right" style="text-align: center;">
              <!-- Actions -->
              <div class="actions ml-3" style="text-align: center;">
                  <a href="#" class="action-item mr-2 " data-toggle="modal" id= "${i}"
                    onclick = "pegarIdBotaoAlterar(this.id);"
                      data-target=".modal-incluirproposta-parc" title="Alterar" >
                      <i class="fas fa-external-link-alt"></i>
                  </a>
              </div>
          </td>
              `
      }
    })
    .catch(error => console.log('error', error));

};


function apagarFiltros() {
  var elemento = document.getElementById("list");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  };
  window.location.href = "D:/teste17-05/Portal-Mais-Valor/paginas/assistencia24h.html";
};

function apagarFiltrosSemRedirecionamento() {
  var elemento = document.getElementById("list");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  };
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var idBotaoAlterar = "";

function pegarIdBotaoAlterar(id) {

  idBotaoAlterar = id;
  var tagPai = "row" + id;
  let teste = document.getElementById(tagPai);
  var cpfChildren = teste.children[0].id;
  var nomeChildren = teste.children[1].id;
  var tipoCChildren = teste.children[2].id;
  var tipoAChildren = teste.children[3].id;
  var valoCpf = document.getElementById(cpfChildren);
  var valoNome = document.getElementById(nomeChildren);
  var valoTipoC = document.getElementById(tipoCChildren);
  var valoTipoA = document.getElementById(tipoAChildren);

  var cpfformatado = valoCpf.innerHTML;
  var nomeformatado = valoNome.innerHTML;
  var tipoCformatado = valoTipoC.innerHTML;
  var tipoAformatado = valoTipoA.innerHTML;


  selecaoParaalteracao(cpfformatado, nomeformatado, tipoCformatado, tipoAformatado)

};


function selecaoParaalteracao(cpfformatado, nomeformatado, tipoCformatado, tipoAformatado) {//

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "cliente_cpf": cpfformatado,
    "cliente_nome": nomeformatado,
    "tipo_contratacao": tipoCformatado,
    "tipo_assistencia": tipoAformatado
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://localhost:3000/user/assistencia/filtrarParaAlterar", requestOptions)
    .then(response => response.json())
    .then(function (data) {
      var codigo = data.codigo;
      var nome = data.cliente_nome;
      var data_nascimento = data.data_nascimento
      var cpf = data.cliente_cpf;
      var rua = data.rua;
      var complemento = data.complemento;
      var bairro = data.bairro;
      var cidade = data.cidade;
      var numero = data.numero;
      var estado = data.estado;
      var cep = data.cep;
      var email = data.email;
      var telefone = data.telefone;
      var agencia = data.agencia;
      var conta = data.conta;
      var digito = data.digito;
      var banco = data.banco;
      var contratacao = data.tipo_contratacao;
      var tipo_conta = data.tipo_conta;
      var tipo_assistencia = data.tipo_assistencia;
      var forma_contratacao = data.forma_contratacao;
      var status = data.status;
      var vencimento = data.data_vencimento;
      var tipo_assistencia2 = "";
      var telefoneFinal = "";
      var telefoneSplit = telefone.split('');
      var dddFormatado = telefoneSplit[0] + telefoneSplit[1];

      for (var i = 2; i < 11; i++) {
        telefoneFinal += telefoneSplit[i]

      }

      var vc = vencimento.split('/').reverse().join('/');
      var vc1 = vc.replace("/", "-");
      var vcFormatado = vc1.replace("/", "-");
      //transformar vencimento em aaaa-mm-dd

      document.getElementById("codigo").value = codigo;
      document.getElementById("ddd").value = dddFormatado;
      document.getElementById("nascimento").value = data_nascimento;
      document.getElementById("complemento").value = complemento;
      document.getElementById("nome").value = nome;
      document.getElementById("cpf").value = cpf;
      document.getElementById("rua").value = rua;
      document.getElementById("bairro").value = bairro;
      document.getElementById("cidade2").value = cidade;
      document.getElementById("estado2").value = estado;
      document.getElementById("numero").value = numero;
      document.getElementById("cep").value = cep;
      document.getElementById("email").value = email;
      document.getElementById("telefone").value = telefoneFinal;
      document.getElementById("agencia").value = agencia;
      document.getElementById("tipoConta").value = tipo_conta;
      document.getElementById("conta").value = conta;
      document.getElementById("digito").value = digito;
      document.getElementById("banco").value = banco;
      document.getElementById("tipoContratacao").value = contratacao;
      document.getElementById("vencimento").value = vcFormatado;

      if (tipo_assistencia == "residencial") {
        tipo_assistencia2 = "670";
      } else if (tipo_assistencia == "saude") {
        tipo_assistencia2 = "669";
      }

      document.getElementById("tipoAssistencia").value = tipo_assistencia2;
      document.getElementById("formaContratacao").value = forma_contratacao;
      document.getElementById("status").value = status;
      //fazer um input hidden
      //pegar variavel codigo e jogar num input hidden  
    })
    .catch(error => console.log('error', error));
}



function updateBd() {

  //Dados do Cliente
  var ddd = document.getElementById("ddd").value;
  var codigo = document.getElementById("codigo").value;
  var telefone = document.getElementById("telefone").value;
  var numero = document.getElementById("numero").value;
  var cpf = document.getElementById("cpf").value;
  var email = document.getElementById("email").value;
  var data_nascimento = document.getElementById("nascimento").value;
  var bairro = document.getElementById("bairro").value;
  var cidade = document.getElementById("cidade2").value;
  var estado = document.getElementById("estado2").value;
  var rua = document.getElementById("rua").value;
  var cep = document.getElementById("cep").value;
  var product_id = document.getElementById("tipoAssistencia").value;
  var nome = document.getElementById("nome").value;
  var complemento = document.getElementById("complemento").value;

  //Dados bancarios
  var tipoContratacao = document.getElementById("tipoContratacao").value;
  var banco = document.getElementById("banco").value;
  var agencia = document.getElementById("agencia").value;
  var conta = document.getElementById("conta").value;
  var digito = document.getElementById("digito").value;
  var tipoConta = document.getElementById("tipoConta").value;
  var status = document.getElementById("status").value;

  //Dados do Produto
  var formaContratacao = document.getElementById("formaContratacao").value;
  var vencimento = document.getElementById("vencimento").value;
  var venc = vencimento.split('-').reverse().join('-');
  var venc1 = venc.replace("-", "/");
  var vencFormatado = venc1.replace("-", "/");

  //Dados do Parceiro //colocar num input hidden
  var now = new Date;
  var responsavel_alteracao = "z";
  var data_alteracao = "" + now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()

  var cpf_formatado1 = cpf.replace('.', '')
  var cpf_formatado2 = cpf_formatado1.replace('.', '')
  var cpf_formatado3 = cpf_formatado2.replace('-', '')

  if (product_id == 670) {
    var produtoEscolhido = "residencial";
  } else if (product_id == 669) {
    var produtoEscolhido = "saude";
  };

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "codigo": codigo,
    "cliente_nome": nome,
    "cliente_cpf": cpf,
    "data_nascimento": data_nascimento,
    "cep": cep,
    "rua": rua,
    "bairro": bairro,
    "cidade": cidade,
    "estado": estado,
    "numero": numero,
    "complemento": complemento,
    "email": email,
    "telefone": ddd + telefone,
    "tipo_contratacao": tipoContratacao,
    "banco": banco,
    "agencia": agencia,
    "conta": conta,
    "digito": digito,
    "tipo_conta": tipoConta,
    "status": status,
    "tipo_assistencia": produtoEscolhido,
    "forma_contratacao": formaContratacao,
    "responsavel_alteracao": responsavel_alteracao,
    "data_alteracao": data_alteracao,
    "data_vencimento": vencFormatado,
    "id_cliente": cpf_formatado3 + now.getDate() + now.getMonth() + now.getFullYear(), // limpar caracteres especiais do CPF
    "id_contrato": cpf_formatado3 + "cc" // // limpar caracteres especiais do CPF
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://localhost:3000/user/assistencia/alterar", requestOptions)
    .then(response => response.json())
    .then(function (data) {
      window.location.href = "D:/teste17-05/Portal-Mais-Valor/paginas/assistencia24h.html"

    })
    .catch(error => console.log('error', error));

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////CONFIGURAÇÕES DE ENVIO PARA O BANCO E IKE ////////////////////



function setarEnvioDiaHora() {
  var now = new Date
  var hora_agora = now.getHours() + "" + now.getMinutes();
  var hora = parseInt(hora_agora)
  var dia = String(now.getDate()).padStart(2, '0');
  var diaFormatado = parseInt(dia)
  var localStrg = parseInt(localStorage.getItem("diaEnvioBanco"))

  if (localStorage.getItem("diaEnvioBanco") === null || localStrg < diaFormatado) {
    localStorage.setItem('diaEnvioBanco', diaFormatado);
  }

  var diaEnvioBanco = localStorage.getItem('diaEnvioBanco');

  if (hora > 1600 && diaEnvioBanco == diaFormatado) {
    filtraAssistenciasDebito();
    localStorage.setItem('diaEnvioBanco', diaFormatado + 1);
  }

}
setarEnvioDiaHora();


   filtraAssistenciasDebito();

function filtraAssistenciasDebito() { 
  var now = new Date
  var mes_atual = now.getMonth();
  var mes = parseInt(mes_atual); 

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "tipo_contratacao": "Conta bancaria",
    "mes_ultimo_debito": mes //mes anterior
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://localhost:3000/user/assistencia/cnab", requestOptions)
    .then(response => response.json())
    .then((function (data) {

      var count = data.length;
      var i = 0;
      var valor_total = 0;

      for (i; i < count; i++) {

        var codigo = data[i].codigo;
        updateStatusAssistenciaTxt(codigo);

        var nome = data[i].cliente_nome;
        nome = nome.replaceAll(" ", "");
        var agencia = data[i].agencia;
        var conta = data[i].conta;
        var email = data[i].email;
        var digito = data[i].digito;
        var conta_digito = conta + " " + digito;
        var cpf = data[i].cliente_cpf;
        var vencimento = data[i].data_vencimento;
        var nascimento = data[i].data_nascimento;
        cpf = cpf.replace(/\.|\-/g, '');
        var cidade = data[i].cidade;
        var estado = data[i].estado;
        var valor_assistencia = data[i].valor_assistencia;
        var valorFormatado = parseFloat(valor_assistencia)
        var valorFinal = valor_total += valorFormatado;
        var data_venda = data[i].data_inclusao;
        var rua = data[i].rua;
        var numero = data[i].numero;
        var complemento = data[i].complemento;
        var bairro = data[i].bairro;
        var cep = data[i].cep;
        var id_cliente = data[i].id_cliente;
        var id_contrato = data[i].id_contrato;
        var forma_contratacao = data[i].forma_contratacao;
        var parcelas_restantes = data[i].parcelas_restantes;
        var tipo_assistencia = data[i].tipo_assistencia;
        var vigencia_inicio = data[i].vigencia_inicio;
        var vigencia_fim = data[i].vigencia_fim;
        var parcelas_restantes_formatado = parseInt(parcelas_restantes);
        var parcelas_atualizadas = parcelas_restantes_formatado - 1;

        var vigencia_inicio2 = vigencia_inicio.split('/').reverse().join('/');
        var vigencia_inicio3 = vigencia_inicio2.replace("/", "");
        var vigencia_inicio4 = vigencia_inicio3.replace("/", "");

        var vigencia_fim2 = vigencia_fim.split('/').reverse().join('/');
        var vigencia_fim3 = vigencia_fim2.replace("/", "");
        var vigencia_fim4 = vigencia_fim3.replace("/", "");

        var pagamento = "238,80";
        var mes_ultimo_debito = mes + 1;

        if (forma_contratacao == "anual") {
          var valorAss = "23880";

        } else if (forma_contratacao == "mensal") {

          if (parcelas_restantes == 12) {
            var valorAss = "1990";//cobrara 2x de 19,90
            criarTxt(i, agencia, cpf, nome, cidade, estado, valorAss, count, valorFinal,
              conta_digito, vencimento);
              updateParcelasRestantes(codigo, parcelas_atualizadas, mes_ultimo_debito)

          } else if (parcelas_restantes < 12 && parcelas_restantes > 0) {
            var valorAss = "1990";
            updateParcelasRestantes(codigo, parcelas_atualizadas, mes_ultimo_debito)
          }

          

        }

        personalizaHtml(id_contrato, nome, cpf, tipo_assistencia, id_cliente, vigencia_inicio, vigencia_fim, pagamento, email) 

        criarTxt(i, agencia, cpf, nome, cidade, estado, valorAss, count, valorFinal,
          conta_digito, vencimento);

        criarDocumentoIke(id_cliente, id_contrato, i, conta, nome, cpf, cidade, estado, count,
          nascimento, data_venda, rua, numero, complemento, bairro, cep, vigencia_inicio4, vigencia_fim4);

      }

      envioEmailBanco();
      envioSftp(); 
     // envioEmailcliente()

    }))
    .catch(error => console.log('error', error));

}




function criarTxt(i, agencia, cpf, nome, cidade, estado, valorAss, count, valorFinal, conta_digito, vencimento) {

  let data = new Date();
  let diaHoje = ("0" + data.getDate()).slice(-2);
  let mesHoje = ("0" + (data.getMonth() + 1)).slice(-2);
  let anoHoje = data.getFullYear();
  hoje = anoHoje + mesHoje + diaHoje;

  var valor_final2 = valorFinal.toString();
  var valor_total = valor_final2.replace(".", "");

  var _str = vencimento;
  var vencimento_invertido = _str.split('/').reverse().join('/');
  var vencimento_ = vencimento_invertido.replace("/", "");
  var vencimento_formatado = vencimento_.replace("/", "");

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "agencia": agencia,
    "cliente_cpf": cpf,
    "cliente_nome": nome,
    "numero_arquivo": i + 1,
    "cidade": cidade,
    "estado": estado,
    "valor_assistencia": valorAss,
    "qtdRegistros": count * 2 + 1, //contem cabecalho e 1 rodape
    "valor_final": valor_total,
    "data_hoje": hoje,
    "id_empresa_banco": conta_digito,
    "data_vencimento": vencimento_formatado


  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://localhost:3000/user/assistencia/txt", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

}




function updateStatusAssistenciaTxt(codigo) {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "codigo": codigo,
    "status": "Em Andamento"
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://localhost:3000/user/assistencia/updateStatus", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

};



function envioEmailBanco() {
  var raw = "";

  var requestOptions = {
    method: 'POST',
    body: raw,
    redirect: 'follow'
  };

  fetch("http://localhost:3000/user/assistencia/emailBanco", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}



function criarDocumentoIke(id_cliente, id_contrato, i, conta, nome, cpf, cidade, estado, count,
  nascimento, data_venda, rua, numero, complemento, bairro, cep, vigencia_inicio, vigencia_fim) {//incluir no parametro vigencia inicio e vigencia fim

  //formatando data de inclusão
  var data_venda0 = data_venda.toString()
  var data_venda1 = data_venda0.match(/\b(\d+\/\d+\/\d+)\b/g)
  var data_venda3 = data_venda1.toString()
  var data_venda4 = data_venda3.split('/') //erro na função split

  if (data_venda4[1] < 10) {
    data_venda4[1] = "0" + data_venda4[1];
  }
  if (data_venda4[0] < 10) {
    data_venda4[0] = "0" + data_venda4[0];
  }
  var data_venda_formatada = data_venda4[2] + data_venda4[1] + data_venda4[0];


  //formatando data de nascimento 
  var nascimento4 = nascimento.split('/') //erro na função split
  console.log(nascimento4)
  if (nascimento4[1] < 10 && nascimento4[1].indexOf("0") === -1) {
    nascimento4[1] = "0" + nascimento4[1];
  }
  if (nascimento4[0] < 10 && nascimento4[0].indexOf("0") === -1) {
    nascimento4[0] = "0" + nascimento4[0];
  }
  var nascimento_formatado = nascimento4[2] + nascimento4[1] + nascimento4[0];


  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "contrato": id_contrato, //gerado pela GMVB (parte do projeto gerar internamente)
    "conta": conta,
    "qtdRegistros": count,
    "cod_interno_cliente": id_cliente,
    "nome": nome,
    "cpf": cpf,
    "data_nascimento": nascimento_formatado,
    "data_venda": data_venda_formatada, //limpar horas e caracteres especiais
    "endereco": rua,
    "numero": numero,
    "complemento": complemento,
    "bairro": bairro,
    "cidade": cidade,
    "cep": cep,
    "uf": estado,
    "numero_sequencial_arquivo": i,
    "vigencia_inicial" : vigencia_inicio,
    "vigencia_final": vigencia_fim
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://localhost:3000/user/assistencia/ike", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}



function envioSftp() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "teste": "Mais_Valor"
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://localhost:3000/user/assistencia/ikeEnvio", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}



//autocomplete CEP
$(function () {
  $('#cep').change(function () {
    var cep = $(this).val().replace('-', '').replace('.', '');
    if (cep.length === 8) {
      $.get("https://viacep.com.br/ws/" + cep + "/json", function (data) {
        if (!data.erro) {
          $('#bairro').val(data.bairro);
          $('#complemento').val(data.complemento);
          $('#cidade2').val(data.localidade);
          $('#rua').val(data.logradouro);
          $('#estado2').val(data.uf);
        }
      }, 'json');
    }
  });
});

//trnasformar html em pdf 
function pegarPdf(html,email) { //fazer um post sem variavel 
 var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "html": html,
  "nomeArquivo":email
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3000/user/assistencia/htmlToPdf", requestOptions)
  .then(response => response.text())
  .then(result => 
    
  console.log(result)
    )
  .catch(error => console.log('error', error));
}

function updateParcelasRestantes(codigo, parcelas_restantes, mes_ultimo_debito) {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "codigo": codigo,
    "parcelas_restantes": parcelas_restantes,
    "mes_ultimo_debito": mes_ultimo_debito
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://localhost:3000/user/assistencia/atualizaParcelas", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

}



function configuracaoVencimento() {

  var now = new Date
  var dia = now.getDate();
  var mes_atual = now.getMonth();
  var mes = parseInt(mes_atual + 1);
  var ano = now.getFullYear();
  var hoje = dia + "/" + mes + "/" + ano;

  var vencimentoMin = somaDias(hoje, 5);

  var vencimentoMin2 = vencimentoMin.split('/').reverse().join('/');
  var vencimentoMin3 = vencimentoMin2.replace("/", "-");
  var vencimentoMin4 = vencimentoMin3.replace("/", "-");

  var vencimentoMax = somaDias(hoje, 35);

  var vencimentoMax2 = vencimentoMax.split('/').reverse().join('/');
  var vencimentoMax3 = vencimentoMax2.replace("/", "-");
  var vencimentoMax4 = vencimentoMax3.replace("/", "-");

  document.getElementById("vencimento").min = vencimentoMin4;
  document.getElementById("vencimento").max = vencimentoMax4;


}
configuracaoVencimento()

function somaDias(dt, qtd) {

  var dt1 = dt.split("/");
  var hj1 = dt1[2] + "-" + dt1[1] + "-" + dt1[0];
  var dtat = new Date(hj1);
  dtat.setDate(dtat.getDate());
  var myDate = new Date(hj1);
  myDate.setDate(myDate.getDate() + (qtd + 1));
  var ano = myDate.getFullYear();
  var dia = myDate.getDate();
  if (dia < 10) {
    dia = '0' + dia
  };
  var mes = (myDate.getMonth() + 1);
  if (mes < 10) {
    mes = '0' + mes
  }
  return (dia + "/" + mes + "/" + ano);

}


function vigenciaInicial(){//chamar na hora da inclusao

  var vencimento =  document.getElementById("vencimento").value;
  var vigencia = vencimento.split('-').reverse().join('-');
  var vigencia1 = vigencia.replace("-", "/");
  var vigencia2 = vigencia1.replace("-", "/");
  var vigencia3 = somaDias(vigencia2, 5);

  return  vigencia3;

}


function vigenciaFinal(){
  var now = new Date
  var ano = now.getFullYear();
  var anoFormatado = parseInt(ano);
  var anoFinal = anoFormatado+1;
  var vgInicial =  vigenciaInicial();
  var vigencia = vgInicial.split('/')
  vigencia[2] = anoFinal;
 var vigenciaFinal = vigencia.join('/');
 return vigenciaFinal

}


function personalizaHtml(id_contrato, nome, cpf, plano, id_cliente, vigencia_inicio, vigencia_fim, pagamento, email){
   //assim que receber a resposta da Ike

  var certificadoCliente = `
      <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
      <html>
      <head>
      <link rel="stylesheet" type="text/css" href="http://www.grupogmvb.com/lw/style.css"/>
      </head>
      <body>
      <div style="height: 30px; width: 200px; background-color:#17295d; margin-top: 110px;  margin-left: 30px;"></div>
      <div style="height: 30px; width: 800px; background-color:#9acd32; margin-top: 325px;  margin-left: 30px;"></div>
      <div style="height: 30px; width: 800px; background-color:#d3d3d3; margin-top: 0px;  margin-left: 30px;"></div>
      <div style="height: 30px; width: 800px; background-color:#d3d3d3; margin-top: 42px;  margin-left: 30px;"></div>
      <div style="height: 30px; width: 800px; background-color:#d3d3d3; margin-top: 42px;  margin-left: 30px;"></div>
      <div style="position:absolute;top:1.94in;left:0.29in;width:3.03in;line-height:0.28in;"><span style="font-style:normal;font-weight:bold;font-size:11pt; font-family:Cabin;color:#17295d">BENEFICIÁRIO: </span><span style="font-style:normal;font-weight:normal;font-size:11pt; font-family:Cabin;color:#17295d">${nome}</span><span style="font-style:normal;font-weight:normal;font-size:11pt; font-family:Cabin;color:#17295d"> </span><br/><span style="font-style:normal;font-weight:bold;font-size:11pt; font-family:Cabin;color:#17295d">CPF: </span><span style="font-style:normal;font-weight:normal;font-size:11pt; font-family:Cabin;color:#17295d">${cpf}</span><span style="font-style:normal;font-weight:normal;font-size:11pt; font-family:Cabin;color:#17295d"> </span><br/></SPAN></div>
      <div style="position:absolute;top:2.85in;left:0.29in;width:3.71in;line-height:0.28in;"><span style="font-style:normal;font-weight:bold;font-size:11pt; font-family:Cabin;color:#17295d">PLANO: </span><span style="font-style:normal;font-weight:normal;font-size:11pt; font-family:Cabin;color:#17295d">${plano}</span><span style="font-style:normal;font-weight:normal;font-size:11pt; font-family:Cabin;color:#17295d"> </span><br/><span style="font-style:normal;font-weight:bold;font-size:11pt; font-family:Cabin;color:#17295d">CÓDIGO: </span><span style="font-style:normal;font-weight:normal;font-size:11pt; font-family:Cabin;color:#17295d">${id_cliente}</span><span style="font-style:normal;font-weight:normal;font-size:11pt; font-family:Cabin;color:#17295d"> </span><br/></SPAN><span style="font-style:normal;font-weight:bold;font-size:11pt; font-family:Cabin;color:#17295d">VIGÊNCIA: </span><span style="font-style:normal;font-weight:normal;font-size:11pt; font-family:Cabin;color:#17295d">${vigencia_inicio} à ${vigencia_fim} </span><span style="font-style:normal;font-weight:normal;font-size:11pt; font-family:Cabin;color:#17295d"> </span><br/><span style="font-style:normal;font-weight:bold;font-size:11pt; font-family:Cabin;color:#17295d">PAGAMENTO: </span><span style="font-style:normal;font-weight:normal;font-size:11pt; font-family:Cabin;color:#17295d">${pagamento}</span><span style="font-style:normal;font-weight:normal;font-size:11pt; font-family:Cabin;color:#17295d"> </span><br/></SPAN></div>
      <div style="position:absolute;top:4.35in;left:2.86in;width:3.33in;line-height:0.34in;"><span style="font-style:normal;font-weight:normal;font-size:15pt;font-family:Cabin;color:#17295d">ASSISTÊNCIA RESIDENCIAL 24H</span><span style="font-style:normal;font-weight:normal;font-size:15pt;font-family:Cabin;color:#17295d"> </span><br/></SPAN></div>
      <div style="position:absolute;top:4.90in;left:1.65in;width:1.72in;line-height:0.21in;"><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Cabin;color:#000000">Assistência Residencial 24h</span><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Cabin;color:#000000"> </span><br/></SPAN></div>
      <div style="position:absolute;top:4.90in;left:6.13in;width:0.78in;line-height:0.21in;"><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Cabin;color:#000000">Limite Atual</span><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Cabin;color:#000000"> </span><br/></SPAN></div>
      <div style="position:absolute;top:5.59in;left:1.58in;width:1.88in;line-height:0.29in;"><span style="font-style:normal;font-weight:normal;font-size:11pt; font-family:Cabin;color:#878787">Chaveiro Emergencial</span><span style="font-style:normal;font-weight:normal;font-size:11pt; font-family:Cabin;color:#878787"> </span><br/></SPAN></div>
      <div style="position:absolute;top:5.59in;left:4.93in;width:3.19in;line-height:0.29in;"><span style="font-style:normal;font-weight:normal;font-size:11pt; font-family:Cabin;color:#878787">Até 3 intervenções limitado a R$ 150</span><span style="font-style:normal;font-weight:normal;font-size:11pt; font-family:Cabin;color:#878787"> </span><br/></SPAN></div>
      <div style="position:absolute;top:5.95in;left:1.54in;width:1.97in;line-height:0.29in;"><span style="font-style:normal;font-weight:normal;font-size:11pt; font-family:Cabin;color:#878787">Eletricista Emergencial</span><span style="font-style:normal;font-weight:normal;font-size:11pt; font-family:Cabin;color:#878787"> </span><br/></SPAN></div>
      <div style="position:absolute;top:5.95in;left:4.93in;width:3.19in;line-height:0.29in;"><span style="font-style:normal;font-weight:normal;font-size:11pt; font-family:Cabin;color:#878787">Até 3 intervenções limitado a R$ 150</span><span style="font-style:normal;font-weight:normal;font-size:11pt; font-family:Cabin;color:#878787"> </span><br/></SPAN></div>
      <div style="position:absolute;top:6.32in;left:1.49in;width:2.06in;line-height:0.29in;"><span style="font-style:normal;font-weight:normal;font-size:11pt; font-family:Cabin;color:#878787">Encanador Emergencial</span><span style="font-style:normal;font-weight:normal;font-size:11pt; font-family:Cabin;color:#878787"> </span><br/></SPAN></div>
      <div style="position:absolute;top:6.32in;left:4.93in;width:3.19in;line-height:0.29in;"><span style="font-style:normal;font-weight:normal;font-size:11pt; font-family:Cabin;color:#878787">Até 3 intervenções limitado a R$ 150</span><span style="font-style:normal;font-weight:normal;font-size:11pt; font-family:Cabin;color:#878787"> </span><br/></SPAN></div>
      <div style="position:absolute;top:6.68in;left:2.05in;width:0.93in;line-height:0.29in;"><span style="font-style:normal;font-weight:normal;font-size:11pt; font-family:Cabin;color:#878787">Help Desk</span><span style="font-style:normal;font-weight:normal;font-size:11pt; font-family:Cabin;color:#878787"> </span><br/></SPAN></div>
      <div style="position:absolute;top:6.68in;left:6.13in;width:0.77in;line-height:0.29in;"><span style="font-style:normal;font-weight:normal;font-size:11pt; font-family:Cabin;color:#878787">Ilimitado</span><span style="font-style:normal;font-weight:normal;font-size:11pt; font-family:Cabin;color:#878787"> </span><br/></SPAN></div>
      <div style="position:absolute;top:7.05in;left:1.39in;width:2.25in;line-height:0.29in;"><span style="font-style:normal;font-weight:normal;font-size:11pt; font-family:Cabin;color:#878787">Indicação de Profissionais</span><span style="font-style:normal;font-weight:normal;font-size:11pt; font-family:Cabin;color:#878787"> </span><br/></SPAN></div>
      <div style="position:absolute;top:7.05in;left:6.13in;width:0.77in;line-height:0.29in;"><span style="font-style:normal;font-weight:normal;font-size:11pt; font-family:Cabin;color:#878787">Ilimitado</span><span style="font-style:normal;font-weight:normal;font-size:11pt; font-family:Cabin;color:#878787"> </span><br/></SPAN></div>
      <div style="position:absolute;top:0.31in;left:0.29in;width:2.71in;line-height:0.26in;"><span style="font-style:normal;font-weight:normal;font-size:12pt;font-family:Cabin;color:#000000">SERVIÇOS DE ASSISTÊNCIA 24H</span><span style="font-style:normal;font-weight:normal;font-size:12pt;font-family:Cabin;color:#000000"> </span><br/></SPAN></div>
      <div style="position:absolute;top:0.56in;left:0.29in;width:2.71in;line-height:0.62in;"><span style="font-style:normal;font-weight:normal;font-size:28pt;font-family:Cabin;color:#000000">CERTIFICADO</span><span style="font-style:normal;font-weight:normal;font-size:28pt;font-family:Cabin;color:#000000"> </span><br/></SPAN></div>
      <div style="position:absolute;top:1.21in;left:1.11in;width:0.94in;line-height:0.19in;"><span style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Cabin;color:#ffffff">${id_contrato}</span><span style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Cabin;color:#ffffff"> </span><br/></SPAN></div>
      <?xml version="1.0" encoding="UTF-8" standalone="no"?>
      <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
      <svg version="1.1" id="Layer_1"  style ="position:absolute; top:3px; right:160px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="137px" height="75px" viewBox="0 0 137 75" enable-background="new 0 0 137 75" xml:space="preserve">  <image id="image0" width="137" height="75" x="0" y="0"
          xlink:href="data:image/png;base64,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
      hc43TwAAAABJRU5ErkJggg==" />
      </svg>
      <div style="position:absolute;top:7.55in;left:0.56in;width:6.53in;line-height:0.26in;"><span style="font-style:normal;font-weight:normal;font-size:12pt;font-family:Cabin;color:#878787">Precisando de informações ou serviços de assistência, ligue para 0800-014-3029 e informe seu nome, CPF, número de certificado (acima) e local onde precisa ser atendido.</span></div>
      <div style="position:absolute;top:9.30in;left:0.73in;width:6.63in;line-height:0.18in;"><span style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Nimbus Sans L;color:#ffffff">Esse produto é composto por Serviços de Assistência e não garante ou oferece qualquer indenização.</span><span style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Nimbus Sans L;color:#ffffff"> </span><br/></SPAN></div>
      <div style="position:absolute;top:9.58in;left:0.73in;width:3.70in;line-height:0.18in;"><span style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Nimbus Sans L;color:#ffffff">Os serviços contratados oferecem abrangência nacional.</span><span style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Nimbus Sans L;color:#ffffff"> </span><br/></SPAN></div>
      <div style="position:absolute;top:9.85in;left:0.73in;width:7.37in;line-height:0.18in;"><span style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Nimbus Sans L;color:#ffffff">Consulte as condições gerais e conheça todos os beneficios, restrições e/ou limitações de uso - disponível no site</span><span style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Nimbus Sans L;color:#ffffff"> </span><br/></SPAN></div>
      <div style="position:absolute;top:10.12in;left:0.73in;width:2.65in;line-height:0.19in;"><a href="https://www.grupomaisvalor.com.br/seguros"><span style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Nimbus Sans L;color:#c4d869">www.grupomaisvalor.com.br/seguros</span></a>
      <span style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Nimbus Sans L;color:#c4d869"></span><br/></SPAN></div>
      <?xml version="1.0" encoding="UTF-8" standalone="no"?>
      <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
      <svg version="1.1" id="Layer_1"  style ="position: absolute; left: 360px;top: 1000px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="81px" height="87px" viewBox="0 0 81 87" enable-background="new 0 0 81 87" xml:space="preserve">  <image id="image0" width="81" height="87" x="0" y="0"
          xlink:href="data:image/png;base64,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
      SUVORK5CYII=" />
      </svg>
      <div style="position:absolute;top:8.67in;left:0.56in;width:3.11in;line-height:0.54in;"><span style="font-style:normal;font-weight:bold;font-size:25pt;font-family:Nimbus Sans L;color:#17295d">IMPORTANTE:</span><span style="font-style:normal;font-weight:bold;font-size:27pt;font-family:Nimbus Sans L;color:#17295d"></span><br/></SPAN></div>
      <div style="position:absolute;top:11.30in;left:1.87in;width:6.11in;line-height:0.24in;"><span style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Cabin;color:#030303">&quot;Serviços garantidos pela IKÊ ASSISTÊNCIA BRASIL S/A - CNPJ 07.833.406/0001-02&quot;</span><span style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Cabin;color:#030303"> </span><br/></SPAN></div>
  <div style="height: 130px; width: 800px; background-color:#17295d; margin-top: 205px;  margin-left: 30px;"></div>
  <div style="height: 150px; width: 800px; background-color:#ffffff; margin-top: 50px;  margin-left: 30px;"></div>
  </body>
      </html>
      `
var htmlCertificado = certificadoCliente.toString();


//salvar esse html no servidor com o cpf do cliente como nome de arquivo 
//depois puxar do servidor e transformar em pdf
//salvar no servidor e qd receber a resposta da Ike , procurar o cpf e mandar no email correspondente
  pegarPdf(htmlCertificado, email) //transforma o html em pdf 
  
}
