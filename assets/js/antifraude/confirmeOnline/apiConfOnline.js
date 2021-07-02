import { apis } from "../utils";

const consultar = () => { //chamar essa funcao no onloaod do index

  //pegar dados de uma tag (nome, telefone e cpf)
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch(`${apis.URL_CONFIRME_ONLINE}/completo?usuario=INTAQUIM&senha=euaFOQV4&sigla=XVGYU&cpfcnpj=420.846.548-40&nome=Thaynara Cristina Rodrigues&telefone=1146367318\n`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

}