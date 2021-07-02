import { apis } from "../utils";

const gerarToken = () => {
//Produção
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  myHeaders.append("x-client-auth", "Basic Z0syaFVYRjg5Y1pNM2h1YkdiSlhkbE81eTlEWndQMTg6NzlrdzY3YzdyeW9ydGFDUg==");

  var urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "client_credentials");

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  fetch(`${apis.URL_CLARO}/oauth2/v1/token`, requestOptions)
    .then(response => response.json())
    .then(result => pesquisaTelefone(result))//chamar funcao pesquisa telefone com o token como parametro 
    .catch(error => console.log('error', error));
}


const pesquisaTelefone = (token) => {

  //pegar o numero e o cpf de uma tag


  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("x-client-auth", "Bearer bGBwpd1JCS4OuvAjm36gen4A9ztZ");
  myHeaders.append("X-CustomerID", "claro_teste");

  var raw = JSON.stringify({
    "data": {
      "customer": {
        "networkMsisdn": "5511958022948",
        "cpf": "98677851003"
      }
    }
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(`${apis.URL_CLARO}r/customers/v1/validationsphones`, requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}