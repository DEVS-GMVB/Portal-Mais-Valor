import { apis } from "../utils";


const gerarToken = () => { //onload no index

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  myHeaders.append("Authorization", "Basic NkVYQzhBUEoxbGprNEFpeUQ4MDdLa09WMFlzYTpWMDZKdTBFTWN2TG40VVVmczhpdXVVUmZibU1h");

  var raw = "";

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(`${apis.URL_SERPRO}/token?grant_type=client_credentials`, requestOptions)
    .then(response => response.json())
    .then(result => consultar(result.access_token)) 
    .catch(error => console.log('error', error));

}

const consultar = (token) => {

  //pegar o cpf de uma tag
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch(`${apis.URL_SERPRO}/consulta-cpf-df/v1/cpf/42084654840`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

}