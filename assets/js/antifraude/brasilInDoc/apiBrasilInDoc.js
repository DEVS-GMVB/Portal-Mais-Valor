import {
  apis,
  toBase64
} from "../utils";


export const novaSolicitacao = (objProposta) => {

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  toBase64(url, function (dataUrl) {
    let raw = JSON.stringify({
      "key_access": key_access,
      "id_parceiro": "0",
      "nome_banco": objProposta.banco_origi,
      "data_expedicao": objProposta.data_envio,
      "id_proposta": objProposta.proposta,
      "valor_proposta": objProposta.entregue,
      "tipo": 0,
      "nome_cliente": objProposta.nome,
      "cpf_cliente": objProposta.cpf,
      "tipo_documento": 1,
      "uf": objProposta.uf,
      "contato": ibjProposta.telefone_ddd_1 + objProposta.telefone,
      "texto_solicitacao": "Confirmar Cadastro",
      "files": [{
        "b64file": dataUrl,
        "filename": objProposta.arquivo2
      }]
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    fetch(`${apis.URL_BRASIL_INDOC}/solicitacoes-analise?key_access=${apis.KEY_BRASILINDOC}`, requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  })
}


const verificaSolicitacao = (key_access) => {

  let requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  fetch(`${apis.URL_BRASIL_INDOC}/solicitacoes-analise?limit=5&page=1&tipo=0&id_solicitacao=275754&status_solicitacao=2&id_proposta =&valor_proposta =1000.00&cpf_cliente &nome_cliente &tipo_documento =3&uf&key_access=${key_access}`, requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}


const envioMensagens = (key_access) => {

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Cookie", "PHPSESSID=0d47f7393de1c2330a48591619310218");

  let raw = JSON.stringify({
    "key_access": key_access,
    "id_solicitacao": 265292,
    "texto_solicitacao": "Teste",
    "files": [{
      "b64file": "",
      "filename": "teste.jpg"
    }]
  });
  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  fetch(`${apis.URL_BRASIL_INDOC}/solicitacoes-analise/chat?key_access=${key_access}`, requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

}