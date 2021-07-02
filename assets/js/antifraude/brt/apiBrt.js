import {
  selectMailing,
  selectArquivos
} from "./chamadasPortal.js";


const token = () => {

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  let urlencoded = new URLSearchParams();
  urlencoded.append("client_id", "ecossistemacartoes");
  urlencoded.append("client_secret", "EcossistemaCartoes@Secret");
  urlencoded.append("username", "MaisValor");
  urlencoded.append("password", "3kun6cVU%^M?akfe");
  urlencoded.append("grant_type", "password");
  urlencoded.append("scope", "ecossistemacartoes");
  urlencoded.append("offline_access", "true");

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  fetch("https://brt-identityserver.ecobrt.co/connect/token", requestOptions)
    .then(response => response.json())
    .then(result => gerarIdTransacao(result.access_token)) // ver como sera essa resposta 
    .catch(error => console.log('error', error));
}

token();

const gerarIdTransacao = (access_token) => {

  let proposta = document.getElementById("proposta").innerHTML;
  let myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${access_token}`);

  let raw = "";

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(`${apis.URL_BRT}/Transacao/2`, requestOptions)
    .then(response => response.json())
    .then(result => selectMailing(access_token, result.idTransacao, proposta))
    .catch(error => console.log('error', error));
}


export const mailing = (access_token, idTransacao, proposta, objProposta) => {

  let entregue = parseFloat(objProposta.entregue)
  let cpf2 = objProposta.cpf.replace(".", "");
  let cpf3 = cpf2.replace(".", "");
  let cpf4 = cpf3.replace("-", "");
  let cpfFormatado = cpf4;

  if (objProposta.correntista == "NÃO") {
    var correntista = false
  } else {
    var correntista = true
  }

  if (objProposta.produto == "CONSIGNADO - FORMALIZAÇÃO MANUAL" ||
      objProposta.produto == "CONSIGNADO" || objProposta.produto == "UNIFICADO & REORGANIZADO" ||
      objProposta.produto == "BIOMETRIA FACIAL NAO CORRENTISTA") {
    var tipoProduto = "Físico";
  } else if (objProposta.produto == "SMS / UNIFICADO&REORGANIZADO" ||
            objProposta.produto == "MOBILE - CHECKLIST" || objProposta.produto == "MOBILE - FIM DE CADASTRO" ||
            objProposta.produto == "CONSIGNADO - FORMALIZAÇÃO DIGITAL" || objProposta.produto == "SMS" ||
            objProposta.produto == "CREDITO EM CONTA" || objProposta.produto == "CP AUTO" ||
            objProposta.produto == "CARTÃO CONSIGNADO") {
    var tipoProduto = "Digital";
  };

  if (objProposta.convenio == "20991 - INSS") {
    var tipoConvenio = "INSS";
  } else if (objProposta.convenio == "2345 - MINISTERIO DO EXERCITO" ||
            objProposta.convenio == "438 - MINISTERIO DA AERONAUTICA" ||
            objProposta.convenio == "2000 - MINISTERIO DA MARINHA") {
    var tipoConvenio = objProposta.convenio;
  } else {
    var tipoConvenio = "Demais Convenios";
  };

  let myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${access_token}`);
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    "idEmpresa": 2,
    "idTransacao": idTransacao,
    "numeroProposta": proposta,
    "nomeCompleto": objProposta.nome,
    "ddd": objProposta.telefone_ddd_1,
    "telefone": objProposta.telefone,
    "cpf": cpfFormatado,
    "dataNascimento": objProposta.data_nascimento,
    "valorEmprestimo": entregue,
    "canalSolicitacao": tipoConvenio,
    "correntista": correntista,
    "origem": tipoProduto,
    "banco": objProposta.banco_origi,
    "assinaturaDigital": "",
    "loja": {
      "codigo": objProposta.empresa,
      "endereco": objProposta.cidade_ip + "  " + objProposta.estado_ip
    }
  });

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(`${apis.URL_BRT}/Mailing/MaisValor`, requestOptions)
    .then(response => response.text())
    .then(function (data) {
      //console.log(data)
      selectArquivos(access_token, idTransacao, proposta, cpfFormatado)

    })
    .catch(error => console.log('error', error));
}


export const envioBase64 = (access_token, idTransacao, documento, extensao) => {

  let myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${access_token}`);
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    "idTransacao": idTransacao,
    "tipoDocumento": "RG",
    "extensao": extensao,
    "documento": documento
  });

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(`${apis.URL_BRT}/documento/base64`, requestOptions)
    .then(response => response.text())
    .then(result => console.log("doc enviado" + result))
    .catch(error => console.log('error', error));
}


export const fechartransacao = (access_token, id_transacao, proposta, cpf) => {

  let myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${access_token}`);
  myHeaders.append("Content-Type", "application/json");

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch(`${apis.URL_BRT}/transacao/fechar/${id_transacao}`, requestOptions)
    .then(response => response.text())
    .then(function (data) {
      console.log("transação " + id_transacao + " fechada  " + data)
      // insertBrt(id_transacao, proposta, cpf)
    })
    .catch(error => console.log('error', error));
}