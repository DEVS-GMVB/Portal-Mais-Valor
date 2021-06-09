

import { INDEXPAGE, LOCALHOST } from  "./session.js"



var pegarIdBotaoAlterar = (id) => {
  let tagPai = "row" + id;
  let teste = document.getElementById(tagPai);
  let cpfChildren = teste.children[0].id;
  let nomeChildren = teste.children[1].id;
  let tipoCChildren = teste.children[2].id;
  let tipoAChildren = teste.children[3].id;
  let valoCpf = document.getElementById(cpfChildren);
  let valoNome = document.getElementById(nomeChildren);
  let valoTipoC = document.getElementById(tipoCChildren);
  let valoTipoA = document.getElementById(tipoAChildren);

  let cpfformatado = valoCpf.innerHTML;
  let nomeformatado = valoNome.innerHTML;
  let tipoCformatado = valoTipoC.innerHTML;
  let tipoAformatado = valoTipoA.innerHTML;

  selecaoParaalteracao(cpfformatado, nomeformatado, tipoCformatado, tipoAformatado)

};


 function selecaoParaalteracao(cpfformatado, nomeformatado, tipoCformatado, tipoAformatado) { //

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

  fetch( `${LOCALHOST}/user/assistencia/filtrarParaAlterar`, requestOptions)
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

  fetch(`${LOCALHOST}/user/assistencia/alterar`, requestOptions)
    .then(response => response.json())
    .then(function (data) {
      window.location.href = INDEXPAGE

    })
    .catch(error => console.log('error', error));

}

export {updateBd, selecaoParaalteracao, pegarIdBotaoAlterar};